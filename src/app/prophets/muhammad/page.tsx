"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, BookOpen, AlertTriangle, Scale, Users, Sword, ArrowRight, ExternalLink, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const marriages = [
  { name: "Khadijah", age: "40 (he was 25)", note: "First wife, wealthy widow" },
  { name: "Sawda", age: "Unknown", note: "Widow" },
  { name: "Aisha", age: "6 at marriage, 9 at consummation", note: "Daughter of Abu Bakr" },
  { name: "Hafsa", age: "18", note: "Daughter of Umar" },
  { name: "Zaynab bint Khuzayma", age: "Unknown", note: "Widow" },
  { name: "Umm Salama", age: "29", note: "Widow" },
  { name: "Zaynab bint Jahsh", age: "35", note: "Divorced wife of his adopted son" },
  { name: "Juwayriyya", age: "20", note: "Captive from Banu Mustaliq raid" },
  { name: "Safiyya", age: "17", note: "Jewish captive, husband killed by Muhammad" },
  { name: "Umm Habiba", age: "Unknown", note: "Widow" },
  { name: "Maymuna", age: "26", note: "Last wife" },
  { name: "Maria al-Qibtiyya", age: "Unknown", note: "Coptic slave/concubine, mother of Ibrahim" }
]

const militaryCampaigns = [
  { name: "Raid on Nakhla", year: "624", note: "First bloodshed, during sacred month" },
  { name: "Battle of Badr", year: "624", note: "Major victory, caravan raid" },
  { name: "Battle of Uhud", year: "625", note: "Defeat, Muhammad wounded" },
  { name: "Siege of Banu Qaynuqa", year: "624", note: "Jewish tribe expelled" },
  { name: "Siege of Banu Nadir", year: "625", note: "Jewish tribe expelled, property confiscated" },
  { name: "Battle of the Trench", year: "627", note: "Defensive victory" },
  { name: "Siege of Banu Qurayza", year: "627", note: "600-900 Jewish men beheaded" },
  { name: "Conquest of Khaybar", year: "628", note: "Jewish oasis conquered" },
  { name: "Conquest of Mecca", year: "630", note: "Triumphant return" },
  { name: "Battle of Hunayn", year: "630", note: "Victory against Bedouin tribes" }
]

const quranReferences = [
  {
    verse: "33:21",
    arabic: "لَّقَدْ كَانَ لَكُمْ فِى رَسُولِ ٱللَّهِ أُسْوَةٌ حَسَنَةٌ",
    transliteration: "Laqad kāna lakum fī rasūli llāhi uswatun ḥasanatun",
    translation: "There has certainly been for you in the Messenger of Allah an excellent pattern",
    topic: "Muhammad as the perfect example",
    url: "https://quran.com/33/21"
  },
  {
    verse: "33:50",
    arabic: "يَـٰٓأَيُّهَا ٱلنَّبِىُّ إِنَّآ أَحْلَلْنَا لَكَ أَزْوَٰجَكَ",
    transliteration: "Yā ayyuhā n-nabiyyu innā aḥlalnā laka azwājaka",
    translation: "O Prophet, indeed We have made lawful to you your wives",
    topic: "Special permission for unlimited wives",
    url: "https://quran.com/33/50"
  },
  {
    verse: "33:37",
    arabic: "فَلَمَّا قَضَىٰ زَيْدٌ مِّنْهَا وَطَرًا زَوَّجْنَـٰكَهَا",
    transliteration: "Falammā qaḍā zaydun minhā waṭaran zawwajnākahā",
    translation: "So when Zayd had no longer any desire for her, We married her to you",
    topic: "Marriage to Zaynab (adopted son's ex-wife)",
    url: "https://quran.com/33/37"
  },
  {
    verse: "8:41",
    arabic: "وَٱعْلَمُوٓا۟ أَنَّمَا غَنِمْتُم مِّن شَىْءٍ فَأَنَّ لِلَّهِ خُمُسَهُۥ",
    transliteration: "Wa'lamū annamā ghanimtum min shay'in fa-anna lillāhi khumusahu",
    translation: "And know that anything you obtain of war booty - then indeed, for Allah is one fifth of it",
    topic: "Division of war spoils",
    url: "https://quran.com/8/41"
  }
]

