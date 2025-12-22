"use client";

import Link from "next/link";
import { useState } from "react";
import { type Locale, getTranslation, translations } from "@/lib/i18n";
import { CalculatorSearch } from "@/components/calculator-search";
import { allCalculatorCategories } from "@/lib/calculators";
import { MobileSidebar } from "./MobileSidebar";
import LanguageSelector from "./LanguageSelector";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const t = translations[locale].nav;
  const navKeys: (keyof typeof t)[] = ["home", "about", "contact"];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex py-5 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-20">

        <div className="flex items-center gap-3">
          <MobileSidebar locale={locale} />

          <nav className="hidden md:flex items-center gap-8 relative">
            {navKeys.map((key) => {
              const href = locale === "en" ? key === "home" ? "/" : `/${key}` : key === "home" ? `/${locale}` : `/${locale}/${key}`;

              return (
                <Link
                  key={key}
                  href={href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t[key]}
                </Link>
              );
            })}

            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-transparent"
              >
                {t.calculators || "Calculators"}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isHovered ? "rotate-180 text-foreground" : "rotate-0 text-muted-foreground"
                    }`}
                />
              </button>

              <div className="absolute left-0 top-full h-2 w-full"></div>

              <div
                className={`absolute left-0 top-[calc(100%+8px)] w-[330px] bg-white shadow-lg rounded-md border border-border p-2 grid grid-cols-2 gap-2 z-50
                transition-all duration-200 ease-out origin-top
                ${isHovered ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}`}
              >
                {allCalculatorCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={locale === "en" ? `/${cat.id}` : `/${locale}/${cat.id}`}
                    className="block text-sm text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 rounded-md px-2 py-2 transition-colors"
                  >
                    {getTranslation(locale, cat.name)}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <Link href={locale === "en" ? "/" : `/${locale}`} className="absolute left-1/2 -translate-x-1/2">

          <Image
            src="/VastCalculators.com-Logo.png"
            width={150}
            height={58}
            alt="VastCalculators logo"
            loading="eager"
            priority
            quality={85}
            sizes="150px"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <CalculatorSearch locale={locale} />
          <div className="hidden md:block">
            <LanguageSelector locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}
