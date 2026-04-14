'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import NotificationsPopover from '@/components/notifications-popover'

export default function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome Back, Amit</h1>
          <p className="text-sm text-foreground/60">You have 2 active courses</p>
        </div>

        <div className="flex items-center gap-4">
          <NotificationsPopover />

          <Button variant="ghost" size="icon" asChild>
            <Link href="/settings">
              <Settings className="w-5 h-5" />
            </Link>
          </Button>

          <Image
            src="/avatars/student-ravi.svg"
            alt="Ravi Kumar avatar"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border border-border"
          />
        </div>
      </div>
    </header>
  )
}
