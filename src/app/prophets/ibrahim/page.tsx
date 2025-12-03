"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, BookOpen, AlertTriangle, Scale, ArrowRight, MapPin, ExternalLink, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const quranReferences = [
  {
    verse: "2:127",
    arabic: "وَإِذْ يَرْفَعُ إِبْرَٰهِـۧمُ ٱلْقَوَاعِدَ مِنَ ٱلْبَيْتِ وَإِسْمَـٰعِيلُ",
    transliteration: "Wa-idh yarfaʿu ibrāhīmu l-qawāʿida mina l-bayti wa-ismāʿīlu",
    translation: "And when Abraham was raising the foundations of the House and Ishmael",
    topic: "Claim that Abraham built the Kaaba",
    url: "https://quran.com/2/127"
  },
  {
    verse: "3:67",
    arabic: "مَا كَانَ إِبْرَٰهِيمُ يَهُودِيًّۭا وَلَا نَصْرَانِيًّۭا وَلَـٰكِن كَانَ حَنِيفًۭا مُّسْلِمًۭا",
    transliteration: "Mā kāna ibrāhīmu yahūdiyyan wa-lā naṣrāniyyan wa-lākin kāna ḥanīfan musliman",
    translation: "Abraham was neither a Jew nor a Christian, but he was one inclining toward truth, a Muslim",
    topic: "Abraham claimed as a Muslim",
    url: "https://quran.com/3/67"
  },
  {
    verse: "2:125",
    arabic: "وَإِذْ جَعَلْنَا ٱلْبَيْتَ مَثَابَةًۭ لِّلنَّاسِ وَأَمْنًۭا",
    transliteration: "Wa-idh jaʿalnā l-bayta mathābatan li-n-nāsi wa-amnan",
    translation: "And when We made the House a place of return for the people and a place of security",
    topic: "The Kaaba as a sacred site",
    url: "https://quran.com/2/125"
  }
]

const bibleReferences = [
  {
    verse: "Genesis 15:6",
    text: "Abram believed the LORD, and he credited it to him as righteousness.",
    topic: "Justified by faith, not rituals",
    url: "https://www.biblegateway.com/passage/?search=Genesis+15:6&version=NIV"
  },
  {
    verse: "Genesis 12:1-3",
    text: "The LORD said to Abram, 'Go from your country... I will make you into a great nation, and I will bless you... all peoples on earth will be blessed through you.'",
    topic: "Promise to bless all nations",
    url: "https://www.biblegateway.com/passage/?search=Genesis+12:1-3&version=NIV"
  },
  {
    verse: "Genesis 21:12",
    text: "God said to him, 'Do not be distressed... because it is through Isaac that your offspring will be reckoned.'",
    topic: "Covenant through Isaac, not Ishmael",
    url: "https://www.biblegateway.com/passage/?search=Genesis+21:12&version=NIV"
  },
  {
    verse: "Genesis 22:2",
    text: "Then God said, 'Take your son, your only son, whom you love—Isaac—and go to the region of Moriah.'",
    topic: "Sacrifice of Isaac (not Ishmael)",
    url: "https://www.biblegateway.com/passage/?search=Genesis+22:2&version=NIV"
  }
]

