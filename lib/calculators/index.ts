import { healthCalculators } from "./health-calculators"
import { financeCalculators } from "./finance-calculators"
import type { Calculator, CalculatorCategory } from "./types"
import { educationCalculators } from "./education-calculators"
import {  mathsCalculators } from "./math-calculators"
import { sportsCalculators } from "./sports-calculators"

export type { Calculator, CalculatorInput, CalculatorSection } from "./types"

export const allCalculatorCategories: CalculatorCategory[] = [
  {
    id: "health",
    metaTitle: "categories.health.metaTitle",
    metaDescription: "categories.health.metaDescription",
    name: "categories.health.name",
    calculators: healthCalculators,
    description: "categories.health.description"
  },
  {
    id: "finance",
    metaTitle: "categories.finance.metaTitle",
    metaDescription: "categories.finance.metaDescription",
    name: "categories.finance.name",
    calculators: financeCalculators,
    description: "categories.finance.description"
  },
  {
    id: "education",
    metaTitle: "categories.education.metaTitle",
    metaDescription: "categories.education.metaDescription",
    name: "categories.education.name",
    calculators: educationCalculators,
    description: "categories.education.description"
  },
  {
    id: "maths",
    metaTitle: "categories.math.metaTitle",
    metaDescription: "categories.math.metaDescription",
    name: "categories.math.name",
    calculators: mathsCalculators,
    description: "categories.math.description"
  },
  {
    id: "sports",
    metaTitle: "categories.sports.metaTitle",
    metaDescription: "categories.sports.metaDescription",
    name: "categories.sports.name",
    calculators: sportsCalculators,
    description: "categories.sports.description"
  },
]

export function getCalculatorBySlug(category: string, slug: string): Calculator | undefined {
  const categoryData = allCalculatorCategories.find((c) => c.id === category.toLowerCase())
  return categoryData?.calculators.find((calc) => calc.slug === slug)
}

export function getCalculatorsByCategory(category: string): Calculator[] {
  const categoryData = allCalculatorCategories.find((c) => c.id === category.toLowerCase())
  return categoryData?.calculators || []
}
