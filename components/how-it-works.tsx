'use client'

import { Search, FileCheck, BookOpen, GraduationCap, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Browse our curated selection of 25-hour intensive certificate courses.',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: FileCheck,
    title: 'Apply',
    description: 'Submit your application and documents through our minimal friction portal.',
    color: 'bg-indigo-500/10 text-indigo-500',
  },
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'Engage in structured learning sessions with expert industry trainers.',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: GraduationCap,
    title: 'Get Certified',
    description: 'Complete the programme and earn your industry-recognized credentials.',
    color: 'bg-emerald-500/10 text-emerald-500',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-primary italic">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, structured path from discovery to certification.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative bg-background p-8 rounded-2xl border border-border/50 premium-shadow hover:border-primary/30 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-primary/20 text-4xl font-black">{index + 1}</span>
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 flex justify-center">
                    <ArrowRight className="w-6 h-6 text-border rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
