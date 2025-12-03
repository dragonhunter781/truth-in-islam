"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  BookOpen,
  Users,
  Swords,
  Scale,
  Heart,
  FileQuestion,
  History,
  Microscope
} from "lucide-react"

const topics = [
  {
    title: "Quran Contradictions",
    description: "Examine internal inconsistencies and errors in the Quran",
    href: "/blog?category=contradictions",
    icon: FileQuestion,
    color: "red",
    count: "25+ Articles",
  },
  {
    title: "Women in Islam",
    description: "Analyze Islamic teachings on women's rights and status",
    href: "/blog?category=women",
    icon: Users,
    color: "rose",
    count: "30+ Articles",
  },
  {
    title: "Violence & Jihad",
    description: "Study the Quranic commands on warfare and violence",
    href: "/blog?category=violence",
    icon: Swords,
    color: "amber",
    count: "20+ Articles",
  },
  {
    title: "Scientific Claims",
    description: "Evaluate alleged scientific miracles in the Quran",
    href: "/blog?category=scientific",
    icon: Microscope,
    color: "blue",
    count: "15+ Articles",
  },
  {
    title: "Historical Analysis",
    description: "Compare Islamic claims with archaeological evidence",
    href: "/blog?category=history",
    icon: History,
    color: "purple",
    count: "25+ Articles",
  },
  {
    title: "Islamic Beliefs",
    description: "Examine core doctrines and their implications",
    href: "/beliefs",
    icon: BookOpen,
    color: "teal",
    count: "30+ Articles",
  },
  {
    title: "Apostasy & Freedom",
    description: "Explore Islamic treatment of those who leave the faith",
    href: "/blog?category=apostasy",
    icon: Heart,
    color: "orange",
    count: "15+ Articles",
  },
  {
    title: "Sharia Law",
    description: "Understand Islamic legal rulings and punishments",
    href: "/beliefs/sharia",
    icon: Scale,
    color: "slate",
    count: "20+ Articles",
  },
]

const colorClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  red: {
    bg: "bg-red-500/10",
    text: "text-red-500",
    border: "border-red-500/20",
    hover: "hover:border-red-500/50",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-500",
    border: "border-rose-500/20",
    hover: "hover:border-rose-500/50",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-500",
    border: "border-amber-500/20",
    hover: "hover:border-amber-500/50",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/20",
    hover: "hover:border-blue-500/50",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    border: "border-purple-500/20",
    hover: "hover:border-purple-500/50",
  },
  teal: {
    bg: "bg-teal-500/10",
    text: "text-teal-500",
    border: "border-teal-500/20",
    hover: "hover:border-teal-500/50",
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-500",
    border: "border-orange-500/20",
    hover: "hover:border-orange-500/50",
  },
  slate: {
    bg: "bg-slate-500/10",
    text: "text-slate-400",
    border: "border-slate-500/20",
    hover: "hover:border-slate-400/50",
  },
}

export function TopicsSection() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400">
            Research Categories
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Explore Critical Topics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            In-depth analysis of Islamic teachings from scholarly and biblical perspectives.
            Each category contains thoroughly researched articles with primary source citations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, index) => {
            const colors = colorClasses[topic.color]
            return (
              <motion.div
                key={topic.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={topic.href}>
                  <motion.div
                    className={`group h-full rounded-xl border bg-slate-800/50 p-6 transition-all ${colors.border} ${colors.hover}`}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}>
                      <topic.icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {topic.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">
                        {topic.count}
                      </span>
                      <span className={`text-sm font-medium ${colors.text} opacity-0 transition-opacity group-hover:opacity-100`}>
                        Explore →
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
