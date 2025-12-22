import { getTranslation, Locale } from "@/lib/i18n"

interface CategoryHeaderProps {
  locale: Locale
  title: string
  description: string
}

export function CategoryHeader({ locale, title, description }: CategoryHeaderProps) {
  return (
    <div className="mb-8 ">
      <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-3">
        {title}
      </h1>
      <p className="text-zinc-600 text-lg max-w-2xl">
        {description}
      </p>
    </div>
  )
}
