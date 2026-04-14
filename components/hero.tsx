'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, ShieldCheck, Star } from 'lucide-react'
import { dashboardPreviewImage } from '@/lib/course-images'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content: Value Proposition */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
              <Star className="w-3 h-3 fill-primary" />
              <span>The Next Generation of Learning</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              Master High-Value Skills in <span className="text-primary italic">25 Hours</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              Industry-recognized certification programmes designed for the modern world. 
              Delivered online, offline, and hybrid to fit your schedule.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-xl bg-primary hover:bg-primary/90 premium-shadow">
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-8 text-lg font-semibold rounded-xl hover:bg-secondary group">
                <Play className="mr-2 w-5 h-5 fill-foreground group-hover:fill-primary transition-colors" />
                See How It Works
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-border/50 transition-all">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground/80">Certified Academy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground/80">5,000+ Enrolled</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Dashboard Preview */}
          <div className="flex-1 w-full relative">
            <div className="relative z-10 rounded-2xl border border-border/50 overflow-hidden premium-shadow bg-card shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <Image 
                src={dashboardPreviewImage} 
                alt="Innoventa Dashboard Preview" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Overlay glass element */}
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase">Current Progress</p>
                  <p className="text-sm font-bold text-foreground">AI & Machine Learning</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">85%</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements behind the image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