const hadithReferences = [
  {
    book: "Sahih Bukhari",
    number: "5:58:234",
    text: "Aisha narrated: 'The Prophet engaged me when I was a girl of six (years). We went to Medina and stayed... Then he married me when I was nine years old.'",
    topic: "Aisha's age at marriage",
    url: "https://sunnah.com/bukhari:5134"
  },
  {
    book: "Sahih Muslim",
    number: "8:3310",
    text: "Aisha reported: 'Allah's Apostle married me when I was six years old, and I was admitted to his house when I was nine years old.'",
    topic: "Aisha's age confirmation",
    url: "https://sunnah.com/muslim:1422a"
  },
  {
    book: "Sahih Bukhari",
    number: "4:52:256",
    text: "The Prophet... was involved in 19 battles and made 86 expeditions.",
    topic: "Number of military campaigns",
    url: "https://sunnah.com/bukhari:3949"
  },
  {
    book: "Sahih Bukhari",
    number: "5:59:369",
    text: "Banu Qurayza Jews agreed to accept Sa'd's verdict. Sa'd said: 'I give the judgment that their warriors should be killed and their children and women should be taken as captives.'",
    topic: "Execution of Banu Qurayza",
    url: "https://sunnah.com/bukhari:3043"
  },
  {
    book: "Ibn Ishaq Sirat",
    number: "515-518",
    text: "They brought the Apostle's enemy Kinana... who had custody of the treasure. He asked him about it, and Kinana denied knowing where it was. Then torture was applied until he was nearly dead. Then the Apostle delivered him to al-Zubayr who killed him in revenge.",
    topic: "Torture at Khaybar",
    url: "https://sunnah.com"
  }
]

const qaItems = [
  {
    question: "Was Aisha really 6 when Muhammad married her and 9 when he consummated the marriage?",
    answer: "Yes, this is documented in multiple sahih (authentic) hadiths, including Sahih Bukhari 5:58:234 and Sahih Muslim 8:3310. Some modern Muslims attempt to reinterpret her age, but this contradicts Islam's most trusted sources. Even if she was older, the question remains: why would the 'perfect example for all time' engage in a practice that's now universally condemned?"
  },
  {
    question: "Why did Muhammad get special exemptions from the Quran's rules?",
    answer: "The Quran limits men to 4 wives (4:3) but gives Muhammad unlimited wives (33:50). He also received convenient revelations allowing him to marry his adopted son's ex-wife (33:37). Critics argue this suggests the Quran served Muhammad's personal interests rather than being divine revelation."
  },
  {
    question: "How can a military leader who led 86 campaigns be the perfect moral example?",
    answer: "Muslims argue Muhammad only fought defensively, but Islamic sources show he initiated raids on caravans (Battle of Badr), expelled Jewish tribes, and ordered assassinations of critics. The question is whether someone who engaged in such actions can be the timeless moral standard for all humanity."
  },
  {
    question: "What about the execution of the Banu Qurayza Jewish tribe?",
    answer: "Islamic sources (Sahih Bukhari, Ibn Ishaq) document that 600-900 Jewish men were beheaded in batches after they surrendered, while women and children were enslaved. Muhammad approved and observed this execution. This is one of the most troubling events in Muhammad's life according to Islamic sources themselves."
  },
  {
    question: "Did Muhammad really perform miracles like Jesus?",
    answer: "No. The Quran itself states Muhammad performed no miracles except the Quran itself (29:50-51). Muslims later developed hadith traditions about miracles, but these contradict the Quran. In contrast, even the Quran admits Jesus performed miracles like healing the blind, raising the dead, and creating life (3:49)."
  },
  {
    question: "Was Muhammad certain of his own salvation?",
    answer: "No. In Sahih Bukhari 5:58:266, Muhammad says: 'By Allah, though I am the Apostle of Allah, yet I do not know what Allah will do to me.' This contrasts sharply with Jesus' confidence in offering eternal life to believers (John 10:28)."
  }
]

