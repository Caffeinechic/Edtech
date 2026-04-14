'use client'

import { Zap, Users, Award, Clock, BookOpen, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Structured Courses',
    description: 'Carefully designed 25-hour programs with clear learning outcomes and practical projects.',
    bgColor: 'bg-slate-50',
    iconBg: 'bg-slate-900',
    iconColor: 'text-white',
  },
  {
    icon: Award,
    title: 'Industry Certifications',
    description: 'Earn recognized certificates that demonstrate your expertise to employers worldwide.',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-500',
    iconColor: 'text-white',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Learn from experienced professionals with real-world industry knowledge and insights.',
    bgColor: 'bg-slate-50',
    iconBg: 'bg-slate-900',
    iconColor: 'text-white',
  },
  {
    icon: BookOpen,
    title: 'Flexible Learning',
    description: 'Choose between online, offline, or hybrid modes that fit your schedule and learning style.',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-500',
    iconColor: 'text-white',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Access mentorship, job placement assistance, and career development resources.',
    bgColor: 'bg-slate-50',
    iconBg: 'bg-slate-900',
    iconColor: 'text-white',
  },
  {
    icon: Zap,
    title: 'Practical Skills',
    description: 'Get hands-on experience with real-world projects and industry-standard tools.',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-500',
    iconColor: 'text-white',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 text-balance">
            Why Choose <span className="text-slate-900">Innoventa</span>
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-medium">
            We combine flexible learning formats with industry expertise to deliver outcomes-driven education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group relative rounded-2xl border-2 border-slate-200 ${feature.bgColor} p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300`}
              >
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-xl ${feature.iconBg} w-fit`}>
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-700 text-base leading-relaxed font-medium">{feature.description}</p>

                <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-500 to-slate-900 w-0 group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
