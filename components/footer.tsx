'use client'

import Link from 'next/link'
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              <span className="text-xl font-bold">Innoventa</span>
            </div>
            <p className="text-sm opacity-80">
              Skill-based academy platform delivering structured, short-duration, outcome-driven training programmes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#courses" className="opacity-80 hover:opacity-100 transition-opacity">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="opacity-80 hover:opacity-100 transition-opacity">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4" />
                <span>contact@innoventa.edu</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4" />
                <span>+91 1234 5678 90</span>
              </div>
              <div className="flex items-start gap-2 opacity-80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 text-sm opacity-80">
          <p>&copy; 2024 Innoventa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