export default function MuhammadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "Person"],
            "headline": "Muhammad in Islam: A Critical Examination",
            "description": "The founder of Islam - examining his life, actions, and character according to Islamic sources themselves.",
            "name": "Muhammad",
            "alternateName": ["محمد", "Prophet Muhammad"],
            "author": {
              "@type": "Organization",
              "name": "Truth in Islam"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Truth in Islam",
              "url": "https://truthinislam.com"
            },
            "mainEntityOfPage": "https://truthinislam.com/prophets/muhammad",
            "about": {
              "@type": "Person",
              "name": "Muhammad",
              "description": "The founder of Islam, considered by Muslims as the final prophet"
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
              Muhammad
            </h1>
            <p className="mt-2 text-2xl font-arabic text-amber-400">
              محمد
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              The founder of Islam - examining his life, actions, and character according to Islamic sources themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { label: "Mentioned in Quran", value: "4 times", note: "Less than many other prophets" },
              { label: "Wives", value: "11-13", note: "Despite 4-wife limit for others" },
              { label: "Military Campaigns", value: "~86", note: "Expeditions led or ordered" },
              { label: "Age at Death", value: "62", note: "632 CE in Medina" }
            ].map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">{fact.value}</p>
                    <p className="font-semibold text-white">{fact.label}</p>
                    <p className="text-xs text-slate-500 ">{fact.note}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="quran">Quran References</TabsTrigger>
                <TabsTrigger value="hadith">Hadith Sources</TabsTrigger>
                <TabsTrigger value="qa">Quick Questions</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="space-y-8">
                  {/* The Perfect Example Claim */}
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-red-600 to-amber-600 text-white">
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        The "Perfect Example"
                      </CardTitle>
                      <CardDescription className="text-emerald-100">
                        What Muslims are called to emulate
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-slate-300 mb-4">
                        The Quran commands Muslims to follow Muhammad as the perfect example (uswa hasana):
                      </p>
                      <blockquote className="text-slate-400 italic border-l-4 border-emerald-500 pl-4 mb-4">
                        "There has certainly been for you in the Messenger of Allah an excellent pattern for anyone whose hope is in Allah and the Last Day." — <a href="https://quran.com/33/21" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline inline-flex items-center gap-1">Quran 33:21 <ExternalLink className="h-3 w-3" /></a>
                      </blockquote>
                      <p className="text-slate-300">
                        This is why examining Muhammad's life is essential. If he is the model for all humanity, his actions deserve scrutiny according to the sources Muslims consider most authentic.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Quran References Tab */}
              <TabsContent value="quran">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-emerald-600" />
                      Quranic Verses About Muhammad
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
                              Read on Quran.com <ExternalLink className="h-4 w-4" />
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

              {/* Hadith References Tab */}
              <TabsContent value="hadith">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-amber-600" />
                      Authentic Hadith About Muhammad's Life
                    </CardTitle>
                    <CardDescription>
                      From Sahih (authentic) collections - the most trusted sources in Islam
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {hadithReferences.map((hadith, index) => (
                        <div key={index} className="p-4 bg-amber-500/10 bg-amber-500/10 rounded-lg border border-amber-500/30 border-amber-500/30">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-white mb-1">{hadith.topic}</h4>
                              <p className="text-sm text-amber-400 text-amber-400">{hadith.book} {hadith.number}</p>
                            </div>
                            <a
                              href={hadith.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-amber-400 hover:text-amber-300 text-amber-400"
                            >
                              Read on Sunnah.com <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                          <blockquote className="text-slate-300 italic border-l-4 border-amber-500 pl-4">
                            {hadith.text}
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
                      <HelpCircle className="h-5 w-5 text-blue-600" />
                      Common Questions About Muhammad
                    </CardTitle>
                    <CardDescription>
                      Honest answers based on Islamic sources
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

          {/* Marriages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              Muhammad's Marriages
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-slate-300 mb-4">
                  While the Quran limits Muslim men to four wives (4:3), Muhammad had special permission for unlimited wives (33:50). His marriages included:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-white">Wife</th>
                        <th className="text-left py-2 px-3 text-white">Age/Details</th>
                        <th className="text-left py-2 px-3 text-white">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marriages.map((wife, index) => (
                        <tr key={index} className="border-b border-slate-100 ">
                          <td className="py-2 px-3 text-slate-300">{wife.name}</td>
                          <td className="py-2 px-3 text-slate-400">{wife.age}</td>
                          <td className="py-2 px-3 text-slate-500  text-xs">{wife.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-amber-500/10 dark:bg-amber-900/20 rounded-lg border border-amber-500/30 border-amber-500/30">
                  <p className="text-amber-300 text-amber-300 text-sm">
                    <strong>Notable:</strong> Aisha's marriage at 6 and consummation at 9 is documented in multiple sahih hadiths (<a href="https://sunnah.com/bukhari:5134" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900 dark:hover:text-amber-100">Bukhari 5:58:234</a>, <a href="https://sunnah.com/muslim:1422a" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900 dark:hover:text-amber-100">Muslim 8:3310</a>). Zaynab bint Jahsh was the wife of Muhammad's adopted son Zayd, whom Allah commanded to divorce her so Muhammad could marry her (<a href="https://quran.com/33/37" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900 dark:hover:text-amber-100">Quran 33:37</a>).
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Military Campaigns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Sword className="h-6 w-6 text-red-500" />
              Military Campaigns
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-slate-300 mb-4">
                  Muhammad personally led or ordered approximately 86 military expeditions during his 10 years in Medina. Here are some notable ones:
                </p>
                <div className="space-y-3">
                  {militaryCampaigns.map((campaign, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-sm font-semibold text-slate-500  w-12">{campaign.year}</span>
                      <div>
                        <p className="font-medium text-white">{campaign.name}</p>
                        <p className="text-xs text-slate-400">{campaign.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-red-500/10 bg-red-500/10 rounded-lg border border-red-500/30 border-red-500/30">
                  <p className="text-red-300 text-red-300 text-sm">
                    <strong>Banu Qurayza:</strong> After the Battle of the Trench, Muhammad ordered the execution of 600-900 Jewish men and the enslavement of women and children. The men were beheaded in batches, with Muhammad personally observing. (<a href="https://sunnah.com/bukhari:3043" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900 dark:hover:text-red-100">Sahih Bukhari 5:59:369</a>, Ibn Ishaq's Sirat)
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other Concerning Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Other Documented Actions
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Ordered Assassinations",
                  content: "Muhammad ordered the killing of poets and critics who mocked him, including Ka'b ibn al-Ashraf, Abu 'Afak (reportedly 100+ years old), and Asma bint Marwan (a nursing mother).",
                  source: "Ibn Ishaq's Sirat"
                },
                {
                  title: "Torture for Information",
                  content: "After the Khaybar conquest, Muhammad had Kinana ibn al-Rabi tortured with fire to reveal where treasure was hidden, then had him beheaded and married his widow Safiyya the same day.",
                  source: "Ibn Ishaq's Sirat"
                },
                {
                  title: "Slave Ownership",
                  content: "Muhammad owned slaves and gave slaves as gifts. He received Maria al-Qibtiyya as a slave from the Egyptian ruler.",
                  source: "Multiple hadith sources"
                },
                {
                  title: "Caravan Raids",
                  content: "Muhammad's community in Medina sustained itself partly through raiding Meccan caravans and dividing the spoils.",
                  source: "Quran 8:41, hadith collections"
                }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{item.content}</p>
                    <p className="text-xs text-amber-400">Source: {item.source}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Comparison with Jesus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Comparison: Muhammad vs. Jesus
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">Muhammad</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• Multiple wives, including a child bride</li>
                      <li>• Led military conquests</li>
                      <li>• Ordered assassinations of critics</li>
                      <li>• Owned slaves</li>
                      <li>• Uncertain of his own salvation</li>
                      <li>• Died and remains dead</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <h4 className="font-semibold text-amber-400 mb-3">Jesus</h4>
                    <ul className="space-y-2 text-sm text-amber-400">
                      <li>• Never married, devoted to ministry</li>
                      <li>• Taught to love enemies</li>
                      <li>• Forgave those who crucified him</li>
                      <li>• Elevated the status of women</li>
                      <li>• Promised eternal life to believers</li>
                      <li>• Rose from the dead</li>
                    </ul>
                  </div>
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
                    <span>Is a man who married a 6-year-old and consummated when she was 9 the perfect moral example for all time?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">2.</span>
                    <span>Why would Allah give Muhammad exemptions from rules that apply to all other Muslims?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">3.</span>
                    <span>How can Islam be called a religion of peace when its founder led 86 military campaigns?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">4.</span>
                    <span>If these accounts are false, why are they in Islam's most trusted sources? If true, how is this example to be followed today?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200 ">
            <Link href="/prophets">
              <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500">
                <ArrowLeft className="h-4 w-4" />
                All Prophets
              </Button>
            </Link>
            <Link href="/prophets/isa">
              <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500">
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
