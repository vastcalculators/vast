import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { locales, defaultLocale } from "@/lib/i18n";
import AboutHero from "@/components/about-comps/AboutHero";
import AboutMission from "@/components/about-comps/AboutMission";
import FadeIn from "@/components/FadeIn";
import AboutValues from "@/components/about-comps/AboutValues";

interface PageProps {
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({
      locale,
    }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = params;
  const baseUrl = "https://vastcalculators.com";

  const metaData = {
  en: {
    title: "About Vast Calculators | Free Online Health, Finance & Conversion Tools",
    description:
      "Discover Vast Calculators, your trusted platform for accurate online calculators. Explore free tools for health, fitness, finance, education, and daily life. Fast, reliable, and easy to use.",
  },
  fr: {
    title: "À propos de Vast Calculators | Outils de Santé, Finance et Conversion Gratuits",
    description:
      "Découvrez Vast Calculators, votre plateforme fiable pour des calculateurs en ligne précis. Explorez des outils gratuits pour la santé, la finance, l'éducation, et la vie quotidienne. Rapide, fiable et facile à utiliser.",
  },
  ur: {
    title: "Vast Calculators کے بارے میں | صحت، فنانس اور کنورژن کے مفت آن لائن ٹولز",
    description:
      "Vast Calculators دریافت کریں، آپ کا قابل اعتماد پلیٹ فارم درست آن لائن کیلکولیٹرز کے لیے۔ صحت، فنانس، تعلیم اور روزمرہ زندگی کے لیے مفت ٹولز دریافت کریں۔ تیز، قابلِ اعتماد اور استعمال میں آسان۔",
  },
  hi: {
    title: "Vast Calculators के बारे में | स्वास्थ्य, वित्त और कन्वर्ज़न के मुफ्त ऑनलाइन टूल्स",
    description:
      "Vast Calculators खोजें, सटीक ऑनलाइन कैलकुलेटर के लिए आपका भरोसेमंद प्लेटफॉर्म। स्वास्थ्य, वित्त, शिक्षा और दैनिक जीवन के लिए मुफ्त टूल्स एक्सप्लोर करें। तेज, भरोसेमंद और आसान।",
  },
  ar: {
    title: "حول Vast Calculators | أدوات الصحة والتمويل والتحويل المجانية عبر الإنترنت",
    description:
      "اكتشف Vast Calculators، منصتك الموثوقة للحاسبات الدقيقة عبر الإنترنت. استكشف أدوات مجانية للصحة والتمويل والتعليم والحياة اليومية. سريعة، موثوقة وسهلة الاستخدام.",
  },
  de: {
    title: "Über Vast Calculators | Kostenlose Online-Tools für Gesundheit, Finanzen & Konvertierung",
    description:
      "Entdecken Sie Vast Calculators – Ihre vertrauenswürdige Plattform für präzise Online-Rechner. Erkunden Sie kostenlose Tools für Gesundheit, Finanzen, Bildung und Alltag. Schnell, zuverlässig und einfach zu bedienen.",
  },
  ru: {
    title: "О Vast Calculators | Бесплатные онлайн-инструменты для здоровья, финансов и конвертации",
    description:
      "Откройте для себя Vast Calculators — вашу надежную платформу для точных онлайн-калькуляторов. Изучайте бесплатные инструменты для здоровья, финансов, образования и повседневной жизни. Быстро, надежно и легко.",
  },
  zh: {
    title: "关于 Vast Calculators | 免费在线健康、金融和转换工具",
    description:
      "了解 Vast Calculators，您值得信赖的精准在线计算平台。探索免费的健康、金融、教育和日常生活工具。快速、可靠、简单易用。",
  },
  es: {
    title: "Acerca de Vast Calculators | Herramientas Gratuitas de Salud, Finanzas y Conversión en Línea",
    description:
      "Descubre Vast Calculators, tu plataforma confiable para calculadoras en línea precisas. Explora herramientas gratuitas para salud, finanzas, educación y la vida diaria. Rápido, confiable y fácil de usar.",
  },
  it: {
    title: "Informazioni su Vast Calculators | Strumenti Online Gratuiti per Salute, Finanza e Conversione",
    description:
      "Scopri Vast Calculators, la tua piattaforma affidabile per calcolatori online accurati. Esplora strumenti gratuiti per salute, finanza, istruzione e vita quotidiana. Veloce, affidabile e facile da usare.",
  },
  tr: {
    title: "Vast Calculators Hakkında | Ücretsiz Online Sağlık, Finans ve Dönüşüm Araçları",
    description:
      "Doğru online hesaplayıcılar için güvenilir platformunuz Vast Calculators'ı keşfedin. Sağlık, finans, eğitim ve günlük yaşam için ücretsiz araçları inceleyin. Hızlı, güvenilir ve kullanımı kolay.",
  },
  pt: {
    title: "Sobre a Vast Calculators | Ferramentas Online Gratuitas de Saúde, Finanças e Conversão",
    description:
      "Descubra a Vast Calculators, sua plataforma confiável para calculadoras online precisas. Explore ferramentas gratuitas para saúde, finanças, educação e vida cotidiana. Rápido, confiável e fácil de usar.",
  },
};


  const selectedMeta = metaData[locale as keyof typeof metaData] || metaData.en;

  const canonical =
    locale === defaultLocale
      ? `${baseUrl}/about`
      : `${baseUrl}/${locale}/about`;

  const languages = Object.fromEntries(
    locales.map((l) =>
      l === defaultLocale
        ? [l, `${baseUrl}/about`]
        : [l, `${baseUrl}/${l}/about`]
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

export default async function AboutPage({ params }: PageProps) {
  const { locale } = params;
  return (
    <FadeIn>
      <AboutHero locale={locale} />
      <AboutMission locale={locale} />
      <AboutValues locale={locale} />
    </FadeIn>
  );
}