"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Clock,
  User,
  Search,
  Filter,
  Plus,
  Shield,
  Eye,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Sample questions data - in production this would come from Supabase
const sampleQuestions = [
  {
    id: 1,
    title: "Why does the Quran say to kill disbelievers but also says there's no compulsion in religion?",
    body: "I'm confused about how these two ideas can coexist. Quran 2:256 says no compulsion, but 9:5 says to kill. How do Muslims reconcile this?",
    category: "contradictions",
    upvotes: 247,
    downvotes: 12,
    answerCount: 34,
    viewCount: 3420,
    isAnswered: true,
    createdAt: "2024-01-15T10:30:00Z",
    author: { displayName: "SeekingTruth", avatarSeed: "abc123" },
  },
  {
    id: 2,
    title: "Was Muhammad really married to a 6-year-old? How can Muslims defend this?",
    body: "I've seen the hadiths about Aisha being 6 when married and 9 when the marriage was consummated. Are these authentic?",
    category: "women",
    upvotes: 189,
    downvotes: 45,
    answerCount: 28,
    viewCount: 2890,
    isAnswered: true,
    createdAt: "2024-01-14T14:20:00Z",
    author: { displayName: "QuestioningMuslim", avatarSeed: "def456" },
  },
  {
    id: 3,
    title: "If leaving Islam means death, how is it a religion of peace?",
    body: "The hadith clearly says 'whoever changes his religion, kill him.' How can Islam claim to be peaceful?",
    category: "apostasy",
    upvotes: 312,
    downvotes: 8,
    answerCount: 41,
    viewCount: 4210,
    isAnswered: true,
    createdAt: "2024-01-13T09:15:00Z",
    author: { displayName: "FormerMuslim2024", avatarSeed: "ghi789" },
  },
  {
    id: 4,
    title: "What do Muslims think about the scientific errors in the Quran?",
    body: "The sun setting in a muddy spring, sperm coming from the backbone, stars as missiles against demons - how are these explained?",
    category: "scientific",
    upvotes: 156,
    downvotes: 23,
    answerCount: 19,
    viewCount: 1890,
    isAnswered: false,
    createdAt: "2024-01-12T16:45:00Z",
    author: { displayName: "ScienceStudent", avatarSeed: "jkl012" },
  },
  {
    id: 5,
    title: "Why does Islam allow men to beat their wives?",
    body: "Quran 4:34 clearly says husbands can strike disobedient wives. How is this moral?",
    category: "women",
    upvotes: 278,
    downvotes: 31,
    answerCount: 36,
    viewCount: 3670,
    isAnswered: true,
    createdAt: "2024-01-11T11:30:00Z",
    author: { displayName: "WomensRights", avatarSeed: "mno345" },
  },
  {
    id: 6,
    title: "Is the Kaaba really a pre-Islamic pagan shrine?",
    body: "I've read that the Kaaba existed before Islam and housed 360 idols. Is this true and what are the implications?",
    category: "history",
    upvotes: 134,
    downvotes: 18,
    answerCount: 22,
    viewCount: 1560,
    isAnswered: true,
    createdAt: "2024-01-10T08:00:00Z",
    author: { displayName: "HistoryBuff", avatarSeed: "pqr678" },
  },
]

const categories = [
  { name: "All Questions", slug: null },
  { name: "Violence & Jihad", slug: "violence" },
  { name: "Women in Islam", slug: "women" },
  { name: "Apostasy", slug: "apostasy" },
  { name: "Scientific Issues", slug: "scientific" },
  { name: "Contradictions", slug: "contradictions" },
  { name: "History", slug: "history" },
  { name: "Muhammad", slug: "muhammad" },
]

function formatTimeAgo(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) return "Just now"
  if (diffInHours < 24) return `${diffInHours}h ago`
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `${diffInDays}d ago`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w ago`
  return `${Math.floor(diffInDays / 30)}mo ago`
}

export default function QuestionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"popular" | "recent">("popular")

  const filteredQuestions = sampleQuestions
    .filter((q) => {
      const matchesCategory = !selectedCategory || q.category === selectedCategory
      const matchesSearch =
        !searchQuery ||
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.body.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === "popular") return b.upvotes - a.upvotes
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Questions & Discussions",
            "description": "A safe space for honest questions about Islam. Ask anonymously, discuss openly, and seek the truth together.",
            "url": "https://truthinislam.com/questions",
            "mainEntity": {
              "@type": "QAPage",
              "name": "Questions About Islam"
            }
          })
        }}
      />

      {/* Hero */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Questions & Discussions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              A safe space for honest questions about Islam. Ask anonymously, discuss openly, and seek the truth together.
            </p>
          </motion.div>

          {/* Anonymous Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
              <Shield className="h-4 w-4" />
              <span>All participation is 100% anonymous. Your identity is protected.</span>
            </div>
          </motion.div>

          {/* Search and Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
              <input
                type="search"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-700 bg-slate-800 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
            <Link href="/questions/ask">
              <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white border-0 shadow-lg shadow-red-900/30 whitespace-nowrap">
                <Plus className="h-4 w-4" />
                Ask a Question
              </Button>
            </Link>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category.slug || "all"}
                onClick={() => setSelectedCategory(category.slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.slug
                    ? "border border-amber-500/30 bg-amber-500/10 text-amber-400"
                    : "border border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Questions List */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Sort Options */}
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-slate-400">
              {filteredQuestions.length} questions
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy("popular")}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  sortBy === "popular"
                    ? "bg-slate-700 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-300"
                }`}
              >
                Popular
              </button>
              <button
                onClick={() => setSortBy("recent")}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  sortBy === "recent"
                    ? "bg-slate-700 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-300"
                }`}
              >
                Recent
              </button>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {filteredQuestions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/questions/${question.id}`}>
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer rounded-xl border border-slate-700 bg-slate-800/50">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        {/* Vote counts */}
                        <div className="flex flex-col items-center gap-1 text-sm">
                          <div className="flex items-center gap-1 text-amber-500">
                            <ThumbsUp className="h-4 w-4" />
                            <span className="font-medium">{question.upvotes}</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-500">
                            <MessageSquare className="h-4 w-4" />
                            <span>{question.answerCount}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg font-semibold text-white line-clamp-2">
                              {question.title}
                            </h3>
                            {question.isAnswered && (
                              <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
                                <CheckCircle className="h-3 w-3" />
                                Answered
                              </span>
                            )}
                          </div>

                          <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                            {question.body}
                          </p>

                          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                            <span className="inline-block rounded border border-slate-700 bg-slate-800 px-2 py-0.5 capitalize">
                              {question.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {question.author.displayName}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {formatTimeAgo(question.createdAt)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {question.viewCount.toLocaleString()} views
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">No questions found.</p>
              <Link href="/questions/ask">
                <Button className="mt-4 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white border-0 shadow-lg shadow-red-900/30">
                  Be the first to ask
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Your Questions Matter
            </h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              This is a judgment-free zone. Whether you're a questioning Muslim, an ex-Muslim, or simply curious - your questions are welcome and your identity is protected.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/questions/ask">
                <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white border-0 shadow-lg shadow-red-900/30">
                  <Plus className="h-4 w-4" />
                  Ask Your Question
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500">
                  Browse Articles
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
