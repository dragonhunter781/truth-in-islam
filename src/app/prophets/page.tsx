"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Users, ArrowRight, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { prophets } from "@/lib/config"

const featuredProphets = [
  {
    name: "Muhammad",
    arabicName: "محمد",
    slug: "muhammad",
    description: "The founder of Islam - examining his life, marriages, military campaigns, and actions as recorded in Islamic sources.",
    image: "/prophets/muhammad.jpg",
    keyFact: "Mentioned only 4 times in the Quran, yet considered the perfect example for all Muslims."
  },
  {
    name: "Isa (Jesus)",
    arabicName: "عيسى",
    slug: "isa",
    description: "How Islam reimagines Jesus - denying his crucifixion, divinity, and resurrection while calling him the Messiah.",
    image: "/prophets/isa.jpg",
    keyFact: "Born of a virgin, called Messiah, performed miracles - yet Islam denies his central message."
  },
  {
    name: "Ibrahim (Abraham)",
    arabicName: "إبراهيم",
    slug: "ibrahim",
    description: "Islam claims Abraham was a Muslim who built the Kaaba, despite no historical evidence and biblical contradiction.",
    image: "/prophets/ibrahim.jpg",
    keyFact: "Mentioned 69 times, more than Muhammad, yet supposedly built a shrine never mentioned in earlier scriptures."
  },
  {
    name: "Musa (Moses)",
    arabicName: "موسى",
    slug: "musa",
    description: "The most mentioned prophet in the Quran, yet Islam changes key aspects of his message and ministry.",
    image: "/prophets/musa.jpg",
    keyFact: "Mentioned 136 times - more than any other prophet, including Muhammad."
  },
  {
    name: "Ilyas (Elijah)",
    arabicName: "إلياس",
    slug: "ilyas",
    description: "The biblical prophet Elijah in Islam - mentioned briefly, but his powerful ministry against false worship has parallels worth exploring.",
    image: "/prophets/ilyas.jpg",
    keyFact: "One of the few prophets taken to heaven without dying - yet barely mentioned in Islam."
  }
]

export default function ProphetsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
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
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Prophets in Islam
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Islam claims to honor all biblical prophets while fundamentally changing their messages. Explore how Islamic tradition reimagines these figures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Issue */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-amber-500/30 bg-amber-500/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-400 mb-2">
                      The Claim of Corruption
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Islam claims that biblical prophets were Muslims who taught Islam, and that Jews and Christians later corrupted their scriptures. However, there is no historical evidence for these "original" Islamic teachings, and the Dead Sea Scrolls and other manuscripts show the Bible has been faithfully preserved.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Featured Prophets */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              Featured Prophets
            </h2>
            <p className="mt-4 text-slate-400">
              Click to explore their stories and compare Islamic claims with historical sources
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProphets.map((prophet, index) => (
              <motion.div
                key={prophet.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/prophets/${prophet.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer rounded-xl border border-slate-700 bg-slate-800/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-white">{prophet.name}</CardTitle>
                          <CardDescription className="font-arabic text-lg text-slate-400">
                            {prophet.arabicName}
                          </CardDescription>
                        </div>
                        <ArrowRight className="h-5 w-5 text-amber-500" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 mb-4">
                        {prophet.description}
                      </p>
                      <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                        <p className="text-sm text-slate-300">
                          <strong>Key fact:</strong> {prophet.keyFact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Prophets Grid */}
      <section className="py-16 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-amber-500" />
              All Prophets in the Quran
            </h2>
            <p className="mt-4 text-slate-400">
              Islam recognizes 25 prophets by name, though claims there were 124,000 total
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {prophets.map((prophet, index) => (
              <motion.div
                key={prophet.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/prophets/${prophet.slug}`}>
                  <Card className="hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer text-center rounded-xl border border-slate-700 bg-slate-800/50">
                    <CardContent className="p-4">
                      <p className="font-arabic text-xl text-amber-400 mb-1">
                        {prophet.arabicName}
                      </p>
                      <p className="font-semibold text-white">
                        {prophet.name}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Mentioned {prophet.mentioned}x
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Islamic Claim */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50">
              <CardHeader className="bg-gradient-to-r from-red-600 to-amber-600">
                <CardTitle className="text-xl text-white">The Islamic Claim About Prophets</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      All Prophets Were Muslims
                    </h3>
                    <p className="text-slate-300">
                      Islam claims that every prophet from Adam to Muhammad taught the same religion: Islam. Abraham, Moses, David, and Jesus were all supposedly Muslims who taught submission to Allah and pointed to Muhammad's coming.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      The Problems With This Claim
                    </h3>
                    <ul className="space-y-2 text-slate-400">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>No historical evidence exists for "original" Islamic teachings by biblical prophets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>The Dead Sea Scrolls and ancient manuscripts match modern biblical texts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Jesus clearly claimed to be God's Son and rose from the dead - claims Islam denies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>The Quran contains historical and theological errors about biblical figures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Islam emerged 600+ years after Christianity - the burden of proof is on the newer claim</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Continue Your Research
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/prophets/muhammad">
                <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500">
                  Study Muhammad
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/prophets/isa">
                <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500">
                  Jesus in Islam
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
