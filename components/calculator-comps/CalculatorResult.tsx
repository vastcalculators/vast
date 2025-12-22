"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getTranslation, type Locale } from "@/lib/i18n"
import { Loader2 } from "lucide-react"
import type { Calculator } from "@/lib/calculators/types"

interface CalculatorResultProps {
  locale: Locale
  inputs: Record<string, number | string | any>
  result: string | number
  onRecalculate: () => void
  calculator: Calculator
}

export function CalculatorResult({ locale, inputs, result, onRecalculate, calculator }: CalculatorResultProps) {
  const [isLoading, setIsLoading] = useState(false)
  const resultRef = useRef<HTMLDivElement | null>(null)
  const isPlaceholder = result === "—"

  const resultConfig = calculator.result
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768


useEffect(() => {
  if (!isPlaceholder) {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)

      setTimeout(() => {
        if (resultRef.current) {
          if (isMobile) {
            resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        }
      }, 100)
    }, 1000)

    return () => clearTimeout(timer)
  }
}, [result, isPlaceholder])
  const displayInputs = Object.entries(inputs).filter(([key, value]) => {
    return !Array.isArray(value)
  })

  return (
    <Card ref={resultRef} className="border-2 border-primary/20 shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          {getTranslation(locale, "result.title")}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {isPlaceholder && !isLoading && (
          <div className="text-center text-muted-foreground py-8 space-y-2">
            <p className="text-lg font-medium">{getTranslation(locale, "result.noresulttitle")}</p>
            <p className="text-sm">{getTranslation(locale, "result.noresultssub")}</p>
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-10 space-y-3 animate-pulse">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
            <p className="text-sm text-muted-foreground">{getTranslation(locale, "result.calresult")}</p>
          </div>
        )}

        {!isPlaceholder && !isLoading && (
          <>
            <div>
              <p className="font-medium mb-2 text-foreground">{getTranslation(locale, "result.inputstext")}</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {displayInputs.map(([key, value]) => (
                  <li key={key}>
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>:{" "}
                    <span className="font-semibold text-foreground">{String(value)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <p className="font-medium mb-1 text-foreground">
                {resultConfig?.label
                  ? getTranslation(locale, resultConfig.label)
                  : getTranslation(locale, "result.calculateresult")
                }
              </p>
              <p className="text-xl font-semibold text-zinc-800">{result}</p>
            </div>

            {resultConfig?.explainKey && (
              <>
                <Separator />
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {getTranslation(locale, resultConfig.explainKey)}
                  </p>
                </div>
              </>
            )}

            <Separator />

            <button
              onClick={onRecalculate}
              className="mt-3 inline-block w-full rounded-lg bg-primary text-primary-foreground py-2 font-medium transition hover:bg-primary/90"
            >
              {getTranslation(locale, "result.recalculate")}
            </button>
          </>
        )}
      </CardContent>
    </Card>
  )
}