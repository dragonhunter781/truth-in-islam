"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, BookOpen, AlertTriangle, Scale, Quote, ExternalLink, HelpCircle, Cross } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ShahadaPage() {
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
              href="/pillars"
              className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Five Pillars
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Shahada
            </h1>
            <p className="mt-2 text-2xl font-arabic text-emerald-600 dark:text-emerald-400">
              الشهادة
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              The declaration of faith - examining its binding nature, implications, and what it truly commits one to in Islamic doctrine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* The Declaration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Quote className="h-5 w-5" />
                  The Declaration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-2xl font-arabic text-slate-900 dark:text-white mb-4" dir="rtl">
                    أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله
                  </p>
                  <p className="text-lg italic text-slate-600 dark:text-slate-400">
                    "I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah."
                  </p>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  The Shahada is the first and most important pillar of Islam. To become a Muslim, one must recite this declaration with sincere belief. However, this single statement carries far-reaching implications that are often not fully explained to new converts.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* What You're Committing To */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              What This Declaration Commits You To
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Acceptance of Muhammad as the Perfect Example",
                  description: "You are committing to follow Muhammad as the 'uswa hasana' (perfect example) in all aspects of life, including his actions and decisions recorded in hadith literature."
                },
                {
                  title: "Submission to Sharia Law",
                  description: "The Shahada is an oath of allegiance that binds you to Islamic jurisprudence (fiqh) and its rulings on all matters of life."
                },
                {
                  title: "No Exit - Apostasy Laws",
                  description: "Once recited with belief, leaving Islam carries severe consequences according to classical Islamic law. The Prophet said: 'Whoever changes his religion, kill him.' (Sahih Bukhari 9:84:57)"
                },
                {
                  title: "Rejection of Other Beliefs",
                  description: "The first part explicitly rejects all other gods and religious frameworks, declaring them false. This includes the Christian understanding of Jesus as divine."
                }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-emerald-600" />
              Quranic References
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-xl font-arabic text-slate-900 dark:text-white mb-3" dir="rtl">
                    فَٱعْلَمْ أَنَّهُۥ لَآ إِلَـٰهَ إِلَّا ٱللَّهُ
                  </p>
                  <p className="text-sm italic text-slate-600 dark:text-slate-400 mb-2">
                    Fa'lam annahu lā ilāha illā Allāh
                  </p>
                  <p className="text-base text-slate-700 dark:text-slate-300 mb-3">
                    "So know, [O Muhammad], that there is no deity except Allah..."
                  </p>
                  <a
                    href="https://quran.com/47/19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Quran 47:19 <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xl font-arabic text-slate-900 dark:text-white mb-3" dir="rtl">
                    مَّا كَانَ مُحَمَّدٌ أَبَآ أَحَدٍۢ مِّن رِّجَالِكُمْ وَلَـٰكِن رَّسُولَ ٱللَّهِ وَخَاتَمَ ٱلنَّبِيِّـۧنَ
                  </p>
                  <p className="text-sm italic text-slate-600 dark:text-slate-400 mb-2">
                    Mā kāna Muḥammadun abā aḥadin min rijālikum walākin rasūla Allāhi wa khātama an-nabiyyīn
                  </p>
                  <p className="text-base text-slate-700 dark:text-slate-300 mb-3">
                    "Muhammad is not the father of any of your men, but [he is] the Messenger of Allah and last of the prophets."
                  </p>
                  <a
                    href="https://quran.com/33/40"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Quran 33:40 <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xl font-arabic text-slate-900 dark:text-white mb-3" dir="rtl">
                    قُلْ إِن كُنتُمْ تُحِبُّونَ ٱللَّهَ فَٱتَّبِعُونِى يُحْبِبْكُمُ ٱللَّهُ
                  </p>
                  <p className="text-sm italic text-slate-600 dark:text-slate-400 mb-2">
                    Qul in kuntum tuḥibbūna Allāha fattabiʿūnī yuḥbibkumu Allāh
                  </p>
                  <p className="text-base text-slate-700 dark:text-slate-300 mb-3">
                    "Say, [O Muhammad], 'If you should love Allah, then follow me, [so] Allah will love you...'"
                  </p>
                  <a
                    href="https://quran.com/3/31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Quran 3:31 <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-sm text-amber-600 dark:text-amber-400 mt-3">
                    This verse links loving Allah to following Muhammad's example in all things.
                  </p>
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Quote className="h-6 w-6 text-amber-600" />
              Hadith References
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-base text-slate-700 dark:text-slate-300 mb-3 italic">
                    "Islam is built upon five [pillars]: testifying that there is no deity worthy of worship except Allah and that Muhammad is the Messenger of Allah, establishing the prayer, paying the Zakah, fasting Ramadan, and making Hajj to the House."
                  </p>
                  <a
                    href="https://sunnah.com/bukhari:8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Sahih al-Bukhari 8 <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="p-6">
                  <p className="text-base text-slate-700 dark:text-slate-300 mb-3 italic">
                    "Whoever changes his religion, kill him."
                  </p>
                  <a
                    href="https://sunnah.com/bukhari:3017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Sahih al-Bukhari 3017 <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-sm text-amber-600 dark:text-amber-400 mt-3 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    This hadith establishes the death penalty for apostasy in Islamic law, making leaving Islam extremely dangerous.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-base text-slate-700 dark:text-slate-300 mb-3 italic">
                    "I have been commanded to fight against people until they testify that there is no deity worthy of worship except Allah and that Muhammad is the Messenger of Allah..."
                  </p>
                  <a
                    href="https://sunnah.com/muslim:22a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Sahih Muslim 22a <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-sm text-amber-600 dark:text-amber-400 mt-3">
                    This hadith connects the Shahada to jihad, suggesting forced conversion as acceptable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Historical Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Historical Context & Origins
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Pre-Islamic Arabian Monotheism</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    The concept of "Allah" as the supreme god existed before Islam. The Quraysh tribe (Muhammad's tribe) already worshipped Allah as the chief deity among 360 idols in the Kaaba. The first part of the Shahada was not entirely new - it elevated an existing deity to exclusive worship.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Development of the Formula</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    The Shahada as we know it today was formalized gradually. Early Muslims used various declarations. The specific wording and its central importance developed as Islam became systematized under Muhammad's leadership and later caliphs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Legal Implications</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    In classical Islamic jurisprudence, the Shahada creates a binding contract. Once recited with belief, you become subject to Sharia law. This includes accepting Muhammad's authority in all matters and facing severe penalties (including death) for leaving Islam.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-blue-600" />
              Common Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="item-1" className="border rounded-lg px-6 border-slate-200 dark:border-slate-800">
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                  Can I leave Islam after saying the Shahada?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400">
                  According to Islamic law, leaving Islam (apostasy) after declaring the Shahada is punishable by death in many schools of jurisprudence. The hadith "Whoever changes his religion, kill him" (Sahih Bukhari 3017) is used to justify this. While not all Muslims support this, it remains part of classical Islamic law in many countries.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 border-slate-200 dark:border-slate-800">
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                  What exactly am I committing to when I say Muhammad is the messenger?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400">
                  You are accepting Muhammad as the "uswa hasana" (perfect example) for all humanity. This means accepting his actions, teachings, and judgments as recorded in the Hadith as divinely guided. This includes his military campaigns, treatment of enemies, rulings on marriage and family, and all other aspects of his life. You are also accepting him as the final prophet, whose message supersedes all previous revelations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 border-slate-200 dark:border-slate-800">
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                  Is the Shahada just a statement of belief or something more?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400">
                  The Shahada is much more than a statement of belief - it is a legal oath that places you under Islamic law (Sharia). It creates obligations including the other four pillars, adherence to halal/haram distinctions, and acceptance of Islamic jurisprudence. It also creates political allegiance in the classical interpretation, as the Muslim community (ummah) supersedes national identity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 border-slate-200 dark:border-slate-800">
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                  How does the Shahada relate to the Shema in Judaism or Christian creeds?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400">
                  The Shahada bears resemblance to the Jewish Shema ("Hear, O Israel: The LORD our God, the LORD is one" - Deuteronomy 6:4), which also emphasizes monotheism. However, unlike the Shema or Christian creeds, the Shahada places a human prophet (Muhammad) at the center of worship alongside God. Christians affirm Jesus as God incarnate, not merely a messenger. The binding legal nature of the Shahada and its apostasy laws also differ significantly from Jewish or Christian confessions of faith.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6 border-slate-200 dark:border-slate-800">
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                  Why is there no exit clause?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400">
                  Islam views apostasy as one of the gravest sins because leaving Islam is seen as rejecting absolute truth after receiving it. The harsh penalties are justified as protecting the Muslim community and deterring others from leaving. This creates a one-way door - easy to enter (just recite the Shahada), but legally dangerous to exit. This differs dramatically from Christianity, where salvation is by grace through faith, and individuals are free to choose or reject belief without earthly punishment.
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Cross className="h-6 w-6 text-blue-600" />
              Comparison with Christian Faith
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-emerald-200 dark:border-emerald-800">
                <CardHeader className="bg-emerald-50 dark:bg-emerald-900/20">
                  <CardTitle className="text-lg">Islamic Shahada</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li>• Testifies to Allah's oneness and Muhammad's prophethood</li>
                    <li>• Creates legal obligations under Sharia</li>
                    <li>• Leaving Islam punishable by death</li>
                    <li>• Muhammad as intermediary and example</li>
                    <li>• Salvation through works and faith</li>
                    <li>• Explicitly rejects Jesus as divine</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 dark:border-blue-800">
                <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                  <CardTitle className="text-lg">Christian Confession</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li>• Confesses Jesus Christ as Lord and Savior</li>
                    <li>• Creates relationship, not legal contract</li>
                    <li>• Freedom to choose or reject faith</li>
                    <li>• Jesus as God incarnate, not just messenger</li>
                    <li>• Salvation by grace through faith alone</li>
                    <li>• Affirms Trinity: Father, Son, Holy Spirit</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Key Biblical Verses</h3>
                <div className="space-y-3 text-slate-700 dark:text-slate-300">
                  <p className="italic">
                    "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved." - Romans 10:9
                  </p>
                  <p className="italic">
                    "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast." - Ephesians 2:8-9
                  </p>
                  <p className="italic">
                    "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'" - John 14:6
                  </p>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                  Learn more about the differences between Islam and Christianity on our <Link href="/blog" className="text-emerald-600 dark:text-emerald-400 hover:underline">blog</Link> and <Link href="/quran" className="text-emerald-600 dark:text-emerald-400 hover:underline">Quran analysis</Link> pages.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Points to Consider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Scale className="h-6 w-6 text-blue-600" />
              Critical Questions to Consider
            </h2>
            <Card className="bg-slate-50 dark:bg-slate-800/50">
              <CardContent className="p-6">
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">1.</span>
                    <span>Why is there no way out once you've entered? What does this say about the nature of the commitment?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">2.</span>
                    <span>The Shahada requires testifying that Muhammad is Allah's messenger. Have you examined Muhammad's life, actions, and teachings thoroughly?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">3.</span>
                    <span>Are you aware of what Sharia law requires in terms of daily practice, gender relations, and treatment of non-Muslims?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">4.</span>
                    <span>Have you compared the Islamic concept of God with other traditions, particularly the God of the Bible?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
            <Link href="/pillars">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                All Pillars
              </Button>
            </Link>
            <Link href="/pillars/salah">
              <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                Next: Salah
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
