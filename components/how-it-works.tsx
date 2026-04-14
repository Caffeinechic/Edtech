'use client'

import { Search, FileCheck, BookOpen, GraduationCap, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Browse our curated selection of 25-hour intensive certificate courses.',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
    iconColor: 'bg-blue-200',
  },
  {
    icon: FileCheck,
    title: 'Apply',
    description: 'Submit your application and documents through our minimal friction portal.',
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-600',
    iconColor: 'bg-indigo-200',
  },
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'Engage in structured learning sessions with expert industry trainers.',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
    iconColor: 'bg-purple-200',
  },
  {
    icon: GraduationCap,
    title: 'Get Certified',
    description: 'Complete the programme and earn your industry-recognized credentials.',
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-600',
    iconColor: 'bg-emerald-200',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
            How It <span className="text-blue-600 italic">Works</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            A simple, structured path from discovery to certification.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-blue-300 via-indigo-300 to-emerald-300 -translate-y-1/2 -z-10" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className={`group relative ${step.bgColor} p-8 rounded-3xl border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-16 h-16 ${step.iconColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${step.textColor}`} />
                  </div>
                  
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className={`${step.textColor} text-5xl font-black opacity-30`}>{index + 1}</span>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-6 flex justify-center">
                      <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
