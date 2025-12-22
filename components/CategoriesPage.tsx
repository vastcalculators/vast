"use client"

import Link from "next/link"
import { allCalculatorCategories } from "@/lib/calculators"
import { getTranslation, type Locale } from "@/lib/i18n"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CategoriesPageProps {
  locale: Locale
}

export function CategoriesPage({ locale }: CategoriesPageProps) {
  return (
    <section className="relative overflow-hidden py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-semibold text-zinc-900 tracking-tight"
          >
            {getTranslation(locale, "categoriespage.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto mt-4"
          >
            {getTranslation(locale, "categoriespage.description")}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allCalculatorCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href={`/${locale}/categories/${category.id}`} className="group block h-full">
                <Card className="relative h-full border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg sm:text-xl font-semibold text-zinc-800 group-hover:text-blue-600 transition-colors duration-300">
                        {getTranslation(locale, category.name)}
                      </CardTitle>
                      <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-zinc-600 leading-relaxed text-sm sm:text-base mb-3">
                      {getTranslation(locale, category.description)}
                    </CardDescription>

                    <div className="flex items-center justify-between text-sm text-zinc-400">
                      <span>{category.calculators.length} Calculators</span>
                      <span className="font-medium text-zinc-500 group-hover:text-blue-600 transition-colors duration-300">
                        View →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
