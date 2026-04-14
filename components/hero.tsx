'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-background pt-20 pb-10">
      {/* Background gradient accent */}
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-3xl" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary/10 px-4 py-2">
                <span className="text-sm font-medium text-secondary">Structured Learning Programmes</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Master Skills in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">25 Hours</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Professional certification courses delivered online, offline, and hybrid. Start your learning journey today and get industry-recognized credentials.
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-3 py-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground/80">Industry-recognized certificates</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground/80">Flexible learning modes (Online, Offline, Hybrid)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground/80">Learn from expert trainers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore Courses
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - Visual showcase */}
          <div className="relative">
            <div className="space-y-4">
              {/* Course cards preview */}
              <div className="rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">AI Fundamentals</h3>
                    <p className="text-xs text-foreground/60">25 hours • Beginner</p>
                  </div>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-accent/5 to-secondary/5 border border-border p-6 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/20" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">Web Design Basics</h3>
                    <p className="text-xs text-foreground/60">25 hours • Beginner</p>
                  </div>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-accent to-secondary rounded-full" />
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-secondary/5 to-primary/5 border border-border p-6 hover:border-secondary/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">Communication Skills</h3>
                    <p className="text-xs text-foreground/60">25 hours • Beginner</p>
                  </div>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-secondary to-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-border/50 mt-16">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-foreground/60 mt-1">Active Students</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary">15+</p>
            <p className="text-sm text-foreground/60 mt-1">Expert Trainers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent">50+</p>
            <p className="text-sm text-foreground/60 mt-1">Courses Available</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">95%</p>
            <p className="text-sm text-foreground/60 mt-1">Completion Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
