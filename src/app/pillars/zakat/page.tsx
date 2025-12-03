"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, BookOpen, AlertTriangle, Scale, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ZakatPage() {
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
              Zakat
            </h1>
            <p className="mt-2 text-2xl font-arabic text-emerald-600 dark:text-emerald-400">
              الزكاة
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Obligatory charity - examining where the money goes, who benefits, and the prescribed categories of recipients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* What is Zakat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Coins className="h-5 w-5" />
                  What is Zakat?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Zakat is the obligatory annual payment of 2.5% of one's wealth above a certain threshold (nisab). It is one of the Five Pillars of Islam and is considered mandatory for all qualifying Muslims.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  While often presented as charitable giving, zakat has specific rules about who can receive it - and some of these categories raise significant concerns.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* The Eight Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              The Eight Categories of Recipients (Quran 9:60)
            </h2>
            <div className="space-y-4">
              {[
                {
                  category: "1. The Poor (Al-Fuqara)",
                  description: "Those who have nothing or very little.",
                  note: null
                },
                {
                  category: "2. The Needy (Al-Masakin)",
                  description: "Those who have some wealth but not enough to meet their needs.",
                  note: null
                },
                {
                  category: "3. Zakat Collectors (Al-Amilina Alayha)",
                  description: "Those employed to collect and distribute zakat.",
                  note: "This creates an administrative class funded by the charity itself."
                },
                {
                  category: "4. Those Whose Hearts are to be Reconciled (Al-Mu'allafatu Qulubuhum)",
                  description: "New converts to Islam or those considering conversion.",
                  note: "Zakat can be used to incentivize or solidify conversion to Islam."
                },
                {
                  category: "5. Freeing Slaves (Fi al-Riqab)",
                  description: "To free slaves or captives.",
                  note: "Acknowledges the existence of slavery in Islamic society."
                },
                {
                  category: "6. Debtors (Al-Gharimin)",
                  description: "Those in debt.",
                  note: null
                },
                {
                  category: "7. In the Way of Allah (Fi Sabilillah)",
                  description: "For the cause of Allah.",
                  note: "Historically interpreted to include funding jihad and military campaigns."
                },
                {
                  category: "8. Travelers (Ibn al-Sabil)",
                  description: "Stranded travelers.",
                  note: null
                }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.category}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">{item.description}</p>
                    {item.note && (
                      <p className="text-amber-600 dark:text-amber-400 text-sm flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        {item.note}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Concerning Aspects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Concerning Aspects of Zakat
            </h2>
            <div className="space-y-4">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-700 dark:text-amber-400">Fi Sabilillah - "In the Way of Allah"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    This category has historically been interpreted to include:
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• Funding military campaigns (jihad)</li>
                    <li>• Purchasing weapons and equipment for fighters</li>
                    <li>• Supporting families of those fighting in jihad</li>
                    <li>• Funding Islamic propagation (da'wah)</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-300 mt-4">
                    Classical scholars like Ibn Kathir and Al-Tabari interpreted this category primarily as supporting those engaged in jihad.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-700 dark:text-amber-400">Non-Muslims Cannot Receive Zakat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    According to the majority of Islamic scholars, zakat cannot be given to non-Muslims (except in the "hearts to be reconciled" category, which aims at conversion). This creates a two-tier charitable system where Muslims benefit from a large pool of mandatory charity that excludes non-Muslim poor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Quranic Reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-emerald-600" />
              Quranic Reference
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-2">
                  "Zakah expenditures are only for the poor and for the needy and for those employed for it and for bringing hearts together [for Islam] and for freeing captives [or slaves] and for those in debt and for the cause of Allah and for the [stranded] traveler - an obligation [imposed] by Allah. And Allah is Knowing and Wise."
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">— Quran 9:60</p>
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
              Critical Questions
            </h2>
            <Card className="bg-slate-50 dark:bg-slate-800/50">
              <CardContent className="p-6">
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">1.</span>
                    <span>Why would true charity exclude non-Muslims from receiving help based on their faith?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">2.</span>
                    <span>Is it ethical for mandatory "charity" to fund military activities or weapons?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">3.</span>
                    <span>Using charity to incentivize religious conversion - is this genuine charity or a form of coercion?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">4.</span>
                    <span>How does this compare to biblical charity which is given freely to all in need regardless of faith?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
            <Link href="/pillars/salah">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Salah
              </Button>
            </Link>
            <Link href="/pillars/sawm">
              <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                Next: Sawm
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
