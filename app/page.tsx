import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturedCourses from '@/components/featured-courses'
import HowItWorks from '@/components/how-it-works'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <Features />
      <HowItWorks />
      <Testimonials />
      
      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
            Ready to Accelerate <br />Your Career?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join 5,000+ students already mastering the most in-demand skills in 25 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
              <Link href="/courses">Explore All Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-2xl border-2 border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/signup">Start Learning Free</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
