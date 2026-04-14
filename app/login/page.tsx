'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight, Lock, Mail, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('user@innoventa.com')
  const [password, setPassword] = useState('password123')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const body = (await response.json()) as { message?: string }
        setError(body.message ?? 'Unable to sign in right now.')
        return
      }

      const redirectTo = searchParams.get('next') || '/dashboard'
      router.push(redirectTo)
      router.refresh()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
        <section className="hidden rounded-3xl border border-border bg-slate-950 p-10 text-slate-100 lg:flex lg:flex-col lg:justify-between">
          <div className="space-y-8">
            <Image src="/innoventa-brand.svg" alt="Innoventa" width={420} height={80} className="h-12 w-auto rounded-md bg-white p-1" />
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-300">Student Access Portal</p>
              <h1 className="text-4xl font-semibold leading-tight">Learn, build, and launch your next skill track with confidence.</h1>
            </div>
            <p className="max-w-md text-sm text-slate-300">
              Access courses, labs, certificates, and mentoring from one workspace designed for outcome-driven learning.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="rounded-lg border border-slate-600 p-3">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">Demo Credentials</p>
              <div className="space-y-1 font-mono text-xs text-slate-300">
                <p>Email: user@innoventa.com</p>
                <p>Password: password123</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center">
          <Card className="w-full rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
            <div className="mb-8 space-y-3 text-center sm:text-left">
              <div className="mx-auto flex w-fit items-center gap-2 sm:mx-0">
                <Image src="/innoventa-logo.svg" alt="Innoventa mark" width={36} height={36} className="h-9 w-9" />
                <span className="text-lg font-semibold text-foreground">Welcome Back</span>
              </div>
              <p className="text-sm text-muted-foreground">Sign in to continue your learning journey.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-foreground">Password</label>
                  <Link href="#" className="text-xs font-medium text-primary hover:underline">Forgot password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <Button type="submit" disabled={isLoading} className="h-12 w-full text-base font-semibold">
                {isLoading ? 'Signing in...' : 'Sign In'}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                New to Innoventa?{' '}
                <Link href="/signup" className="font-semibold text-primary hover:underline">
                  Create account
                </Link>
              </p>
            </form>
          </Card>
        </section>
      </div>
    </main>
  )
}
