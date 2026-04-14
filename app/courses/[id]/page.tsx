'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { mockCourses } from '@/lib/mock-data'
import { 
  Clock, Users, Star, Target, CheckCircle, Award, 
  BarChart3, BookOpen, Zap, User, ArrowRight, Share2
} from 'lucide-react'

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = parseInt(params.id as string)
  const course = mockCourses.find(c => c.id === courseId)
  const [showEnrollModal, setShowEnrollModal] = useState(false)
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false)

  if (!course) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center px-4">
          <Card className="text-center py-12 px-6 max-w-md">
            <p className="text-foreground/70 mb-4">Course not found</p>
            <Button asChild>
              <Link href="/courses">Back to Courses</Link>
            </Button>
          </Card>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero section */}
      <section className={`bg-gradient-to-br ${course.color} relative overflow-hidden py-12 text-white`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/courses" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 items-start mt-8">
            <div className="lg:col-span-2">
              <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {course.category}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">{course.title}</h1>
              <p className="text-lg text-white/90 mb-6 max-w-2xl">{course.longDescription}</p>

              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-white" />
                  <span><strong className="text-white">{course.rating}</strong> ({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span><strong className="text-white">{course.enrollment}</strong> students enrolled</span>
                </div>
              </div>
            </div>

            {/* Quick info card */}
            <Card className="p-6 sticky top-24">
              <div className="space-y-4">
                <div>
                  <p className="text-foreground/70 text-sm mb-1">Course Price</p>
                  <p className="text-4xl font-bold text-primary">${course.price}</p>
                </div>

                <div className="space-y-3 py-4 border-y border-border">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Target className="w-4 h-4 text-accent" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span>{course.modules.length} modules</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Award className="w-4 h-4 text-accent" />
                    <span>Certificate included</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-base py-6"
                  onClick={() => setShowEnrollModal(true)}
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Button variant="outline" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>

                <div className="bg-accent/10 rounded-lg p-3 text-xs text-foreground/70">
                  <p className="font-medium text-foreground mb-1">Next Batch Starts</p>
                  <p>{course.startDate}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="flex-grow bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Course Overview */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Course Overview</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {course.longDescription}
                </p>

                {/* Key highlights */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: Zap, title: 'Practical Skills', desc: 'Real-world projects' },
                    { icon: BarChart3, title: 'Progress Tracking', desc: 'Monitor your growth' },
                    { icon: Award, title: 'Certification', desc: 'Industry-recognized' },
                    { icon: Users, title: 'Community', desc: 'Learn with peers' },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <Card key={i} className="p-4 flex gap-4">
                        <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">{item.title}</p>
                          <p className="text-xs text-foreground/60">{item.desc}</p>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </section>

              {/* Learning Outcomes */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">What You'll Learn</h2>
                <div className="space-y-3">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80">{outcome}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Course Curriculum */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Course Curriculum</h2>
                <div className="space-y-3">
                  {course.modules.map((module, index) => (
                    <Card key={module.id} className="p-4 hover:border-accent/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4 flex-grow">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="font-semibold text-primary text-sm">{index + 1}</span>
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-foreground">{module.title}</h3>
                            <p className="text-sm text-foreground/60">{module.lessons} lessons</p>
                          </div>
                        </div>
                        <div className="text-sm text-foreground/60 text-right flex-shrink-0">
                          {module.duration}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Instructor */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Your Instructor</h2>
                <Card className="p-6 flex gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 overflow-hidden">
                    <img src={course.instructor.avatar} alt={course.instructor.name} className="w-full h-full" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">{course.instructor.name}</h3>
                    <p className="text-foreground/70">{course.instructor.bio}</p>
                    <Button variant="outline" className="mt-4">
                      View Profile
                    </Button>
                  </div>
                </Card>
              </section>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Course stats */}
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Course Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">Mode</p>
                      <p className="font-medium text-foreground">{course.mode}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">Schedule</p>
                      <p className="font-medium text-foreground text-sm">{course.schedule}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">Start Date</p>
                      <p className="font-medium text-foreground">{course.startDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">Capacity</p>
                      <p className="font-medium text-foreground">{course.enrolled}/{course.maxCapacity} students</p>
                    </div>
                  </div>
                </Card>

                {/* Enrollment CTA */}
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-base py-6"
                  onClick={() => setShowEnrollModal(true)}
                >
                  Enroll in Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      {showEnrollModal && (
        <EnrollmentModal
          courseId={course.id}
          courseName={course.title}
          coursePrice={course.price}
          onClose={() => setShowEnrollModal(false)}
          onSuccess={() => {
            setShowEnrollModal(false)
            setEnrollmentSuccess(true)
            setTimeout(() => router.push('/dashboard'), 2000)
          }}
        />
      )}

      <Footer />
    </main>
  )
}
