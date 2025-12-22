"use client"

import { useState, useEffect } from "react"
import { CalculatorForm } from "@/components/calculator-comps/calculator-form"
import { CalculatorSections } from "@/components/calculator-comps/calculator-sections"
import { healthFormulas } from "@/lib/calculators/formulas/health-formulas"
import { financeFormulas } from "@/lib/calculators/formulas/finance-formulas"
import FadeIn from "@/components/FadeIn"
import type { Locale } from "@/lib/i18n"
import { CalculatorResult } from "./CalculatorResult"
import { educationFormulas } from "@/lib/calculators/formulas/education-formulas"
import { mathFormulas } from "@/lib/calculators/formulas/math-formulas"

const allFormulas = { ...healthFormulas, ...financeFormulas, ...educationFormulas, ...mathFormulas }

interface CalculatorClientProps {
  calc: any
  locale: Locale
  category: string
  formulaId: any
}

export default function CalculatorClient({ calc, locale, formulaId, category }: CalculatorClientProps) {
  const [inputs, setInputs] = useState({
    value1: "—",
    value2: "—",
    value3: "—",
  })

  const [result, setResult] = useState<string | number | null>(null)
  const calculatorFunc = allFormulas[formulaId as keyof typeof allFormulas]

  const handleCalculate = async (userInputs: any) => {
    setInputs(userInputs)

    if (calculatorFunc) {
      const res = await calculatorFunc(userInputs)
      setResult(res)
    }
  }

  const resetInputs = () => {
    setInputs({
      value1: "—",
      value2: "—",
      value3: "—",
    })
  }

  const handleRecalculate = () => {
    setResult(null)
    resetInputs()
  }


  useEffect(() => {
    const handlePopState = () => {
      const pathSegments = window.location.pathname.split('/').filter(Boolean)
      if (pathSegments.length > 1) {
        window.location.href = '/' + pathSegments.slice(0, -1).join('/')
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <FadeIn>
      <div className="container mx-auto px-4 py-10 space-y-10">
        <div className="grid gap-8 md:grid-cols-2">
          <CalculatorForm
            calculator={calc}
            locale={locale}
            onCalculate={handleCalculate}
            result={result}
            resetInputsTrigger={result === null}
          />

          <CalculatorResult
            locale={locale}
            inputs={inputs}
            result={result ?? "—"}
            onRecalculate={handleRecalculate}
            calculator={calc}
          />
        </div>

        <CalculatorSections
          category={category}
          calculator={calc}
          locale={locale}
          formulaFunc={calculatorFunc}
        />
      </div>
    </FadeIn>
  )
}
