'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { mockCourses } from '@/lib/mock-data'
import { Search, Filter, Clock, Users, Star, Target } from 'lucide-react'

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedMode, setSelectedMode] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')

  const categories = ['All', ...new Set(mockCourses.map(c => c.category))]
  const modes = ['All', 'Online', 'Offline', 'Hybrid']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredCourses = useMemo(() => {
    return mockCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
      const matchesMode = selectedMode === 'All' || course.mode === selectedMode
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel
      
      return matchesSearch && matchesCategory && matchesMode && matchesLevel
    })
  }, [searchTerm, selectedCategory, selectedMode, selectedLevel])

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero section */}
      <section className="bg-gradient-to-b from-card/50 to-background pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center text-balance">
            Explore Our Courses
          </h1>
          <p className="text-lg text-foreground/70 text-center max-w-2xl mx-auto">
            Find the perfect course to develop your skills
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="flex-grow bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Search Courses</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/50" />
                    <Input
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category filter */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Filter className="w-4 h-4 text-accent" />
                    <label className="text-sm font-semibold text-foreground">Category</label>
                  </div>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'bg-card text-foreground/70 hover:bg-card hover:text-foreground'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Learning Mode filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Learning Mode</label>
                  <div className="space-y-2">
                    {modes.map(mode => (
                      <button
                        key={mode}
                        onClick={() => setSelectedMode(mode)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedMode === mode
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'bg-card text-foreground/70 hover:bg-card hover:text-foreground'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Level filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Level</label>
                  <div className="space-y-2">
                    {levels.map(level => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedLevel === level
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'bg-card text-foreground/70 hover:bg-card hover:text-foreground'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset filters */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                    setSelectedMode('All')
                    setSelectedLevel('All')
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>

            {/* Course grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-foreground/70">
                  Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                </p>
              </div>

              {filteredCourses.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredCourses.map(course => (
                    <Link key={course.id} href={`/courses/${course.id}`}>
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-all hover:border-accent/50 cursor-pointer group">
                        {/* Course header gradient */}
                        <div className={`h-40 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/10" />
                          <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full">
                            <span className="text-xs font-semibold text-primary">${course.price}</span>
                          </div>
                        </div>

                        <div className="p-6 flex flex-col h-full">
                          {/* Header */}
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-accent bg-accent/10 px-2 py-1 rounded">
                                {course.category}
                              </span>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-accent text-accent" />
                                <span className="text-sm font-semibold text-foreground">{course.rating}</span>
                              </div>
                            </div>
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {course.title}
                            </h3>
                          </div>

                          <p className="text-sm text-foreground/70 mb-6 flex-grow line-clamp-2">
                            {course.description}
                          </p>

                          {/* Metadata */}
                          <div className="space-y-3 py-4 border-t border-border">
                            <div className="flex items-center gap-2 text-sm text-foreground/70">
                              <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground/70">
                              <Users className="w-4 h-4 text-accent flex-shrink-0" />
                              <span>{course.enrollment} students</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground/70">
                              <Target className="w-4 h-4 text-accent flex-shrink-0" />
                              <span>{course.level}</span>
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
              ) : (
                <div className="text-center py-12">
                  <p className="text-foreground/70">No courses found matching your criteria.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory('All')
                      setSelectedMode('All')
                      setSelectedLevel('All')
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
