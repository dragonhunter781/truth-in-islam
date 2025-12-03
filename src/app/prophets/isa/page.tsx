"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, BookOpen, AlertTriangle, Scale, Cross, ArrowRight, Heart, ExternalLink, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const quranReferences = [
  {
    verse: "3:45",
    arabic: "إِذْ قَالَتِ ٱلْمَلَـٰٓئِكَةُ يَـٰمَرْيَمُ إِنَّ ٱللَّهَ يُبَشِّرُكِ بِكَلِمَةٍۢ مِّنْهُ ٱسْمُهُ ٱلْمَسِيحُ عِيسَى",
    transliteration: "Idh qālati l-malā'ikatu yā maryamu inna llāha yubashshiruki bi-kalimatin minhu smuhu l-masīḥu ʿīsā",
    translation: "The angels said, 'O Mary, indeed Allah gives you good tidings of a word from Him, whose name will be the Messiah, Jesus'",
    topic: "Jesus called the Messiah",
    url: "https://quran.com/3/45"
  },
  {
    verse: "4:157",
    arabic: "وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَـٰكِن شُبِّهَ لَهُمْ",
    transliteration: "Wa-mā qatalūhu wa-mā ṣalabūhu wa-lākin shubbiha lahum",
    translation: "And they did not kill him, nor did they crucify him; but it was made to appear to them",
    topic: "Denial of crucifixion",
    url: "https://quran.com/4/157"
  },
  {
    verse: "4:171",
    arabic: "إِنَّمَا ٱلْمَسِيحُ عِيسَى ٱبْنُ مَرْيَمَ رَسُولُ ٱللَّهِ وَكَلِمَتُهُۥ",
    transliteration: "Innamā l-masīḥu ʿīsā bnu maryama rasūlu llāhi wa-kalimatuhu",
    translation: "The Messiah, Jesus son of Mary, was but a messenger of Allah and His word",
    topic: "Jesus as Word of Allah",
    url: "https://quran.com/4/171"
  },
  {
    verse: "3:49",
    arabic: "وَأُبْرِئُ ٱلْأَكْمَهَ وَٱلْأَبْرَصَ وَأُحْىِ ٱلْمَوْتَىٰ بِإِذْنِ ٱللَّهِ",
    transliteration: "Wa-ubri'u l-akmaha wa-l-abraṣa wa-uḥyi l-mawtā bi-idhni llāhi",
    translation: "I heal the blind and the leper, and I give life to the dead by permission of Allah",
    topic: "Jesus' miracles",
    url: "https://quran.com/3/49"
  },
  {
    verse: "5:72",
    arabic: "لَقَدْ كَفَرَ ٱلَّذِينَ قَالُوٓا۟ إِنَّ ٱللَّهَ هُوَ ٱلْمَسِيحُ ٱبْنُ مَرْيَمَ",
    transliteration: "Laqad kafara lladhīna qālū inna llāha huwa l-masīḥu bnu maryama",
    translation: "They have certainly disbelieved who say, 'Allah is the Messiah, the son of Mary'",
    topic: "Rejection of Jesus' divinity",
    url: "https://quran.com/5/72"
  }
]

const bibleReferences = [
  {
    verse: "John 1:1",
    text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    topic: "Jesus as the Word of God",
    url: "https://www.biblegateway.com/passage/?search=John+1:1&version=NIV"
  },
  {
    verse: "John 10:30",
    text: "I and the Father are one.",
    topic: "Jesus claims unity with God",
    url: "https://www.biblegateway.com/passage/?search=John+10:30&version=NIV"
  },
  {
    verse: "John 14:6",
    text: "I am the way and the truth and the life. No one comes to the Father except through me.",
    topic: "Jesus as the only way to God",
    url: "https://www.biblegateway.com/passage/?search=John+14:6&version=NIV"
  },
  {
    verse: "1 Corinthians 15:3-4",
    text: "Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day",
    topic: "Jesus' death and resurrection",
    url: "https://www.biblegateway.com/passage/?search=1+Corinthians+15:3-4&version=NIV"
  },
  {
    verse: "Matthew 28:18",
    text: "All authority in heaven and on earth has been given to me.",
    topic: "Jesus' divine authority",
    url: "https://www.biblegateway.com/passage/?search=Matthew+28:18&version=NIV"
  }
]

