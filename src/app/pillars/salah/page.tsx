"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, BookOpen, Clock, AlertTriangle, Scale, ExternalLink, HelpCircle, Cross, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SalahPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/pillars"
              className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-500 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Five Pillars
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Salah
            </h1>
            <p className="mt-2 text-2xl font-arabic text-amber-400">
              الصلاة
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              The five daily prayers - examining the mandatory rituals, their pre-Islamic origins, and consequences for non-compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Prayer Times */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-amber-500" />
              The Five Daily Prayers
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Fajr", arabic: "الفجر", time: "Before sunrise", rakats: "2 rakats" },
                { name: "Dhuhr", arabic: "الظهر", time: "After midday", rakats: "4 rakats" },
                { name: "Asr", arabic: "العصر", time: "Afternoon", rakats: "4 rakats" },
                { name: "Maghrib", arabic: "المغرب", time: "After sunset", rakats: "3 rakats" },
                { name: "Isha", arabic: "العشاء", time: "Night", rakats: "4 rakats" }
              ].map((prayer, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold text-white">{prayer.name}</h3>
                    <p className="text-sm font-arabic text-amber-400">{prayer.arabic}</p>
                    <p className="text-sm text-slate-400 mt-1">{prayer.time}</p>
                    <p className="text-xs text-slate-400 mt-1">{prayer.rakats}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Quranic References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-amber-500" />
              Quranic References
            </h2>
            <div className="space-y-4">
              <Card className="rounded-xl border border-slate-700 bg-slate-800/50">
                <CardContent className="p-6">
                  <p className="text-xl font-arabic text-amber-400 mb-3" dir="rtl">
                    إِنَّ ٱلصَّلَوٰةَ كَانَتْ عَلَى ٱلْمُؤْمِنِينَ كِتَـٰبًۭا مَّوْقُوتًۭا
                  </p>
                  <p className="text-sm italic text-slate-400 mb-2">
                    Inna aṣ-ṣalāta kānat ʿalā l-muʾminīna kitāban mawqūtan
                  </p>
                  <p className="text-base text-slate-300 mb-3">
                    "Indeed, prayer has been decreed upon the believers a decree of specified times."
                  </p>
                  <a
                    href="https://quran.com/4/103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-amber-400 hover:underline"
                  >
                    Quran 4:103 <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-amber-500/30 bg-slate-800/50">
                <CardContent className="p-6">
                  <p className="text-xl font-arabic text-amber-400 mb-3" dir="rtl">
                    فَوَيْلٌۭ لِّلْمُصَلِّينَ ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ
                  </p>
                  <p className="text-sm italic text-slate-400 mb-2">
                    Fa-waylun lil-muṣallīna alladhīna hum ʿan ṣalātihim sāhūn
                  </p>
                  <p className="text-base text-slate-300 mb-3">
                    "So woe to those who pray but are heedless of their prayer."
                  </p>
                  <a
                    href="https://quran.com/107/4-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-amber-400 hover:underline"
                  >
                    Quran 107:4-5 <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-sm text-amber-400 mt-3 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    Warning against neglecting prayers, showing the severity with which Islam views prayer abandonment.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-slate-700 bg-slate-800/50">
                <CardContent className="p-6">
                  <p className="text-xl font-arabic text-amber-400 mb-3" dir="rtl">
                    حَـٰفِظُوا۟ عَلَى ٱلصَّلَوَٰتِ وَٱلصَّلَوٰةِ ٱلْوُسْطَىٰ
                  </p>
                  <p className="text-sm italic text-slate-400 mb-2">
                    Ḥāfiẓū ʿalā aṣ-ṣalawāti waṣ-ṣalāti l-wusṭā
                  </p>
                  <p className="text-base text-slate-300 mb-3">
                    "Maintain with care the [obligatory] prayers and [in particular] the middle prayer..."
                  </p>
                  <a
                    href="https://quran.com/2/238"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-amber-400 hover:underline"
                  >
                    Quran 2:238 <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Hadith References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Quote className="h-6 w-6 text-amber-600" />
              Hadith References
            </h2>
            <div className="space-y-4">
              <Card className="rounded-xl border border-amber-500/30 bg-slate-800/50">
                <CardContent className="p-6">
                  <p className="text-base text-slate-300 mb-3 italic">
                    "Between a man and shirk and kufr there stands his giving up prayer."
                  </p>
                  <a
                    href="https://sunnah.com/muslim:82"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-amber-400 hover:underline"
                  >
                    Sahih Muslim 82 <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-sm text-amber-400 mt-3 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    This hadith equates abandoning prayer with disbelief (kufr), which carries severe consequences including death in some interpretations.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-slate-700 bg-slate-800/50">
                <CardContent className="p-6">
                  <p className="text-base text-slate-300 mb-3 italic">
                    "The first thing about which the people will be called to account on the Day of Resurrection will be the prayer. Our Lord will say to the angels although He knows better: 'Look into the prayer of My servant and see whether he has offered it perfectly or imperfectly.' If it is perfect, it will be recorded as perfect. If it is defective, He will say: 'See if My servant has voluntary prayers.' If he has voluntary prayers, He will say: 'Compensate the obligatory prayer with voluntary prayer.' Then the rest of his actions will be judged in a similar way."
                  </p>
                  <a
                    href="https://sunnah.com/abudawud:864"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-amber-400 hover:underline"
                  >
                    Sunan Abi Dawud 864 <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-sm text-slate-400 mt-3">
                    This shows prayer is the first thing judged on the Day of Resurrection, emphasizing its supreme importance.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-slate-700 bg-slate-800/50">
                <CardContent className="p-6">
                  <p className="text-base text-slate-300 mb-3 italic">
                    "The covenant that stands between us and them is the prayer; so whoever abandons it has committed disbelief."
                  </p>
                  <a
                    href="https://sunnah.com/tirmidhi:2621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-amber-400 hover:underline"
                  >
                    Jami' at-Tirmidhi 2621 <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Pre-Islamic Origins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              Pre-Islamic Origins & Historical Context
            </h2>
            <div className="space-y-4">
              <Card className="rounded-xl border border-amber-500/30 bg-slate-800/50">
                <CardHeader className="bg-slate-800/50 border-b border-slate-700">
                  <CardTitle className="text-lg text-amber-400">Ancient Prayer Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Many elements of Islamic prayer existed in pre-Islamic religions:
                  </p>
                  <ul className="space-y-2 text-slate-400">
                    <li>• <strong>Zoroastrian influence:</strong> Zoroastrians prayed five times daily facing the sun, with ritual washing before prayer</li>
                    <li>• <strong>Jewish practices:</strong> Daniel prayed three times daily facing Jerusalem (Daniel 6:10)</li>
                    <li>• <strong>Kaaba worship:</strong> Pre-Islamic Arabs already circled the Kaaba and prayed toward it</li>
                    <li>• <strong>Prostration:</strong> Bowing and prostration were common in ancient Near Eastern worship</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-slate-700 bg-slate-800/50">
                <CardHeader className="bg-slate-800/50 border-b border-slate-700">
                  <CardTitle className="text-lg">Rigid Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Salah must be performed with exact adherence to numerous rules:
                  </p>
                  <ul className="space-y-2 text-slate-400">
                    <li>• <strong>Arabic only:</strong> Prayers must be in Arabic, even if you don't understand it</li>
                    <li>• <strong>Precise timing:</strong> Missing the prescribed window invalidates the prayer</li>
                    <li>• <strong>Ritual purity:</strong> Must perform wudu (ablution) with exact washing order</li>
                    <li>• <strong>Facing Mecca:</strong> Must face the exact direction (qibla), even from space</li>
                    <li>• <strong>Exact movements:</strong> Specific body positions with prescribed sequences</li>
                    <li>• <strong>Correct recitations:</strong> Specific verses and phrases must be said correctly</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-amber-500/30 bg-slate-800/50">
                <CardHeader className="bg-slate-800/50 border-b border-slate-700">
                  <CardTitle className="text-lg text-amber-400">Consequences for Missing Prayers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    According to classical Islamic jurisprudence:
                  </p>
                  <ul className="space-y-2 text-slate-400">
                    <li>• The Hanbali school considers abandoning prayer to be apostasy (punishable by death)</li>
                    <li>• Some scholars say persistently missing prayers warrants capital punishment</li>
                    <li>• The Quran threatens hellfire for those who are "heedless" of prayers</li>
                    <li>• In some Islamic countries, police enforce prayer attendance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Quick Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-red-500" />
              Common Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="item-1" className="border rounded-lg px-6 border-slate-700 bg-slate-800/50">
                <AccordionTrigger className="text-left font-semibold text-white hover:no-underline">
                  Why must prayers be in Arabic only?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Islamic scholars claim Arabic is the "language of revelation" and that God only accepts prayers in this language. This creates a linguistic barrier where non-Arabs must memorize prayers phonetically without understanding them. Critics argue that if God is truly universal, why would He only accept one language? This contrasts with Christianity, where believers can pray in any language since God understands the heart.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 border-slate-700 bg-slate-800/50">
                <AccordionTrigger className="text-left font-semibold text-white hover:no-underline">
                  What happens if I miss a prayer?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Missing prayers is considered a major sin. You must "make up" (qada) the missed prayer as soon as possible. Deliberately abandoning prayer is viewed extremely seriously - some scholars equate it with apostasy. The hadith states "between a man and kufr [disbelief] is the abandonment of prayer." In strict Islamic states, persistent prayer abandonment can theoretically warrant execution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 border-slate-700 bg-slate-800/50">
                <AccordionTrigger className="text-left font-semibold text-white hover:no-underline">
                  How does Islamic prayer differ from Christian prayer?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Islamic prayer is ritualistic and formulaic - specific movements, words, and times are mandated. It emphasizes submission and obedience. Christian prayer, by contrast, is relational and conversational - believers speak to God as a Father, in any language, at any time, with any words. Jesus taught "when you pray, do not heap up empty phrases" (Matthew 6:7) and emphasized sincere communication over ritual performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 border-slate-700 bg-slate-800/50">
                <AccordionTrigger className="text-left font-semibold text-white hover:no-underline">
                  Why face Mecca? Didn't the Quran say East and West belong to Allah?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  This is an interesting contradiction. Quran 2:115 says "To Allah belongs the east and the west, so wherever you turn yourselves, there is the Face of Allah." Yet Quran 2:144 commands facing the Kaaba in Mecca. This change occurred after Muhammad's split with the Jews of Medina - originally Muslims prayed toward Jerusalem. The shift to Mecca was political, anchoring Islam to Arabian geography rather than Jewish tradition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6 border-slate-700 bg-slate-800/50">
                <AccordionTrigger className="text-left font-semibold text-white hover:no-underline">
                  How do you pray from space or the North Pole?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  This creates genuine problems that Islamic scholars struggle with. From the International Space Station, which direction is "toward Mecca"? At the North or South Pole, all directions are south or north. During extreme latitudes' summers, there may be no distinct prayer times. These issues reveal that Islamic prayer requirements were designed for 7th-century Arabia, not a universal, timeless religion. Various fatwas offer contradictory solutions, showing there is no clear divine answer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* Bible Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Cross className="h-6 w-6 text-red-500" />
              Comparison with Christian Prayer
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-amber-500/30">
                <CardHeader className="bg-slate-800/50 border border-slate-700">
                  <CardTitle className="text-lg">Islamic Salah</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-slate-300">
                    <li>• 5 mandatory times per day</li>
                    <li>• Must be in Arabic</li>
                    <li>• Specific movements and positions required</li>
                    <li>• Facing physical location (Mecca)</li>
                    <li>• Ritualistic and formulaic</li>
                    <li>• Failure to pray = major sin/possible apostasy</li>
                    <li>• Emphasis on obedience and submission</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardHeader className="bg-slate-800/50 border border-slate-700">
                  <CardTitle className="text-lg">Christian Prayer</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-slate-300">
                    <li>• "Pray without ceasing" - anytime, anywhere</li>
                    <li>• Any language from the heart</li>
                    <li>• No required physical positions</li>
                    <li>• God is omnipresent, no direction needed</li>
                    <li>• Conversational and relational</li>
                    <li>• Encouraged but not under threat of death</li>
                    <li>• Emphasis on relationship with Father</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-3">What Jesus Taught About Prayer</h3>
                <div className="space-y-3 text-slate-300">
                  <p className="italic">
                    "And when you pray, do not heap up empty phrases as the Gentiles do, for they think that they will be heard for their many words. Do not be like them, for your Father knows what you need before you ask him." - Matthew 6:7-8
                  </p>
                  <p className="italic">
                    "But when you pray, go into your room and shut the door and pray to your Father who is in secret. And your Father who sees in secret will reward you." - Matthew 6:6
                  </p>
                  <p className="italic">
                    "Pray then like this: 'Our Father in heaven, hallowed be your name...'" - Matthew 6:9
                  </p>
                </div>
                <p className="mt-4 text-sm text-slate-400">
                  Jesus emphasized sincere, heart-felt communication with God as Father, not ritualistic performance. Read more about <Link href="/prophets" className="text-amber-400 hover:underline">Muhammad vs Jesus</Link> and explore the <Link href="/quran" className="text-amber-400 hover:underline">Quran's teachings</Link>.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Critical Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Scale className="h-6 w-6 text-red-500" />
              Critical Questions to Consider
            </h2>
            <Card className="bg-slate-800/50 border border-slate-700">
              <CardContent className="p-6">
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">1.</span>
                    <span>Why would an all-knowing God only accept prayers in one language (Arabic)? Does this suggest cultural favoritism rather than universal truth?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">2.</span>
                    <span>If the rituals closely mirror pre-Islamic practices (Zoroastrian prayers, pagan Kaaba worship), what makes them uniquely divine revelations?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">3.</span>
                    <span>Why would a loving God threaten severe punishment (even death in some interpretations) for missing prayers rather than emphasizing relationship?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">4.</span>
                    <span>How does the rigid, performance-based nature of Salah compare to Jesus' teaching about sincere, heart-felt prayer?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">5.</span>
                    <span>If Salah were truly from God, wouldn't it account for modern realities like space travel, polar regions, and global time zones?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/pillars/shahada">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Shahada
              </Button>
            </Link>
            <Link href="/pillars/zakat">
              <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700">
                Next: Zakat
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
