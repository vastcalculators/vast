import { type Locale, translations } from "@/lib/i18n"

interface FeaturesProps {
  locale: Locale
}

export function Features({ locale }: FeaturesProps) {
  const t = translations[locale]

  const features = [
    {
      title: t.features.feature1,
      description: t.features.feature1Desc,
      icon: "🌍",
    },
    {
      title: t.features.feature2,
      description: t.features.feature2Desc,
      icon: "👥",
    },
    {
      title: t.features.feature3,
      description: t.features.feature3Desc,
      icon: "⚡",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">{t.features.title}</h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg border border-border bg-muted p-8 transition-all hover:shadow-lg">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
