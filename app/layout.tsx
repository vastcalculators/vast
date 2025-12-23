import type React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { type Locale, locales, defaultLocale } from "@/lib/i18n";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export async function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({
      locale,
    }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://vastcalculators.com"),
  title: {
    default: "Vast Calculators",
    template: "%s ",
  },
  description:
    "Vast Calculators is a professional multilingual calculator platform offering scientific, financial, and conversion tools for global users.",
  keywords: [
    "Vast Calculators",
    "multilingual calculator",
    "online calculator",
    "scientific calculator",
    "financial calculator",
    "unit converter",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
