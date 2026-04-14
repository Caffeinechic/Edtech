'use client'

import { useState } from 'react'
import Link from 'next/link'
import DashboardSidebar from '@/components/dashboard-sidebar'
import DashboardHeader from '@/components/dashboard-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { mockUsers } from '@/lib/mock-data'
import {
  User,
  Bell,
  Lock,
  Globe,
  Mail,
  Phone,
  Save,
  ArrowLeft,
} from 'lucide-react'

const user = mockUsers.student1

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: '+91 98765 43210',
    bio: 'Passionate learner and technology enthusiast',
  })
  const [isSaved, setIsSaved] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Lock },
  ]

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
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-foreground/60">Manage your account preferences and settings</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'border-primary text-primary font-medium'
                      : 'border-transparent text-foreground/60 hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab content */}
          <div>
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="max-w-2xl">
                <Card className="p-8 space-y-6">
                  {/* Profile picture */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Profile Picture</h3>
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-semibold text-white">
                        {user.name.charAt(0)}
                      </div>
                      <Button variant="outline">Change Picture</Button>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email Address
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          placeholder="Tell us about yourself"
                          className="w-full px-3 py-2 border border-input rounded-lg text-foreground bg-background"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Save button */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      {isSaved && (
                        <p className="text-sm text-green-600 font-medium">Changes saved successfully</p>
                      )}
                    </div>
                    <Button className="bg-primary hover:bg-primary/90" onClick={handleSave}>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="max-w-2xl space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Course Updates', desc: 'Get notified about new content in your courses' },
                      { label: 'Assignment Reminders', desc: 'Reminders for pending assignments' },
                      { label: 'Certificate Earned', desc: 'Notifications when you complete a course' },
                      { label: 'Marketing Emails', desc: 'News, offers, and course recommendations' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <div>
                          <p className="font-medium text-foreground">{item.label}</p>
                          <p className="text-sm text-foreground/60">{item.desc}</p>
                        </div>
                        <input type="checkbox" defaultChecked={i < 3} className="w-5 h-5 rounded" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* Privacy & Security Tab */}
            {activeTab === 'privacy' && (
              <div className="max-w-2xl space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">Update Password</Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Account Privacy</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground">Profile Visibility</p>
                        <p className="text-sm text-foreground/60">Who can see your profile</p>
                      </div>
                      <select className="px-3 py-2 border border-input rounded-lg text-sm">
                        <option>Public</option>
                        <option>Private</option>
                        <option>Friends Only</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium text-foreground">Delete Account</p>
                        <p className="text-sm text-foreground/60">Permanently delete your account and data</p>
                      </div>
                      <Button variant="destructive">Delete</Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
