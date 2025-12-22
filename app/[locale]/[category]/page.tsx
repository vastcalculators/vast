import { notFound } from "next/navigation";
import { allCalculatorCategories, getCalculatorsByCategory } from "@/lib/calculators";
import { getTranslation, defaultLocale, type Locale, locales } from "@/lib/i18n";
import CategoryPage from "./CategoryPage";

interface PageProps {
  params: Promise<{
    locale?: string;
    category: string;
  }>;
}

export async function generateStaticParams() {
  const paths: { locale: string; category: string }[] = [];
  
  locales
    .filter((locale) => locale !== defaultLocale)
    .forEach((locale) => {
      allCalculatorCategories.forEach((category) => {
        paths.push({
          locale,
          category: category.id,
        });
      });
    });
  
  return paths;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale = defaultLocale, category } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  const categoryData = allCalculatorCategories.find((c) => c.id === category.toLowerCase());
  
  if (!categoryData) return {};
  
  const title = getTranslation(validLocale, categoryData.metaTitle);
  const description = getTranslation(validLocale, categoryData.metaDescription);
  const baseUrl = "https://vastcalculators.com";
  
  const canonical =
    validLocale === defaultLocale
      ? `${baseUrl}/${category}`
      : `${baseUrl}/${validLocale}/${category}`;
  
  const languages = Object.fromEntries(
    locales.map((l) =>
      l === defaultLocale
        ? [l, `${baseUrl}/${category}`]
        : [l, `${baseUrl}/${l}/${category}`]
    )
  );
  
  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale = defaultLocale, category } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  const categoryData = allCalculatorCategories.find((c) => c.id === category.toLowerCase());
  const calculators = getCalculatorsByCategory(category);
  
  if (!categoryData) {
    notFound();
  }
  
  return (
    <CategoryPage
      locale={validLocale}
      category={category}
      categoryData={categoryData}
      calculators={calculators}
    />
  );
}