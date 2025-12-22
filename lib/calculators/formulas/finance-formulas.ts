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
  try {
    const response = await fetch("/api/currencies", {
      cache: "no-store",
    });
    const data = await response.json();
    return data.rates || fallbackRates;
  } catch (error) {
    console.error("Failed to fetch rates:", error);
    return fallbackRates;
  }
}

function getLetterGrade(gpa: number, scale: string): string {
  const normalizedGPA = scale === "5.0" ? (gpa / 5.0) * 4.0 : gpa

  if (normalizedGPA >= 3.7) return "A"
  if (normalizedGPA >= 3.3) return "A-"
  if (normalizedGPA >= 3.0) return "B+"
  if (normalizedGPA >= 2.7) return "B"
  if (normalizedGPA >= 2.3) return "B-"
  if (normalizedGPA >= 2.0) return "C+"
  if (normalizedGPA >= 1.7) return "C"
  if (normalizedGPA >= 1.3) return "C-"
  if (normalizedGPA >= 1.0) return "D"
  return "F"
}

export const financeFormulas = {
  loan: (inputs: Record<string, number | string>) => {
    const principal = Number(inputs.principal);
    const downPayment = Number(inputs.downPayment) || 0;
    const amountFinanced = principal - downPayment;

    const rateYearly = Number(inputs.rate) / 100;
    const years = Number(inputs.years);

    const freqMap: Record<string, number> = {
      monthly: 12,
      quarterly: 4,
      semiAnnually: 2,
      annually: 1,
    };

    const paybackFreq = freqMap[String(inputs.paybackFrequency)];
    const n = years * paybackFreq;
    const rate = rateYearly / paybackFreq;

    const payment =
      (amountFinanced * (rate * Math.pow(1 + rate, n))) /
      (Math.pow(1 + rate, n) - 1);
    return payment.toFixed(2);
  },

  mortgage: (inputs: Record<string, number | string>) => {
    const homePrice = Number(inputs.homePrice);
    const downPayment = Number(inputs.downPayment);
    const principal = homePrice - downPayment;
    const rate = Number(inputs.rate) / 100 / 12;
    const years = Number(inputs.years);
    const n = years * 12;
    const payment =
      (principal * (rate * Math.pow(1 + rate, n))) /
      (Math.pow(1 + rate, n) - 1);
    return payment.toFixed(2);
  },

  roi: (inputs: Record<string, number | string>) => {
    const investment = Number(inputs.investment);
    const gain = Number(inputs.gain);
    const costs = Number(inputs.costs || 0);

    const netProfit = gain - investment - costs;
    return ((netProfit / investment) * 100).toFixed(2);
  },

  breakeven: (inputs: Record<string, number | string>) => {
    const fixedCosts = Number(inputs.fixedCosts);
    const variableCost = Number(inputs.variableCost);
    const price = Number(inputs.price);

    const result = Math.ceil(fixedCosts / (price - variableCost));
    return result;
  },
  inflation: (inputs: Record<string, number | string>) => {
    const amount = Number(inputs.amount);
    const years = Number(inputs.years);
    const rate = Number(inputs.rate) / 100;
    const mode = inputs.mode; // future | past

    if (mode === "past") {
      return (amount / Math.pow(1 + rate, years)).toFixed(2);
    }
    return (amount * Math.pow(1 + rate, years)).toFixed(2); // default future
  },

  currency: async (inputs: Record<string, number | string>) => {
    const amount = Number(inputs.amount);
    const from = String(inputs.fromCurrency).toUpperCase();
    const to = String(inputs.toCurrency).toUpperCase();

    if (isNaN(amount) || amount <= 0) return "Invalid amount";

    try {
      const rates = await fetchExchangeRates();
      const fromRate = rates[from] || 1;
      const toRate = rates[to] || 1;

      const result = (amount / fromRate) * toRate;
      return result.toFixed(2);
    } catch (error) {
      console.error("Currency conversion error:", error);
      const fromRate = fallbackRates[from] || 1;
      const toRate = fallbackRates[to] || 1;
      const result = (amount / fromRate) * toRate;
      return result.toFixed(2);
    }
  },

  discount: (inputs: Record<string, number | string>) => {
    const price = Number(inputs.originalPrice);
    const discount = Number(inputs.discountPercent);
    const tax = Number(inputs.taxRate) || 0;
    const discountAmount = (price * discount) / 100;
    const priceAfterDiscount = price - discountAmount;
    const taxAmount = (priceAfterDiscount * tax) / 100;
    const finalPrice = priceAfterDiscount + taxAmount;
    return finalPrice.toFixed(2);
  },
  savings: (inputs: Record<string, number | string>) => {
    const P = Number(inputs.initialDeposit) || 0;
    const PMT = Number(inputs.monthlyDeposit) || 0;
    const r = (Number(inputs.interestRate) || 0) / 100;
    const t = Number(inputs.timePeriod) || 0;
    const inflation = (Number(inputs.inflationRate) || 0) / 100;

    let n = 12;
    if (inputs.compoundFrequency === "quarterly") n = 4;
    if (inputs.compoundFrequency === "yearly") n = 1;

    const compoundFactor = Math.pow(1 + r / n, n * t);
    const totalSavings =
      P * compoundFactor + PMT * ((compoundFactor - 1) / (r / n));
    const interestEarned = totalSavings - P - PMT * t * 12;
    const realValue =
      inflation > 0 ? totalSavings / Math.pow(1 + inflation, t) : totalSavings;

    // Return a single formatted string that React can render
    return `
    ${totalSavings.toFixed(2)}
    ${interestEarned.toFixed(2)}
    ${realValue.toFixed(2)}
  `;
  },

  compound: (inputs: Record<string, number | string>) => {
    const principal = Number(inputs.principal)
    const rate = Number(inputs.rate) / 100
    const years = Number(inputs.years)
    const compounds = Number(inputs.compounds)
    const monthlyContribution = Number(inputs.monthlyContribution || 0)
    const contributionFrequency = Number(inputs.contributionFrequency || 12)

    const adjustedPMT = monthlyContribution * (12 / contributionFrequency)

    const amount = principal * Math.pow(1 + rate / compounds, compounds * years)
      + adjustedPMT * (Math.pow(1 + rate / compounds, compounds * years) - 1) / (rate / compounds)

    return amount.toFixed(2)
  },

  tip: (inputs: Record<string, number | string>) => {
    const billAmount = Number(inputs.billAmount)
    const tipPercent = Number(inputs.tipPercent)
    const taxPercent = Number(inputs.taxPercent)
    const people = Number(inputs.people)
    const rounding = String(inputs.rounding)

    const tax = billAmount * (taxPercent / 100)
    let tip = billAmount * (tipPercent / 100)

    if (rounding === "roundTip") {
      tip = Math.round(tip)
    }

    let total = billAmount + tax + tip

    if (rounding === "roundTotal") {
      total = Math.round(total)
    }

    const perPerson = total / people

    return `Tip: $${tip.toFixed(2)}, Tax: $${tax.toFixed(2)}, Total: $${total.toFixed(2)}, Per Person: $${perPerson.toFixed(2)}`
  },

};
