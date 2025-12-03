"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, BookOpen, AlertTriangle, Scale, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SawmPage() {
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
              Sawm
            </h1>
            <p className="mt-2 text-2xl font-arabic text-emerald-600 dark:text-emerald-400">
              الصوم
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Fasting during Ramadan - examining the rules, exceptions, penalties, and the realities of this mandatory practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* What is Sawm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Moon className="h-5 w-5" />
                  What is Sawm?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Sawm is the obligatory fast during the month of Ramadan, from dawn (fajr) to sunset (maghrib). Muslims must abstain from food, drink, smoking, and sexual relations during daylight hours.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  While fasting is a spiritual practice in many religions, the Islamic fast has unique rules, exemptions, and consequences that are important to understand.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* What's Not Often Discussed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              What's Often Not Discussed
            </h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Extreme Fasting Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    In northern countries during summer, fasting can exceed 20 hours daily. This creates:
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• Severe dehydration risks, especially without water</li>
                    <li>• Health complications for workers, drivers, and those doing physical labor</li>
                    <li>• In places like Iceland or Scandinavia, nearly 24-hour daylight makes fasting nearly impossible</li>
                    <li>• Scholars debate solutions, but the Quran gives no provisions for these scenarios</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Breaking the Fast Intentionally</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Deliberately breaking the fast carries severe penalties (kaffarah):
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• Freeing a slave (if possible)</li>
                    <li>• Fasting for 60 consecutive days</li>
                    <li>• Feeding 60 poor people</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-300 mt-4">
                    Sexual intercourse during fasting hours requires this severe expiation, even between married couples.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pre-Islamic Origins</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Fasting during Ramadan has roots in pre-Islamic Arabian practice. The word "Ramadan" comes from "ramida" (scorching heat) and was a sacred month in pre-Islamic Arabia. Jews in Medina fasted on Ashura, which Muhammad initially adopted before changing to the month-long Ramadan fast after relations with Jews deteriorated.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Health Realities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    While Islamic sources praise fasting's health benefits, medical research shows:
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• Dehydration from no water for 12-20+ hours daily</li>
                    <li>• Productivity and cognitive function decline</li>
                    <li>• Increased road accidents during Ramadan in Muslim countries</li>
                    <li>• Many Muslims gain weight due to excessive eating after sunset</li>
                    <li>• Diabetics and those on medication face serious challenges</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Exemptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Who is Exempt?
            </h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li>• <strong>Children</strong> before puberty</li>
                  <li>• <strong>Elderly</strong> who cannot fast</li>
                  <li>• <strong>Pregnant or nursing</strong> women (must make up days later)</li>
                  <li>• <strong>Menstruating</strong> women (must make up days later)</li>
                  <li>• <strong>Travelers</strong> (must make up days later)</li>
                  <li>• <strong>Sick</strong> people (must make up days or pay fidya)</li>
                </ul>
                <p className="mt-4 text-amber-600 dark:text-amber-400 text-sm">
                  Note: Women are considered spiritually deficient because they cannot fast or pray during menstruation, according to hadith.
                </p>
              </CardContent>
            </Card>
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
                  <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-2">
                    "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous."
                  </p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">— Quran 2:183</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-2">
                    "...and eat and drink until the white thread of dawn becomes distinct to you from the black thread [of night]. Then complete the fast until the sunset..."
                  </p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">— Quran 2:187</p>
                </CardContent>
              </Card>
            </div>
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
              Critical Questions
            </h2>
            <Card className="bg-slate-50 dark:bg-slate-800/50">
              <CardContent className="p-6">
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">1.</span>
                    <span>If the Quran is for all times and places, why doesn't it address extreme latitudes where fasting is impossible?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">2.</span>
                    <span>Why is denying water for 12-20 hours considered spiritually beneficial when it causes documented health risks?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">3.</span>
                    <span>If fasting teaches empathy for the poor, why do many Muslims feast extravagantly after sunset?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">4.</span>
                    <span>How does this mandatory ritual fasting compare to biblical fasting which is voluntary and focused on seeking God?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
            <Link href="/pillars/zakat">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zakat
              </Button>
            </Link>
            <Link href="/pillars/hajj">
              <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                Next: Hajj
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
