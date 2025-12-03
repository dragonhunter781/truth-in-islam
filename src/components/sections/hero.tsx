"use client"

import Link from "next/link"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight, BookOpen, Search, Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const stats = [
  { label: "Articles", value: 204, icon: BookOpen },
  { label: "Quran Verses Examined", value: 500, suffix: "+", icon: Search },
  { label: "Hadith Analyzed", value: 300, suffix: "+", icon: Shield },
]

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" })
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v))
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [count, rounded, value])

  return <span>{displayValue}{suffix}</span>
}

// Floating geometric shapes
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large slow-moving shapes */}
      <motion.div
        className="absolute top-20 left-[10%] w-64 h-64 border border-red-500/10 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div
        className="absolute bottom-32 right-[15%] w-48 h-48 border border-amber-500/10 rounded-full"
        animate={{
          rotate: -360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Small floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-amber-500/20 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Diagonal lines */}
      <motion.div
        className="absolute top-0 right-[20%] w-px h-40 bg-gradient-to-b from-transparent via-red-500/20 to-transparent"
        animate={{ y: [0, 100, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-[35%] w-px h-32 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"
        animate={{ y: [0, 80, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  )
}

// Animated gradient background
function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-red-900/30 via-transparent to-transparent"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-amber-900/20 via-transparent to-transparent"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.5 }
  })
}

export function Hero() {
  const titleWords = "Discover The Truth".split("")

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Animated Background */}
      <AnimatedGradient />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Static Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-900/15 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400"
              whileHover={{ scale: 1.05, borderColor: "rgba(245, 158, 11, 0.5)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <AlertTriangle className="h-4 w-4" />
              </motion.div>
              A Critical Examination of Islam
            </motion.div>
          </motion.div>

          {/* Main Heading with letter animation */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="inline-block">
              {titleWords.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={char === " " ? "mr-3" : ""}
                  style={{
                    display: "inline-block",
                    background: i >= 9 ? "linear-gradient(to right, #ef4444, #f59e0b, #fbbf24)" : undefined,
                    WebkitBackgroundClip: i >= 9 ? "text" : undefined,
                    WebkitTextFillColor: i >= 9 ? "transparent" : undefined,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <br />
            <motion.span
              className="text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              in Islam
            </motion.span>
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="group bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white border-0 px-8 shadow-lg shadow-red-900/30">
                  Browse Articles
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
            <Link href="/quran">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 px-8">
                  Examine the Quran
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats with animated counters */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/20 to-red-500/20 border border-amber-500/20"
                    whileHover={{ rotate: 10 }}
                  >
                    <stat.icon className="h-5 w-5 text-amber-500" />
                  </motion.div>
                  <span className="text-3xl font-bold text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
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
            <motion.p
              className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Explore Key Topics
            </motion.p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Quran Contradictions", href: "/blog?category=contradictions" },
                { label: "Women in Islam", href: "/blog?category=women" },
                { label: "Violence & Jihad", href: "/blog?category=violence" },
                { label: "Muhammad's Life", href: "/prophets/muhammad" },
                { label: "Scientific Errors", href: "/blog?category=scientific" },
                { label: "Apostasy", href: "/blog?category=apostasy" },
              ].map((topic, index) => (
                <Link key={topic.label} href={topic.href}>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    whileHover={{
                      scale: 1.08,
                      borderColor: "rgba(245, 158, 11, 0.5)",
                      color: "#fbbf24"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-colors cursor-pointer"
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-amber-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