const qaItems = [
  {
    question: "Why does Islam deny Jesus' crucifixion when it's historically documented?",
    answer: "The Quran (4:157) claims Jesus wasn't crucified but made to appear so. This contradicts Roman historians (Tacitus, Josephus), early church testimony, and even enemies of Christianity who acknowledged it. The crucifixion is one of the most historically certain events of ancient history. Islam's denial, written 600 years later, requires dismissing all contemporary evidence."
  },
  {
    question: "If Jesus didn't die, what happened to his disciples who died claiming they saw him crucified and resurrected?",
    answer: "Early Christians were tortured and killed for claiming Jesus died and rose again. People don't die for what they know is a lie. If Jesus wasn't crucified, his closest followers would have known - yet they all maintained this testimony to their deaths. Islam's substitution theory requires God to deceive the very people most devoted to Him."
  },
  {
    question: "Why does the Quran give Jesus unique titles like 'Word of Allah' if he was just a prophet?",
    answer: "The Quran calls Jesus 'Al-Masih' (Messiah), 'Kalimatullah' (Word of Allah), and 'Ruh Allah' (Spirit of Allah) - titles given to no other prophet, including Muhammad. It acknowledges his virgin birth, sinlessness, and miracle-working power. These exceptional attributes point to Jesus' unique nature, which Christianity explains but Islam cannot."
  },
  {
    question: "Can we honor Jesus while denying everything he taught about himself?",
    answer: "Jesus explicitly claimed to be God's Son, to have authority to forgive sins, and predicted his death and resurrection. Islam calls him a great prophet while denying all his central teachings. This is not honoring Jesus - it's calling him either deluded or a liar. C.S. Lewis famously argued: Jesus was either Lord, liar, or lunatic. Islam's 'good prophet' option isn't available."
  },
  {
    question: "Why would Jesus return to destroy Christianity if he founded it?",
    answer: "Islamic tradition says Jesus will return to 'break the cross' and establish Islam. This makes no sense if Jesus actually taught Christianity. Why would he return to destroy the faith he died to establish? This Islamic teaching reveals the fundamental incompatibility between what Jesus taught and what Islam claims about him."
  }
]

const islamicClaims = [
  {
    claim: "Jesus (Isa) was born of a virgin",
    islamic: "Yes - Mary conceived by Allah's command",
    biblical: "Yes - conceived by the Holy Spirit",
    issue: "Both agree on the virgin birth, but Islam denies its significance"
  },
  {
    claim: "Jesus performed miracles",
    islamic: "Yes - healed, raised dead, created life from clay",
    biblical: "Yes - healed, raised dead, showed power over nature",
    issue: "Islam credits Allah acting through Jesus, not Jesus' own divine nature"
  },
  {
    claim: "Jesus is the Messiah",
    islamic: "Yes - Al-Masih (the Messiah)",
    biblical: "Yes - the promised Messiah/Christ",
    issue: "Islam uses the title but empties it of meaning"
  },
  {
    claim: "Jesus died on the cross",
    islamic: "No - it only appeared so; someone else was crucified",
    biblical: "Yes - central to the faith, attested by eyewitnesses",
    issue: "Islam contradicts all historical evidence"
  },
  {
    claim: "Jesus rose from the dead",
    islamic: "No - he didn't die, so no resurrection",
    biblical: "Yes - the foundation of Christianity",
    issue: "Islam denies the core Christian belief"
  },
  {
    claim: "Jesus is the Son of God",
    islamic: "Absolutely not - shirk (unforgivable sin)",
    biblical: "Yes - God incarnate, second person of Trinity",
    issue: "Islam's strongest condemnation"
  },
  {
    claim: "Jesus will return",
    islamic: "Yes - to break the cross and establish Islam",
    biblical: "Yes - to judge and reign as King",
    issue: "Different purposes and outcomes"
  }
]

