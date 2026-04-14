import { Suspense } from 'react'
import LoginForm from './login-form'

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-100 px-4 py-8 sm:py-14">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
            <div className="hidden rounded-3xl border border-border bg-slate-950 p-10 lg:block" />
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
              <div className="h-10 w-40 rounded-md bg-muted" />
              <div className="mt-8 space-y-4">
                <div className="h-12 rounded-xl bg-muted" />
                <div className="h-12 rounded-xl bg-muted" />
                <div className="h-12 rounded-xl bg-muted" />
              </div>
            </div>
          </div>
        </main>
      }
    >
      <LoginForm />
    </Suspense>
  )
}