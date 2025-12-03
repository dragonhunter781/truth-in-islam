"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Search, Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Articles", value: "204", icon: BookOpen },
  { label: "Quran Verses Examined", value: "500+", icon: Search },
  { label: "Hadith Analyzed", value: "300+", icon: Shield },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Orbs - Fixed positioning to prevent overlap */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-900/20 rounded-full blur-[128px] translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
              <AlertTriangle className="h-4 w-4" />
              A Critical Examination of Islam
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Discover{" "}
            <span className="bg-gradient-to-r from-red-500 via-amber-500 to-amber-400 bg-clip-text text-transparent">
              The Truth
            </span>
            <br />
            <span className="text-slate-300">in Islam</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            An in-depth scholarly examination of Islamic teachings, history, and practices.
            Compare Quranic claims with historical evidence, analyze hadith authenticity,
            and explore the questions that matter most.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/blog">
              <Button size="lg" className="group bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white border-0 px-8">
                Browse Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/quran">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8">
                Examine the Quran
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                    <stat.icon className="h-5 w-5 text-amber-500" />
                  </div>
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Categories */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-6">
              Explore Key Topics
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Quran Contradictions", href: "/blog?category=contradictions" },
                { label: "Women in Islam", href: "/blog?category=women" },
                { label: "Violence & Jihad", href: "/blog?category=violence" },
                { label: "Muhammad's Life", href: "/prophets/muhammad" },
                { label: "Scientific Errors", href: "/blog?category=scientific" },
                { label: "Apostasy", href: "/blog?category=apostasy" },
              ].map((topic) => (
                <Link key={topic.label} href={topic.href}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-amber-500/50 hover:text-amber-400"
                  >
                    {topic.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent" />
    </section>
  )
}
