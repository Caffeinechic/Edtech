'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Singh',
    role: 'Class 12 Student',
    content: 'The AI Fundamentals course was incredibly well structured. I learned so much in just 25 hours and now I understand how AI works practically.',
    rating: 5,
    initial: 'P',
  },
  {
    name: 'Arjun Kumar',
    role: 'College Student',
    content: 'Innoventa\'s hybrid learning model was perfect for me. The offline sessions helped with hands-on practice, and online sessions fit my busy schedule.',
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Sneha Patel',
    role: 'Working Professional',
    content: 'The certificate I earned from Innoventa really made a difference in my job applications. The course was industry-relevant and practical.',
    rating: 5,
    initial: 'S',
  },
  {
    name: 'Rohit Sharma',
    role: 'Class 11 Student',
    content: 'The trainers were amazing! They explained complex topics in a simple way. I feel confident about my digital skills now.',
    rating: 5,
    initial: 'R',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Success Stories
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from our learners about their experiences and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 flex flex-col hover:shadow-lg transition-shadow hover:border-accent/50"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 grow text-base leading-relaxed text-foreground/80">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
