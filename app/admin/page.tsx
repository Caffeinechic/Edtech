'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { mockCourses, mockUsers, mockEnrollments } from '@/lib/mock-data'
import {
  BookOpen,
  Users,
  TrendingUp,
  BarChart3,
  Settings,
  ArrowRight,
  Award,
} from 'lucide-react'

export default function AdminDashboard() {
  const totalStudents = 1250
  const totalEnrollments = mockEnrollments.length
  const activeUsers = 847
  const totalRevenue = mockEnrollments.length * 300

  return (
    <main className="min-h-screen bg-background p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-foreground/60">Platform overview and management</p>
          </div>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

        {/* Key metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground/70">Total Students</h3>
              <Users className="w-5 h-5 text-primary opacity-50" />
            </div>
            <p className="text-3xl font-bold text-foreground">{totalStudents}</p>
            <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground/70">Active Enrollments</h3>
              <BookOpen className="w-5 h-5 text-secondary opacity-50" />
            </div>
            <p className="text-3xl font-bold text-foreground">{totalEnrollments}</p>
            <p className="text-sm text-green-600 mt-2">↑ 8% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground/70">Active Users</h3>
              <TrendingUp className="w-5 h-5 text-accent opacity-50" />
            </div>
            <p className="text-3xl font-bold text-foreground">{activeUsers}</p>
            <p className="text-sm text-green-600 mt-2">↑ 5% from last week</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground/70">Revenue (Est.)</h3>
              <BarChart3 className="w-5 h-5 text-primary opacity-50" />
            </div>
            <p className="text-3xl font-bold text-foreground">${totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-green-600 mt-2">↑ 15% from last month</p>
          </Card>
        </div>

        {/* Management sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Courses */}
          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">Manage Courses</h2>
                <p className="text-foreground/60">{mockCourses.length} courses in the system</p>
              </div>
              <BookOpen className="w-8 h-8 text-primary opacity-30" />
            </div>

            <div className="space-y-3 mb-6">
              {mockCourses.slice(0, 3).map(course => (
                <div key={course.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-foreground text-sm">{course.title}</p>
                    <p className="text-xs text-foreground/60">{course.enrollment} students</p>
                  </div>
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90">
              Manage All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Users */}
          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">User Management</h2>
                <p className="text-foreground/60">{totalStudents} registered users</p>
              </div>
              <Users className="w-8 h-8 text-secondary opacity-30" />
            </div>

            <div className="space-y-3 mb-6">
              <div className="p-3 bg-muted rounded-lg">
                <p className="font-medium text-foreground text-sm">Ravi Kumar</p>
                <p className="text-xs text-foreground/60">3 courses completed • 125 hours</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="font-medium text-foreground text-sm">Priya Singh</p>
                <p className="text-xs text-foreground/60">2 courses completed • 98 hours</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="font-medium text-foreground text-sm">Amit Patel</p>
                <p className="text-xs text-foreground/60">1 course completed • 45 hours</p>
              </div>
            </div>

            <Button className="w-full bg-secondary hover:bg-secondary/90">
              Manage Users
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Enrollments */}
          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">Enrollments</h2>
                <p className="text-foreground/60">Monitor enrollment status</p>
              </div>
              <TrendingUp className="w-8 h-8 text-accent opacity-30" />
            </div>

            <div className="space-y-3 mb-6">
              {[
                { status: 'Approved', count: 1200, color: 'bg-green-100 text-green-700' },
                { status: 'Pending Review', count: 45, color: 'bg-amber-100 text-amber-700' },
                { status: 'Payment Pending', count: 23, color: 'bg-blue-100 text-blue-700' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <p className="font-medium text-foreground text-sm">{item.status}</p>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${item.color}`}>
                    {item.count}
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-accent hover:bg-accent/90">
              View Enrollments
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Settings */}
          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">Platform Settings</h2>
                <p className="text-foreground/60">Configure platform features</p>
              </div>
              <Settings className="w-8 h-8 text-primary opacity-30" />
            </div>

            <div className="space-y-2 mb-6 text-sm text-foreground/70">
              <p>• Configure pricing and payment methods</p>
              <p>• Manage course categories and types</p>
              <p>• Set enrollment policies</p>
              <p>• Manage instructor accounts</p>
              <p>• View analytics and reports</p>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90">
              Platform Settings
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>

        {/* Quick actions */}
        <div className="mt-8 p-6 bg-card border border-border rounded-lg">
          <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm">Create New Course</Button>
            <Button variant="outline" size="sm">Send Announcement</Button>
            <Button variant="outline" size="sm">Generate Report</Button>
            <Button variant="outline" size="sm">Manage Trainers</Button>
            <Button variant="outline" size="sm">View Analytics</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
