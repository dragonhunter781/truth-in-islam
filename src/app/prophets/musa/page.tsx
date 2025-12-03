"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, BookOpen, AlertTriangle, Scale, ArrowRight, ExternalLink, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const quranReferences = [
  {
    verse: "7:143-144",
    arabic: "وَلَمَّا جَآءَ مُوسَىٰ لِمِيقَـٰتِنَا وَكَلَّمَهُۥ رَبُّهُۥ",
    transliteration: "Wa-lammā jāʾa mūsā li-mīqātinā wa-kallamahu rabbuhu",
    translation: "And when Moses came to Our appointed time and his Lord spoke to him",
    topic: "Moses spoke directly with Allah",
    url: "https://quran.com/7/143"
  },
  {
    verse: "2:87",
    arabic: "وَلَقَدْ ءَاتَيْنَا مُوسَى ٱلْكِتَـٰبَ",
    transliteration: "Wa-laqad ātaynā mūsā l-kitāba",
    translation: "And We gave Moses the Scripture",
    topic: "Moses received the Torah",
    url: "https://quran.com/2/87"
  },
  {
    verse: "5:44",
    arabic: "إِنَّآ أَنزَلْنَا ٱلتَّوْرَىٰةَ فِيهَا هُدًۭى وَنُورٌۭ",
    transliteration: "Innā anzalnā t-tawrāta fīhā hudan wa-nūrun",
    translation: "Indeed, We sent down the Torah, in which was guidance and light",
    topic: "Torah as guidance and light",
    url: "https://quran.com/5/44"
  }
]

const bibleReferences = [
  {
    verse: "Exodus 3:14-15",
    text: "God said to Moses, 'I AM WHO I AM. This is what you are to say to the Israelites: I AM has sent me to you... This is my name forever, the name you shall call me from generation to generation.'",
    topic: "God reveals His name: YHWH (I AM)",
    url: "https://www.biblegateway.com/passage/?search=Exodus+3:14-15&version=NIV"
  },
  {
    verse: "Exodus 12:13",
    text: "The blood will be a sign for you on the houses where you are, and when I see the blood, I will pass over you.",
    topic: "The Passover lamb's blood saves",
    url: "https://www.biblegateway.com/passage/?search=Exodus+12:13&version=NIV"
  },
  {
    verse: "Exodus 20:1-17",
    text: "And God spoke all these words: 'I am the LORD your God... You shall have no other gods before me...'",
    topic: "The Ten Commandments",
    url: "https://www.biblegateway.com/passage/?search=Exodus+20:1-17&version=NIV"
  },
  {
    verse: "Deuteronomy 18:18",
    text: "I will raise up for them a prophet like you from among their fellow Israelites, and I will put my words in his mouth.",
    topic: "Promise of a prophet like Moses",
    url: "https://www.biblegateway.com/passage/?search=Deuteronomy+18:18&version=NIV"
  },
  {
    verse: "Galatians 3:24",
    text: "So the law was our guardian until Christ came that we might be justified by faith.",
    topic: "The Law points to Christ",
    url: "https://www.biblegateway.com/passage/?search=Galatians+3:24&version=NIV"
  }
]

const comparisonItems = [
  {
    title: "The Name of God",
    islamic: "Moses knew God as Allah",
    biblical: "God revealed His personal name as YHWH (I AM WHO I AM) - Exodus 3:14-15",
    issue: "The personal covenant name YHWH, used over 6,800 times in the Old Testament and central to Jewish faith, never appears in Islam. This name emphasizes God's personal relationship with His people."
  },
  {
    title: "The Passover Lamb",
    islamic: "Not emphasized in Islamic accounts",
    biblical: "The lamb's blood on doorposts saved Israel from death (Exodus 12). A clear type of Christ",
    issue: "Islam removes the central sacrificial symbolism. The Passover pointed to Jesus, 'the Lamb of God who takes away the sin of the world' (John 1:29). Without this, Moses' message loses its prophetic meaning."
  },
  {
    title: "Purpose of the Law",
    islamic: "Moses brought a version of Islam with Islamic-style laws",
    biblical: "The Law was given to reveal sin and our need for a Savior (Romans 7:7, Galatians 3:24)",
    issue: "Islam claims Moses' message but denies its purpose. The Law wasn't salvation—it showed why we need salvation. Paul writes the Law was 'our guardian until Christ came.'"
  },
  {
    title: "The Prophet Like Moses",
    islamic: "Deuteronomy 18:18 refers to Muhammad",
    biblical: "This refers to Jesus, who like Moses was a mediator, lawgiver, deliverer, and performed miracles",
    issue: "Muhammad came from Ishmael (Arabs), not 'from among their fellow Israelites' (Deut 18:18). Jesus was Jewish, performed miracles like Moses, mediated a new covenant, and delivered people from sin."
  },
  {
    title: "Covenant Focus",
    islamic: "Emphasis on following Islamic-style laws and rituals",
    biblical: "Emphasis on God's faithfulness, His personal relationship with Israel, and foreshadowing redemption",
    issue: "Moses' story is about God's grace—He delivered Israel before giving the Law. Islam reverses this: works before grace. Moses received the covenant of law; Jesus fulfilled it with the covenant of grace."
  }
]

