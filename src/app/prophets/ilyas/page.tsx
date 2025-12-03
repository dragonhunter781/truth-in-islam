"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, BookOpen, AlertTriangle, Scale, Flame, ArrowRight, ExternalLink, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const quranReferences = [
  {
    verse: "37:123-128",
    arabic: "وَإِنَّ إِلْيَاسَ لَمِنَ ٱلْمُرْسَلِينَ إِذْ قَالَ لِقَوْمِهِۦٓ أَلَا تَتَّقُونَ",
    transliteration: "Wa-inna ilyāsa la-mina l-mursalīna idh qāla li-qawmihi alā tattaqūna",
    translation: "And indeed, Ilyas was from among the messengers. When he said to his people, 'Will you not fear Allah?'",
    topic: "Elijah called people away from Baal",
    url: "https://quran.com/37/123"
  },
  {
    verse: "6:85",
    arabic: "وَزَكَرِيَّا وَيَحْيَىٰ وَعِيسَىٰ وَإِلْيَاسَ كُلٌّۭ مِّنَ ٱلصَّـٰلِحِينَ",
    transliteration: "Wa-zakariyyā wa-yaḥyā wa-ʿīsā wa-ilyāsa kullun mina ṣ-ṣāliḥīna",
    translation: "And Zechariah and John and Jesus and Ilyas - and all were of the righteous",
    topic: "Elijah numbered among the righteous",
    url: "https://quran.com/6/85"
  }
]

const bibleReferences = [
  {
    verse: "1 Kings 18:21",
    text: "Elijah went before the people and said, 'How long will you waver between two opinions? If the LORD is God, follow him; but if Baal is God, follow him.'",
    topic: "Elijah's challenge against Baal worship",
    url: "https://www.biblegateway.com/passage/?search=1+Kings+18:21&version=NIV"
  },
  {
    verse: "1 Kings 18:38-39",
    text: "Then the fire of the LORD fell and burned up the sacrifice, the wood, the stones and the soil, and also licked up the water in the trench. When all the people saw this, they fell prostrate and cried, 'The LORD—he is God! The LORD—he is God!'",
    topic: "Fire from heaven proves God's power",
    url: "https://www.biblegateway.com/passage/?search=1+Kings+18:38-39&version=NIV"
  },
  {
    verse: "2 Kings 2:11",
    text: "As they were walking along and talking together, suddenly a chariot of fire and horses of fire appeared and separated the two of them, and Elijah went up to heaven in a whirlwind.",
    topic: "Elijah taken to heaven without dying",
    url: "https://www.biblegateway.com/passage/?search=2+Kings+2:11&version=NIV"
  },
  {
    verse: "Malachi 4:5",
    text: "See, I will send the prophet Elijah to you before that great and dreadful day of the LORD comes.",
    topic: "Prophecy of Elijah's return",
    url: "https://www.biblegateway.com/passage/?search=Malachi+4:5&version=NIV"
  },
  {
    verse: "Matthew 17:3",
    text: "Just then there appeared before them Moses and Elijah, talking with Jesus.",
    topic: "Elijah appears at the Transfiguration",
    url: "https://www.biblegateway.com/passage/?search=Matthew+17:3&version=NIV"
  }
]

