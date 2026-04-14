'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  BookOpen,
  Award,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { useState } from 'react'

export default function DashboardSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/courses', label: 'Browse Courses', icon: BookOpen },
    { href: '/certificates', label: 'Certificates', icon: Award },
    { href: '/settings', label: 'Settings', icon: Settings },
  ]

  const isActive = (href: string) => pathname === href

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  return (
    <>
      {/* Mobile toggle */}
      <div className="fixed top-0 left-0 right-0 z-40 lg:hidden bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/innoventa-logo.svg" alt="Innoventa logo" width={24} height={24} className="h-6 w-6" />
          <span className="font-bold text-foreground">Innoventa</span>
        </Link>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 hover:bg-muted rounded-lg"
          aria-label="Toggle mobile menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-12 left-0 right-0 h-[calc(100vh-3rem)] w-72 bg-card border-r border-border overflow-y-auto transition-all duration-300 z-30 lg:top-0 lg:z-auto lg:h-screen lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } ${
          isCollapsed ? 'lg:w-20' : 'lg:w-72'
        }`}
      >
        <div className="border-b border-border p-4 lg:mt-0">
          <div className="mb-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/innoventa-logo.svg" alt="Innoventa logo" width={36} height={36} className="h-9 w-9" />
              {!isCollapsed && <span className="text-lg font-bold text-foreground">Innoventa</span>}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:inline-flex"
              onClick={() => setIsCollapsed((prev) => !prev)}
              aria-label="Toggle sidebar collapse"
            >
              {isCollapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
            </Button>
          </div>
          {!isCollapsed && (
            <div className="rounded-xl border border-border bg-muted/30 p-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/avatars/student-ravi.svg"
                  alt="Amit Shah avatar"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full border border-border"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">Amit Shah</p>
                  <p className="text-xs text-muted-foreground">Premium Student</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <nav className="space-y-1 px-3 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex items-center rounded-lg px-3 py-3 transition-colors ${
                    active
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:bg-muted'
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!isCollapsed && <span className="ml-3 font-medium">{item.label}</span>}
                </div>
              </Link>
            )
          })}
        </nav>

        {/* User section */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border p-3">
          {!isCollapsed && (
            <div className="mb-3 rounded-xl bg-muted p-3">
              <p className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">Learning Progress</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xl font-bold text-foreground">65h</p>
                  <p className="text-xs text-muted-foreground">this month</p>
                </div>
                <p className="text-xs font-medium text-accent">+12% week</p>
              </div>
            </div>
          )}

          <Button variant="outline" className="w-full justify-start gap-2" onClick={handleLogout}>
            <LogOut className="w-4 h-4" />
            {!isCollapsed && 'Logout'}
          </Button>
        </div>
      </aside>

      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}
