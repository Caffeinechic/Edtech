import { Suspense } from 'react'
import SignupForm from './signup-form'

export default function SignupPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-6">
            <div className="h-10 w-36 rounded-md bg-muted" />
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl space-y-4">
              <div className="h-12 rounded-xl bg-muted" />
              <div className="h-12 rounded-xl bg-muted" />
              <div className="h-12 rounded-xl bg-muted" />
              <div className="h-12 rounded-xl bg-muted" />
            </div>
          </div>
        </main>
      }
    >
      <SignupForm />
    </Suspense>
  )
}