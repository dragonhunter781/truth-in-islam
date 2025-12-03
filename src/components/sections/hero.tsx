"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Articles", value: "500+", icon: BookOpen },
  { label: "Quran Verses", value: "6,236", icon: Star },
  { label: "Monthly Readers", value: "50K+", icon: Users },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
              </span>
              Discover Authentic Islamic Knowledge
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              The Truth in{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                Islam
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl"
            >
              Explore the timeless wisdom of the Quran and Hadith. Learn about the
              Five Pillars of Islam, Islamic beliefs and practices, and find answers
              to your questions about the faith.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/islam">
                <Button size="lg" className="group">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/pillars">
                <Button variant="outline" size="lg">
                  Five Pillars of Islam
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="flex items-center justify-center gap-2 sm:justify-start">
                    <stat.icon className="h-5 w-5 text-emerald-600" />
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Decorative */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="relative z-10 rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-800"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </h3>
                <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
                  In the name of Allah, the Most Gracious, the Most Merciful
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500" />
                  <span className="text-sm font-medium text-slate-500">Quran 1:1</span>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -left-8 top-1/2 z-0 rounded-2xl bg-amber-100 p-6 shadow-lg dark:bg-amber-900/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-lg font-semibold text-amber-800 dark:text-amber-200">
                  5 Pillars
                </p>
                <p className="text-sm text-amber-600 dark:text-amber-300">
                  Foundation of Faith
                </p>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 z-20 rounded-2xl bg-emerald-100 p-6 shadow-lg dark:bg-emerald-900/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <p className="text-lg font-semibold text-emerald-800 dark:text-emerald-200">
                  114 Surahs
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-300">
                  In the Holy Quran
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