const qaItems = [
  {
    question: "Why is Elijah, who powerfully confronted stone shrine worship, barely mentioned in Islam which centers on a stone shrine?",
    answer: "This is a profound irony. Elijah's entire ministry was confronting Baal worship—which involved venerating stone shrines, circumambulating them, and offering sacrifices at sacred sites. Islam practices many of these same rituals at the Kaaba (a stone shrine). The Quran mentions Elijah only twice, perhaps because his message directly challenges Islamic practices that mirror the pagan worship he opposed."
  },
  {
    question: "What demonstrations of power validate Islam's claims, like Elijah's fire from heaven?",
    answer: "Elijah demonstrated God's reality through answered prayer and fire from heaven that consumed his sacrifice. The Quran itself admits Muhammad performed no such miracles (29:50-51), saying the Quran itself is his only miracle. But many books exist—none prove divine origin. Elijah's God answered by fire. Islam's god answers by... what exactly?"
  },
  {
    question: "How did practices similar to Baal worship become part of Islam if Muhammad rejected paganism?",
    answer: "The similarities are striking: Pre-Islamic Arabs worshipped Hubal (a form of Baal) at the Kaaba, kissed the black stone, circumambulated the shrine, and used the crescent moon symbol. Muhammad claimed to purify the Kaaba but kept these physical practices. Elijah would have recognized these rituals as the very paganism he fought against. Islam kept the form while claiming to change the content."
  },
  {
    question: "If Elijah was taken to heaven without dying, why does Islam accept this but deny Jesus' resurrection?",
    answer: "Excellent question. Islam has no problem with Elijah being taken bodily to heaven (2 Kings 2:11), or with Jesus being raised to heaven (Quran 4:158), but denies Jesus died and rose. This is inconsistent. If God can take Elijah to heaven without death, why couldn't Jesus die and rise? The answer: Jesus' resurrection validates His claims to be God's Son—something Islam must deny."
  },
  {
    question: "If Elijah was truly a Muslim prophet, why does his ministry contradict key Islamic practices?",
    answer: "Elijah opposed worship focused on physical shrines and stones. He demonstrated that true religion isn't about pilgrimage to sacred sites but about the living God who answers by fire and word. His message was about spiritual reality, not ritual circumambulation. The biblical Elijah and Islamic practices are fundamentally incompatible—which explains why Islam mentions him so rarely."
  }
]

