"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "This website helped me understand Islam in a way I never had before. The articles are clear, well-researched, and respectful to all faiths.",
    author: "Sarah M.",
    location: "California, USA",
    type: "Seeker",
  },
  {
    quote: "As a new Muslim, I found the conversion guide incredibly helpful. It walked me through every step of my journey with patience and clarity.",
    author: "James R.",
    location: "London, UK",
    type: "New Muslim",
  },
  {
    quote: "The Quran and Hadith references are authentic and well-sourced. Finally, a reliable resource for learning about Islam online.",
    author: "Ahmed K.",
    location: "Toronto, Canada",
    type: "Scholar",
  },
  {
    quote: "I came here with many questions about Islam and Christianity. The comparative articles helped me see the connections and differences clearly.",
    author: "Maria L.",
    location: "Sydney, Australia",
    type: "Researcher",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Stories from Our Community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Hear from seekers, new Muslims, and scholars who have benefited from
            our resources.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-emerald-100 dark:text-emerald-900" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-200">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-lg font-bold text-white">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.location} · {testimonial.type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
