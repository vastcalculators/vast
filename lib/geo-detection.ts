import type { Locale } from "./i18n"

export function detectLocaleFromHeader(acceptLanguage: string): Locale {
  const localeMap: Record<string, Locale> = {
    en: "en",
    ur: "ur",
    es: "es",
  }

  const languages = acceptLanguage.split(",").map((lang) => lang.split(";")[0].trim().split("-")[0])

  for (const lang of languages) {
    if (localeMap[lang]) {
      return localeMap[lang]
    }
  }

  return "en"
}

export function getGeoLocation(request: Request): {
  country?: string
  locale: Locale
} {
  const acceptLanguage = request.headers.get("accept-language") || ""
  const locale = detectLocaleFromHeader(acceptLanguage)

  return {
    locale,
  }
}
