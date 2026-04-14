'use client'

import Link from 'next/link'
import DashboardSidebar from '@/components/dashboard-sidebar'
import DashboardHeader from '@/components/dashboard-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
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

      <div className="flex-1 mt-12 lg:mt-0">
        <DashboardHeader />

        <main className="p-6 lg:p-8">
          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Active Courses</p>
                  <p className="text-3xl font-bold text-foreground">{enrolledCourses.length}</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary opacity-20" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Total Hours</p>
                  <p className="text-3xl font-bold text-foreground">{user.totalHours}</p>
                </div>
                <Clock className="w-8 h-8 text-secondary opacity-20" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Completed</p>
                  <p className="text-3xl font-bold text-foreground">{user.completedCourses}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-accent opacity-20" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Certificates</p>
                  <p className="text-3xl font-bold text-foreground">{certificates.length}</p>
                </div>
                <Award className="w-8 h-8 text-amber-500 opacity-20" />
              </div>
            </Card>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Enrolled Courses */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">My Learning</h2>
                <Button variant="outline" asChild>
                  <Link href="/courses">Browse More</Link>
                </Button>
              </div>

              {enrolledCourses.length > 0 ? (
                <div className="space-y-4">
                  {enrolledCourses.map((enrollment) => {
                    const course = enrollment.course
                    if (!course) return null

                    const completedModules = enrollment.modules.filter(m => m.completed).length
                    const totalModules = enrollment.modules.length
                    const progress = enrollment.completionPercentage

                    return (
                      <Card key={enrollment.id} className="p-6 hover:border-accent/50 transition-colors">
                        <div className="flex gap-6">
                          {/* Course thumbnail */}
                          <div className={`w-24 h-24 rounded-lg bg-gradient-to-br ${course.color} flex-shrink-0 relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/10" />
                          </div>

                          {/* Course info */}
                          <div className="flex-grow">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                                <p className="text-sm text-foreground/60">{course.category}</p>
                              </div>
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                progress === 100
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}>
                                {progress === 100 ? 'Completed' : 'In Progress'}
                              </span>
                            </div>

                            {/* Progress bar */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <p className="text-xs text-foreground/60">
                                  {completedModules} of {totalModules} modules completed
                                </p>
                                <p className="text-sm font-medium text-foreground">{progress}%</p>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                            </div>

                            {/* Actions */}
                            <Button className="bg-primary hover:bg-primary/90" size="sm">
                              <Play className="w-4 h-4 mr-2" />
                              Continue Learning
                            </Button>
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              ) : (
                <Card className="p-12 text-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-foreground/70 mb-4">No courses enrolled yet</p>
                  <Button asChild>
                    <Link href="/courses">Browse Courses</Link>
                  </Button>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick stats */}
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  This Week
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Learning Time</p>
                    <p className="text-2xl font-bold text-primary">12 hours</p>
                    <p className="text-xs text-green-600">↑ 20% from last week</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-foreground/60 mb-1">Lessons Completed</p>
                    <p className="text-2xl font-bold text-secondary">8</p>
                  </div>
                </div>
              </Card>

              {/* Certificates */}
              {certificates.length > 0 && (
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    Certificates
                  </h3>
                  <div className="space-y-3">
                    {certificates.slice(0, 2).map((cert) => (
                      <div key={cert.id} className="p-3 bg-amber-50 rounded-lg">
                        <p className="text-sm font-medium text-amber-900">{cert.courseName}</p>
                        <p className="text-xs text-amber-700">
                          Earned on {new Date(cert.issuedDate).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                  {certificates.length > 2 && (
                    <Button variant="outline" className="w-full mt-3" asChild>
                      <Link href="/certificates">View All</Link>
                    </Button>
                  )}
                </Card>
              )}

              {/* Upcoming */}
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  Next Session
                </h3>
                {enrolledCourses.length > 0 && enrolledCourses[0].course ? (
                  <div className="space-y-2 text-sm">
                    <p className="text-foreground">{enrolledCourses[0].course.title}</p>
                    <p className="text-foreground/60">{enrolledCourses[0].course.schedule}</p>
                    <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90" size="sm">
                      Set Reminder
                    </Button>
                  </div>
                ) : (
                  <p className="text-sm text-foreground/60">Enroll in a course to see next sessions</p>
                )}
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
