import { NextResponse } from 'next/server'
import { SESSION_COOKIE_NAME, signSession, type SessionPayload } from '@/lib/auth'

interface LoginRequestBody {
  email?: string
  password?: string
}

const mockUsers: Record<string, { password: string; role: SessionPayload['role']; name: string; id: string }> = {
  'user@innoventa.com': {
    password: 'password123',
    role: 'student',
    name: 'Ravi Kumar',
    id: 'student1',
  },
  'ravi.kumar@email.com': {
    password: 'password',
    role: 'student',
    name: 'Ravi Kumar',
    id: 'student1',
  },
  'admin@innoventa.com': {
    password: 'admin123',
    role: 'admin',
    name: 'Admin User',
    id: 'admin1',
  },
}

export async function POST(req: Request) {
  const body = (await req.json()) as LoginRequestBody
  const email = body.email?.trim().toLowerCase() ?? ''
  const password = body.password ?? ''

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 })
  }

  const foundUser = mockUsers[email]
  if (!foundUser || foundUser.password !== password) {
    return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 })
  }

  const token = await signSession({
    sub: foundUser.id,
    email,
    role: foundUser.role,
    name: foundUser.name,
  })

  const response = NextResponse.json({
    ok: true,
    user: {
      id: foundUser.id,
      name: foundUser.name,
      email,
      role: foundUser.role,
    },
  })

  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return response
}
