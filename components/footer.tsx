"use client"

import { useState } from "react"
import Link from "next/link"
import { allCalculatorCategories } from "@/lib/calculators"
import { getTranslation, type Locale, translations } from "@/lib/i18n"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import LanguageSelector from "./LanguageSelector"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale]
  const [selectedCategory, setSelectedCategory] = useState(allCalculatorCategories[0].id)

  const currentCategory = allCalculatorCategories.find((cat) => cat.id === selectedCategory)
  const calculators = currentCategory?.calculators || []

  const calculatorLinks = calculators.map((calc) => ({
    slug: calc.slug,
    href:
      locale === "en"
        ? `/${currentCategory?.id}/${calc.slug}`
        : `/${locale}/${currentCategory?.id}/${calc.slug}`,
  }))

  const firstThree = calculators.slice(0, 3)
  const secondThree = calculators.slice(3, 6)
  const thirdThree = calculators.slice(6, 9)

  return (
    <footer className="border-t border-border bg-zinc-100/20 backdrop-blur-3xl">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5 md:px-20 px-5">
          <div className="flex flex-col gap-2 md:w-1/2">
            <Link href={locale === "en" ? "/" : `/${locale}`}>
              <Image
                src="/VastCalculators.com.webp"
                width={150}
                height={58}
                alt="VastCalculators.com logo"
                priority={false}
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 120px, 150px"
              />
            </Link>
            <p className="mt-2 md:text-base text-sm md:mb-0 mb-2">
              {t.footer.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-36 md:w-48">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {allCalculatorCategories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {getTranslation(locale, cat.name)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:px-20 px-5 mt-0 mb-10">
        <div>
          <h3 className="font-semibold text-lg mb-4">{t.footer.gridtitle1}</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link href={locale === "en" ? "/" : `/${locale}`} className="hover:text-blue-600">
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link href={locale === "en" ? "/about" : `/${locale}/about`} className="hover:text-blue-600">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href={locale === "en" ? "/contact" : `/${locale}/contact`} className="hover:text-blue-600">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">{t.footer.gridtitle2}</h3>
          <ul className="space-y-2 text-base">
            {firstThree.map((calc) => {
              const href =
                calculatorLinks.find((link) => link.slug === calc.slug)?.href || "#"
              return (
                <li key={calc.slug}>
                  <Link href={href} className="hover:text-blue-600">
                    {getTranslation(locale, calc.heading)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <ul className="space-y-2 text-base">
            {secondThree.map((calc) => {
              const href =
                calculatorLinks.find((link) => link.slug === calc.slug)?.href || "#"
              return (
                <li key={calc.slug}>
                  <Link href={href} className="hover:text-blue-600">
                    {getTranslation(locale, calc.heading)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Column 4 — Calculators 7–9 */}
        <div>
          <ul className="space-y-2 text-base">
            {thirdThree.map((calc) => {
              const href =
                calculatorLinks.find((link) => link.slug === calc.slug)?.href || "#"
              return (
                <li key={calc.slug}>
                  <Link href={href} className="hover:text-blue-600">
                    {getTranslation(locale, calc.heading)}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="md:hidden block border-t border-zinc-300 ">
            <div className="mt-5 pl-5">
              <LanguageSelector locale={locale} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 md:pt-8 pt-4  text-center md:text-base text-sm">
        <div className="flex flex-col md:flex-row gap-6 md:justify-between justify-start md:px-20 pl-5  md:items-center items-start pb-10 pt-2">

          <div className="flex gap-3">
            <Link target="_blank" href="https://www.facebook.com/vastcalculators/">
              <Image src="/facebook.png" alt="facebook" width={40} height={40} loading="lazy" /></Link>
            <Link target="_blank" href="https://www.instagram.com/vastcalculators/">
              <Image src="/instagram.png" alt="instagram" width={40} height={40} loading="lazy" /></Link>
            <Link target="_blank" href="https://www.linkedin.com/company/vastcalculators/">
              <Image src="/linkedin.png" alt="linkedin" width={40} height={40} loading="lazy" /></Link>
            <Link target="_blank" href="https://x.com/vastcalculators/">
              <Image src="/x-icon.png" alt="linkedin" width={40} height={40} loading="lazy" /></Link>
            <Link target="_blank" href="https://www.pinterest.com/vastcalculators/">
              <Image src="/pinterest.png" alt="linkedin" width={40} height={40} loading="lazy" /></Link>
          </div>

          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}