const qaItems = [
  {
    question: "If Moses was a Muslim teaching Islam, why did he use the name YHWH, never Allah?",
    answer: "The name YHWH (Yahweh) appears over 6,800 times in the Hebrew Bible and is God's covenant name revealed to Moses. It emphasizes God's personal, eternal nature ('I AM WHO I AM'). Islam has no equivalent—Allah is just a generic term for god. If Moses taught Islam, why would he never use Allah's name but constantly use a name Islam doesn't recognize?"
  },
  {
    question: "Why is the Passover lamb's blood—central to Exodus—never mentioned in Islamic accounts?",
    answer: "The Passover lamb is crucial to understanding Moses' message. Its blood saved Israel from death and pointed forward to Jesus as 'the Lamb of God.' John 1:29 and 1 Corinthians 5:7 explicitly identify Jesus as our Passover Lamb. Islam removes this because it points too clearly to Jesus' sacrificial death, which Islam denies."
  },
  {
    question: "How could the Torah be corrupted when we have manuscripts predating Islam?",
    answer: "The Dead Sea Scrolls (200 BC - 100 AD) contain large portions of the Old Testament and match modern Bibles. The Septuagint (Greek Old Testament, 250 BC) also matches. These manuscripts predate Islam by 700-900 years and prove the Torah hasn't been corrupted. Islam's claim requires dismissing overwhelming manuscript evidence."
  },
  {
    question: "Muhammad claimed to be the prophet like Moses. Does this fit Deuteronomy 18:18?",
    answer: "No. Deuteronomy 18:18 says this prophet will come 'from among their fellow Israelites.' Muhammad was Arab (from Ishmael), not Jewish (from Isaac). Jesus fits perfectly: Jewish, performed miracles like Moses, mediated a new covenant, spoke God's words, and delivered people. Even Moses and Elijah appeared with Jesus at the Transfiguration (Matthew 17:3)."
  },
  {
    question: "What was the purpose of the Law Moses gave?",
    answer: "Romans 7:7 and Galatians 3:24 explain the Law's purpose: to reveal sin and show our need for a Savior. It was a 'guardian until Christ came that we might be justified by faith.' The Law wasn't meant to save—it showed why we need Jesus. Islam treats the Law as a salvation system, missing its entire point."
  }
]

export default function MusaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <Link href="/prophets" className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Prophets
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Musa (Moses)
            </h1>
            <p className="mt-2 text-2xl font-arabic text-amber-400">موسى</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              The most mentioned prophet in the Quran - yet Islam fundamentally changes his message and mission.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle>Moses: Most Mentioned Yet Misunderstood</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-300 mb-4">
                  Moses (Musa) is mentioned 136 times in the Quran - more than any other prophet, including Muhammad. He is honored as the prophet who spoke directly with Allah and received the Torah.
                </p>
                <p className="text-slate-300">
                  However, Islam claims the Torah has been corrupted and that Moses was actually teaching Islam, not Judaism. This creates fundamental contradictions with the biblical account.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <Tabs defaultValue="comparison" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="comparison">Islamic vs Biblical</TabsTrigger>
                <TabsTrigger value="references">Scripture References</TabsTrigger>
                <TabsTrigger value="qa">Quick Questions</TabsTrigger>
              </TabsList>

              {/* Comparison Tab */}
              <TabsContent value="comparison">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      Key Differences Between Islamic and Biblical Moses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {comparisonItems.map((item, index) => (
                        <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                          <div className="grid gap-2 md:grid-cols-2 mb-2">
                            <div className="p-2 bg-amber-500/10 dark:bg-amber-900/20 rounded text-sm">
                              <span className="font-medium text-amber-300 dark:text-amber-300">Islamic View:</span>
                              <p className="text-slate-300 mt-1">{item.islamic}</p>
                            </div>
                            <div className="p-2 bg-slate-800/50 rounded text-sm">
                              <span className="font-medium text-amber-400">Biblical View:</span>
                              <p className="text-slate-300 mt-1">{item.biblical}</p>
                            </div>
                          </div>
                          <p className="text-amber-400 text-amber-400 text-sm mt-2 p-2 bg-amber-500/10 bg-amber-500/10 rounded">
                            <strong>The Issue:</strong> {item.issue}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* References Tab */}
              <TabsContent value="references">
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-emerald-600" />
                        Quran on Musa
                      </CardTitle>
                      <CardDescription>
                        What the Quran says about Moses
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
                              <a href={ref.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-amber-400 hover:text-amber-300">
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

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        Bible on Moses
                      </CardTitle>
                      <CardDescription>
                        The historical record of Moses' life and ministry
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
                              <a href={ref.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-amber-400 hover:text-blue-700 text-amber-400">
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
                      Common Questions About Moses in Islam
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

          <div className="flex justify-between items-center pt-8 border-t border-slate-200 ">
            <Link href="/prophets/ibrahim">
              <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500"><ArrowLeft className="h-4 w-4" />Abraham in Islam</Button>
            </Link>
            <Link href="/prophets/ilyas">
              <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500">Elijah in Islam<ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
