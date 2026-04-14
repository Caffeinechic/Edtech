'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { mockCourses, mockUsers, mockEnrollments } from '@/lib/mock-data'
import {
  BookOpen,
  Users,
  TrendingUp,
  BarChart3,
  Settings,
  ArrowRight,
  Award,
  Filter,
  Download,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  MoreHorizontal
} from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function AdminDashboard() {
  const totalStudents = 1250
  const activeUsers = 847
  const totalRevenue = mockEnrollments.length * 300

  return (
    <main className="min-h-screen bg-background">
      {/* Top Navigation / Breadcrumbs */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">A</div>
              <div>
                <h1 className="text-lg font-black tracking-tight">Admin <span className="text-primary italic">Control</span></h1>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Management Suite v2.0</p>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                 <Input className="w-64 h-10 pl-10 rounded-xl bg-secondary/50 border-none focus:bg-background transition-colors" placeholder="Search applications..." />
              </div>
              <Button variant="outline" className="rounded-xl font-bold h-10 px-4" asChild>
                <Link href="/">Exit to Site</Link>
              </Button>
           </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-10 space-y-10">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: 'Total Revenue', value: `$${totalRevenue.toLocaleString()}`, trend: '+12.5%', icon: BarChart3, color: 'text-primary', bg: 'bg-primary/10' },
             { label: 'Active Students', value: totalStudents, trend: '+5.2%', icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
             { label: 'Avg. Completion', value: '78%', trend: '+2.1%', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
             { label: 'Active Batches', value: '14', trend: 'Stable', icon: BookOpen, color: 'text-amber-500', bg: 'bg-amber-500/10' },
           ].map((kpi, i) => (
             <Card key={i} className="p-8 border-border/40 premium-shadow bg-card rounded-3xl space-y-4">
                <div className="flex items-center justify-between">
                   <div className={`w-12 h-12 rounded-2xl ${kpi.bg} ${kpi.color} flex items-center justify-center`}>
                     <kpi.icon className="w-6 h-6" />
                   </div>
                   <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-none text-[10px] font-bold">
                     {kpi.trend}
                   </Badge>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{kpi.label}</p>
                   <p className="text-3xl font-black text-foreground mt-1">{kpi.value}</p>
                </div>
             </Card>
           ))}
        </div>

        {/* Dashboard Main Content */}
        <div className="grid lg:grid-cols-3 gap-10">
           {/* Application Management Table */}
           <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                 <h2 className="text-2xl font-black tracking-tight">Recent <span className="text-primary italic">Applications</span></h2>
                 <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="rounded-xl font-bold h-9">
                       <Filter className="w-4 h-4 mr-2" /> Filter
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl font-bold h-9">
                       <Download className="w-4 h-4 mr-2" /> Export
                    </Button>
                 </div>
              </div>

              <Card className="border-border/40 premium-shadow bg-card rounded-3xl overflow-hidden">
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="border-b border-border/50 bg-secondary/20">
                             <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Applicant</th>
                             <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Course Path</th>
                             <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</th>
                             <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Action</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-border/50">
                          {[
                            { name: 'Arjun Mehta', email: 'arjun@example.com', course: 'AI Essentials', status: 'Pending', color: 'text-amber-500', bg: 'bg-amber-500/10', icon: Clock },
                            { name: 'Sanya Gupta', email: 'sanya@design.co', course: 'UI Masterclass', status: 'Approved', color: 'text-emerald-500', bg: 'bg-emerald-500/10', icon: CheckCircle2 },
                            { name: 'Rohan Verma', email: 'rohan.v@tech.in', course: 'Python Bootcamp', status: 'In Review', color: 'text-blue-500', bg: 'bg-blue-500/10', icon: AlertCircle },
                            { name: 'Neha Sharma', email: 'neha@sharma.in', course: 'UI Masterclass', status: 'Pending', color: 'text-amber-500', bg: 'bg-amber-500/10', icon: Clock },
                            { name: 'Vikram Singh', email: 'v.singh@gmail.com', course: 'AI Essentials', status: 'Approved', color: 'text-emerald-500', bg: 'bg-emerald-500/10', icon: CheckCircle2 },
                          ].map((app, i) => (
                             <tr key={i} className="hover:bg-secondary/10 transition-colors group">
                                <td className="px-6 py-5">
                                   <div>
                                      <p className="font-bold text-sm tracking-tight">{app.name}</p>
                                      <p className="text-xs text-muted-foreground">{app.email}</p>
                                   </div>
                                </td>
                                <td className="px-6 py-5">
                                   <p className="text-xs font-bold">{app.course}</p>
                                </td>
                                <td className="px-6 py-5">
                                   <Badge className={`${app.bg} ${app.color} border-none text-[10px] font-black tracking-tight px-2.5 py-0.5 rounded-full uppercase`}>
                                      <app.icon className="w-3 h-3 mr-1" /> {app.status}
                                   </Badge>
                                </td>
                                <td className="px-6 py-5">
                                   <Button variant="ghost" size="icon" className="rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                      <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                                   </Button>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
                 <div className="p-6 border-t border-border/50 flex items-center justify-between">
                    <p className="text-xs font-bold text-muted-foreground uppercase">Showing 5 of 45 applications</p>
                    <div className="flex gap-2">
                       <Button variant="outline" size="sm" className="rounded-xl h-9 font-black uppercase text-[10px] tracking-widest px-4">Prev</Button>
                       <Button variant="outline" size="sm" className="rounded-xl h-9 font-black uppercase text-[10px] tracking-widest px-4">Next</Button>
                    </div>
                 </div>
              </Card>
           </div>

           {/* Sidebar Actions & Activity */}
           <div className="space-y-10">
              <section className="space-y-6">
                 <h2 className="text-2xl font-black tracking-tight">Quick <span className="text-primary italic">Actions</span></h2>
                 <div className="grid grid-cols-1 gap-4">
                    <Button size="lg" className="h-20 rounded-2xl bg-primary text-white font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-start px-8 gap-4">
                       <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><BookOpen className="w-5 h-5" /></div>
                       Create New Programme
                    </Button>
                    <Button size="lg" variant="outline" className="h-20 rounded-2xl bg-card border-border/50 text-foreground font-black text-lg shadow-lg hover:bg-secondary/50 transition-all flex items-center justify-start px-8 gap-4">
                       <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Award className="w-5 h-5" /></div>
                       Issue Certificates
                    </Button>
                    <Button size="lg" variant="outline" className="h-20 rounded-2xl bg-card border-border/50 text-foreground font-black text-lg shadow-lg hover:bg-secondary/50 transition-all flex items-center justify-start px-8 gap-4">
                       <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center"><Settings className="w-5 h-5" /></div>
                       Platform Settings
                    </Button>
                 </div>
              </section>

              {/* Course Performance Summary */}
              <section className="p-8 rounded-3xl border border-border/40 bg-card premium-shadow space-y-6">
                 <h3 className="font-black text-sm uppercase tracking-widest text-muted-foreground">Programme Performance</h3>
                 <div className="space-y-8">
                    {mockCourses.slice(0, 3).map((course, i) => (
                       <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-tight">
                             <span className="truncate max-w-[150px]">{course.title}</span>
                             <span className="text-primary">{course.enrollment} Students</span>
                          </div>
                          <Progress value={(course.enrollment / 200) * 100} className="h-1.5 bg-secondary" />
                       </div>
                    ))}
                 </div>
                 <Button variant="ghost" className="w-full rounded-xl font-bold h-11 text-primary hover:bg-primary/5" asChild>
                    <Link href="/admin/analytics">Detailed Analytics <ArrowRight className="ml-2 w-4 h-4" /></Link>
                 </Button>
              </section>
           </div>
        </div>
      </div>
    </main>
  )
}
