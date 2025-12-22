import { enTranslations } from "./translations/en"
import { urTranslations } from "./translations/ur"
import { esTranslations } from "./translations/es"
import { frTranslations } from "./translations/fr"
import { arTranslations } from "./translations/ar"
import { deTranslations } from "./translations/de"
import { ptTranslations } from "./translations/pt"
import { ruTranslations } from "./translations/ru"
import { itTranslations } from "./translations/it"
import { zhTranslations } from "./translations/zh"
import { trTranslations } from "./translations/tr"
import { hiTranslations } from "./translations/hi"

export type Locale = "en" | "ur" | "es" | "fr" | "ar" | "de" | "pt" | "ru" | "it" | "zh" | "tr" | "hi"

export const locales: Locale[] = ["en", "ur", "es", "fr", "ar", "de", "pt", "ru", "it", "zh", "tr", "hi"]
export const defaultLocale: Locale = "en"

export const translations = {
  en: enTranslations,
  ur: urTranslations,
  es: esTranslations,
  fr: frTranslations,
  ar: arTranslations,
  de: deTranslations,
  pt: ptTranslations,
  ru: ruTranslations,
  it: itTranslations,
  zh: zhTranslations,
  tr: trTranslations,
  hi: hiTranslations,
}

export function getTranslation(locale: Locale, key: string) {
  try {
    if (!locale || !key) return key

    const trans = translations[locale]
    if (!trans) return key

    const keys = key.split(".")
    let value: any = trans

    for (let i = 0; i < keys.length; i++) {
      value = value?.[keys[i]]
      if (value === undefined || value === null) return key
    }

    return value
  } catch {
    return key
  }
}
