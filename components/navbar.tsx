'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BookOpen, LayoutDashboard } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/innoventa-brand.svg"
            alt="Innoventa"
            width={320}
            height={60}
            className="h-8 w-auto sm:h-10"
            priority
          />
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
            <Link href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/courses">
              <BookOpen className="mr-2 h-4 w-4" />
              Browse Courses
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
