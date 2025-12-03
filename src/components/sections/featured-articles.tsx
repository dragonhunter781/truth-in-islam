"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample featured articles (would come from database in production)
const featuredArticles = [
  {
    id: 1,
    title: "Understanding the Five Pillars of Islam: A Complete Guide",
    excerpt: "Discover the foundational practices that form the core of Islamic worship and how they shape the life of every Muslim.",
    slug: "five-pillars-complete-guide",
    category: "Pillars of Islam",
    readingTime: 12,
    image: "/images/pillars.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Islam and Christianity: Key Beliefs and Differences",
    excerpt: "An in-depth comparison of the two major world religions, exploring their shared roots and distinct theological perspectives.",
    slug: "islam-christianity-comparison",
    category: "Comparative Religion",
    readingTime: 15,
    image: "/images/comparative.jpg",
  },
  {
    id: 3,
    title: "The Islamic Concept of Afterlife: Paradise and Beyond",
    excerpt: "Explore what the Quran and Hadith teach about life after death, the Day of Judgment, and eternal existence.",
    slug: "islamic-afterlife-concept",
    category: "Beliefs",
    readingTime: 10,
    image: "/images/afterlife.jpg",
  },
  {
    id: 4,
    title: "How to Convert to Islam: A Step-by-Step Guide",
    excerpt: "Everything you need to know about embracing Islam, from taking the Shahada to beginning your journey as a Muslim.",
    slug: "how-to-convert-islam",
    category: "New Muslims",
    readingTime: 8,
    image: "/images/convert.jpg",
  },
  {
    id: 5,
    title: "Elijah (Ilyas) in Islam: The Prophet's Story",
    excerpt: "Learn about Prophet Elijah as mentioned in the Quran and Islamic tradition, his message, and his significance.",
    slug: "elijah-ilyas-in-islam",
    category: "Prophets",
    readingTime: 7,
    image: "/images/prophets.jpg",
  },
]

export function FeaturedArticles() {
  const mainArticle = featuredArticles[0]
  const otherArticles = featuredArticles.slice(1)

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
              Featured Articles
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Expand Your Knowledge
            </h2>
          </div>
          <Link href="/blog" className="hidden sm:block">
            <Button variant="outline">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Main Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/blog/${mainArticle.slug}`}>
              <article className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-white transition-transform hover:scale-[1.02]">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                      {mainArticle.category}
                    </span>
                    <h3 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl">
                      {mainArticle.title}
                    </h3>
                    <p className="mt-4 text-lg text-emerald-100">
                      {mainArticle.excerpt}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-emerald-200">
                      <Clock className="h-4 w-4" />
                      {mainArticle.readingTime} min read
                    </div>
                    <span className="flex items-center gap-2 font-medium">
                      Read Article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>

          {/* Other Articles */}
          <div className="grid gap-6 sm:grid-cols-2">
            {otherArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-700">
                    <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {article.category}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2 dark:text-slate-300">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <Clock className="h-3 w-3" />
                      {article.readingTime} min read
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link href="/blog">
            <Button variant="outline" className="w-full">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
