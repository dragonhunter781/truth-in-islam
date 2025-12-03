"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, BookOpen, AlertTriangle, Scale, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HajjPage() {
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
              Hajj
            </h1>
            <p className="mt-2 text-2xl font-arabic text-amber-400">
              الحج
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              The pilgrimage to Mecca - examining its pre-Islamic pagan origins, rituals, and the troubling history of the Kaaba.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* What is Hajj */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50">
              <CardHeader className="bg-gradient-to-r from-red-600 to-amber-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Compass className="h-5 w-5" />
                  What is Hajj?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-300 mb-4">
                  Hajj is the pilgrimage to Mecca that every able-bodied Muslim who can afford it must perform at least once in their lifetime. It occurs during the Islamic month of Dhul Hijjah and involves specific rituals over several days.
                </p>
                <p className="text-slate-300">
                  The rituals include circling the Kaaba seven times, running between two hills, and throwing stones at pillars representing Satan - all practices that predate Islam.
                </p>
              </CardContent>
            </Card>
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
              Pre-Islamic Pagan Origins
            </h2>
            <div className="space-y-4">
              <Card className="rounded-xl border border-amber-500/30 bg-slate-800/50">
                <CardHeader className="bg-slate-800/50 border-b border-slate-700">
                  <CardTitle className="text-lg text-amber-400">The Kaaba Was a Pagan Shrine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Before Islam, the Kaaba housed 360 idols representing various deities. The structure was a center of pagan worship for centuries. Key facts:
                  </p>
                  <ul className="space-y-2 text-slate-400">
                    <li>• The Black Stone (Hajar al-Aswad) was venerated and kissed in pre-Islamic times</li>
                    <li>• Circling the Kaaba (tawaf) was a pagan practice that Islam retained</li>
                    <li>• The Quraysh tribe (Muhammad's tribe) were custodians of the pagan Kaaba</li>
                    <li>• "Allah" was the name of the chief deity among the 360 idols</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-xl border border-amber-500/30 bg-slate-800/50">
                <CardHeader className="bg-slate-800/50 border-b border-slate-700">
                  <CardTitle className="text-lg text-amber-400">Rituals Borrowed from Paganism</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300">
                    <li>
                      <strong>Tawaf (Circling):</strong> Walking around the Kaaba seven times was done by pre-Islamic Arabs, often naked. Islam kept the ritual but required clothing.
                    </li>
                    <li>
                      <strong>Kissing the Black Stone:</strong> This stone was worshipped as sacred before Islam. Umar ibn al-Khattab famously said: "I know you are a stone that can neither harm nor benefit. Had I not seen the Prophet kiss you, I would not have kissed you."
                    </li>
                    <li>
                      <strong>Running Between Safa and Marwa:</strong> This ritual commemorates Hagar's search for water, but the hills were associated with the pagan idols Isaf and Na'ila.
                    </li>
                    <li>
                      <strong>Stoning the Pillars:</strong> Throwing stones at the jamarat existed in pre-Islamic rituals.
                    </li>
                    <li>
                      <strong>Animal Sacrifice:</strong> Sacrificing animals was common in Arabian paganism.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-xl border border-amber-500/30 bg-slate-800/50">
                <CardHeader className="bg-slate-800/50 border-b border-slate-700">
                  <CardTitle className="text-lg text-amber-400">The Black Stone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    The Black Stone is set into the eastern corner of the Kaaba and Muslims try to kiss or touch it during Hajj. Consider:
                  </p>
                  <ul className="space-y-2 text-slate-400">
                    <li>• It was venerated as sacred in pre-Islamic paganism</li>
                    <li>• The practice of kissing sacred stones was common in ancient Arabian religion</li>
                    <li>• Muslims believe it descended from heaven, but science suggests it's a meteorite</li>
                    <li>• Despite condemnation of idol worship, Muslims kiss and revere this stone</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* The Hajj Rituals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              The Hajj Rituals
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { day: "Day 1", ritual: "Enter state of Ihram, perform initial Tawaf and Sa'i" },
                { day: "Day 2", ritual: "Travel to Mina, pray and stay overnight" },
                { day: "Day 3", ritual: "Stand at Arafat from noon to sunset (wuquf)" },
                { day: "Day 4", ritual: "Collect pebbles at Muzdalifah, stay overnight" },
                { day: "Day 5", ritual: "Stone Jamrat al-Aqaba, sacrifice animal, shave head" },
                { day: "Days 6-7", ritual: "Stone all three pillars, perform farewell Tawaf" }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-amber-400">{item.day}</h3>
                    <p className="text-sm text-slate-400">{item.ritual}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Modern Concerns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Modern Concerns
            </h2>
            <div className="space-y-4">
              <Card className="rounded-xl border border-slate-700 bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2">Deaths and Stampedes</h3>
                  <p className="text-slate-400">
                    The Hajj regularly sees deadly stampedes and incidents. The 2015 Mina stampede killed over 2,400 people. Extreme heat, overcrowding, and the stoning ritual create dangerous conditions annually.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-slate-700 bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2">Exclusivity</h3>
                  <p className="text-slate-400">
                    Non-Muslims are completely banned from entering Mecca. Road signs direct non-Muslims away. This is one of the most exclusive religious sites in the world - the city of the "universal" religion is closed to most of humanity.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-slate-700 bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2">Commercialization</h3>
                  <p className="text-slate-400">
                    Hajj generates billions in revenue for Saudi Arabia. Luxury hotels tower over the Kaaba, historical sites have been demolished for development, and the experience varies drastically based on wealth.
                  </p>
                </CardContent>
              </Card>
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
                  <p className="text-lg italic text-slate-300 mb-2">
                    "And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way."
                  </p>
                  <p className="text-sm text-amber-400">— Quran 3:97</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-slate-700 bg-slate-800/50">
                <CardContent className="p-6">
                  <p className="text-lg italic text-slate-300 mb-2">
                    "Indeed, Safa and Marwah are among the symbols of Allah. So whoever makes Hajj to the House or performs 'umrah - there is no blame upon him for walking between them."
                  </p>
                  <p className="text-sm text-amber-400">— Quran 2:158</p>
                  <p className="text-sm text-amber-400 mt-2">
                    Note: This verse addresses reluctance to walk between Safa and Marwa because of their association with pagan idols.
                  </p>
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
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Scale className="h-6 w-6 text-red-500" />
              Critical Questions
            </h2>
            <Card className="bg-slate-800/50 border border-slate-700">
              <CardContent className="p-6">
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">1.</span>
                    <span>If Islam condemns idolatry, why does it retain the veneration and kissing of a stone from pagan times?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">2.</span>
                    <span>Why would God's "universal" religion have its holiest site ban the majority of humanity from entering?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">3.</span>
                    <span>If the rituals were commanded by Allah through Abraham, why are there no historical or archaeological records of this before Muhammad?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">4.</span>
                    <span>Why would God require pilgrimage to a physical location when Jesus said worship would not be confined to any mountain or temple (John 4:21-24)?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">5.</span>
                    <span>How can these pre-Islamic pagan practices be justified as divine commandments?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/pillars/sawm">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Sawm
              </Button>
            </Link>
            <Link href="/pillars">
              <Button className="gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700">
                All Five Pillars
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