export default function IlyasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
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
              className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Prophets
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Ilyas (Elijah)
            </h1>
            <p className="mt-2 text-2xl font-arabic text-emerald-600 dark:text-emerald-400">
              إلياس
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              The prophet Elijah in Islam - a powerful figure barely mentioned in the Quran, yet whose biblical ministry of confronting false worship has profound implications.
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
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview & Comparison</TabsTrigger>
                <TabsTrigger value="references">Scripture References</TabsTrigger>
                <TabsTrigger value="qa">Quick Questions</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="space-y-8">
                  {/* Brief Quran mentions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-emerald-600" />
                        Elijah in the Quran: Barely Mentioned
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-slate-700 dark:text-slate-300 mb-6">
                        Elijah (Ilyas) is mentioned only twice by name in the Quran, making him one of the least discussed prophets despite his significant role in biblical history. The Quran briefly notes he called people away from Baal worship—but provides no details about his powerful ministry.
                      </p>
                      <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-200 dark:border-emerald-800">
                        <blockquote className="text-slate-700 dark:text-slate-300 italic mb-2">
                          "And indeed, Ilyas was from among the messengers. When he said to his people, 'Will you not fear Allah? Do you call upon Ba'l and leave the best of creators?'"
                        </blockquote>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400">— <a href="https://quran.com/37/123" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">Quran 37:123-128 <ExternalLink className="h-3 w-3" /></a></p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Biblical Elijah */}
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                      <CardTitle className="flex items-center gap-2">
                        <Flame className="h-5 w-5" />
                        Elijah in the Bible: The Confronter of False Worship
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        In the Bible, Elijah is one of the most dramatic prophets, known for his powerful confrontations with idolatry and false worship. His story is found primarily in <a href="https://www.biblegateway.com/passage/?search=1+Kings+17-21&version=NIV" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">1 Kings 17-21</a> and <a href="https://www.biblegateway.com/passage/?search=2+Kings+1-2&version=NIV" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">2 Kings 1-2</a>.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Events:</h4>
                          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 font-bold">•</span>
                              <span><strong>Mount Carmel Showdown:</strong> Elijah challenged 450 prophets of Baal. Fire from heaven consumed his sacrifice, proving God's power (<a href="https://www.biblegateway.com/passage/?search=1+Kings+18:38-39&version=NIV" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">1 Kings 18:38-39</a>).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 font-bold">•</span>
                              <span><strong>Taken to Heaven:</strong> Elijah never died - taken up in a chariot of fire (<a href="https://www.biblegateway.com/passage/?search=2+Kings+2:11&version=NIV" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">2 Kings 2:11</a>).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 font-bold">•</span>
                              <span><strong>Prophecy of Return:</strong> Malachi prophesied Elijah's return before the Day of the Lord (<a href="https://www.biblegateway.com/passage/?search=Malachi+4:5&version=NIV" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Malachi 4:5</a>).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 font-bold">•</span>
                              <span><strong>Transfiguration:</strong> Appeared with Moses and Jesus, confirming his significance (<a href="https://www.biblegateway.com/passage/?search=Matthew+17:3&version=NIV" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Matthew 17:3</a>).</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* References Tab */}
              <TabsContent value="references">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quran References</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {quranReferences.map((ref, idx) => (
                        <div key={idx} className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                          <p className="text-right text-xl font-arabic text-slate-900 dark:text-white mb-2">{ref.arabic}</p>
                          <p className="text-sm italic text-slate-500 mb-2">{ref.transliteration}</p>
                          <p className="text-slate-700 dark:text-slate-300 mb-2">"{ref.translation}"</p>
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-600 hover:underline inline-flex items-center gap-1">
                            {ref.verse} <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Bible References</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {bibleReferences.map((ref, idx) => (
                        <div key={idx} className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                          <p className="text-slate-700 dark:text-slate-300 mb-2">"{ref.text}"</p>
                          <p className="text-sm text-slate-500 mb-1">{ref.topic}</p>
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-sm text-orange-600 hover:underline inline-flex items-center gap-1">
                            {ref.verse} <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Q&A Tab */}
              <TabsContent value="qa">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-emerald-600" />
                      Quick Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {qaItems.map((item, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <p className="font-medium text-slate-900 dark:text-white mb-2">Q: {item.question}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">A: {item.answer}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* The Baal Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              Elijah vs. Baal Worship
            </h2>
            <Card className="border-amber-200 dark:border-amber-800">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  The Quran mentions Elijah calling people away from "Ba'l" (Baal) - a pagan deity. But who was Baal, and what was his worship like?
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Baal Worship Included:</h4>
                    <ul className="space-y-2 text-amber-700 dark:text-amber-200 text-sm">
                      <li>• A central stone shrine that was kissed and venerated</li>
                      <li>• Circumambulation (walking in circles) around the shrine</li>
                      <li>• Moon god worship (Baal was associated with the moon)</li>
                      <li>• Pre-Islamic Arabian tribes worshipped a version called "Hubal"</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Uncomfortable Parallels:</h4>
                    <p className="text-red-700 dark:text-red-200 text-sm">
                      Scholars have noted similarities between pre-Islamic Arabian paganism and certain Islamic practices. The Kaaba housed 360 idols before Islam, including Hubal (a form of Baal). The black stone was venerated and kissed, and circumambulation was practiced. The crescent moon remains Islam's primary symbol. While Islam claims to reject such paganism, it retained many of its physical practices and locations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Elijah's Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Elijah's Central Message
            </h2>
            <Card>
              <CardContent className="p-6">
                <blockquote className="text-xl italic text-slate-700 dark:text-slate-300 border-l-4 border-emerald-500 pl-4 mb-6">
                  "How long will you waver between two opinions? If the LORD is God, follow him; but if Baal is God, follow him."
                  <span className="block text-sm text-emerald-600 dark:text-emerald-400 mt-2">— 1 Kings 18:21</span>
                </blockquote>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Elijah's ministry was about confronting false worship and calling people to the one true God - not through rituals at stone shrines, but through genuine relationship with the living God who answers by fire.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  His challenge remains relevant today: examine what you worship. Is it the God who reveals Himself and demonstrates His power, or is it a system of rituals around ancient shrines?
                </p>
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Scale className="h-6 w-6 text-blue-600" />
              Questions to Consider
            </h2>
            <Card className="bg-slate-50 dark:bg-slate-800/50">
              <CardContent className="p-6">
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">1.</span>
                    <span>Why is a prophet who powerfully confronted stone worship barely mentioned in Islam, which centers on veneration of a stone shrine?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">2.</span>
                    <span>Elijah demonstrated God's power through answered prayer and fire from heaven. What demonstrations of power validate Islam's claims?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">3.</span>
                    <span>How did practices similar to Baal worship (stone veneration, circumambulation, moon symbolism) become part of Islam if Muhammad rejected paganism?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">4.</span>
                    <span>Elijah was taken to heaven without dying. Why would Islam, which denies Jesus' resurrection, have no problem with this miracle?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">5.</span>
                    <span>If Elijah was truly a Muslim prophet, why does his ministry contradict key Islamic practices?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
            <Link href="/prophets">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                All Prophets
              </Button>
            </Link>
            <Link href="/prophets/isa">
              <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                Jesus in Islam
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
