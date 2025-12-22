import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import type { Locale } from "@/lib/i18n";
import CardsSection from "@/components/CardSection";
import FadeIn from "@/components/FadeIn";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/categories-section";
import { defaultLocale, locales } from "@/lib/i18n";

interface PageProps {
  params: { locale: Locale };
}

const baseUrl = "https://vastcalculators.com";

export async function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;

  const metaData = {
    en: {
      title: "Online Free Calculator Tools - Vastcalculator",
      description:
        "Use VastCalculator online free calculators for finance, health, and math. Get instant, ad-free, and accurate results with tools like BMI, EMI, percentage, and loan calculators.",
    },
    fr: {
      title: "Outils de calculateur gratuits en ligne – Vastcalculator",
      description:
        "Utilisez les calculateurs gratuits en ligne de VastCalculator pour la finance, la santé et les mathématiques. Obtenez des résultats instantanés, sans publicité et précis grâce à des outils comme BMI, EMI, pourcentage et prêt.",
    },
    ur: {
      title: "آن لائن مفت کیلکولیٹر ٹولز – Vastcalculator",
      description:
        "VastCalculator کے آن لائن مفت کیلکولیٹر استعمال کریں مالیات، صحت، اور ریاضی کے لیے۔ BMI، EMI، فیصد، قرض کے کیلکولیٹر جیسے ٹولز کے ساتھ فوری، اشتہار سے پاک اور درست نتائج حاصل کریں۔",
    },
    hi: {
      title: "ऑनलाइन मुफ्त कैलकुलेटर टूल्स – Vastcalculator",
      description:
        "VastCalculator के ऑनलाइन मुफ्त कैलकुलेटर फ़ाइनेंस, स्वास्थ्य और गणित के लिए उपयोग करें। BMI, EMI, प्रतिशत और लोन कैलकुलेटर जैसे टूल्स के साथ तुरंत, विज्ञापन-मुक्त और सटीक परिणाम पाएं।",
    },
    ar: {
      title: "أدوات الآلة الحاسبة المجانية على الإنترنت – Vastcalculator",
      description:
        "استخدم حاسبات VastCalculator المجانية على الإنترنت للتمويل والصحة والرياضيات. احصل على نتائج فورية، خالية من الإعلانات، ودقيقة باستخدام أدوات مثل BMI، EMI، النسبة، وقرض.",
    },
    de: {
      title: "Online Kostenlose Taschenrechner-Tools – Vastcalculator",
      description:
        "Nutzen Sie die kostenlosen Online-Taschenrechner von VastCalculator für Finanzen, Gesundheit und Mathematik. Erhalten Sie sofortige, werbefreie und genaue Ergebnisse mit Tools wie BMI, EMI, Prozent und Kreditrechner.",
    },
    ru: {
      title: "Онлайн бесплатные инструменты калькулятора – Vastcalculator",
      description:
        "Используйте бесплатные онлайн-калькуляторы VastCalculator для финансов, здоровья и математики. Получайте мгновенные, без рекламы и точные результаты с такими инструментами, как BMI, EMI, процент, кредиты.",
    },
    zh: {
      title: "在线免费计算器工具 – Vastcalculator",
      description:
        "使用 VastCalculator 的在线免费计算器进行财务、健康和数学计算。通过 BMI、EMI、百分比和贷款计算器等工具，获取即时、无广告且准确的结果。",
    },
    es: {
      title: "Herramientas de calculadora gratuitas en línea – Vastcalculator",
      description:
        "Utiliza los calculadores gratuitos en línea de VastCalculator para finanzas, salud y matemáticas. Obtén resultados instantáneos, sin anuncios y precisos con herramientas como BMI, EMI, porcentaje y calculadora de préstamos.",
    },
    it: {
      title: "Strumenti di calcolatore gratuiti online – Vastcalculator",
      description:
        "Usa i calcolatori gratuiti online di VastCalculator per finanza, salute e matematica. Ottieni risultati istantanei, senza annunci e accurati con strumenti come BMI, EMI, percentuale e calcolatore prestiti.",
    },
    tr: {
      title: "Çevrimiçi Ücretsiz Hesap Makinası Araçları – Vastcalculator",
      description:
        "VastCalculator'ın finans, sağlık ve matematik için çevrimiçi ücretsiz hesap makinası araçlarını kullanın. BMI, EMI, yüzde ve kredi hesaplama gibi araçlarla anında, reklamsız ve doğru sonuçlar elde edin.",
    },
    pt: {
      title: "Ferramentas de Calculadora Gratuitas Online – Vastcalculator",
      description:
        "Use as calculadoras gratuitas online da VastCalculator para finanças, saúde e matemática. Obtenha resultados instantâneos, sem anúncios e precisos com ferramentas como BMI, EMI, porcentagem e calculadora de empréstimos.",
    },
  };

  const selectedMeta = metaData[locale as keyof typeof metaData] || metaData.en;

  const canonical =
    locale === defaultLocale
      ? `${baseUrl}`
      : `${baseUrl}/${locale}`;

  const languages = Object.fromEntries(
    locales.map((l) =>
      l === defaultLocale
        ? [l, `${baseUrl}`]
        : [l, `${baseUrl}/${l}`]
    )
  );

  return {
    title: selectedMeta.title,
    description: selectedMeta.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: selectedMeta.title,
      description: selectedMeta.description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = params;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "name": "VastCalculator",
    "alternateName": "Vast Calculator - Free Online Calculators",
    "url": "https://www.vastcalculator.com",
    "applicationCategory": "UtilityApplication",
    "applicationSubCategory": "Online Calculators and Converters",
    "operatingSystem": "Web",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "description": "VastCalculator offers 100% free online calculators for health, fitness, finance, math, and daily life. Easily calculate BMI, calories, loans, percentages, age, and more in one place.",
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD",
      "availability": "https://schema.org/OnlineOnly"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.vastcalculator.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VastCalculator",
      "url": "https://www.vastcalculator.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.vastcalculator.com/VastCalculators.com-Logo.png"
      },
      "sameAs": [
        "https://www.facebook.com/vastcalculators/",
        "https://www.linkedin.com/company/vastcalculators/",
        "https://www.instagram.com/vastcalculators/"
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <FadeIn>
        <Hero locale={locale} />
        <CardsSection locale={locale} />
        <AboutSection locale={locale} />
        <CategoriesSection locale={locale} />
      </FadeIn>
    </>
  );
}