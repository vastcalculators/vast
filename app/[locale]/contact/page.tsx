import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";
import ContactHero from "@/components/contact-comps/ContactHero";
import ContactSupport from "@/components/contact-comps/ContactSupport";

interface PageProps {
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;
  const baseUrl = "https://vastcalculators.com";

  const metaData = {
    en: {
      title: "Contact Vast Calculators | Get Support or Share Feedback",
      description:
        "Need help or have a suggestion? Contact Vast Calculators for support, bug reports, or feature requests. Our team responds within 24 hours to keep your experience smooth and accurate.",
    },
    fr: {
      title: "Contactez Vast Calculators | Obtenez du Support ou Partagez Vos Commentaires",
      description:
        "Besoin d'aide ou d'une suggestion ? Contactez Vast Calculators pour du support, rapports de bugs ou demandes de fonctionnalités. Notre équipe répond sous 24 heures pour assurer une expérience fluide et précise.",
    },
    ur: {
      title: "Vast Calculators سے رابطہ کریں | سپورٹ حاصل کریں یا فیڈبیک دیں",
      description:
        "مدد چاہیے یا کوئی تجویز ہے؟ Vast Calculators سے سپورٹ، بگ رپورٹ یا فیچر ریکویسٹ کے لیے رابطہ کریں۔ ہماری ٹیم 24 گھنٹے کے اندر جواب دیتی ہے تاکہ آپ کا تجربہ ہموار اور درست رہے۔",
    },
    hi: {
      title: "Vast Calculators से संपर्क करें | सहायता प्राप्त करें या फ़ीडबैक साझा करें",
      description:
        "मदद चाहिए या कोई सुझाव है? सपोर्ट, बग रिपोर्ट या फीचर रिक्वेस्ट के लिए Vast Calculators से संपर्क करें। हमारी टीम 24 घंटों के भीतर जवाब देती है ताकि आपका अनुभव स्मूथ और सटीक रहे।",
    },
    ar: {
      title: "اتصل بـ Vast Calculators | احصل على الدعم أو شارك ملاحظاتك",
      description:
        "تحتاج مساعدة أو لديك اقتراح؟ اتصل بـ Vast Calculators للدعم، تقارير الأخطاء أو طلبات الميزات. فريقنا يرد خلال 24 ساعة ليضمن لك تجربة سلسة ودقيقة.",
    },
    de: {
      title: "Kontakt zu Vast Calculators | Support erhalten oder Feedback teilen",
      description:
        "Brauchen Sie Hilfe oder haben Sie einen Vorschlag? Kontaktieren Sie Vast Calculators für Support, Fehlerberichte oder Funktionsanfragen. Unser Team antwortet innerhalb von 24 Stunden für ein reibungsloses und genaues Erlebnis.",
    },
    ru: {
      title: "Связаться с Vast Calculators | Получить поддержку или оставить отзыв",
      description:
        "Нужна помощь или есть предложение? Свяжитесь с Vast Calculators для поддержки, отчётов об ошибках или запросов функций. Наша команда отвечает в течение 24 часов, чтобы обеспечить плавный и точный опыт.",
    },
    zh: {
      title: "联系 Vast Calculators | 获取支持或分享反馈",
      description:
        "需要帮助或有建议？联系 Vast Calculators 获取支持、错误报告或功能请求。我们的团队会在24小时内回复，确保你的体验顺畅且准确。",
    },
    es: {
      title: "Contacta a Vast Calculators | Obtén Soporte o Comparte Comentarios",
      description:
        "¿Necesitas ayuda o tienes una sugerencia? Contacta a Vast Calculators para soporte, reportes de errores o solicitudes de funciones. Nuestro equipo responde en menos de 24 horas para mantener tu experiencia fluida y precisa.",
    },
    it: {
      title: "Contatta Vast Calculators | Ottieni Supporto o Condividi Feedback",
      description:
        "Hai bisogno di aiuto o un suggerimento? Contatta Vast Calculators per supporto, segnalazioni bug o richieste di funzionalità. Il nostro team risponde entro 24 ore per mantenere un'esperienza fluida e precisa.",
    },
    tr: {
      title: "Vast Calculators ile İletişim | Destek Alın veya Geri Bildirim Paylaşın",
      description:
        "Yardıma mı ihtiyacınız var veya öneriniz mi var? Destek, hata raporu veya özellik talebi için Vast Calculators ile iletişime geçin. Ekibimiz 24 saat içinde yanıt verir ve deneyiminizin sorunsuz ve doğru olmasını sağlar.",
    },
    pt: {
      title: "Contato Vast Calculators | Obtenha Suporte ou Envie Feedback",
      description:
        "Precisa de ajuda ou tem uma sugestão? Contate a Vast Calculators para suporte, relatórios de bugs ou solicitações de recursos. Nossa equipe responde em até 24 horas para garantir uma experiência suave e precisa.",
    },
  };

  const selectedMeta = metaData[locale as keyof typeof metaData] || metaData.en;

  const canonical =
    locale === defaultLocale
      ? `${baseUrl}/contact`
      : `${baseUrl}/${locale}/contact`;

  const languages = Object.fromEntries(
    locales.map((l) =>
      l === defaultLocale
        ? [l, `${baseUrl}/contact`]
        : [l, `${baseUrl}/${l}/contact`]
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

export default async function ContactPage({ params }: PageProps) {
  const { locale } = params;
  return (
    <FadeIn>
      <ContactHero locale={locale} />
      <ContactSupport locale={locale} />
    </FadeIn>
  );
}