import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CalculatorClient from "@/components/calculator-comps/CalculatorClient";
import { allCalculatorCategories, getCalculatorBySlug } from "@/lib/calculators";
import { getTranslation, type Locale, defaultLocale, locales } from "@/lib/i18n";

const baseUrl = "https://vastcalculators.com";

const categoryMap: Record<string, string> = {
  health: "Health Calculators",
  finance: "Finance Calculators",
};

export async function generateStaticParams() {
  const paths: { locale: string; category: string; calculator: string }[] = [];

  locales
    .filter((locale) => locale !== defaultLocale)
    .forEach((locale) => {
      allCalculatorCategories.forEach((category) => {
        category.calculators.forEach((calc) => {
          paths.push({
            locale,
            category: category.id,
            calculator: calc.slug,
          });
        });
      });
    });

  return paths;
}

interface CalculatorPageProps {
  params: Promise<{ locale?: string; category: string; calculator: string }>;
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const { locale = defaultLocale, category, calculator } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  const calc = getCalculatorBySlug(category, calculator);

  if (!calc) {
    return {
      title: "Calculator Not Found",
      description: "The calculator you're looking for could not be found.",
    };
  }

  const title = getTranslation(validLocale, calc.metaTitleKey);
  const description = getTranslation(validLocale, calc.metaDescriptionKey);

  const canonical =
    locale === defaultLocale || !locale
      ? `${baseUrl}/${category}/${calculator}`
      : `${baseUrl}/${locale}/${category}/${calculator}`;

  const languages = Object.fromEntries(
    locales.map((l) => {
      const url =
        l === defaultLocale
          ? `${baseUrl}/${category}/${calculator}`
          : `${baseUrl}/${l}/${category}/${calculator}`;
      return [l, url];
    })
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

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { locale = defaultLocale, category, calculator } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  const calc = getCalculatorBySlug(category, calculator);

  if (!calc) {
    notFound();
  }

  const enTitle = getTranslation("en", calc.heading);
  const enDescription = getTranslation("en", calc.metaDescriptionKey);

  const url =
    locale === defaultLocale
      ? `${baseUrl}/${category}/${calculator}`
      : `${baseUrl}/${locale}/${category}/${calculator}`;

  let faqSchema = null;
  if (calc.faqs && calc.faqs.length > 0) {
    const faqEntities = calc.faqs.map((f) => ({
      "@type": "Question",
      name: getTranslation("en", f.qKey),
      acceptedAnswer: {
        "@type": "Answer",
        text: getTranslation("en", f.aKey),
      },
    }));

    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntities,
    };
  }

  const appSchema = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    name: enTitle,
    description: enDescription,
    url,
    operatingSystem: "Web",
    applicationCategory: categoryMap[category] ?? category,
    applicationSubCategory: enTitle,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
      availability: "https://schema.org/OnlineOnly",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    publisher: {
      "@type": "Organization",
      name: "VastCalculator",
      url: baseUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <CalculatorClient calc={calc} locale={validLocale} formulaId={calc.formulaId} category={category} />
    </>
  );
}