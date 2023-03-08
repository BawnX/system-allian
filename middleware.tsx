import { NextURL } from 'next/dist/server/web/next-url'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['es', 'en']
const defaultLang = 'es'
export const validRoutes = [
  '/es/login',
  '/en/login',
  '/es/register',
  '/en/register'
]

export function middleware (request: NextRequest) {
  const { nextUrl, url } = request

  const hasToRedirctLang = HasRedirectLang(request)
  const shouldCheck = ShouldCheck(nextUrl)
  const lang = getLang(request)
  const isValidToken = IsValidToken(request)
  const isSomeValidRoute = validRoutes.some(
    (route) => route === nextUrl.pathname
  )

  const tokenUrl = GenerateTokenUrl(lang, isValidToken, isSomeValidRoute)

  if (isValidToken && !isSomeValidRoute && hasToRedirctLang) {
    const res = NextResponse.redirect(new URL(`/${lang}/dashboard`, url))
    return res
  }

  if (tokenUrl !== null && hasToRedirctLang) {
    const res = NextResponse.redirect(new URL(tokenUrl, url))

    res.cookies.set('lang', lang ?? 'en')
    return res
  }

  if (tokenUrl !== null && shouldCheck) {
    console.log('catched')
    const res = NextResponse.redirect(new URL(tokenUrl, url))
    return res
  }

  return NextResponse.next()
}

function getLang ({ cookies, headers }: NextRequest): string {
  const cookieLang = cookies.get('lang')
  if (cookieLang) {
    return cookieLang.value
  }

  // TODO: check from cookie before detecting
  const accepts = headers.get('accept-language') || ''
  // Omit country for now
  const detected = accepts.split(',')[0].split('-')[0]

  const validLocale = locales.includes(detected) ? detected : defaultLang

  return validLocale
}

function IsValidToken ({ cookies }: NextRequest): boolean {
  const tokenCookie = cookies.get('token')
  if (tokenCookie) {
    return true
  }

  return false
}
function ShouldCheck (nextUrl: NextURL): boolean {
  return (
    !nextUrl.pathname.startsWith('/_next') &&
    !nextUrl.pathname.startsWith('/favicon')
  )
}

function HasRedirectLang ({ nextUrl }: NextRequest): boolean {
  const shouldCheckLocale = ShouldCheck(nextUrl)

  const reqLocale = nextUrl.pathname.split('/')[1]
  const noValidLocale = !locales.includes(reqLocale)

  return shouldCheckLocale && noValidLocale
}

function GenerateTokenUrl (
  lang: string,
  isValidToken: boolean,
  isSomeValidRoute: boolean
): string | null {
  if (!isValidToken && !isSomeValidRoute) {
    return `/${lang}/login`
  }

  return null
}

export const config = {
  matcher: ['/:path*']
}
