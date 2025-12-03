"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, Clock, HandHeart, Moon, Building } from "lucide-react"
import { pillars } from "@/lib/config"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  clock: Clock,
  "hand-heart": HandHeart,
  moon: Moon,
  kaaba: Building,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function PillarsSection() {
  return (
    <section className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
            Foundation of Faith
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            The Five Pillars of Islam
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            These five acts of worship form the foundation of Muslim life, representing
            the core practices that unite the global Muslim community.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || Heart
            return (
              <motion.div key={pillar.slug} variants={itemVariants}>
                <Link href={`/pillars/${pillar.slug}`}>
                  <motion.div
                    className="group relative h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-emerald-300 hover:bg-white hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-700 dark:hover:bg-slate-800/80"
                    whileHover={{ y: -5 }}
                  >
                    {/* Number Badge */}
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25 transition-transform group-hover:scale-110">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="mt-4">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {pillar.name}
                      </h3>
                      <p className="mt-1 font-arabic text-lg text-emerald-600 dark:text-emerald-400">
                        {pillar.arabicName}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Learn More */}
                    <div className="mt-4 flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      Learn more
                      <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/pillars"
            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            Explore All Five Pillars in Detail
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
