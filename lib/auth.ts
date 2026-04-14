import { jwtVerify, SignJWT, type JWTPayload } from 'jose'

export const SESSION_COOKIE_NAME = 'innoventa_session'

export interface SessionPayload extends JWTPayload {
  sub: string
  email: string
  role: 'student' | 'admin'
  name: string
}

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET ?? 'innoventa-dev-secret-change-in-production'
  return new TextEncoder().encode(secret)
}

export async function signSession(payload: SessionPayload, expiresIn: string = '7d') {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(getJwtSecret())
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret())
    return payload as SessionPayload
  } catch {
    return null
  }
}
