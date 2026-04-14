'use client'

import Link from 'next/link'
import DashboardSidebar from '@/components/dashboard-sidebar'
import DashboardHeader from '@/components/dashboard-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { mockCertificates, mockUsers, mockCourses } from '@/lib/mock-data'
import {
  Download,
  Share2,
  Award,
  Calendar,
  FileText,
  CheckCircle,
  ArrowLeft,
} from 'lucide-react'

const user = mockUsers.student1
const userCertificates = mockCertificates.filter(c => c.userId === user.id)

export default function CertificatesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 mt-12 lg:mt-0">
        <DashboardHeader />

        <main className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Certificates</h1>
              <p className="text-foreground/60">You have earned {userCertificates.length} certificates</p>
            </div>
          </div>

          {userCertificates.length > 0 ? (
            <div className="space-y-6">
              {/* Summary stats */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Total Certificates</p>
                      <p className="text-3xl font-bold text-foreground">{userCertificates.length}</p>
                    </div>
                    <Award className="w-8 h-8 text-primary opacity-20" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Courses Completed</p>
                      <p className="text-3xl font-bold text-foreground">{user.completedCourses}</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-accent opacity-20" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Latest Certificate</p>
                      <p className="text-lg font-bold text-foreground">
                        {new Date(userCertificates[0].issuedDate).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <Calendar className="w-8 h-8 text-secondary opacity-20" />
                  </div>
                </Card>
              </div>

              {/* Certificates gallery */}
              <div className="space-y-6">
                {userCertificates.map((certificate, index) => {
                  const course = mockCourses.find(c => c.id === certificate.courseId)
                  
                  return (
                    <Card key={certificate.id} className="overflow-hidden hover:border-accent/50 transition-colors">
                      <div className="grid md:grid-cols-2 gap-6 p-6">
                        {/* Certificate preview */}
                        <div className="flex flex-col justify-center">
                          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 rounded-lg p-8 relative overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-300" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-300" />

                            <div className="relative text-center">
                              <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                              <h3 className="text-2xl font-bold text-amber-900 mb-1">Certificate of Completion</h3>
                              <p className="text-sm text-amber-800 mb-6">This certificate is awarded to</p>
                              <p className="text-lg font-bold text-amber-900 mb-6 border-b border-amber-300 pb-3">{user.name}</p>
                              <p className="text-sm text-amber-800 mb-2">For successfully completing</p>
                              <p className="font-semibold text-amber-900">{certificate.courseName}</p>
                              <p className="text-xs text-amber-700 mt-6">
                                Certificate #: {certificate.certificateNumber}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Certificate details */}
                        <div className="flex flex-col justify-between">
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-2xl font-bold text-foreground mb-2">
                                {certificate.courseName}
                              </h3>
                              {course && (
                                <p className="text-sm text-foreground/60 mb-4">{course.description}</p>
                              )}
                            </div>

                            <div className="space-y-3 py-4 border-y border-border">
                              <div>
                                <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">Issued Date</p>
                                <p className="font-medium text-foreground">
                                  {new Date(certificate.issuedDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  })}
                                </p>
                              </div>

                              <div>
                                <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">Certificate Number</p>
                                <p className="font-mono text-sm text-foreground">{certificate.certificateNumber}</p>
                              </div>

                              <div>
                                <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">Course Duration</p>
                                <p className="font-medium text-foreground">25 hours</p>
                              </div>

                              {course && (
                                <div>
                                  <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">Instructor</p>
                                  <p className="font-medium text-foreground">{course.instructor.name}</p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col gap-3 mt-6 sm:flex-row">
                            <Button className="flex-1 bg-primary hover:bg-primary/90" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </Button>
                            <Button variant="outline" className="flex-1" size="sm">
                              <Share2 className="w-4 h-4 mr-2" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          ) : (
            <Card className="p-12 text-center">
              <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Certificates Yet</h3>
              <p className="text-foreground/70 mb-6">Complete a course to earn your first certificate</p>
              <Button asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}
