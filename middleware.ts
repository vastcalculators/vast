import { NextRequest, NextResponse } from "next/server"

const locales = ["en", "ur", "es", "fr", "ar", "de", "pt", "ru", "it", "zh", "tr", "hi"]
const defaultLocale = "en"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/imgs") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/public") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".gif") ||
    pathname.endsWith(".ico")
  ) {
    return NextResponse.next()
  }

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (hasLocale) return NextResponse.next()

  const langHeader = request.headers.get("accept-language")?.split(",")[0] || defaultLocale
  const userLang = locales.includes(langHeader.slice(0,2)) ? langHeader.slice(0,2) : defaultLocale

  if (userLang === "en") {
    request.nextUrl.pathname = `/en${pathname}`
    return NextResponse.rewrite(request.nextUrl)
  }

  return NextResponse.redirect(new URL(`/${userLang}${pathname}`, request.url))
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api|imgs|assets|public).*)",
  ],
}