"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Target, Eye, Shield, Heart, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
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
              About The Truth in Islam
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Dedicated to presenting what Islamic sources actually teach, so that seekers can make informed decisions based on facts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="h-6 w-6" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  The Truth in Islam exists to present what Islam's foundational texts actually teach. Many people - both Muslims and non-Muslims - are unaware of what the Quran, Hadith, and classical Islamic scholarship actually say about key issues.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  We believe everyone deserves access to this information. Our approach is simple: present the original sources, provide context, and let readers draw their own conclusions.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  We are particularly concerned for Muslims who may have never encountered this information, often because it is taught only in Arabic or kept within scholarly circles. Truth should not be hidden.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our Values
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Source-Based",
                description: "We cite primary Islamic sources: the Quran, sahih hadith collections, and respected scholars. We don't make claims without evidence."
              },
              {
                icon: Eye,
                title: "Transparent",
                description: "All sources are referenced so readers can verify claims for themselves. We encourage independent research."
              },
              {
                icon: Shield,
                title: "Honest",
                description: "We present difficult truths with compassion but without sugarcoating. Seekers deserve honesty, not comfortable lies."
              },
              {
                icon: Heart,
                title: "Compassionate",
                description: "We love Muslims while questioning Islam. Our goal is to help people, not hurt them. We stand with those who have questions."
              },
              {
                icon: Users,
                title: "For All",
                description: "Whether you're a Muslim with doubts, a seeker exploring religions, or simply curious - this resource is for you."
              },
              {
                icon: Target,
                title: "Focused",
                description: "We focus on Islam's teachings, not politics or cultural issues. We examine doctrine, not people groups."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                        <value.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{value.title}</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are For */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Who This Site is For
            </h2>
            <div className="space-y-4">
              {[
                {
                  audience: "Muslims with Questions",
                  description: "If you've ever wondered about something your imam won't discuss, or felt doubt but feared asking, you're not alone. This site provides information to help you think critically about what you've been taught."
                },
                {
                  audience: "Those Considering Islam",
                  description: "Before making a life-changing commitment, you deserve to know everything. Not just the version presented to converts, but the full picture of what Islamic sources teach."
                },
                {
                  audience: "Ex-Muslims",
                  description: "Many who leave Islam need resources to process their journey and articulate their reasons. You'll find documented evidence here to support your understanding."
                },
                {
                  audience: "Christians and Other Faith Seekers",
                  description: "Understanding Islamic doctrine is important for meaningful dialogue. This site helps you engage with what Islam actually teaches, not a sanitized version."
                },
                {
                  audience: "Researchers and Academics",
                  description: "All claims are sourced from primary Islamic texts. This site can serve as a reference point for further study."
                }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.audience}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Begin Your Research
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Start exploring what Islamic sources actually teach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/islam">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Start Here
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
