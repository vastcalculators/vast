import type React from "react"
import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { type Locale, locales } from "@/lib/i18n"
import BackToTop from "@/components/BackToTop"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const dynamic = "force-static";

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  await params

  return {
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    icons: {
      icon: '/favicon.ico',
    }
  }
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    redirect('/')
  }

  const langMap: Record<string, string> = {
    en: "en",
    ur: "ur",
    es: "es",
    fr: "fr",
    ar: "ar",
    de: "de",
    pt: "pt",
    ru: "ru",
    it: "it",
    zh: "zh",
    tr: "tr",
    hi: "hi",
  }

  const htmlLang = langMap[locale] || "en"
  const isRTL = ["ar", "ur"].includes(locale)

  return (
    <html lang={htmlLang} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
    

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NNPB9C2TM5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NNPB9C2TM5');
          `}
      </Script>
      <Analytics />
      <SpeedInsights/>

      <body>
        <div className="flex min-h-screen flex-col">
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}
