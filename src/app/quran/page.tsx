"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Book, Search, AlertTriangle, ArrowRight, ChevronDown, ChevronUp, BookOpen, ExternalLink, FileText, Scale, Cross, HelpCircle, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { surahs, controversialVerses } from "@/lib/data/quran"
import { crossReferences, bibleVerses } from "@/lib/data/bible"

// Helper to find Bible cross-references for a Quran verse
function getBibleCrossReference(quranRef: string) {
  return crossReferences.find(cr => quranRef.includes(cr.quranRef.split("-")[0]) || cr.quranRef === quranRef)
}

const topicLabels: Record<string, string> = {
  violence: "Violence & Jihad",
  women: "Women's Rights",
  slavery: "Slavery",
  scientific: "Scientific Issues",
  apostasy: "Apostasy",
  abrogation: "Abrogation",
}

const quranIssues = [
  {
    title: "Abrogation (Naskh)",
    description: "The Quran contains verses that contradict each other. Muslim scholars address this through 'abrogation' - later verses cancel earlier ones.",
    icon: FileText
  },
  {
    title: "Scientific Errors",
    description: "Despite claims of scientific miracles, the Quran contains statements that contradict modern science: sun setting in mud (18:86), sperm from backbone (86:6-7).",
    icon: AlertTriangle
  },
  {
    title: "Preservation Questions",
    description: "While Islam claims perfect preservation, historical evidence shows variant readings and missing verses mentioned in hadith.",
    icon: BookOpen
  },
  {
    title: "Borrowing from Other Sources",
    description: "Many Quranic stories closely parallel earlier Jewish and Christian apocryphal texts, Zoroastrian legends, and Arabian folklore.",
    icon: Scale
  }
]

