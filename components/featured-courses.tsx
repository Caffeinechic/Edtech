'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, Clock, Target } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'AI Fundamentals',
    category: 'Technology',
    description: 'Learn the basics of Artificial Intelligence, machine learning, and neural networks.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 234,
    color: 'from-blue-500 to-blue-600',
    mode: 'Online',
  },
  {
    id: 2,
    title: 'Web Design Essentials',
    category: 'Design',
    description: 'Master modern web design principles, UI/UX best practices, and design tools.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 189,
    color: 'from-purple-500 to-purple-600',
    mode: 'Hybrid',
  },
  {
    id: 3,
    title: 'Data Science Basics',
    category: 'Technology',
    description: 'Introduction to data analysis, visualization, and statistical thinking.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 312,
    color: 'from-orange-500 to-orange-600',
    mode: 'Online',
  },
  {
    id: 4,
    title: 'Professional Communication',
    category: 'Business',
    description: 'Develop effective communication skills for the modern workplace.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 156,
    color: 'from-green-500 to-green-600',
    mode: 'Offline',
  },
  {
    id: 5,
    title: 'Digital Marketing Fundamentals',
    category: 'Marketing',
    description: 'Explore digital marketing strategies, SEO, social media, and analytics.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 287,
    color: 'from-red-500 to-red-600',
    mode: 'Hybrid',
  },
  {
    id: 6,
    title: 'Coding for Beginners',
    category: 'Technology',
    description: 'Start your coding journey with Python and problem-solving fundamentals.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 401,
    color: 'from-indigo-500 to-indigo-600',
    mode: 'Online',
  },
]

export default function FeaturedCourses() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Popular Courses
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose from our curated selection of industry-leading certification courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all hover:border-accent/50 cursor-pointer group">
                {/* Course header gradient */}
                <div className={`h-32 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-accent bg-accent/10 px-2 py-1 rounded">
                        {course.category}
                      </span>
                      <span className="text-xs font-medium text-foreground/60 bg-muted px-2 py-1 rounded">
                        {course.mode}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-sm text-foreground/70 mb-6 flex-grow">
                    {course.description}
                  </p>

                  {/* Course metadata */}
                  <div className="space-y-3 py-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Target className="w-4 h-4 text-accent" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Users className="w-4 h-4 text-accent" />
                      <span>{course.enrollment} students enrolled</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    View Course
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/courses">Browse All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
