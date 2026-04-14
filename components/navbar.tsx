'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="hidden text-xl font-bold text-foreground sm:block">Innoventa</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#courses" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Courses
          </Link>
          <Link href="#features" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Why Us
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" asChild className="hidden sm:inline-flex">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/enroll">Enroll Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
