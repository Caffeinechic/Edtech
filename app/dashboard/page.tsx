'use client'

import Image from 'next/image'
import Link from 'next/link'
import DashboardHeader from '@/components/dashboard-header'
import DashboardSidebar from '@/components/dashboard-sidebar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { mockCertificates, mockCourses, mockEnrollments, mockUsers } from '@/lib/mock-data'
import { getCourseImage } from '@/lib/course-images'
import { ArrowRight, Award, BookOpen, Calendar, CheckCircle2, Clock, Flame, Target, TrendingUp } from 'lucide-react'

const user = mockUsers.student1
const enrollments = mockEnrollments.map((enrollment) => ({
  ...enrollment,
  course: mockCourses.find((c) => c.id === enrollment.courseId),
}))
const certificates = mockCertificates.filter((cert) => cert.userId === user.id)

export default function DashboardPage() {
  const nextCourse = enrollments.find((entry) => entry.course)

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <div className="mt-12 flex flex-col min-h-screen lg:mt-0 lg:ml-72">
        <DashboardHeader />

        <main className="flex-1 space-y-6 p-4 sm:p-6 lg:p-10 overflow-y-auto">
          <section className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Learning Workspace</p>
                <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Welcome back, {user.name.split(' ')[0]}
                </h1>
                <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                  You are actively progressing in {enrollments.length} courses. Keep momentum this week and finish your current sprint milestones.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-3">
                <Button asChild>
                  <Link href="/courses">Browse Courses</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/certificates">View Certificates</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { label: 'Active Courses', value: enrollments.length, icon: BookOpen },
              { label: 'Hours Learned', value: user.totalHours, icon: Clock },
              { label: 'Certificates', value: certificates.length, icon: Award },
              { label: 'Weekly Streak', value: 7, icon: Flame },
            ].map((item) => (
              <Card key={item.label} className="rounded-2xl border border-border bg-card p-4 sm:p-5">
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                  <item.icon className="h-4 w-4" />
                </div>
                <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                <p className="text-2xl font-semibold text-foreground">{item.value}</p>
              </Card>
            ))}
          </section>

          <section className="grid gap-6 xl:grid-cols-3">
            <div className="space-y-4 xl:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground sm:text-xl">Your Enrolled Courses</h2>
                <Button variant="ghost" asChild className="text-primary">
                  <Link href="/courses">
                    See catalog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {enrollments.map((entry) => {
                  const course = entry.course
                  if (!course) return null

                  return (
                    <Card key={entry.id} className="overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-5">
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="relative h-28 w-full overflow-hidden rounded-xl border border-border sm:h-28 sm:w-44">
                          <Image
                            src={getCourseImage(course.id)}
                            alt={`${course.title} thumbnail`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />
                        </div>

                        <div className="flex-1 space-y-3">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                                {course.category}
                              </Badge>
                              <h3 className="text-base font-semibold text-foreground sm:text-lg">{course.title}</h3>
                              <p className="text-xs text-muted-foreground">Provider: {course.provider}</p>
                            </div>
                            <span className="text-sm font-semibold text-primary">{entry.completionPercentage}%</span>
                          </div>

                          <div className="space-y-2">
                            <Progress value={entry.completionPercentage} className="h-2" />
                            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
                              <span className="inline-flex items-center gap-1"><Target className="h-3.5 w-3.5" />{course.level}</span>
                              <span className="inline-flex items-center gap-1"><TrendingUp className="h-3.5 w-3.5" />{course.mode}</span>
                            </div>
                          </div>

                          <div className="pt-1">
                            <Button size="sm" className="h-9">Continue Learning</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <Card className="rounded-2xl border border-border bg-card p-5">
                <h3 className="mb-3 text-base font-semibold text-foreground">Upcoming Session</h3>
                {nextCourse?.course ? (
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">{nextCourse.course.title}</p>
                    <p className="text-xs text-muted-foreground">Tomorrow · 6:00 PM IST</p>
                    <div className="rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
                      Live mentor Q&A focused on project milestones and code review.
                    </div>
                    <Button className="w-full">Join Session</Button>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No upcoming sessions available.</p>
                )}
              </Card>

              <Card className="rounded-2xl border border-border bg-card p-5">
                <h3 className="mb-3 text-base font-semibold text-foreground">Recent Activity</h3>
                <div className="space-y-3 text-sm">
                  <div className="rounded-lg bg-muted/40 p-3">
                    <p className="font-medium text-foreground">Module completed</p>
                    <p className="text-xs text-muted-foreground">Introduction to Artificial Intelligence with Python · 2h ago</p>
                  </div>
                  <div className="rounded-lg bg-muted/40 p-3">
                    <p className="font-medium text-foreground">Quiz submitted</p>
                    <p className="text-xs text-muted-foreground">Web Programming with Python and JavaScript · Yesterday</p>
                  </div>
                  <div className="rounded-lg bg-muted/40 p-3">
                    <p className="font-medium text-foreground">Certificate earned</p>
                    <p className="text-xs text-muted-foreground">AWS Cloud Practitioner Essentials · 3 days ago</p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-2xl border border-border bg-card p-5">
                <h3 className="mb-3 text-base font-semibold text-foreground">Quick Actions</h3>
                <div className="grid gap-2">
                  <Button variant="outline" asChild className="justify-start">
                    <Link href="/courses">Find New Course</Link>
                  </Button>
                  <Button variant="outline" asChild className="justify-start">
                    <Link href="/settings">Update Profile</Link>
                  </Button>
                  <Button variant="outline" asChild className="justify-start">
                    <Link href="/certificates">Download Certificates</Link>
                  </Button>
                </div>
                <p className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Weekly goal is on track
                </p>
              </Card>

              <Card className="rounded-2xl border border-border bg-card p-5">
                <h3 className="mb-3 text-base font-semibold text-foreground">Learning Calendar</h3>
                <p className="text-xs text-muted-foreground">Planned sessions this week</p>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between rounded-lg bg-muted/40 p-2.5">
                    <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Tue</span>
                    <span className="text-xs text-muted-foreground">AI Lab</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-muted/40 p-2.5">
                    <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Thu</span>
                    <span className="text-xs text-muted-foreground">Web Sprint</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-muted/40 p-2.5">
                    <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Sat</span>
                    <span className="text-xs text-muted-foreground">Review Session</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
