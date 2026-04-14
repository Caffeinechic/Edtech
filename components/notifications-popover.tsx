'use client'

import { useMemo } from 'react'
import { Bell, BookOpenCheck, CalendarClock, FileBadge2 } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

const notifications = [
  {
    id: 'n1',
    title: 'Certificate issued',
    description: 'Your Web Design Essentials certificate is now available.',
    time: '2h ago',
    icon: FileBadge2,
  },
  {
    id: 'n2',
    title: 'Live session reminder',
    description: 'AI Fundamentals workshop starts tomorrow at 6:00 PM.',
    time: '5h ago',
    icon: CalendarClock,
  },
  {
    id: 'n3',
    title: 'New module unlocked',
    description: 'Module 4 in Coding for Beginners is now unlocked.',
    time: '1d ago',
    icon: BookOpenCheck,
  },
]

export default function NotificationsPopover() {
  const unreadCount = useMemo(() => notifications.length, [])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open notifications">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="border-b border-border px-4 py-3">
          <p className="text-sm font-semibold text-foreground">Notifications</p>
          <p className="text-xs text-muted-foreground">Recent activity from your learning workspace</p>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {notifications.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.id} className="rounded-md p-3 transition-colors hover:bg-muted">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-md bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
