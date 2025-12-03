"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, AlertTriangle, ArrowRight, Users, Scroll, Scale, ChevronDown, ExternalLink, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useState } from "react"
import controversialHadiths from "../../../data/hadith/controversial_hadiths.json"

// Helper function to generate sunnah.com links
function getSunnahLink(collection: string, reference: string): string {
  const collectionMap: Record<string, string> = {
    "Sahih al-Bukhari": "bukhari",
    "Sahih Muslim": "muslim",
    "Sunan Abu Dawud": "abudawud",
    "Sunan an-Nasa'i": "nasai",
    "Jami at-Tirmidhi": "tirmidhi",
    "Sunan Ibn Majah": "ibnmajah"
  }

  const slug = collectionMap[collection]
  if (!slug) return "#"

  // Parse reference like "5:58:234" or "9:84:57"
  const parts = reference.split(":")
  if (parts.length >= 2) {
    const book = parts[0]
    const hadithNum = parts[parts.length - 1]
    return `https://sunnah.com/${slug}/${hadithNum}`
  }

  return `https://sunnah.com/${slug}`
}

// Quick Questions component
function QuickQuestions({ topic, questions }: { topic: string; questions: Array<{ q: string; a: string; sources?: string[] }> }) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedQ, setExpandedQ] = useState<number | null>(null)

  return (
    <div className="mt-4 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
      >
        <span className="flex items-center gap-2 font-medium text-slate-900 dark:text-white">
          <MessageCircle className="h-4 w-4" />
          Quick Questions About {topic}
        </span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="p-4 space-y-3 bg-white dark:bg-slate-900">
          {questions.map((item, idx) => (
            <div key={idx} className="border-l-2 border-emerald-500 pl-3">
              <button
                onClick={() => setExpandedQ(expandedQ === idx ? null : idx)}
                className="text-left w-full font-medium text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Q: {item.q}
              </button>
              {expandedQ === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <p>{item.a}</p>
                  {item.sources && item.sources.length > 0 && (
                    <div className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                      Sources: {item.sources.join(", ")}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Hadith display component with full text
function HadithCard({ hadith, relatedLinks }: {
  hadith: any;
  relatedLinks?: { quran?: string[]; blog?: string[]; prophets?: string[] }
}) {
  const sunnahLink = getSunnahLink(hadith.collection, hadith.reference)

  return (
    <Card className="h-full overflow-hidden bg-slate-800/50 border-slate-700">
      <CardHeader className="bg-gradient-to-r from-red-500/20 to-amber-500/20 border-b border-red-500/30">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div className="flex-1">
            <CardTitle className="text-base text-red-400 mb-1">
              {hadith.collection} {hadith.reference}
            </CardTitle>
            <CardDescription className="text-xs text-slate-400">
              Hadith #{hadith.hadith_number} | Narrator: {hadith.narrator}
            </CardDescription>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
              {hadith.grading}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400">
              {hadith.topic}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        {/* Arabic Text */}
        {hadith.arabic && (
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
            <p className="text-right text-xl leading-loose font-arabic text-white" dir="rtl">
              {hadith.arabic}
            </p>
          </div>
        )}

        {/* English Translation */}
        <blockquote className="text-slate-300 italic border-l-4 border-amber-500 pl-4">
          "{hadith.english}"
        </blockquote>

        {/* Source Link */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="text-xs text-slate-400">
            Tradition: {hadith.tradition} | Grading: {hadith.grading}
          </div>
          <a
            href={sunnahLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-amber-500 hover:text-amber-400 hover:underline"
          >
            View Source
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Related Links */}
        {relatedLinks && (
          <div className="pt-3 border-t border-slate-700 space-y-2">
            <p className="text-xs font-medium text-slate-400">Related Content:</p>
            <div className="flex flex-wrap gap-2">
              {relatedLinks.quran?.map((verse, idx) => (
                <Link key={idx} href={`/quran#${verse}`}>
                  <Button variant="outline" size="sm" className="text-xs h-7">
                    Quran {verse}
                  </Button>
                </Link>
              ))}
              {relatedLinks.blog?.map((slug, idx) => (
                <Link key={idx} href={`/blog/${slug}`}>
                  <Button variant="outline" size="sm" className="text-xs h-7">
                    Read Article
                  </Button>
                </Link>
              ))}
              {relatedLinks.prophets?.map((prophet, idx) => (
                <Link key={idx} href={`/prophets/${prophet}`}>
                  <Button variant="outline" size="sm" className="text-xs h-7">
                    About {prophet}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

const hadithCollections = [
  {
    name: "Sahih Bukhari",
    compiler: "Muhammad al-Bukhari",
    hadiths: "~7,275",
    status: "Most authentic",
    description: "Compiled 200+ years after Muhammad's death. Considered the most authentic collection.",
    link: "https://sunnah.com/bukhari"
  },
  {
    name: "Sahih Muslim",
    compiler: "Muslim ibn al-Hajjaj",
    hadiths: "~3,033",
    status: "Second most authentic",
    description: "Compiled around the same period as Bukhari.",
    link: "https://sunnah.com/muslim"
  },
  {
    name: "Sunan Abu Dawud",
    compiler: "Abu Dawud",
    hadiths: "~4,800",
    status: "Authentic",
    description: "Third of the 'Six Books' of hadith.",
    link: "https://sunnah.com/abudawud"
  },
  {
    name: "Jami at-Tirmidhi",
    compiler: "At-Tirmidhi",
    hadiths: "~3,956",
    status: "Authentic",
    description: "Fourth of the 'Six Books.'",
    link: "https://sunnah.com/tirmidhi"
  },
  {
    name: "Sunan an-Nasa'i",
    compiler: "An-Nasa'i",
    hadiths: "~5,761",
    status: "Authentic",
    description: "Fifth of the 'Six Books' of Sunni hadith.",
    link: "https://sunnah.com/nasai"
  },
  {
    name: "Sunan Ibn Majah",
    compiler: "Ibn Majah",
    hadiths: "~4,341",
    status: "Authentic",
    description: "Sixth of the 'Six Books' of hadith.",
    link: "https://sunnah.com/ibnmajah"
  },
  {
    name: "Al-Kafi (Shia)",
    compiler: "Al-Kulayni",
    hadiths: "~16,000",
    status: "Most authentic Shia",
    description: "The most important Shia hadith collection.",
    link: "https://thaqalayn.net"
  },
  {
    name: "Man La Yahduruhu al-Faqih (Shia)",
    compiler: "Ibn Babawayh",
    hadiths: "~9,044",
    status: "Authentic Shia",
    description: "One of the four major Shia hadith books.",
    link: "https://thaqalayn.net"
  }
]

// Quick questions data for each topic
const topicQuestions: Record<string, Array<{ q: string; a: string; sources?: string[] }>> = {
  "Child Marriage": [
    {
      q: "Wasn't this normal in the 7th century?",
      a: "While child marriage existed in ancient societies, Muhammad is claimed to be the perfect example for all time (Quran 33:21). If his morality is timeless and universal, why does it need historical context? Moreover, many contemporary societies already condemned such practices.",
      sources: ["Quran 33:21", "Sahih Bukhari 5:58:234"]
    },
    {
      q: "Do Muslims still practice child marriage today?",
      a: "Yes. Many Islamic countries permit child marriage based on Muhammad's example with Aisha. Countries like Yemen, Iran, and parts of Pakistan allow marriage at extremely young ages, citing these hadiths as justification.",
      sources: ["UNICEF Child Marriage Data"]
    },
    {
      q: "Did Aisha really play with dolls?",
      a: "Yes, Sahih Muslim 8:3310 explicitly mentions Aisha playing with dolls when she was brought to Muhammad's house at age 9. Islamic scholars note that playing with dolls was only permitted for prepubescent girls, confirming her young age.",
      sources: ["Sahih Muslim 8:3310"]
    }
  ],
  "Death for Apostasy": [
    {
      q: "Does Islam really kill apostates?",
      a: "Yes. Multiple sahih (authentic) hadiths clearly command execution for those who leave Islam. This is not a fringe interpretation—it's mainstream Islamic jurisprudence. Many Muslim-majority countries still enforce apostasy laws today.",
      sources: ["Sahih Bukhari 9:84:57", "Sahih Bukhari 9:83:17"]
    },
    {
      q: "What about 'no compulsion in religion' (Quran 2:256)?",
      a: "That verse is considered abrogated (canceled) by later verses commanding warfare. Even if not abrogated, Islamic scholars interpret it to mean no forced conversion—but leaving Islam is still punishable by death. You can't be forced in, but you can't leave.",
      sources: ["Quran 2:256", "Quran 9:29"]
    },
    {
      q: "Which countries enforce apostasy laws?",
      a: "At least 13 Muslim-majority countries have death penalty for apostasy: Afghanistan, Iran, Malaysia, Maldives, Mauritania, Nigeria (northern states), Qatar, Saudi Arabia, Somalia, Sudan, United Arab Emirates, Yemen, and Pakistan (blasphemy laws often used against apostates).",
      sources: ["Library of Congress Report on Apostasy Laws"]
    }
  ],
  "Women Mentally Deficient": [
    {
      q: "Isn't this just about hormones during menstruation?",
      a: "No. Muhammad explicitly states this as the reason why women's testimony is worth half a man's and why they're deficient in religion (missing prayers during menstruation). This isn't about temporary states—it's presented as an inherent, permanent deficiency in women's minds.",
      sources: ["Sahih Bukhari 1:6:301", "Sahih Bukhari 2:24:541"]
    },
    {
      q: "How does this affect women in Islamic law?",
      a: "This hadith is used to justify: women's testimony being worth half a man's in court, women receiving half the inheritance, men being guardians over women, and men having authority to 'discipline' wives. It's foundational to gender inequality in Sharia law.",
      sources: ["Quran 2:282", "Quran 4:11", "Quran 4:34"]
    }
  ],
  "Majority in Hell are Women": [
    {
      q: "Why does Muhammad say most of hell is women?",
      a: "According to the hadith, it's because women are 'ungrateful' to their husbands and are deficient in intelligence and religion. This teaching has profound psychological effects on Muslim women, instilling fear and subordination.",
      sources: ["Sahih Bukhari 1:6:301", "Sahih Muslim 36:6596"]
    }
  ],
  "Permission to Beat Wives": [
    {
      q: "Does the Quran really permit wife-beating?",
      a: "Yes. Quran 4:34 explicitly allows husbands to 'strike' disobedient wives. While some modern Muslims try to soften this to mean 'tap lightly,' classical tafsir (Quran commentary) and hadith make clear it means actual beating. The hadith confirms Muhammad approved of this practice.",
      sources: ["Quran 4:34", "Sahih Muslim 4:2127"]
    },
    {
      q: "What about the hadith saying 'don't beat like a slave'?",
      a: "This hadith (Abu Dawud 2141) actually makes things worse—it assumes beating slaves is normal and just says don't beat your wife quite that severely. It's comparing domestic violence to slave-beating, not prohibiting it.",
      sources: ["Sunan Abu Dawud 11:2141"]
    }
  ],
  "Mass Execution Approved": [
    {
      q: "What was the Banu Qurayza massacre?",
      a: "After the Siege of Banu Qurayza (627 CE), Muhammad approved the execution of 600-900 Jewish men and teenage boys (determined by puberty). Women and children were enslaved. Muhammad called this judgment 'the judgment of Allah' and participated in the beheadings.",
      sources: ["Sahih Bukhari 5:59:362", "Sunan Abu Dawud 38:4390"]
    },
    {
      q: "How were boys selected for execution?",
      a: "Boys were examined for pubic hair. If they had begun puberty, they were beheaded with the men. If not, they were spared and enslaved. Atiyyah al-Qurazi, the narrator of the hadith, was one who was spared because he hadn't reached puberty.",
      sources: ["Sunan Abu Dawud 38:4390"]
    }
  ],
  "Camel Urine as Medicine": [
    {
      q: "Did Muhammad really prescribe camel urine?",
      a: "Yes. Multiple authentic hadiths record Muhammad telling sick people to drink camel urine and milk as medicine. This is not metaphorical—it's literal medical advice from the 'perfect example for mankind.'",
      sources: ["Sahih Bukhari 1:4:234", "Sahih Bukhari 7:71:590"]
    },
    {
      q: "Do Muslims still drink camel urine?",
      a: "Some do. There are modern Islamic scholars and practitioners who promote camel urine as medicine based on these hadiths. It's sold in some Islamic countries, and there have been health warnings about MERS coronavirus transmission from this practice.",
      sources: ["WHO MERS Guidelines"]
    }
  ],
  "Fly Wing Medicine": [
    {
      q: "What does the fly hadith actually say?",
      a: "Muhammad said if a fly falls in your drink, you should dip the whole fly in (not just half), then throw it away, because one wing has disease and the other has the cure. This contradicts basic hygiene and germ theory.",
      sources: ["Sahih Bukhari 4:54:537"]
    }
  ],
  "Sun Prostrates Under Throne": [
    {
      q: "Is this metaphorical?",
      a: "Classical Islamic scholars took this literally—that the sun physically travels and prostrates beneath Allah's throne before asking permission to rise again. This reflects a geocentric, pre-scientific understanding of cosmology.",
      sources: ["Sahih Bukhari 4:54:421"]
    }
  ],
  "Black Dogs are Devils": [
    {
      q: "Why are black dogs singled out?",
      a: "Muhammad said black dogs are devils (shaytan) and that they, along with donkeys and women, can invalidate your prayer if they pass in front of you. Some hadiths record Muhammad ordering the killing of all dogs, then later permitting keeping hunting dogs.",
      sources: ["Sahih Muslim 4:1032"]
    }
  ],
  "Adult Breastfeeding": [
    {
      q: "Is this hadith authentic?",
      a: "Yes, it's in Sahih Muslim and Sunan Abu Dawud—among the most authentic hadith collections. Muhammad told a woman to breastfeed an adult man (Salim) to make him 'mahram' (unmarriageable relative) so he could be alone with her. This bizarre ruling has caused controversy even among Muslims.",
      sources: ["Sahih Muslim 8:3425", "Sunan Abu Dawud 12:2061"]
    },
    {
      q: "Do any scholars accept this today?",
      a: "Most contemporary scholars are deeply embarrassed by this hadith and try to dismiss it or claim it was specific to Salim only. However, it's in the most authentic collections and some scholars have ruled that the practice is still valid.",
      sources: ["Islamic fatwa databases"]
    }
  ],
  "Jihad Guarantees Paradise": [
    {
      q: "Is martyrdom really the best way to paradise?",
      a: "According to hadith, yes. Muhammad said that a shahid (martyr in jihad) would wish to return to earth and be martyred ten times because of the honor he receives. This teaching has motivated countless suicide attacks and jihadi violence.",
      sources: ["Sahih Bukhari 4:52:46", "Sahih Bukhari 4:52:72"]
    }
  ],
  "Muhammad Sold Slaves": [
    {
      q: "Did Muhammad own slaves?",
      a: "Yes. Multiple authentic hadiths document Muhammad owning, buying, selling, and gifting slaves. He also had sexual relations with at least one slave (Maria the Copt) and permitted his followers to have sex with female captives of war.",
      sources: ["Sahih Bukhari 3:46:717", "Sahih Muslim 8:3432"]
    },
    {
      q: "Did Islam abolish slavery?",
      a: "No. The Quran and hadith regulate slavery but never abolish it. In fact, the Quran permits sex with female slaves (4:24, 23:5-6). Islamic slavery was only ended in Muslim countries through Western colonial pressure in the 19th-20th centuries.",
      sources: ["Quran 4:24", "Quran 23:5-6"]
    }
  ],
  "Sex with Captive Women": [
    {
      q: "Does Islam permit rape of war captives?",
      a: "Yes. The Quran explicitly permits sexual relations with female war captives ('those your right hand possesses'), and the hadith confirms Muslim men practiced coitus interruptus with captive women to avoid pregnancy. Consent is never mentioned—these women were slaves.",
      sources: ["Quran 4:24", "Sahih Muslim 8:3432"]
    }
  ],
  "Temporary Marriage Permitted": [
    {
      q: "What is Mut'a (temporary marriage)?",
      a: "Mut'a is a form of temporary marriage practiced by Shia Muslims, where a man can 'marry' a woman for a specified period (hours, days, months) in exchange for payment. Sunnis believe it was later prohibited, but the hadiths confirm Muhammad initially permitted it.",
      sources: ["Sahih Bukhari 7:62:51", "Sahih Muslim 8:3248"]
    }
  ]
}

export default function HadithPage() {
  type HadithData = typeof controversialHadiths

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Hadith Examined - Sayings and Actions of Muhammad",
            "description": "The sayings and actions of Muhammad that shape Islamic law and practice. These authenticated traditions reveal aspects of Islam that are rarely discussed.",
            "author": {
              "@type": "Organization",
              "name": "Truth in Islam"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Truth in Islam"
            },
            "url": "https://truthinislam.com/hadith",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://truthinislam.com/hadith"
            },
            "articleSection": "Islamic Texts",
            "keywords": ["Hadith", "Sahih Bukhari", "Sahih Muslim", "Muhammad", "Islamic tradition", "Sunnah"]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-slate-900">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Hadith Examined
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              The sayings and actions of Muhammad that shape Islamic law and practice. These authenticated traditions reveal aspects of Islam that are rarely discussed. All hadiths shown are graded Sahih (authentic) by mainstream Islamic scholarship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Hadith */}
      <section className="py-16 bg-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden bg-slate-800/50 border-slate-700">
              <CardHeader className="bg-gradient-to-r from-red-600 to-amber-600 text-white border-b border-amber-500/30">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Scroll className="h-6 w-6" />
                  What is Hadith?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-300 mb-4">
                  Hadith are reports of the words, actions, and approvals of Muhammad. They form the second most important source of Islamic law after the Quran. Muslims are commanded to follow Muhammad's example (sunnah) in all aspects of life.
                </p>
                <p className="text-slate-300 mb-4">
                  The Quran says: <Link href="/quran#33:21" className="text-amber-500 hover:text-amber-400 underline">"Indeed in the Messenger of Allah you have a good example to follow" (33:21)</Link>, making Muhammad's recorded behavior binding on Muslims.
                </p>
                <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
                  <p className="text-amber-400 flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Important:</strong> The hadith collections were compiled 200+ years after Muhammad's death, raising questions about their reliability. However, they are considered authentic (sahih) by mainstream Islamic scholarship and form the basis of Sharia law.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Hadith Collections */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <BookOpen className="h-8 w-8 text-amber-500" />
              Major Hadith Collections
            </h2>
            <p className="mt-4 text-slate-400">
              Sunni and Shia collections of Muhammad's teachings
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {hadithCollections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{collection.name}</CardTitle>
                    <CardDescription className="text-slate-400">{collection.compiler}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-300">
                        <strong>Hadiths:</strong> {collection.hadiths}
                      </p>
                      <p className="text-amber-400">
                        {collection.status}
                      </p>
                      <p className="text-slate-400">
                        {collection.description}
                      </p>
                      <a
                        href={collection.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-amber-500 hover:text-amber-400 hover:underline mt-2"
                      >
                        Browse Collection
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aisha's Age - Child Marriage */}
      <section className="py-16 bg-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Muhammad's Marriage to Aisha
            </h2>
            <p className="text-slate-400 max-w-3xl">
              Multiple sahih hadiths confirm Muhammad married Aisha at age 6 and consummated the marriage when she was 9 years old. This is not disputed in Islamic scholarship. Related: <Link href="/blog/muhammad-aisha-marriage-age" className="text-amber-500 hover:text-amber-400 underline">Full article on Aisha's age</Link> | <Link href="/prophets/muhammad" className="text-amber-500 hover:text-amber-400 underline">About Muhammad</Link>
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {(controversialHadiths as HadithData).aisha_marriage.map((hadith, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <HadithCard
                  hadith={hadith}
                  relatedLinks={{
                    quran: ["65:4"],
                    blog: ["muhammad-aisha-marriage-age", "child-marriage-islam-sources"],
                    prophets: ["muhammad"]
                  }}
                />
              </motion.div>
            ))}
          </div>

          <QuickQuestions topic="Child Marriage" questions={topicQuestions["Child Marriage"]} />
        </div>
      </section>

      {/* Apostasy Death Penalty */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Death Penalty for Apostasy
            </h2>
            <p className="text-slate-400 max-w-3xl">
              "Whoever changes his religion, kill him." This command appears in multiple authentic hadiths and is enforced in 13+ Muslim-majority countries today. Related: <Link href="/blog/death-leaving-islam-hadith" className="text-amber-500 hover:text-amber-400 underline">Death for leaving Islam</Link> | <Link href="/blog/apostasy-laws-countries" className="text-amber-500 hover:text-amber-400 underline">Countries with apostasy laws</Link>
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(controversialHadiths as HadithData).apostasy_death.map((hadith, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <HadithCard
                  hadith={hadith}
                  relatedLinks={{
                    quran: ["2:256", "4:89"],
                    blog: ["death-leaving-islam-hadith", "change-religion-kill-him", "apostasy-laws-countries"]
                  }}
                />
              </motion.div>
            ))}
          </div>

          <QuickQuestions topic="Death for Apostasy" questions={topicQuestions["Death for Apostasy"]} />
        </div>
      </section>

      {/* Women's Status */}
      <section className="py-16 bg-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Women in Hadith: Deficiency and Hell
            </h2>
            <p className="text-slate-400 max-w-3xl">
              Muhammad declared women deficient in intelligence and religion, with the majority of Hell's inhabitants being women. Related: <Link href="/quran#4:34" className="text-amber-500 hover:text-amber-400 underline">Quran 4:34 (wife beating)</Link> | <Link href="/blog/women-deficient-mind-religion" className="text-amber-500 hover:text-amber-400 underline">Women's deficiency explained</Link>
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Mentally Deficient</h3>
              {(controversialHadiths as HadithData).women_deficient.map((hadith, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <HadithCard
                    hadith={hadith}
                    relatedLinks={{
                      quran: ["2:282", "4:11", "4:34"],
                      blog: ["women-deficient-mind-religion", "women-testimony-half-quran"]
                    }}
                  />
                </motion.div>
              ))}
              <QuickQuestions topic="Women Mentally Deficient" questions={topicQuestions["Women Mentally Deficient"]} />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Majority in Hell</h3>
              {(controversialHadiths as HadithData).women_hell.map((hadith, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <HadithCard
                    hadith={hadith}
                    relatedLinks={{
                      blog: ["hell-majority-women"]
                    }}
                  />
                </motion.div>
              ))}
              <QuickQuestions topic="Majority in Hell are Women" questions={topicQuestions["Majority in Hell are Women"]} />
            </div>
          </div>
        </div>
      </section>

      {/* Wife Beating */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Permission to Beat Wives
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
              The hadith confirms what Quran 4:34 permits: husbands may strike disobedient wives. Muhammad advised not beating them "like slaves," implying beating slaves was normal. Related: <Link href="/quran#4:34" className="text-emerald-600 dark:text-emerald-400 hover:underline">Quran 4:34 full text</Link> | <Link href="/blog/wife-beating-quran-4-34" className="text-emerald-600 dark:text-emerald-400 hover:underline">Wife beating in Islam</Link>
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {(controversialHadiths as HadithData).wife_beating.map((hadith, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <HadithCard
                  hadith={hadith}
                  relatedLinks={{
                    quran: ["4:34"],
                    blog: ["wife-beating-quran-4-34"]
                  }}
                />
              </motion.div>
            ))}
          </div>

          <QuickQuestions topic="Permission to Beat Wives" questions={topicQuestions["Permission to Beat Wives"]} />
        </div>
      </section>

      {/* Banu Qurayza Massacre */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              The Banu Qurayza Massacre
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
              600-900 Jewish men and boys were beheaded, women and children enslaved. Muhammad approved this judgment and called it "the judgment of Allah." Boys were tested for puberty—those with pubic hair were executed. Related: <Link href="/blog/banu-qurayza-massacre" className="text-emerald-600 dark:text-emerald-400 hover:underline">The Banu Qurayza massacre explained</Link> | <Link href="/prophets/muhammad" className="text-emerald-600 dark:text-emerald-400 hover:underline">Muhammad's campaigns</Link>
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {(controversialHadiths as HadithData).banu_qurayza.map((hadith, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <HadithCard
                  hadith={hadith}
                  relatedLinks={{
                    blog: ["banu-qurayza-massacre", "muhammad-military-campaigns"],
                    prophets: ["muhammad"]
                  }}
                />
              </motion.div>
            ))}
          </div>

          <QuickQuestions topic="Mass Execution Approved" questions={topicQuestions["Mass Execution Approved"]} />
        </div>
      </section>

      {/* Scientific Errors */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Scientific Claims in Hadith
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
              Muhammad made medical and scientific claims that contradict modern knowledge: camel urine as medicine, fly wings containing cures, and the sun prostrating under Allah's throne. Related: <Link href="/blog/camel-urine-medicine-hadith" className="text-emerald-600 dark:text-emerald-400 hover:underline">Camel urine hadith</Link> | <Link href="/blog/sun-prostrates-throne" className="text-emerald-600 dark:text-emerald-400 hover:underline">Sun prostrates</Link>
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ...(controversialHadiths as HadithData).drinking_camel_urine,
              ...(controversialHadiths as HadithData).fly_in_drink,
              ...(controversialHadiths as HadithData).sun_prostrates,
              ...(controversialHadiths as HadithData).black_dogs
            ].map((hadith, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <HadithCard
                  hadith={hadith}
                  relatedLinks={{
                    quran: ["18:86", "67:5", "86:5-7"],
                    blog: ["camel-urine-medicine-hadith", "fly-wing-cure-hadith", "sun-prostrates-throne"]
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <QuickQuestions topic="Camel Urine as Medicine" questions={topicQuestions["Camel Urine as Medicine"]} />
            <QuickQuestions topic="Fly Wing Medicine" questions={topicQuestions["Fly Wing Medicine"]} />
            <QuickQuestions topic="Sun Prostrates Under Throne" questions={topicQuestions["Sun Prostrates Under Throne"]} />
            <QuickQuestions topic="Black Dogs are Devils" questions={topicQuestions["Black Dogs are Devils"]} />
          </div>
        </div>
      </section>

      {/* Marriage and Sexual Ethics */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Marriage and Sexual Ethics
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
              Hadiths on temporary marriage (Mut'a), adult breastfeeding, and other controversial rulings. Related: <Link href="/blog/temporary-marriage-muta" className="text-emerald-600 dark:text-emerald-400 hover:underline">Temporary marriage</Link> | <Link href="/blog/breastfeeding-adult-men-hadith" className="text-emerald-600 dark:text-emerald-400 hover:underline">Adult breastfeeding</Link>
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Temporary Marriage (Mut'a)</h3>
              {(controversialHadiths as HadithData).temporary_marriage.map((hadith, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <HadithCard
                    hadith={hadith}
                    relatedLinks={{
                      blog: ["temporary-marriage-muta"]
                    }}
                  />
                </motion.div>
              ))}
              <QuickQuestions topic="Temporary Marriage Permitted" questions={topicQuestions["Temporary Marriage Permitted"]} />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Adult Breastfeeding</h3>
              {(controversialHadiths as HadithData).breastfeeding_adults.map((hadith, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <HadithCard
                    hadith={hadith}
                    relatedLinks={{
                      blog: ["breastfeeding-adult-men-hadith"]
                    }}
                  />
                </motion.div>
              ))}
              <QuickQuestions topic="Adult Breastfeeding" questions={topicQuestions["Adult Breastfeeding"]} />
            </div>
          </div>
        </div>
      </section>

      {/* Jihad and Violence */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Jihad: Rewards and Martyrdom
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
              Hadiths promising paradise to those who kill and are killed in Allah's cause. These teachings have motivated countless acts of violence. Related: <Link href="/quran#9:111" className="text-emerald-600 dark:text-emerald-400 hover:underline">Quran 9:111</Link> | <Link href="/blog/jihad-holy-war-meaning" className="text-emerald-600 dark:text-emerald-400 hover:underline">Jihad explained</Link>
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {(controversialHadiths as HadithData).jihad_rewards.map((hadith, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <HadithCard
                  hadith={hadith}
                  relatedLinks={{
                    quran: ["9:111", "4:74", "9:5"],
                    blog: ["jihad-holy-war-meaning", "paradise-killing-quran-9-111"]
                  }}
                />
              </motion.div>
            ))}
          </div>

          <QuickQuestions topic="Jihad Guarantees Paradise" questions={topicQuestions["Jihad Guarantees Paradise"]} />
        </div>
      </section>

      {/* Slavery */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Muhammad and Slavery
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
              Authentic hadiths documenting Muhammad's ownership, sale, and sexual use of slaves. Islam never abolished slavery—it was ended by Western colonial pressure. Related: <Link href="/quran#4:24" className="text-emerald-600 dark:text-emerald-400 hover:underline">Quran on slavery</Link> | <Link href="/blog/muhammad-slave-owner-trader" className="text-emerald-600 dark:text-emerald-400 hover:underline">Muhammad as slave owner</Link>
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {(controversialHadiths as HadithData).slavery_hadith.map((hadith, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <HadithCard
                  hadith={hadith}
                  relatedLinks={{
                    quran: ["4:24", "23:5-6", "33:50"],
                    blog: ["muhammad-slave-owner-trader", "sex-captive-women-islam", "slavery-quran-verses"],
                    prophets: ["muhammad"]
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <QuickQuestions topic="Muhammad Sold Slaves" questions={topicQuestions["Muhammad Sold Slaves"]} />
            <QuickQuestions topic="Sex with Captive Women" questions={topicQuestions["Sex with Captive Women"]} />
          </div>
        </div>
      </section>

      {/* Critical Questions */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Scale className="h-6 w-6 text-blue-600" />
              Questions to Consider
            </h2>
            <Card className="bg-white dark:bg-slate-800">
              <CardContent className="p-6">
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">1.</span>
                    <span>If these hadiths are fabricated, why do Muslim scholars consider them sahih (authentic) and use them to derive Sharia law?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">2.</span>
                    <span>If they are authentic, is this really the "excellent example" all of humanity should follow for all time?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">3.</span>
                    <span>Why were these traditions compiled 200+ years after Muhammad? How reliable is oral transmission over that period?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">4.</span>
                    <span>How does Muhammad's behavior compare to <Link href="/prophets/isa" className="text-emerald-600 dark:text-emerald-400 hover:underline">Jesus' teachings</Link> of loving enemies and treating all with dignity?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">5.</span>
                    <span>Can a religion that prescribes death for apostasy truly claim to be a religion of peace?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Continue Your Research
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quran">
                <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Examine the Quran
                </Button>
              </Link>
              <Link href="/prophets/muhammad">
                <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500">
                  About Muhammad
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Read Articles
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