export default function IsaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "Person"],
            "headline": "Jesus (Isa) in Islam: A Critical Examination",
            "description": "How Islam reimagines Jesus - calling him Messiah while denying his central message, death, and resurrection.",
            "name": "Jesus",
            "alternateName": ["Isa", "عيسى", "Jesus Christ"],
            "author": {
              "@type": "Organization",
              "name": "Truth in Islam"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Truth in Islam",
              "url": "https://truthinislam.com"
            },
            "mainEntityOfPage": "https://truthinislam.com/prophets/isa",
            "about": {
              "@type": "Person",
              "name": "Jesus",
              "alternateName": "Isa",
              "description": "Jesus as portrayed in Islamic tradition, contrasted with biblical accounts"
            }
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/prophets"
              className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Prophets
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Isa (Jesus) in Islam
            </h1>
            <p className="mt-2 text-2xl font-arabic text-amber-400">
              عيسى
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              How Islam reimagines Jesus - calling him Messiah while denying his central message, death, and resurrection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
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
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="comparison">Comparison</TabsTrigger>
                <TabsTrigger value="quran">Quran on Isa</TabsTrigger>
                <TabsTrigger value="bible">Bible on Jesus</TabsTrigger>
                <TabsTrigger value="qa">Quick Questions</TabsTrigger>
              </TabsList>

              {/* Comparison Tab */}
              <TabsContent value="comparison">
                <div className="space-y-8">
                  {/* The Contradiction */}
                  <Card className="overflow-hidden border-amber-500/30 border-amber-500/30">
                    <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        The Central Contradiction
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-slate-300 mb-4">
                        Islam claims to honor Jesus while systematically denying everything he taught about himself:
                      </p>
                      <ul className="space-y-3 text-slate-400">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span><strong>Jesus claimed:</strong> <a href="https://www.biblegateway.com/passage/?search=John+10:30&version=NIV" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">"I and the Father are one" (John 10:30)</a>. <strong>Islam says:</strong> Blasphemy.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span><strong>Jesus claimed:</strong> <a href="https://www.biblegateway.com/passage/?search=John+14:6&version=NIV" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">"I am the way, the truth, and the life" (John 14:6)</a>. <strong>Islam says:</strong> Muhammad is the final way.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span><strong>Jesus predicted:</strong> <a href="https://www.biblegateway.com/passage/?search=Mark+8:31&version=NIV" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">His death and resurrection (Mark 8:31)</a>. <strong>Islam says:</strong> Never happened.</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-amber-300 dark:text-amber-300 font-medium">
                        You cannot honor someone by calling them a liar. Either Jesus was who he claimed to be, or he wasn't.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Quran Tab */}
              <TabsContent value="quran">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-emerald-600" />
                      What the Quran Says About Isa (Jesus)
                    </CardTitle>
                    <CardDescription>
                      Direct links to Quran.com with Arabic, transliteration, and translation
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
              </TabsContent>

              {/* Bible Tab */}
              <TabsContent value="bible">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      What the Bible Says About Jesus
                    </CardTitle>
                    <CardDescription>
                      Jesus' own words and testimony about himself
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
              </TabsContent>

              {/* Q&A Tab */}
              <TabsContent value="qa">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-purple-600" />
                      Common Questions About Jesus in Islam
                    </CardTitle>
                    <CardDescription>
                      Critical questions Muslims should consider
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

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-emerald-600" />
              Islamic vs. Biblical Claims About Jesus
            </h2>
            <div className="space-y-4">
              {islamicClaims.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-3">{item.claim}</h3>
                    <div className="grid gap-3 md:grid-cols-2 mb-3">
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-xs font-medium text-slate-500  mb-1">ISLAMIC VIEW</p>
                        <p className="text-sm text-slate-300">{item.islamic}</p>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-xs font-medium text-amber-400 mb-1">BIBLICAL VIEW</p>
                        <p className="text-sm text-amber-400">{item.biblical}</p>
                      </div>
                    </div>
                    <p className="text-sm text-amber-400 text-amber-400 flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      {item.issue}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* The Crucifixion Denial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Cross className="h-6 w-6 text-red-600" />
              Denying the Crucifixion
            </h2>
            <Card>
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-slate-300 border-l-4 border-red-500 pl-4 mb-6">
                  "And [for] their saying, 'Indeed, we have killed the Messiah, Jesus, the son of Mary, the messenger of Allah.' And they did not kill him, nor did they crucify him; but [another] was made to resemble him to them."
                  <span className="block text-sm text-amber-400 mt-2">— Quran 4:157</span>
                </blockquote>
                <p className="text-slate-300 mb-4">
                  This single verse, written 600 years after the events, contradicts:
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Four Gospel accounts written within decades of the events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Paul's letters (50s AD), stating Jesus "was crucified" (1 Cor 2:2)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Roman historian Tacitus (116 AD): "Christus... suffered the extreme penalty during the reign of Tiberius"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Jewish historian Josephus (93 AD): "Pilate... condemned him to be crucified"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>The testimony of Jesus' own disciples who died for this belief</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-red-500/10 bg-red-500/10 rounded-lg border border-red-500/30 border-red-500/30">
                  <p className="text-red-300 text-red-300 text-sm">
                    <strong>The substitution theory</strong> (that someone else was made to look like Jesus and crucified in his place) raises more questions: Did Allah deceive everyone? Did he allow an innocent person to be crucified? Why would God trick Jesus' followers into believing a lie for 600 years?
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Jesus in the Quran */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              What the Quran Says About Jesus
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-slate-300 mb-4">
                  Interestingly, the Quran gives Jesus unique titles and attributes given to no other prophet:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { title: "Al-Masih (The Messiah)", verse: "3:45", note: "Used 11 times" },
                    { title: "Word of Allah", verse: "4:171", note: "Kalimatu Allah" },
                    { title: "Spirit from Allah", verse: "4:171", note: "Ruhun minhu" },
                    { title: "Born of a virgin", verse: "19:20-21", note: "Miraculous birth" },
                    { title: "Sinless", verse: "19:19", note: "\"Pure son\"" },
                    { title: "Created life", verse: "3:49", note: "Made birds from clay" },
                    { title: "Raised the dead", verse: "3:49", note: "By Allah's permission" },
                    { title: "Will return", verse: "43:61", note: "Sign of the Hour" }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-xs text-amber-400">Quran {item.verse}</p>
                      <p className="text-xs text-slate-500 ">{item.note}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-emerald-800 dark:text-emerald-200 text-sm">
                    <strong>The question:</strong> If Jesus was just a human prophet, why does the Quran give him titles like "Word of Allah" and "Spirit from Allah"? Why was he born of a virgin when no other prophet was? Why could he create life and raise the dead when Muhammad performed no such miracles?
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* The Return of Jesus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Jesus' Return in Islamic Tradition
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-slate-300 mb-4">
                  Islamic tradition teaches that Jesus (Isa) will return before the Day of Judgment. But his mission is radically different from Christianity:
                </p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Break the cross:</strong> Destroy Christianity and its symbol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Kill the swine:</strong> Abolish what is forbidden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Abolish jizya:</strong> No more protection tax - Islam only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Establish Islam:</strong> Rule as a Muslim, pray toward Mecca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Kill the Dajjal:</strong> Defeat the Antichrist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Marry and die:</strong> Finally die and be buried next to Muhammad</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-amber-500/10 dark:bg-amber-900/20 rounded-lg border border-amber-500/30 border-amber-500/30">
                  <p className="text-amber-300 text-amber-300 text-sm">
                    <strong>Consider:</strong> In Islam, Jesus returns not to save but to destroy Christianity. Not to reign as King of Kings but to serve as a Muslim subordinate to Muhammad's message. This is a complete inversion of biblical prophecy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Critical Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Scale className="h-6 w-6 text-blue-600" />
              Questions to Consider
            </h2>
            <Card className="bg-slate-800/50/50">
              <CardContent className="p-6">
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">1.</span>
                    <span>How can one claim to honor Jesus while denying everything he said about himself?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">2.</span>
                    <span>Why should a claim from 600 years later override multiple contemporary eyewitness accounts?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">3.</span>
                    <span>If Jesus was just a prophet, why does even the Quran give him unique divine attributes?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">4.</span>
                    <span>Would a truthful God allow billions to believe a "lie" about Jesus for 600 years before "correcting" it?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">5.</span>
                    <span>Why would Jesus return to destroy the faith he died (or allegedly didn't die) to establish?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Jesus' Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden border-emerald-200 dark:border-emerald-800">
              <CardHeader className="bg-gradient-to-r from-red-600 to-amber-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Jesus' Own Words
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-slate-300 border-l-4 border-emerald-500 pl-4 mb-4">
                  "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls."
                  <span className="block text-sm text-amber-400 mt-2">— Matthew 11:28-29</span>
                </blockquote>
                <p className="text-slate-300">
                  Jesus offers rest, not rituals. Relationship, not rules. Grace, not uncertainty. Consider investigating who Jesus claimed to be, not just what Islam claims about him.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200 ">
            <Link href="/prophets/muhammad">
              <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500">
                <ArrowLeft className="h-4 w-4" />
                Muhammad
              </Button>
            </Link>
            <Link href="/prophets/ibrahim">
              <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500">
                Abraham in Islam
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