const qaItems = [
  {
    question: "Is there any archaeological evidence that Abraham went to Mecca?",
    answer: "No. There is zero archaeological, historical, or textual evidence outside the Quran (written 2,600+ years after Abraham) that he ever traveled to Mecca. The Bible records Abraham's movements in detail through Canaan, Egypt, and back—Mecca is never mentioned. No ancient Jewish or Christian source mentions this claim."
  },
  {
    question: "Why would the Kaaba be filled with 360 idols if Abraham established monotheism there?",
    answer: "This is a major problem for the Islamic narrative. If Abraham and Ishmael built the Kaaba as a house of pure monotheism around 2000 BC, how did it become the center of Arabian paganism with hundreds of idols? There's no historical record of this transformation, because the Kaaba was always a pagan shrine until Muhammad repurposed it."
  },
  {
    question: "The Bible clearly says the covenant was through Isaac, not Ishmael. Why does Islam contradict this?",
    answer: "Genesis 21:12 explicitly states: 'It is through Isaac that your offspring will be reckoned.' God blessed Ishmael (Genesis 21:13) but the covenant line went through Isaac. Islam reverses this to make Arabs (descended from Ishmael) the covenant people, but this contradicts the earlier scriptures Islam claims to respect."
  },
  {
    question: "How could Abraham be a Muslim when Islam didn't exist for another 2,600 years?",
    answer: "Muslims argue 'Muslim' just means 'one who submits to God,' but this is linguistic revisionism. Abraham was a Hebrew who worshipped YHWH, practiced animal sacrifice as atonement, and looked forward to the promised Messiah. The Quran anachronistically projects Islamic practices (like the Hajj) back onto Abraham with no historical basis."
  },
  {
    question: "Why is the biblical Abraham centered on faith while the Islamic Ibrahim is centered on rituals?",
    answer: "Romans 4 and Galatians 3 emphasize that Abraham was justified by faith before he was circumcised, making him the father of all who believe by faith. Islam transforms Abraham into a ritualistic figure who performed the Hajj and built the Kaaba—practices never mentioned in earlier scriptures. This fundamentally changes his message."
  }
]

