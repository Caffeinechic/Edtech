'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, Clock, Target, ArrowRight, Sparkles } from 'lucide-react'
import { mockCourses } from '@/lib/mock-data'

export default function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState('All')
  
  const filteredCourses = activeTab === 'All' 
    ? mockCourses.slice(0, 6) 
    : mockCourses.filter(c => c.mode === activeTab).slice(0, 6)

  return (
    <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle background flair */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Expert-Led Training</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Featured Certification <span className="text-primary italic">Programmes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Intensive 25-hour courses designed to give you practical, industry-ready skills.
            </p>
          </div>
          
          <Tabs defaultValue="All" className="w-full md:w-auto" onValueChange={setActiveTab}>
            <TabsList className="bg-secondary/50 p-1 rounded-xl border border-border/50">
              {['All', 'Online', 'Offline', 'Hybrid'].map(mode => (
                <TabsTrigger 
                  key={mode} 
                  value={mode}
                  className="rounded-lg px-6 py-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm font-semibold transition-all"
                >
                  {mode}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <Card className="group h-full flex flex-col border-border/50 bg-card hover:border-primary/30 premium-shadow transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer">
                {/* Image/Gradient Header */}
                <div className={`relative h-48 bg-gradient-to-br ${course.color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                       <div className="px-2 py-1 rounded bg-black/20 backdrop-blur-md border border-white/20">
                          <span className="text-xs font-medium text-white">{course.mode}</span>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tight">Duration</span>
                        <span className="text-xs font-bold text-foreground">{course.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center text-accent">
                        <Target className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tight">Level</span>
                        <span className="text-xs font-bold text-foreground">{course.level}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between group/btn">
                    <span className="text-lg font-bold text-foreground">${course.price}</span>
                    <Button variant="link" className="text-primary p-0 h-auto font-bold group-hover/btn:translate-x-1 transition-transform">
                      Enroll Now <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="h-14 px-10 rounded-xl font-bold border-2 hover:bg-secondary transition-all" asChild>
            <Link href="/courses">
              Explore All Programmes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
