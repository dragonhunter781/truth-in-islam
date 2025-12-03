"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Shield, Info, Send, BookOpen, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { value: "violence", label: "Violence & Jihad" },
  { value: "women", label: "Women in Islam" },
  { value: "apostasy", label: "Apostasy & Blasphemy" },
  { value: "scientific", label: "Scientific Issues" },
  { value: "contradictions", label: "Contradictions" },
  { value: "history", label: "History" },
  { value: "muhammad", label: "About Muhammad" },
  { value: "beliefs", label: "Islamic Beliefs" },
  { value: "other", label: "Other Topics" },
]

const exampleQuestions = [
  "Why does Quran 9:5 say to kill polytheists?",
  "How do Muslims explain the marriage to Aisha?",
  "Is the hadith about apostasy authentic?",
  "What's the origin of the Black Stone?",
]

export default function AskQuestionPage() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("")
  const [relatedVerse, setRelatedVerse] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In production, this would submit to Supabase
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to questions page
    window.location.href = "/questions"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/questions"
              className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Questions
            </Link>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Ask a Question
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Your question will be posted anonymously. Be specific and include relevant sources.
            </p>

            {/* Anonymous Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              <Shield className="h-4 w-4" />
              <span>Your identity is completely protected</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                      >
                        Question Title *
                      </label>
                      <input
                        id="title"
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Why does the Quran command violence against disbelievers?"
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                      <p className="mt-1 text-xs text-slate-500">
                        Be specific and imagine you're asking a person
                      </p>
                    </div>

                    {/* Category */}
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                      >
                        Category *
                      </label>
                      <select
                        id="category"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Body */}
                    <div>
                      <label
                        htmlFor="body"
                        className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                      >
                        Details *
                      </label>
                      <textarea
                        id="body"
                        required
                        rows={6}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Provide context and explain what you've already learned or tried to understand..."
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white resize-none"
                      />
                    </div>

                    {/* Related Verse */}
                    <div>
                      <label
                        htmlFor="verse"
                        className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                      >
                        Related Verse or Hadith (optional)
                      </label>
                      <input
                        id="verse"
                        type="text"
                        value={relatedVerse}
                        onChange={(e) => setRelatedVerse(e.target.value)}
                        placeholder="e.g., Quran 9:5 or Sahih Bukhari 6922"
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-between pt-4">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        By submitting, you agree to our community guidelines
                      </p>
                      <Button
                        type="submit"
                        disabled={isSubmitting || !title || !body || !category}
                        className="gap-2 bg-emerald-600 hover:bg-emerald-700"
                      >
                        {isSubmitting ? (
                          "Posting..."
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Post Question
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <HelpCircle className="h-4 w-4 text-emerald-600" />
                    Tips for Good Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <p>• Be specific about what confuses you</p>
                  <p>• Include relevant Quran/Hadith references</p>
                  <p>• Explain what you've already understood</p>
                  <p>• Keep it focused on one issue</p>
                </CardContent>
              </Card>

              {/* Example Questions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <BookOpen className="h-4 w-4 text-emerald-600" />
                    Example Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {exampleQuestions.map((q, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setTitle(q)}
                      className="block w-full text-left text-sm text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                    >
                      "{q}"
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Privacy Note */}
              <Card className="bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <Shield className="h-5 w-5 text-emerald-600 shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-emerald-700 dark:text-emerald-300">
                        Your Privacy is Protected
                      </p>
                      <p className="mt-1 text-emerald-600 dark:text-emerald-400">
                        We never store IP addresses or personal information. Your question will be posted with a random anonymous name.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
