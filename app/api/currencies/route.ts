// app/api/finance/currencies/route.ts

import { NextResponse } from "next/server";

let ratesCache: {
  data: Record<string, number>;
  timestamp: number;
} | null = null;

const CACHE_DURATION = 3600000; // 1 hour

const fallbackRates: Record<string, number> = {
  USD: 1,
  PKR: 280,
  EUR: 0.94,
  GBP: 0.8,
  INR: 84,
  AUD: 1.52,
  JPY: 150,
  CAD: 1.36,
  CHF: 0.88,
  CNY: 7.24,
  SAR: 3.75,
  AED: 3.67,
};

async function fetchExchangeRates(): Promise<Record<string, number>> {
  // Check cache
  if (ratesCache && Date.now() - ratesCache.timestamp < CACHE_DURATION) {
    return ratesCache.data;
  }

  try {
    const response = await fetch(
      `https://api.currencyapi.com/v3/latest?apikey=${process.env.NEXT_PUBLIC_CURRENCY_API_KEY}&base_currency=USD`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    let rates: Record<string, number> = { USD: 1 };

    if (data.data) {
      Object.entries(data.data).forEach(([currency, rate]: [string, any]) => {
        if (typeof rate === "number") {
          rates[currency] = rate;
        } else if (typeof rate === "object" && rate.value) {
          rates[currency] = rate.value;
        }
      });
    }

    // Cache it
    ratesCache = {
      data: rates,
      timestamp: Date.now(),
    };

    console.log("Fetched rates:", rates);
    return rates;
  } catch (error) {
    console.error("Exchange rate fetch error:", error);
    return fallbackRates;
  }
}

export async function GET() {
  try {
    const rates = await fetchExchangeRates();
    const currencies = Object.keys(rates).sort();

    return NextResponse.json(
      {
        success: true,
        currencies,
        rates,
        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: true,
        currencies: Object.keys(fallbackRates).sort(),
        rates: fallbackRates,
        timestamp: new Date().toISOString(),
        cached: true,
      },
      { status: 200 }
    );
  }
}
