"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, BookOpen, Users, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const quickLinks = [
  { title: "Five Pillars", href: "/pillars", icon: BookOpen, description: "The foundational requirements of Islam" },
  { title: "The Quran", href: "/quran", icon: FileText, description: "Examine Quranic teachings" },
  { title: "The Hadith", href: "/hadith", icon: FileText, description: "Muhammad's sayings and actions" },
  { title: "Prophets", href: "/prophets", icon: Users, description: "Prophets in Islamic tradition" },
  { title: "Beliefs", href: "/beliefs", icon: BookOpen, description: "Core Islamic doctrines" },
  { title: "Afterlife", href: "/afterlife", icon: BookOpen, description: "Islamic views of heaven and hell" },
]

const popularSearches = [
  "Muhammad and Aisha",
  "Apostasy in Islam",
  "Women in Islam",
  "Jihad verses",
  "Jesus in Islam",
  "Quran contradictions",
  "Sharia law",
  "Violence in Islam",
  "Five pillars",
  "Hadith authenticity"
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Search Our Resources
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Find articles, verses, and information about Islamic teachings.
            </p>

            {/* Search Bar */}
            <div className="mt-8 relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-lg"
                  placeholder="Search for topics, verses, or articles..."
                />
              </div>
              <Button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700"
              >
                Search
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="mt-6">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(term)}
                    className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Browse by Topic
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={link.href}>
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                        <link.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white">{link.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{link.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Article Categories
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Quran Analysis",
              "Hadith Studies",
              "Women in Islam",
              "Violence & Jihad",
              "Apostasy & Blasphemy",
              "Comparative Religion",
              "History",
              "Sharia Law"
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/blog?category=${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                  <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
                    <CardContent className="p-4 flex items-center justify-between">
                      <span className="font-medium text-slate-900 dark:text-white">{category}</span>
                      <ArrowRight className="h-4 w-4 text-emerald-600" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
