'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { mockCourses } from '@/lib/mock-data'
import { getCourseImage } from '@/lib/course-images'
import { 
  Clock, Users, Star, Target, CheckCircle, Award, 
  ArrowRight,
  Calendar, ShieldCheck, Globe, Wifi, Users2, ExternalLink
} from 'lucide-react'

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = parseInt(params.id as string)
  const course = mockCourses.find(c => c.id === courseId)
  const [showEnrollModal, setShowEnrollModal] = useState(false)

  if (!course) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex grow items-center justify-center px-4">
          <Card className="text-center py-12 px-6 max-w-md border-border/50 premium-shadow">
            <p className="text-foreground/70 mb-4">Course not found</p>
            <Button size="lg" className="rounded-xl font-bold" asChild>
              <Link href="/courses">Back to Courses</Link>
            </Button>
          </Card>
        </div>
        <Footer />
      </main>
    )
  }

  const ModeIcon = course.mode === 'Online' ? Wifi : course.mode === 'Offline' ? Users2 : Globe

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section: Dynamic & Premium */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-muted/20 -z-10" />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-primary/5 -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <nav className="flex items-center gap-2 text-sm font-semibold text-primary/60 mb-8">
                <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
                <ArrowRight className="w-3 h-3" />
                <span className="text-foreground">{course.category}</span>
              </nav>

              <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border-primary/20">
                {course.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1] text-balance">
                {course.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {course.description}
              </p>

              <a
                href={course.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Curriculum Source: {course.provider}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-bold text-foreground">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} Reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-bold text-foreground">{course.enrollment}</span>
                  <span className="text-muted-foreground">Students Joined</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-lg border border-border/50">
                  <ModeIcon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">{course.mode}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary" />
                  ))}
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Joined by <span className="text-foreground font-bold">200+</span> professionals this week
                </p>
              </div>

              <div className="relative h-52 overflow-hidden rounded-2xl border border-border/60 bg-muted/20 sm:h-64">
                <Image
                  src={getCourseImage(course.id)}
                  alt={`${course.title} banner`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Quick Pricing & CTA Card */}
            <Card className="w-full lg:w-96 p-8 border-border/50 premium-shadow bg-card relative z-10 rounded-3xl overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                  <Badge className="bg-emerald-500 text-white border-0 font-bold uppercase tracking-tight">Active Batch</Badge>
               </div>
               
               <div className="space-y-6">
                  <div>
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Programme Fee</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-5xl font-black text-foreground">${course.price}</span>
                      <span className="text-muted-foreground line-through">$499</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/50">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Duration</p>
                      <p className="flex items-center gap-1.5 text-sm font-bold">
                        <Clock className="w-4 h-4 text-primary" /> {course.duration}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Level</p>
                      <p className="flex items-center gap-1.5 text-sm font-bold">
                        <Target className="w-4 h-4 text-primary" /> {course.level}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="h-16 w-full rounded-2xl bg-primary text-xl font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5"
                      onClick={() => setShowEnrollModal(true)}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                    <p className="text-center text-xs font-medium text-muted-foreground">
                      No recruitment fee. Pay only for the certification.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>100% Outcome Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Next Batch: {course.startDate}</span>
                    </div>
                  </div>
               </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="grow bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Outcome-Driven Overview */}
              <section id="overview" className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Programme <span className="text-primary italic">Overview</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {course.longDescription}
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  {course.learningOutcomes.slice(0, 4).map((outcome, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl border border-border/50 bg-secondary/30">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground/80 italic">{outcome}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Curriculum - Expandable */}
              <section id="curriculum" className="space-y-8">
                <div className="flex items-end justify-between border-b border-border pb-6">
                  <h2 className="text-3xl font-bold tracking-tight">Learning <span className="text-primary italic">Journey</span></h2>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                    {course.modules.length} Modules &bull; 24 Lessons
                  </p>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {course.modules.map((module, i) => (
                    <AccordionItem key={module.id} value={`item-${i}`} className="border border-border/50 rounded-2xl px-6 bg-card overflow-hidden">
                      <AccordionTrigger className="hover:no-underline py-6">
                        <div className="flex items-center gap-4 text-left">
                          <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-sm">
                            0{i + 1}
                          </span>
                          <div>
                            <p className="font-bold text-lg">{module.title}</p>
                            <p className="text-xs font-bold text-muted-foreground uppercase mt-0.5">{module.duration}</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground leading-relaxed pl-14">
                        <div className="space-y-3">
                          <p>In this module, you will master the core foundations of {module.title.toLowerCase()} through practical exercises and expert-led sessions.</p>
                          <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Interactive Session</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Hands-on Project</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Assessment</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Q&A Workshop</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Instructor */}
              <section id="instructor" className="pt-8">
                <h2 className="text-3xl font-bold tracking-tight mb-8">Meet the <span className="text-primary italic">Expert</span></h2>
                <Card className="p-8 border-border/50 bg-secondary/20 rounded-3xl flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden bg-primary shadow-xl shadow-primary/10">
                    <Image src={course.instructor.avatar} alt={course.instructor.name} width={96} height={96} className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">{course.instructor.name}</h3>
                      <p className="text-primary font-bold text-sm uppercase tracking-widest mt-1">Lead Programme Trainer</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-xl">
                      {course.instructor.bio}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                       <Button variant="outline" className="rounded-xl font-bold">View Portfolio</Button>
                       <Button variant="ghost" className="rounded-xl font-bold text-primary">Follow on LinkedIn</Button>
                    </div>
                  </div>
                </Card>
              </section>
            </div>

            {/* Sticky Sidebar Right */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <Card className="p-8 border-border/50 bg-card rounded-3xl space-y-6">
                  <h3 className="text-xl font-bold">Eligibility & Schedule</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Target Audience</p>
                      <p className="text-sm font-medium leading-relaxed">School students, early graduates, and aspiring professionals in {course.category}.</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Detailed Schedule</p>
                      <p className="text-sm font-bold flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" /> {course.schedule}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-3">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Enrolment Status</p>
                      <div className="space-y-1">
                        <div className="w-full h-1.5 bg-primary/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${(course.enrolled / course.maxCapacity) * 100}%` }} />
                        </div>
                        <p className="text-xs font-bold text-foreground/80">{course.enrolled} / {course.maxCapacity} Seats Filled</p>
                      </div>
                    </div>
                  </div>
                </Card>
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
            router.push('/dashboard')
          }}
        />
      )}

      <Footer />
    </main>
  )
}