export default function QuranPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [expandedVerse, setExpandedVerse] = useState<string | null>(null)
  const [showAllSurahs, setShowAllSurahs] = useState(false)
  const [showQuestionsFor, setShowQuestionsFor] = useState<string | null>(null)

  const filteredSurahs = surahs.filter(
    (s) =>
      s.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.nameTransliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.number.toString().includes(searchQuery)
  )

  const displayedSurahs = showAllSurahs ? filteredSurahs : filteredSurahs.slice(0, 24)

  const allVerses = Object.entries(controversialVerses).flatMap(([topic, verses]) =>
    verses.map((v) => ({ ...v, category: topic }))
  )

  const filteredVerses = selectedTopic
    ? allVerses.filter((v) => v.category === selectedTopic)
    : allVerses

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
            <Book className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              The Quran Examined
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Browse all 114 surahs with Arabic text, transliteration, and critical analysis. {allVerses.length}+ controversial verses examined.
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
                placeholder="Search surahs by name or number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Issues */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Critical Issues with the Quran
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quranIssues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <issue.icon className="h-5 w-5 text-emerald-600" />
                      <CardTitle className="text-base">{issue.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{issue.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Controversial Verses Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-amber-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Controversial Verses ({allVerses.length})
            </h2>
          </div>

          {/* Topic Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedTopic(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !selectedTopic
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                  : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border"
              }`}
            >
              All Topics
            </button>
            {Object.entries(topicLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedTopic(key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedTopic === key
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                    : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border"
                }`}
              >
                {label} ({controversialVerses[key]?.length || 0})
              </button>
            ))}
          </div>

          {/* Verses Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {filteredVerses.slice(0, 12).map((verse, index) => (
              <motion.div
                key={verse.reference}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    expandedVerse === verse.reference ? "ring-2 ring-emerald-500" : ""
                  }`}
                  onClick={() =>
                    setExpandedVerse(
                      expandedVerse === verse.reference ? null : verse.reference
                    )
                  }
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-emerald-600">
                            {verse.reference}
                          </span>
                          <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded capitalize">
                            {verse.category}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {verse.topic}
                        </p>
                      </div>
                      {expandedVerse === verse.reference ? (
                        <ChevronUp className="h-5 w-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      )}
                    </div>

                    {expandedVerse === verse.reference && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
                      >
                        {/* Full Arabic Text */}
                        <p className="text-right text-2xl font-arabic text-slate-900 dark:text-white mb-4 leading-loose">
                          {verse.arabic}
                        </p>

                        {/* Transliteration */}
                        <div className="mb-3 p-2 bg-slate-50 dark:bg-slate-800/50 rounded">
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-semibold">Transliteration:</p>
                          <p className="text-sm italic text-slate-600 dark:text-slate-300">
                            {verse.transliteration}
                          </p>
                        </div>

                        {/* Multiple Translations */}
                        <div className="space-y-3 mb-4">
                          <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded">
                            <p className="text-xs text-emerald-700 dark:text-emerald-400 mb-1 font-semibold">Sahih International:</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              "{verse.english}"
                            </p>
                          </div>
                          {verse.pickthall && (
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                              <p className="text-xs text-blue-700 dark:text-blue-400 mb-1 font-semibold">Pickthall:</p>
                              <p className="text-sm text-slate-700 dark:text-slate-300">
                                "{verse.pickthall}"
                              </p>
                            </div>
                          )}
                          {verse.yusufAli && (
                            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                              <p className="text-xs text-purple-700 dark:text-purple-400 mb-1 font-semibold">Yusuf Ali:</p>
                              <p className="text-sm text-slate-700 dark:text-slate-300">
                                "{verse.yusufAli}"
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Tafsir Reference */}
                        {verse.tafsir && (
                          <div className="mb-3 p-2 bg-amber-50 dark:bg-amber-900/20 rounded border border-amber-200 dark:border-amber-800">
                            <p className="text-xs text-amber-700 dark:text-amber-400 mb-1 font-semibold">Tafsir Ibn Kathir:</p>
                            <p className="text-xs text-slate-700 dark:text-slate-300">{verse.tafsir}</p>
                          </div>
                        )}

                        {/* Source Links */}
                        <div className="mt-3 flex flex-wrap gap-2">
                          <a
                            href={`https://quran.com/${verse.surahNumber}/${verse.ayah}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button size="sm" variant="outline" className="text-xs gap-1">
                              <BookOpen className="h-3 w-3" />
                              Quran.com
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </a>
                          <a
                            href={`https://sunnah.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button size="sm" variant="outline" className="text-xs gap-1">
                              Related Hadith
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </a>
                        </div>

                        {/* Related Articles */}
                        {verse.relatedArticles && verse.relatedArticles.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-2">
                              <LinkIcon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Related Articles:</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {verse.relatedArticles.map((slug) => (
                                <Link key={slug} href={`/blog/${slug}`}>
                                  <Button size="sm" variant="ghost" className="text-xs h-7">
                                    {slug.split('-').slice(0, 3).join(' ')}...
                                  </Button>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Quick Questions */}
                        {verse.commonQuestions && verse.commonQuestions.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setShowQuestionsFor(showQuestionsFor === verse.reference ? null : verse.reference)
                              }}
                              className="flex items-center gap-2 w-full text-left mb-2 hover:text-emerald-600 transition-colors"
                            >
                              <HelpCircle className="h-4 w-4 text-emerald-600" />
                              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Common Questions ({verse.commonQuestions.length})
                              </p>
                              {showQuestionsFor === verse.reference ? (
                                <ChevronUp className="h-4 w-4 ml-auto" />
                              ) : (
                                <ChevronDown className="h-4 w-4 ml-auto" />
                              )}
                            </button>
                            {showQuestionsFor === verse.reference && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="space-y-3"
                              >
                                {verse.commonQuestions.map((qa, idx) => (
                                  <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                                      Q: {qa.question}
                                    </p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                      A: {qa.answer}
                                    </p>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </div>
                        )}

                        {/* Bible Cross-Reference */}
                        {(() => {
                          const crossRef = getBibleCrossReference(verse.reference)
                          if (crossRef) {
                            return (
                              <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <Cross className="h-4 w-4 text-amber-600" />
                                  <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                                    Bible Comparison
                                  </span>
                                  <span className={`text-xs px-2 py-0.5 rounded ${
                                    crossRef.type === "contradiction"
                                      ? "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                                      : crossRef.type === "context"
                                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                                      : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                  }`}>
                                    {crossRef.type}
                                  </span>
                                </div>
                                <p className="text-xs text-amber-800 dark:text-amber-300 mb-2">
                                  <span className="font-medium">{crossRef.bibleRef}:</span> {crossRef.explanation}
                                </p>
                                <a
                                  href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(crossRef.bibleRef)}&version=ESV`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Button size="sm" variant="outline" className="text-xs gap-1 bg-white dark:bg-slate-800">
                                    Read in Bible <ExternalLink className="h-3 w-3" />
                                  </Button>
                                </a>
                              </div>
                            )
                          }
                          return null
                        })()}
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Surahs */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                All 114 Surahs
              </h2>
            </div>
            <span className="text-sm text-slate-500">
              {filteredSurahs.length} surahs
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {displayedSurahs.map((surah, index) => (
              <motion.div
                key={surah.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 12) * 0.02 }}
              >
                <a
                  href={`https://quran.com/${surah.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer h-full">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-bold dark:bg-emerald-900/50 dark:text-emerald-300">
                          {surah.number}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-900 dark:text-white truncate">
                            {surah.nameTransliteration}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {surah.nameEnglish} • {surah.totalVerses} verses
                          </p>
                        </div>
                        <p className="text-lg font-arabic text-slate-600 dark:text-slate-400">
                          {surah.nameArabic}
                        </p>
                      </div>
                      <div className="mt-2 flex gap-2">
                        <span
                          className={`text-xs px-2 py-0.5 rounded ${
                            surah.revelationType === "Meccan"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                              : "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
                          }`}
                        >
                          {surah.revelationType}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          {!showAllSurahs && filteredSurahs.length > 24 && (
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                onClick={() => setShowAllSurahs(true)}
                className="gap-2"
              >
                Show All {filteredSurahs.length} Surahs
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}

          {filteredSurahs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400">
                No surahs found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related Topics - Internal Links */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Explore Related Topics
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/hadith">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    Hadith Collection
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Explore authentic hadith that provide context and additional teachings from Muhammad's life
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/prophets">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    Prophets in Islam
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Compare how Islam portrays biblical prophets like Jesus, Moses, and Abraham
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    In-Depth Articles
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Read detailed analyses of Islamic teachings on violence, women, apostasy, and more
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            External Quran Resources
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Compare translations and read tafsir from authoritative sources
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://quran.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                Quran.com <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://sunnah.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                Sunnah.com <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://www.biblegateway.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Cross className="h-4 w-4" />
                Bible Gateway <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
