// import type { Metadata } from "next"
// import type { Locale } from "./i18n"

// interface SEOProps {
//   title: string;
//   description: string;
//   locale: string;
//   pathname: string;
//   ogType?: string;
//   ogImage?: string;
//   alternates?: {
//     canonical: string;
//     languages: Record<string, string>;
//   };
// }

// export function generateSEOMetadata({
//   title,
//   description,
//   locale,
//   pathname,
//   ogImage = "/og-image.jpg",
//   ogType = "website",
// }: SEOProps): Metadata {
//   const baseUrl = "https://vastcalculators.com"
//   const url = `${baseUrl}/${locale}${pathname}`
//   const canonicalUrl = `${baseUrl}${pathname}`

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: canonicalUrl,
//       languages: {
//         en: `${baseUrl}/en${pathname}`,
//         ur: `${baseUrl}/ur${pathname}`,
//         es: `${baseUrl}/es${pathname}`,
//       },
//     },
//     openGraph: {
//       title,
//       description,
//       url,
//       type: ogType as any,
//       locale: locale === "ur" ? "ur_PK" : locale === "es" ? "es_ES" : "en_US",
//       images: [
//         {
//           url: ogImage,
//           width: 1200,
//           height: 630,
//           alt: title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   }
// }

// export function generateSchemaMarkup(
//   type: "Organization" | "WebPage" | "LocalBusiness" | "BreadcrumbList" | "FAQPage" | "Product",
//   data: Record<string, any>,
// ) {
//   return {
//     "@context": "https://schema.org",
//     "@type": type,
//     ...data,
//   }
// }

// export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
//   return {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: items.map((item, index) => ({
//       "@type": "ListItem",
//       position: index + 1,
//       name: item.name,
//       item: item.url,
//     })),
//   }
// }

// export function generateFAQSchema(
//   faqs: Array<{
//     question: string
//     answer: string
//   }>,
// ) {
//   return {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((faq) => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: faq.answer,
//       },
//     })),
//   }
// }

// export function generateLocalBusinessSchema(data: {
//   name: string
//   description: string
//   address: string
//   telephone: string
//   email: string
//   url: string
//   image?: string
// }) {
//   return {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     name: data.name,
//     description: data.description,
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: data.address,
//     },
//     telephone: data.telephone,
//     email: data.email,
//     url: data.url,
//     image: data.image || "https://vastcalculators.com/logo.png",
//   }
// }

// export function generateProductSchema(data: {
//   name: string
//   description: string
//   image: string
//   price: number
//   currency: string
//   availability: string
//   rating?: number
//   reviewCount?: number
// }) {
//   return {
//     "@context": "https://schema.org",
//     "@type": "Product",
//     name: data.name,
//     description: data.description,
//     image: data.image,
//     offers: {
//       "@type": "Offer",
//       price: data.price,
//       priceCurrency: data.currency,
//       availability: `https://schema.org/${data.availability}`,
//     },
//     ...(data.rating && {
//       aggregateRating: {
//         "@type": "AggregateRating",
//         ratingValue: data.rating,
//         reviewCount: data.reviewCount || 0,
//       },
//     }),
//   }
// }
