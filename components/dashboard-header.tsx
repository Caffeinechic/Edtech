'use client'

import Link from 'next/link'
import { Bell, User, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function DashboardHeader() {
  return (
    <header className="sticky top-12 lg:top-0 z-20 bg-card border-b border-border">
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome Back, Ravi</h1>
          <p className="text-sm text-foreground/60">You have 2 active courses</p>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/settings">
              <Settings className="w-5 h-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-semibold text-white">
              R
            </div>
          </Button>
        </div>
      </div>
    </header>
  )
}
