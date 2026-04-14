import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturedCourses from '@/components/featured-courses'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedCourses />
      <Testimonials />
      <Footer />
    </main>
  )
}
