"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  BookOpen,
  Users,
  Globe,
  Sunrise,
  Heart,
  Scale,
  MessageCircle,
  Scroll
} from "lucide-react"

const topics = [
  {
    title: "Islam Beliefs & Practices",
    description: "Explore the core tenets of Islamic faith and daily worship",
    href: "/beliefs",
    icon: Heart,
    color: "emerald",
  },
  {
    title: "Islam & Christianity",
    description: "Compare and understand the relationship between the two faiths",
    href: "/comparative/christianity",
    icon: Globe,
    color: "blue",
  },
  {
    title: "Islam Afterlife",
    description: "Learn about Paradise, Hell, and the Day of Judgment",
    href: "/afterlife",
    icon: Sunrise,
    color: "amber",
  },
  {
    title: "Conversion to Islam",
    description: "A comprehensive guide for those considering embracing Islam",
    href: "/conversion",
    icon: Users,
    color: "purple",
  },
  {
    title: "Prophets in Islam",
    description: "Discover the stories of 25 prophets mentioned in the Quran",
    href: "/prophets",
    icon: Scroll,
    color: "rose",
  },
  {
    title: "The Quran",
    description: "Explore the holy book revealed to Prophet Muhammad",
    href: "/quran",
    icon: BookOpen,
    color: "teal",
  },
  {
    title: "Hadith Collections",
    description: "Study the sayings and traditions of Prophet Muhammad",
    href: "/hadith",
    icon: MessageCircle,
    color: "indigo",
  },
  {
    title: "Islamic Law (Sharia)",
    description: "Understand the moral and legal framework of Islam",
    href: "/beliefs/sharia",
    icon: Scale,
    color: "orange",
  },
]

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-900/30",
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-200 dark:border-rose-800",
  },
  teal: {
    bg: "bg-teal-100 dark:bg-teal-900/30",
    text: "text-teal-600 dark:text-teal-400",
    border: "border-teal-200 dark:border-teal-800",
  },
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-200 dark:border-indigo-800",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800",
  },
}

export function TopicsSection() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
            Explore Topics
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What Would You Like to Learn?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Browse our comprehensive collection of articles and resources covering
            all aspects of Islamic knowledge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {topics.map((topic, index) => {
            const colors = colorClasses[topic.color]
            return (
              <motion.div
                key={topic.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={topic.href}>
                  <motion.div
                    className={`group h-full rounded-2xl border bg-white p-6 transition-all hover:shadow-lg dark:bg-slate-900 ${colors.border}`}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}
                    >
                      <topic.icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      {topic.description}
                    </p>
                    <div
                      className={`mt-4 flex items-center text-sm font-medium ${colors.text}`}
                    >
                      Explore
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
      </div>
    </section>
  )
}
