"use client"

import { useState, useMemo } from "react"
import { getTranslation, type Locale } from "@/lib/i18n"
import FadeIn from "@/components/FadeIn"
import { CategoryHeader } from "@/components/category-comps/CategoryHeader"
import { SearchAndFilter } from "@/components/category-comps/SearchAndFilter"
import { CalculatorGrid } from "@/components/category-comps/CalculatorGrid"

interface CategoryPageProps {
  locale: Locale
  category: string
  categoryData: {
    id: string
    name: string
    description: string
  } | undefined
  calculators: any[]
}

export default function CategoryPage({ locale, category, categoryData, calculators }: CategoryPageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterLetter, setFilterLetter] = useState("")

  const filteredCalculators = useMemo(() => {
    return calculators
      .filter((calc) =>
        getTranslation(locale, calc.heading)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      .filter((calc) =>
        filterLetter
          ? getTranslation(locale, calc.heading).toUpperCase().startsWith(filterLetter)
          : true
      )
      .sort((a, b) =>
        getTranslation(locale, a.heading).localeCompare(getTranslation(locale, b.heading))
      )
  }, [calculators, searchQuery, filterLetter, locale])

  if (!categoryData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-semibold text-red-500">
          {getTranslation(locale, "search.notFound")}
        </h1>
      </div>
    )
  }

  return (
    <FadeIn>
      <div className="container mx-auto px-4 py-16">
        <CategoryHeader
          locale={locale}
          title={getTranslation(locale, categoryData.name)}
          description={getTranslation(locale, categoryData.description)}
        />

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilterLetter={setFilterLetter}
          calculatorNames={calculators.map((calc) =>
            getTranslation(locale, calc.heading)
          )}
        />

        <CalculatorGrid calculators={filteredCalculators} locale={locale} category={category} />
      </div>
    </FadeIn>
  )
}