"use client";
import Link from "next/link";
import { type Locale, getTranslation } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import { allCalculatorCategories } from "@/lib/calculators";

interface CardsSectionProps {
  locale: Locale;
}

export default function CardsSection({ locale }: CardsSectionProps) {
  const categoryLinks = allCalculatorCategories.map((category) => ({
    id: category.id,
    href: locale === "en" ? `/${category.id}` : `/${locale}/${category.id}`,
  }));

  return (
    <section id="categories" className="container px-12 mx-auto py-10">
      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl text-center mb-4">
        {getTranslation(locale, "cards.title")}
      </h2>
      <p className="mx-auto max-w-lg text-sm text-black/90 text-center md:mb-14 mb-6 font-medium">
        {getTranslation(locale, "cards.subtitle")}
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-12 gap-10 justify-center ">
        {allCalculatorCategories.map((category) => {
          const categoryHref =
            categoryLinks.find((link) => link.id === category.id)?.href || "#";

          return (
            <Link
              key={category.id}
              href={categoryHref}
              className="relative w-[300px] h-[300px] rounded-[14px] overflow-hidden flex flex-col items-center justify-center mx-auto shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute top-[5px] left-[5px] w-[290px] h-[300px] z-[2] bg-white/95 backdrop-blur-[24px] rounded-[10px] overflow-hidden outline outline-2 outline-white"></div>

              <div className="absolute z-[1] top-1/2 left-1/2 w-[220px] h-[220px] rounded-full bg-[#111] opacity-100 blur-[12px] animate-blob-bounce"></div>

              <div className="z-10 text-center p-4">
                <h3 className="text-lg font-bold text-zinc-900">
                  {getTranslation(locale, category.name)}
                </h3>
                <p className="text-sm text-zinc-800 font-medium mt-1">
                  {getTranslation(locale, category.description)}
                </p>
                <div className="text-sm text-zinc-700 mt-4 flex items-center gap-2 mx-auto justify-center">
                  {category.calculators.length}{" "}
                  {getTranslation(locale, "nav.calculators")}
                  <ArrowRight className="h-4 w-4 text-muted-foreground mt-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
