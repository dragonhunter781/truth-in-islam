"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 py-24">
      {/* Background Elements - Static, no overlapping animations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
            <BookOpen className="h-4 w-4" />
            Start Your Research
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Examine the Evidence?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Access 204 thoroughly researched articles examining Islamic teachings,
            history, and claims. Every article includes Quranic verses, hadith references,
            and biblical comparisons.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/blog">
              <Button size="lg" className="group bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white border-0 px-8">
                Browse All Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/questions">
              <Button size="lg" variant="outline" className="border-slate-500 text-slate-200 hover:bg-slate-800 px-8">
                <Mail className="mr-2 h-4 w-4" />
                Ask a Question
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {[
              { value: "204", label: "Articles" },
              { value: "500+", label: "Quran Verses" },
              { value: "300+", label: "Hadith Refs" },
              { value: "100%", label: "Free Access" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
