"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, ArrowRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredArticles = [
  {
    id: 1,
    title: "Quran Contradictions: 50 Examples Examined",
    excerpt: "A comprehensive analysis of internal contradictions within the Quran, with verse citations and scholarly commentary.",
    slug: "quran-contradictions-examined",
    category: "Contradictions",
    readingTime: 18,
    trending: true,
  },
  {
    id: 2,
    title: "Women's Testimony: Half the Value of a Man?",
    excerpt: "Examining Quran 2:282 and the Islamic doctrine that a woman's testimony is worth half that of a man.",
    slug: "womens-testimony-half-value",
    category: "Women",
    readingTime: 12,
  },
  {
    id: 3,
    title: "The Verse of the Sword: Abrogation in Islam",
    excerpt: "How Quran 9:5 is used by Islamic scholars to abrogate over 100 peaceful verses in the Quran.",
    slug: "verse-of-sword-abrogation",
    category: "Violence",
    readingTime: 15,
  },
  {
    id: 4,
    title: "Muhammad vs Jesus: A Stark Comparison",
    excerpt: "Contrasting the lives, teachings, and examples of Muhammad and Jesus Christ from primary sources.",
    slug: "muhammad-jesus-comparison",
    category: "Prophets",
    readingTime: 20,
  },
  {
    id: 5,
    title: "Apostasy in Islam: The Death Penalty",
    excerpt: "Why leaving Islam carries the death penalty according to classical Islamic law and hadith.",
    slug: "apostasy-death-penalty",
    category: "Apostasy",
    readingTime: 14,
  },
]

export function FeaturedArticles() {
  const mainArticle = featuredArticles[0]
  const otherArticles = featuredArticles.slice(1)

  return (
    <section className="bg-slate-800 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
              Most Read
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Articles
            </h2>
          </div>
          <Link href="/blog" className="hidden sm:block">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              View All 204 Articles
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
            transition={{ duration: 0.5 }}
          >
            <Link href={`/blog/${mainArticle.slug}`}>
              <article className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 p-8 text-white transition-transform hover:scale-[1.02]">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex h-full flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                        {mainArticle.category}
                      </span>
                      {mainArticle.trending && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/30 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                          <TrendingUp className="h-3 w-3" />
                          Trending
                        </span>
                      )}
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl">
                      {mainArticle.title}
                    </h3>
                    <p className="mt-4 text-lg text-white/80">
                      {mainArticle.excerpt}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/70">
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
          <div className="grid gap-4 sm:grid-cols-2">
            {otherArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <article className="group h-full rounded-xl border border-slate-700 bg-slate-800/50 p-5 transition-all hover:border-amber-500/50 hover:bg-slate-800">
                    <span className="inline-block rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-slate-300">
                      {article.category}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-white transition-colors group-hover:text-amber-400">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
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
            <Button variant="outline" className="w-full border-slate-600 text-slate-300">
              View All 204 Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
