"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Clock, ArrowRight, BookOpen, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { articles, categories, getFeaturedArticles } from "@/lib/data/articles"

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const featuredArticles = getFeaturedArticles()

  const filteredArticles = articles.filter(article => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory
    const matchesSearch = !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch && !article.featured
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Articles & Research
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              {articles.length}+ in-depth examinations of what Islamic sources actually teach. Every article is sourced from the Quran, authentic hadith, and classical scholarship.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white shadow-lg"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !selectedCategory
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
              }`}
            >
              All Articles ({articles.length})
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.slug
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {!selectedCategory && !searchQuery && featuredArticles.length > 0 && (
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Featured Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${article.slug}`}>
                    <Card className="group h-full overflow-hidden hover:shadow-xl transition-all bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
                      <CardContent className="p-6">
                        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                          Featured
                        </span>
                        <h3 className="mt-4 text-xl font-bold leading-tight line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="mt-2 text-sm text-emerald-100 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-emerald-200">
                          <Clock className="h-4 w-4" />
                          {article.readingTime} min read
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {selectedCategory && (
            <div className="mb-6 flex items-center gap-2">
              <Filter className="h-5 w-5 text-emerald-600" />
              <span className="text-slate-600 dark:text-slate-400">
                Showing {filteredArticles.length} articles in{" "}
                <span className="font-medium text-slate-900 dark:text-white">
                  {categories.find(c => c.slug === selectedCategory)?.name}
                </span>
              </span>
              <button
                onClick={() => setSelectedCategory(null)}
                className="ml-2 text-sm text-emerald-600 hover:text-emerald-700"
              >
                Clear filter
              </button>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.05 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400 capitalize">
                        {article.category.replace("-", " ")}
                      </span>
                      <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readingTime} min
                        </span>
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400">
                No articles found. Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Explore Primary Sources
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Examine the Quran and Hadith directly with Arabic text and scholarly commentary
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quran">
                <Button variant="outline">Browse Quran</Button>
              </Link>
              <Link href="/hadith">
                <Button variant="outline">Browse Hadith</Button>
              </Link>
              <Link href="/prophets">
                <Button variant="outline">The Prophets</Button>
              </Link>
              <Link href="/questions">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Ask a Question
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