export default function IbrahimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/prophets" className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Prophets
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ibrahim (Abraham)
            </h1>
            <p className="mt-2 text-2xl font-arabic text-amber-400">إبراهيم</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Islam claims Abraham was a Muslim who built the Kaaba - examining this claim against historical evidence and the Bible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Tabs Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Tabs defaultValue="comparison" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="comparison">Islamic vs Biblical</TabsTrigger>
                <TabsTrigger value="references">Scripture References</TabsTrigger>
                <TabsTrigger value="qa">Quick Questions</TabsTrigger>
              </TabsList>

              {/* Comparison Tab */}
              <TabsContent value="comparison">
                <div className="space-y-8">
                  {/* The Islamic Claim */}
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-red-600 to-amber-600 text-white">
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        The Islamic Claim
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-slate-300 mb-4">
                        Islam teaches that Abraham (Ibrahim) and his son Ishmael (Ismail) built the Kaaba in Mecca and established Islamic rituals there:
                      </p>
                      <blockquote className="text-slate-400 italic border-l-4 border-emerald-500 pl-4 mb-4">
                        "And [mention] when Abraham was raising the foundations of the House and [with him] Ishmael, [saying], 'Our Lord, accept [this] from us.'" — <a href="https://quran.com/2/127" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline inline-flex items-center gap-1">Quran 2:127 <ExternalLink className="h-3 w-3" /></a>
                      </blockquote>
                    </CardContent>
                  </Card>

                  {/* Historical Problems */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        Historical Problems With This Claim
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {[
                          {
                            title: "No Historical Evidence",
                            content: "There is no archaeological or historical evidence that Abraham ever went to Mecca. No ancient sources outside of Islam mention this. The Bible explicitly states Abraham lived in Canaan (modern Israel/Palestine), never Arabia."
                          },
                          {
                            title: "Biblical Geography",
                            content: "The Bible records Abraham's journeys in detail: from Ur to Haran to Canaan to Egypt and back to Canaan. Mecca (750+ miles south through desert) is never mentioned. Read his full journey in Genesis 12-25."
                          },
                          {
                            title: "The Wrong Son",
                            content: "The Bible clearly states Isaac was the promised son through whom God's covenant would continue (Genesis 21:12). Islam claims it was Ishmael, but provides no evidence for this change."
                          },
                          {
                            title: "Pre-Islamic Kaaba",
                            content: "The Kaaba existed as a pagan shrine housing 360 idols before Muhammad. Historical sources make no connection to Abraham until Islamic literature."
                          },
                          {
                            title: "2,600-Year Gap",
                            content: "The claim that Abraham built the Kaaba comes 2,600+ years after Abraham and 600 years after Christ, with no supporting evidence from any earlier source."
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-4 bg-amber-500/10 bg-amber-500/10 rounded-lg border border-amber-500/30 border-amber-500/30">
                            <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                            <p className="text-slate-400 text-sm">{item.content}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Biblical Abraham */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-emerald-600" />
                        Abraham in the Bible: Faith, Not Rituals
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-slate-300 mb-4">
                        The biblical Abraham is called "the friend of God" (James 2:23) and is the father of faith. Key aspects:
                      </p>
                      <ul className="space-y-3 text-slate-400">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span><strong>Justified by faith:</strong> <a href="https://www.biblegateway.com/passage/?search=Genesis+15:6&version=NIV" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">"Abraham believed God, and it was credited to him as righteousness" (Genesis 15:6)</a></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span><strong>Promise of blessing:</strong> <a href="https://www.biblegateway.com/passage/?search=Genesis+12:3&version=NIV" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">"All nations on earth will be blessed through you" (Genesis 12:3)</a></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span><strong>Covenant through Isaac:</strong> <a href="https://www.biblegateway.com/passage/?search=Genesis+21:12&version=NIV" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">"Through Isaac your offspring will be reckoned" (Genesis 21:12)</a></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span><strong>Prophetic sacrifice:</strong> Abraham's near-sacrifice of Isaac foreshadowed God's sacrifice of His Son (Genesis 22)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* References Tab */}
              <TabsContent value="references">
                <div className="space-y-8">
                  {/* Quran References */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-emerald-600" />
                        Quran on Ibrahim
                      </CardTitle>
                      <CardDescription>
                        What the Quran says about Abraham building the Kaaba
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {quranReferences.map((ref, index) => (
                          <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="font-semibold text-white mb-1">{ref.topic}</h4>
                                <p className="text-sm text-amber-400">Quran {ref.verse}</p>
                              </div>
                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-amber-400 hover:text-amber-300"
                              >
                                Read <ExternalLink className="h-4 w-4" />
                              </a>
                            </div>
                            <div className="space-y-2">
                              <p className="text-xl font-arabic text-slate-200 text-right">{ref.arabic}</p>
                              <p className="text-sm italic text-slate-400">{ref.transliteration}</p>
                              <p className="text-slate-300">{ref.translation}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Bible References */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        Bible on Abraham
                      </CardTitle>
                      <CardDescription>
                        The historical record of Abraham's life and covenant
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {bibleReferences.map((ref, index) => (
                          <div key={index} className="p-4 bg-slate-800/50 bg-slate-800/50 rounded-lg border border-slate-700 border-slate-700">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="font-semibold text-white mb-1">{ref.topic}</h4>
                                <p className="text-sm text-amber-400 text-amber-400">{ref.verse}</p>
                              </div>
                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-amber-400 hover:text-blue-700 text-amber-400"
                              >
                                Read <ExternalLink className="h-4 w-4" />
                              </a>
                            </div>
                            <blockquote className="text-slate-300 italic border-l-4 border-blue-500 pl-4">
                              "{ref.text}"
                            </blockquote>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Q&A Tab */}
              <TabsContent value="qa">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-purple-600" />
                      Common Questions About Abraham in Islam
                    </CardTitle>
                    <CardDescription>
                      Critical questions about the Islamic narrative
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {qaItems.map((qa, index) => (
                        <div key={index} className="p-4 bg-slate-800/50 bg-slate-800/50 rounded-lg border border-slate-700 border-slate-700">
                          <h4 className="font-semibold text-white mb-3 flex items-start gap-2">
                            <span className="text-amber-400 text-amber-400 flex-shrink-0">Q:</span>
                            <span>{qa.question}</span>
                          </h4>
                          <p className="text-slate-300 pl-6">{qa.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200 ">
            <Link href="/prophets/isa">
              <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500"><ArrowLeft className="h-4 w-4" />Jesus in Islam</Button>
            </Link>
            <Link href="/prophets/musa">
              <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500">Moses in Islam<ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
