"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm"
          >
            <Sparkles className="h-8 w-8 text-amber-300" />
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Begin Your Journey to Understanding Islam
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100 sm:text-xl">
            Whether you're curious about Islam, considering conversion, or want to
            deepen your knowledge, we're here to guide you with authentic
            information from the Quran and Sunnah.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/conversion">
              <Button
                size="lg"
                className="w-full bg-white text-emerald-700 hover:bg-emerald-50 sm:w-auto"
              >
                <Heart className="mr-2 h-5 w-5" />
                Learn How to Become Muslim
              </Button>
            </Link>
            <Link href="/islam">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
              >
                Explore Islamic Teachings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm text-emerald-200"
          >
            Join thousands of seekers who have found guidance through our resources
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
