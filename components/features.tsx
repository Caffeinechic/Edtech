'use client'

import { Zap, Users, Award, Clock, BookOpen, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Structured Courses',
    description: 'Carefully designed 25-hour programs with clear learning outcomes and practical projects.',
    color: 'from-primary',
  },
  {
    icon: Award,
    title: 'Industry Certifications',
    description: 'Earn recognized certificates that demonstrate your expertise to employers worldwide.',
    color: 'from-accent',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Learn from experienced professionals with real-world industry knowledge and insights.',
    color: 'from-secondary',
  },
  {
    icon: BookOpen,
    title: 'Flexible Learning',
    description: 'Choose between online, offline, or hybrid modes that fit your schedule and learning style.',
    color: 'from-primary',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Access mentorship, job placement assistance, and career development resources.',
    color: 'from-accent',
  },
  {
    icon: Zap,
    title: 'Practical Skills',
    description: 'Get hands-on experience with real-world projects and industry-standard tools.',
    color: 'from-secondary',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Innoventa
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We combine flexible learning formats with industry expertise to deliver outcomes-driven education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-border bg-background p-8 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                {/* Background accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-5 rounded-full blur-2xl -z-10`} />

                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} to-transparent/20 w-fit`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>

                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-transparent w-0 group-hover:w-full transition-all duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
