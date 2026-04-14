'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { mockCourses } from '@/lib/mock-data'
import { getCourseImage } from '@/lib/course-images'
import { ArrowLeft, CheckCircle2, Clock, Mail, MapPin, Phone, User } from 'lucide-react'

interface SessionUser {
  name: string
  email: string
}

export default function CourseApplicationPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = parseInt(params.id as string)
  const course = mockCourses.find((item) => item.id === courseId)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sessionUser, setSessionUser] = useState<SessionUser>({ name: '', email: '' })
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    motivation: '',
    experience: '',
  })

  useEffect(() => {
    const loadSession = async () => {
      try {
        const response = await fetch('/api/auth/session')
        if (!response.ok) return

        const body = (await response.json()) as {
          authenticated?: boolean
          user?: SessionUser
        }

        if (!body.authenticated || !body.user) return

        setSessionUser(body.user)
        setFormData((prev) => ({
          ...prev,
          fullName: body.user?.name ?? prev.fullName,
          email: body.user?.email ?? prev.email,
        }))
      } catch {
        // Ignore and keep blank fields if session lookup fails.
      }
    }

    void loadSession()
  }, [])

  if (!course) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex grow items-center justify-center px-4 py-16">
          <Card className="max-w-md rounded-3xl border-border/50 p-8 text-center">
            <p className="mb-4 text-lg font-semibold text-foreground">Course application not found</p>
            <Button asChild>
              <Link href="/courses">Back to Courses</Link>
            </Button>
          </Card>
        </div>
        <Footer />
      </main>
    )
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 900)
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="border-b border-border bg-card/40 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <Button variant="ghost" asChild className="mb-6 w-fit px-0 text-primary hover:bg-transparent hover:text-primary/80">
            <Link href={`/courses/${course.id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to course
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5">
              <Badge className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Course Application
              </Badge>
              <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                Apply for {course.title}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Your account details are carried over from sign-in so you can complete the application without re-entering basics.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                  <Clock className="h-4 w-4 text-primary" /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                  <User className="h-4 w-4 text-primary" /> {course.level}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                  <MapPin className="h-4 w-4 text-primary" /> {course.mode}
                </span>
              </div>
            </div>

            <Card className="overflow-hidden rounded-3xl border-border/50 bg-card">
              <div className="relative h-56">
                <Image
                  src={getCourseImage(course.id)}
                  alt={`${course.title} preview`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 backdrop-blur">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-primary">Application Summary</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">{course.provider}</p>
                  <p className="text-sm text-slate-600">{course.category}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="grow px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]">
          <Card className="rounded-3xl border-border/50 p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-4 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Application saved successfully</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Your application draft has been captured for {course.title}. You can continue reviewing your details or return to the dashboard.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Button asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/courses/${course.id}`}>Review Course</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Full Name</label>
                    <Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input name="email" type="email" value={formData.email} onChange={handleChange} className="pl-9" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input name="phone" value={formData.phone} onChange={handleChange} className="pl-9" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">City / Country</label>
                    <Input name="city" value={formData.city} onChange={handleChange} placeholder="Your location" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Why do you want to join?</label>
                  <Textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder="Tell us what you want to achieve and how this course fits your goals."
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Relevant experience</label>
                  <Textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Share your education, current role, or projects if any."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" className="h-12 flex-1 rounded-2xl font-bold" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                  <Button variant="outline" className="h-12 flex-1 rounded-2xl font-bold" asChild>
                    <Link href={`/courses/${course.id}`}>Back to Course</Link>
                  </Button>
                </div>
              </form>
            )}
          </Card>

          <div className="space-y-6">
            <Card className="rounded-3xl border-border/50 p-6">
              <h2 className="text-lg font-bold text-foreground">Your course summary</h2>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Course:</span> {course.title}</p>
                <p><span className="font-semibold text-foreground">Provider:</span> {course.provider}</p>
                <p><span className="font-semibold text-foreground">Duration:</span> {course.duration}</p>
                <p><span className="font-semibold text-foreground">Level:</span> {course.level}</p>
                <p><span className="font-semibold text-foreground">Mode:</span> {course.mode}</p>
              </div>
            </Card>

            <Card className="rounded-3xl border-border/50 p-6">
              <h2 className="text-lg font-bold text-foreground">Account details carried over</h2>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>{sessionUser.name && sessionUser.email ? `${sessionUser.name} • ${sessionUser.email}` : 'Will be filled after sign in'}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}