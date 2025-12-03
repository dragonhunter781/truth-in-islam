"use client"

import { use } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getArticleBySlug } from "@/lib/data/articles"
import { siteConfig } from "@/lib/config"

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white border-0">Back to Articles</Button>
          </Link>
        </div>
      </div>
    )
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.publishedAt,
    "dateModified": article.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "The Truth in Islam",
      "url": siteConfig.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Truth in Islam",
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`
    },
    "articleSection": article.category,
    "wordCount": article.content ? article.content.split(/\s+/).length : 0,
    "timeRequired": `PT${article.readingTime}M`,
    ...(article.sources && article.sources.length > 0 && {
      "citation": article.sources
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
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
              className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>

            <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400 mb-4">
              {article.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>

            <p className="mt-4 text-xl text-slate-400">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readingTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <Button variant="ghost" size="sm" className="gap-1 text-slate-400 hover:text-white hover:bg-slate-800">
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
            <article className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-300 prose-p:my-4 prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:pl-4 prose-blockquote:my-4 prose-blockquote:italic prose-blockquote:text-slate-400 prose-strong:font-semibold prose-strong:text-white prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-amber-400 prose-code:text-amber-400 prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <div className="text-slate-400">
                  <p>Article content is being prepared. Please check back soon.</p>
                </div>
              )}
            </article>

            {/* Sources */}
            {article.sources && article.sources.length > 0 && (
              <Card className="mt-12 bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BookOpen className="h-5 w-5 text-amber-500" />
                    Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {article.sources.map((source, index) => (
                      <li key={index} className="text-slate-400 text-sm">
                        • {source}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-700">
              <Link href="/blog">
                <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500">
                  <ArrowLeft className="h-4 w-4" />
                  All Articles
                </Button>
              </Link>
              <Link href="/quran">
                <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white border-0">
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
