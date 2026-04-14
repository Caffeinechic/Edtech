'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'
import { learningTracks } from '@/lib/mock-data'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <Image src="/innoventa-brand.svg" alt="Innoventa" width={420} height={80} className="h-12 w-auto rounded-md bg-white p-1" />
            <p className="max-w-lg text-sm leading-6 text-slate-300">
              Innoventa helps learners move from fundamentals to job-ready outcomes through modern curriculum, live mentoring, and portfolio-driven practice.
            </p>
            <div className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky-300" />
                <span>hello@innoventa.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky-300" />
                <span>+91 90123 45678</span>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2">
                <MapPin className="mt-0.5 h-4 w-4 text-sky-300" />
                <span>Bengaluru, India · Learning Hubs + Live Online Delivery</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">Platform</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li><Link className="hover:text-white" href="/courses">All Courses</Link></li>
              <li><Link className="hover:text-white" href="/dashboard">Student Dashboard</Link></li>
              <li><Link className="hover:text-white" href="/certificates">Certificates</Link></li>
              <li><Link className="hover:text-white" href="/admin">Admin Portal</Link></li>
              <li><Link className="hover:text-white" href="/login">Login</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">Learning Tracks</h3>
            <div className="flex flex-wrap gap-2">
              {learningTracks.map((track) => (
                <span key={track} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-200">
                  {track}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Innoventa. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-slate-100" href="#">Privacy</Link>
            <Link className="hover:text-slate-100" href="#">Terms</Link>
            <Link className="hover:text-slate-100" href="#">Cookies</Link>
            <span className="inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5" /> Secure Learning Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
