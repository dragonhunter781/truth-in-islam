"use client"

import { use } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getArticleBySlug } from "@/lib/data/articles"

// Import article content dynamically
const getArticleContent = async (slug: string) => {
  try {
    const content = await import(`./content/${slug}.tsx`)
    return content.default
  } catch (error) {
    return null
  }
}

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const article = getArticleBySlug(resolvedParams.slug)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Article Not Found</h1>
          <Link href="/blog">
            <Button>Back to Articles</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>

            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 mb-4">
              {article.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              {article.title}
            </h1>

            <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readingTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <Button variant="ghost" size="sm" className="gap-1">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <article className="prose prose-lg dark:prose-invert prose-emerald max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:my-4 prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:pl-4 prose-blockquote:my-4 prose-blockquote:italic prose-blockquote:text-slate-600 dark:prose-blockquote:text-slate-400 prose-strong:font-semibold prose-strong:text-slate-900 dark:prose-strong:text-white prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-code:text-emerald-600 dark:prose-code:text-emerald-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <div className="text-slate-600 dark:text-slate-400">
                  <p>Article content is being prepared. Please check back soon.</p>
                </div>
              )}
            </article>

            {/* Sources */}
            {article.sources && article.sources.length > 0 && (
              <Card className="mt-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <BookOpen className="h-5 w-5 text-emerald-600" />
                    Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {article.sources.map((source, index) => (
                      <li key={index} className="text-slate-600 dark:text-slate-400 text-sm">
                        • {source}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
              <Link href="/blog">
                <Button variant="outline" className="gap-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                  <ArrowLeft className="h-4 w-4" />
                  All Articles
                </Button>
              </Link>
              <Link href="/quran">
                <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
                  Explore the Quran
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
