'use client'

import Link from 'next/link'
import DashboardSidebar from '@/components/dashboard-sidebar'
import DashboardHeader from '@/components/dashboard-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { mockCourses, mockEnrollments, mockUsers, mockCertificates } from '@/lib/mock-data'
import {
  Play,
  BarChart3,
  Clock,
  Award,
  TrendingUp,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Calendar,
  Zap,
  MoreVertical,
  Activity
} from 'lucide-react'

const user = mockUsers.student1
const enrolledCourses = mockEnrollments.map(enrollment => ({
  ...enrollment,
  course: mockCourses.find(c => c.id === enrollment.courseId),
}))
const certificates = mockCertificates.filter(c => c.userId === user.id)

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 mt-12 lg:mt-0 transition-all duration-300">
        <DashboardHeader />

        <main className="p-4 sm:p-6 lg:p-10 space-y-10">
          {/* Welcome Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-black tracking-tight">Welcome Back, <span className="text-primary italic">{user.name.split(' ')[0]}</span></h1>
            <p className="text-muted-foreground font-medium">You have 2 courses in progress and 1 upcoming session today.</p>
          </div>

          {/* Stats Grid: Modern Minimalist */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Courses Active', value: enrolledCourses.length, icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { label: 'Learning Hours', value: user.totalHours, icon: Clock, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
              { label: 'Certificates', value: certificates.length, icon: Award, color: 'text-amber-500', bg: 'bg-amber-500/10' },
              { label: 'Tasks Done', value: '12', icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
            ].map((stat, i) => (
              <Card key={i} className="p-6 border-border/40 premium-shadow bg-card rounded-3xl flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-black text-foreground">{stat.value}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* My Active Learning - Primary Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Active <span className="text-primary italic">Learning</span></h2>
                <Button variant="ghost" className="rounded-xl font-bold text-primary group" asChild>
                  <Link href="/courses">See all programmes <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </div>

              {enrolledCourses.length > 0 ? (
                <div className="grid sm:grid-cols-1 gap-6">
                  {enrolledCourses.map((enrollment) => {
                    const course = enrollment.course
                    if (!course) return null
                    const progress = enrollment.completionPercentage

                    return (
                      <Card key={enrollment.id} className="p-8 border-border/40 bg-card rounded-3xl premium-shadow group hover:border-primary/20 transition-all">
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className={`w-full md:w-32 h-32 rounded-2xl bg-gradient-to-br ${course.color} flex-shrink-0 flex items-center justify-center p-4`}>
                             <Zap className="w-10 h-10 text-white/50" />
                          </div>
                          <div className="flex-grow space-y-4">
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <Badge variant="secondary" className="bg-primary/5 text-primary border-none text-[10px] font-black uppercase tracking-widest">{course.category}</Badge>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{course.title}</h3>
                              </div>
                              <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical className="w-5 h-5" /></Button>
                            </div>
                            
                            <div className="space-y-2">
                               <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                                  <span className="text-muted-foreground">Progress</span>
                                  <span className="text-primary">{progress}%</span>
                               </div>
                               <Progress value={progress} className="h-2 bg-secondary" />
                            </div>

                            <div className="flex items-center justify-between pt-2">
                               <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground">
                                  <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 8h left</div>
                                  <div className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 4/6 modules</div>
                               </div>
                               <Button className="rounded-xl h-10 font-bold bg-primary shadow-lg shadow-primary/20">
                                  <Play className="w-4 h-4 mr-2 fill-current" /> Continue
                               </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              ) : (
                <Card className="p-20 border-dashed border-2 border-border/50 text-center rounded-3xl bg-secondary/10">
                  <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-muted-foreground opacity-50" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No active courses</h3>
                  <p className="text-muted-foreground mb-8">Ready to start your journey? Explore our premium certificate programmes.</p>
                  <Button size="lg" className="rounded-xl font-bold px-8 shadow-xl" asChild>
                    <Link href="/courses">Browse Catalog</Link>
                  </Button>
                </Card>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="space-y-10">
              {/* Activity Timeline */}
              <section className="space-y-6">
                <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Recent <span className="text-primary italic">Activity</span>
                </h3>
                <div className="space-y-6 relative ml-4 pl-8 border-l border-border/50">
                   {[
                     { title: 'Module Completed', time: '2 hours ago', desc: 'AI Basics: Introduction to Neural Networks', icon: CheckCircle, color: 'text-emerald-500' },
                     { title: 'New Course Joined', time: 'Yesterday', desc: 'Web Design Essentials: UI Kit Masterclass', icon: Play, color: 'text-blue-500' },
                     { title: 'Quiz Passed', time: '2 days ago', desc: 'Marketing Fundamentals: Score 92/100', icon: Award, color: 'text-amber-500' },
                   ].map((item, i) => (
                     <div key={i} className="relative">
                        <div className={`absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-card border border-border/50 flex items-center justify-center ${item.color} shadow-sm`}>
                           <item.icon className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{item.time}</p>
                          <p className="font-bold text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </section>

              {/* Certificates Sidebar */}
              {certificates.length > 0 && (
                <section className="p-8 rounded-3xl border border-border/40 bg-card premium-shadow space-y-6">
                  <h3 className="font-bold flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    My Certificates
                  </h3>
                  <div className="space-y-4">
                    {certificates.slice(0, 2).map((cert) => (
                      <Link key={cert.id} href={`/certificates/${cert.id}`} className="block group">
                        <div className="p-4 rounded-2xl bg-secondary/30 border border-transparent group-hover:border-amber-500/20 group-hover:bg-amber-500/5 transition-all">
                          <p className="text-sm font-bold group-hover:text-amber-600 transition-colors">{cert.courseName}</p>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">Earned {new Date(cert.issuedDate).toLocaleDateString()}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full rounded-xl font-bold h-11" asChild>
                    <Link href="/certificates">View All <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </section>
              )}

              {/* Upcoming Session */}
              <section className="p-8 rounded-3xl bg-primary text-white premium-shadow space-y-6">
                <div className="space-y-1">
                  <h3 className="font-bold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-white/70" />
                    Upcoming Session
                  </h3>
                  <p className="text-xs text-white/70 font-medium">Tomorrow at 6:00 PM</p>
                </div>
                {enrolledCourses.length > 0 && enrolledCourses[0].course ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <p className="text-sm font-bold">{enrolledCourses[0].course.title}</p>
                      <p className="text-xs text-white/60 mt-1">Live Q&A Workshop</p>
                    </div>
                    <Button className="w-full rounded-xl h-11 font-bold bg-white text-primary hover:bg-white/90">
                      Join Waiting Room
                    </Button>
                  </div>
                ) : null}
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
