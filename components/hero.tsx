import { type Locale, translations } from "@/lib/i18n"
import Link from "next/link"

interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const t = translations[locale]



  return (
  <section className="relative overflow-hidden flex items-center justify-center md:py-30 py-14 shadow-zinc-400/30 shadow-md 
  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
  bg-[size:14px_24px]
  [mask-image:radial-gradient(ellipse 100% 50% at 60% 0%,#000 140%,transparent 260%)]
">

  <div className="absolute inset-0 bg-white/30"></div>

  <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center">
    <h1 className="text-balance text-2xl font-bold tracking-tight md:text-5xl lg:text-6xl text-zinc-800">
      {t.hero.title}
    </h1>
    <p className="md:my-6 my-4 text-sm text-zinc-600 md:text-base">{t.hero.subtitle}</p>

    <div className="md:scale-100 scale-90">
    <Link href="#categories"
      className="mt-4 rounded-lg bg-zinc-900 px-8 py-3 font-semibold text-zinc-50 backdrop-blur-md transition-transform "
    >
      {t.hero.cta}
    </Link>
    </div>
  </div>
</section>
  )
}