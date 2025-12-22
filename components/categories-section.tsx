"use client"

import { useState } from "react"
import Link from "next/link"
import { type Locale, getTranslation } from "@/lib/i18n"
import { allCalculatorCategories } from "@/lib/calculators"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

interface CalculatorsGridSectionProps {
  locale: Locale
}

export default function CategoriesSection({ locale }: CalculatorsGridSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState(allCalculatorCategories[0].id)

  const currentCategory = allCalculatorCategories.find(cat => cat.id === selectedCategory)
  const calculators = currentCategory?.calculators || []

  const calculatorLinks = calculators.map(calc => ({
    slug: calc.slug,
    href: locale === "en"
      ? `/${currentCategory?.id}/${calc.slug}`
      : `/${locale}/${currentCategory?.id}/${calc.slug}`,
  }))

  const firstNine = calculators.slice(0, 9)

  return (
    <section id="home-calculators" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
              {getTranslation(locale, "feature.title")}
            </h2>
            <p className="mt-2 text-base md:text-lg text-foreground">
              {getTranslation(locale, "feature.description") ||
                "Explore calculators across different categories."}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <Select aria-label="Select Vast Calculators" value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger aria-label="Select Calculators" className="w-44 md:w-56">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {allCalculatorCategories.map(cat => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {getTranslation(locale, cat.name)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Calculators Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:scale-100 scale-95 md:mt-0 -mt-10">
          {firstNine.map(calc => {
            const calcHref =
              calculatorLinks.find(link => link.slug === calc.slug)?.href || "#"

            return (
              <>
                <Link key={calc.slug} href={calcHref}>
                  <Card
                    className="group flex flex-col justify-between overflow-hidden border border-border transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {getTranslation(locale, calc.heading)}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {getTranslation(locale, calc.descriptionKey)}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="mt-auto flex items-center justify-between pt-4">
                      <p className="inline-flex items-center font-medium text-sm text-primary hover:underline">
                        {getTranslation(locale, "feature.cta") || "Open Calculator"}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}
