import { NextRequest, NextResponse } from 'next/server'
import { SESSION_COOKIE_NAME, verifySession } from '@/lib/auth'

const PROTECTED_PREFIXES = ['/dashboard', '/admin', '/settings', '/certificates', '/courses']

function isProtectedPath(pathname: string) {
  return PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl

  if (!isProtectedPath(pathname)) {
    return NextResponse.next()
  }

  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value
  if (!token) {
    const loginUrl = new URL('/login', req.url)
    loginUrl.searchParams.set('next', `${pathname}${search}`)
    return NextResponse.redirect(loginUrl)
  }

  const session = await verifySession(token)
  if (!session) {
    const loginUrl = new URL('/login', req.url)
    loginUrl.searchParams.set('next', `${pathname}${search}`)
    const response = NextResponse.redirect(loginUrl)
    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: '',
      maxAge: 0,
      path: '/',
    })
    return response
  }

  if (pathname.startsWith('/admin') && session.role !== 'admin') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/settings/:path*', '/certificates/:path*', '/courses/:path*/apply'],
}
