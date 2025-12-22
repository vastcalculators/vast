import Link from "next/link"
import { getTranslation, Locale } from "@/lib/i18n"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface Calculator {
  heading: string
  slug: string
  titleKey: string
  descriptionKey: string
}

interface CalculatorGridProps {
  calculators: Calculator[]
  locale: Locale
  category: string
}

export function CalculatorGrid({ calculators, locale, category }: CalculatorGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {calculators.map((calc) => (
        <Link
          key={calc.slug}
         href={locale === "en" ? `/${category}/${calc.slug}` : `/${locale}/${category}/${calc.slug}`}
          className="group transition-transform hover:-translate-y-1"
        >
          <Card className="h-full border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-zinc-900 text-lg font-semibold group-hover:text-blue-600 transition-colors">
                {getTranslation(locale, calc.heading)}
              </CardTitle>
              <CardDescription className="text-zinc-600 text-sm">
                {getTranslation(locale, calc.descriptionKey)}
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}

      {calculators.length === 0 && (
        <div className="col-span-full text-center py-8 text-zinc-500">
          No calculators found.
        </div>
      )}
    </div>
  )
}
