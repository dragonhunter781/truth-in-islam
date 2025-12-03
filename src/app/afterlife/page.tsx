"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Flame, Sparkles, AlertTriangle, Scale, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const jannahDescriptions = [
  {
    aspect: "Physical Pleasures",
    description: "Rivers of wine, honey, and milk. Eternal feasting on choice meats and fruits.",
    reference: "Quran 47:15, 56:17-21"
  },
  {
    aspect: "Houris (Virgins)",
    description: "Men are promised houris - fair maidens with large, beautiful eyes, untouched by man or jinn. Descriptions emphasize their physical beauty and virginity.",
    reference: "Quran 55:56-58, 56:35-37, 78:33"
  },
  {
    aspect: "Eternal Youth",
    description: "Believers will be in eternal youth, perpetually at age 33, the prime of life.",
    reference: "Hadith - Tirmidhi"
  },
  {
    aspect: "Golden Adornments",
    description: "Bracelets of gold, clothes of silk, reclining on thrones.",
    reference: "Quran 18:31, 22:23"
  },
  {
    aspect: "72 Virgins for Martyrs",
    description: "Those who die in jihad receive 72 houris as a special reward.",
    reference: "Sunan al-Tirmidhi 1663"
  }
]

const jahannamDescriptions = [
  {
    aspect: "Eternal Fire",
    description: "Blazing fire that burns skin, which is then renewed to burn again.",
    reference: "Quran 4:56"
  },
  {
    aspect: "Boiling Water",
    description: "Scalding water poured over heads, melting insides.",
    reference: "Quran 22:19-20"
  },
  {
    aspect: "Tree of Zaqqum",
    description: "A tree with fruit like devil's heads that the damned must eat.",
    reference: "Quran 37:62-66"
  },
  {
    aspect: "Chains and Hooks",
    description: "Bound in chains, dragged by iron hooks.",
    reference: "Quran 40:71-72"
  },
  {
    aspect: "Majority Women",
    description: "Muhammad said he saw that most of Hell's inhabitants were women.",
    reference: "Sahih Bukhari 1:2:28"
  }
]

export default function AfterlifePage() {
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
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              The Islamic Afterlife
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Examining what the Quran and Hadith teach about Jannah (Paradise) and Jahannam (Hell) - the rewards and punishments that await.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jannah Section */}
      <section className="py-16 bg-emerald-50 dark:bg-emerald-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3">
              <Sparkles className="h-8 w-8 text-emerald-600" />
              Jannah (Paradise)
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              The Islamic concept of heaven - a place of physical pleasures
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jannahDescriptions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-emerald-200 dark:border-emerald-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-700 dark:text-emerald-400">
                      {item.aspect}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">{item.description}</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-500">{item.reference}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Houris Detail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="overflow-hidden border-amber-200 dark:border-amber-800">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20">
                <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
                  <AlertTriangle className="h-5 w-5" />
                  The Houris - A Closer Look
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  The Quran and Hadith describe the houris (حور عين) in explicit physical terms:
                </p>
                <div className="space-y-4">
                  <blockquote className="text-slate-600 dark:text-slate-400 italic border-l-4 border-emerald-500 pl-4">
                    "In them are women limiting [their] glances, untouched before them by man or jinni... As if they were rubies and coral." — Quran 55:56-58
                  </blockquote>
                  <blockquote className="text-slate-600 dark:text-slate-400 italic border-l-4 border-emerald-500 pl-4">
                    "Indeed, We have produced the women of Paradise in a [new] creation. And made them virgins, devoted [to their husbands] and of equal age." — Quran 56:35-37
                  </blockquote>
                </div>
                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    <strong>Questions to consider:</strong> If Paradise is the ultimate spiritual reward, why is it described primarily in terms of physical and sexual pleasures? What does this say about the nature of the Islamic God? And what exactly do women receive in Paradise - the same descriptions seem absent for female believers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Jahannam Section */}
      <section className="py-16 bg-red-50 dark:bg-red-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3">
              <Flame className="h-8 w-8 text-red-600" />
              Jahannam (Hell)
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              The Islamic concept of hell - a place of eternal, graphic torture
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jahannamDescriptions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 dark:text-red-400">
                      {item.aspect}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">{item.description}</p>
                    <p className="text-xs text-red-600 dark:text-red-500">{item.reference}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Women in Hell */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="overflow-hidden border-red-200 dark:border-red-800">
              <CardHeader className="bg-gradient-to-r from-red-100 to-red-50 dark:from-red-900/30 dark:to-red-800/20">
                <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-300">
                  <AlertTriangle className="h-5 w-5" />
                  Women and Hell in Islamic Tradition
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  According to authenticated hadiths, Muhammad made troubling statements about women and hellfire:
                </p>
                <div className="space-y-4">
                  <blockquote className="text-slate-600 dark:text-slate-400 italic border-l-4 border-red-500 pl-4">
                    "I was shown the Hell-fire and the majority of its dwellers were women who were ungrateful." When asked if they were ungrateful to Allah, he said: "They are ungrateful to their husbands." — Sahih Bukhari 1:2:28
                  </blockquote>
                  <blockquote className="text-slate-600 dark:text-slate-400 italic border-l-4 border-red-500 pl-4">
                    "O women! Give alms, as I have seen that the majority of the dwellers of Hell-fire were you women... because you curse frequently and are ungrateful to your husbands." — Sahih Bukhari 1:6:301
                  </blockquote>
                </div>
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    <strong>Consider:</strong> A religion where the prophet himself says the majority of Hell's inhabitants are women - what does this reveal about how Islam views women? Compare this to Jesus, who elevated women and had women among his closest followers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* No Assurance */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <CardTitle className="text-xl">No Assurance of Salvation</CardTitle>
                <CardDescription className="text-slate-300">
                  Even Muhammad was uncertain
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Unlike Christianity, where believers can have assurance of salvation through faith in Christ, Islam offers no such certainty. Even Muhammad himself expressed uncertainty:
                </p>
                <blockquote className="text-slate-600 dark:text-slate-400 italic border-l-4 border-emerald-500 pl-4 mb-6">
                  "Say: 'I am not a new thing among the messengers, nor do I know what will be done with me or with you.'" — Quran 46:9
                </blockquote>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">In Islam:</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                      <li>• Salvation depends on the balance of deeds</li>
                      <li>• Allah's will is unpredictable</li>
                      <li>• Even the prophet was uncertain</li>
                      <li>• Most people will go to Hell first</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-2">In Christianity:</h4>
                    <ul className="text-sm text-emerald-700 dark:text-emerald-400 space-y-2">
                      <li>• "I give them eternal life, and they shall never perish" (John 10:28)</li>
                      <li>• Salvation is a gift, not earned</li>
                      <li>• Assurance through relationship with Christ</li>
                      <li>• "To be absent from the body is to be present with the Lord" (2 Cor 5:8)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Critical Questions */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
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
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">1.</span>
                    <span>If the highest reward is physical pleasures (wine, virgins, feasting), what does this say about Islam's view of spirituality?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">2.</span>
                    <span>Why would a merciful God sentence the majority of women to Hell for "ingratitude to husbands"?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">3.</span>
                    <span>How can Muslims have peace if their own prophet didn't know his fate?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">4.</span>
                    <span>What does the promise of virgin rewards reveal about Islamic motivation for martyrdom?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">5.</span>
                    <span>If Paradise is described with wine and physical pleasures, why are they forbidden in this life?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Continue Your Research
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/beliefs">
                <Button variant="outline" className="gap-2">
                  Islamic Beliefs
                </Button>
              </Link>
              <Link href="/quran">
                <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                  Examine the Quran
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
