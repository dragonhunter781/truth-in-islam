"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What are the Five Pillars of Islam?",
    answer: "The Five Pillars of Islam are the core practices that form the foundation of Muslim life: 1) Shahada (Declaration of Faith), 2) Salah (Five Daily Prayers), 3) Zakat (Obligatory Charity), 4) Sawm (Fasting during Ramadan), and 5) Hajj (Pilgrimage to Mecca). These pillars represent the framework of a Muslim's life and are considered obligatory for all Muslims."
  },
  {
    question: "Who is the founder of Islam?",
    answer: "Muslims believe that Islam was not founded by any human being, but rather revealed by God (Allah) to Prophet Muhammad (peace be upon him) in the 7th century CE. However, Muslims consider Islam to be the same eternal message delivered by all prophets throughout history, including Adam, Abraham, Moses, and Jesus. Prophet Muhammad is considered the final messenger who received the complete and final revelation - the Quran."
  },
  {
    question: "What is the difference between Islam and Christianity?",
    answer: "While Islam and Christianity share common roots and many similarities (belief in one God, reverence for Jesus, moral teachings), key differences include: 1) The nature of Jesus - Christianity believes Jesus is divine, while Islam considers him a prophet; 2) The concept of salvation - Christianity emphasizes faith in Jesus, while Islam emphasizes submission to God and good deeds; 3) Scripture - Christians follow the Bible, Muslims follow the Quran; 4) The Trinity - Christianity teaches the Trinity, while Islam emphasizes strict monotheism (Tawhid)."
  },
  {
    question: "How do I convert to Islam?",
    answer: "Converting to Islam involves sincerely reciting the Shahada (declaration of faith): 'Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasul Allah' (I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah). While witnesses are recommended, they are not required. After conversion, new Muslims gradually learn and implement Islamic practices like prayer, and connect with the Muslim community for support and guidance."
  },
  {
    question: "What does Islam teach about the afterlife?",
    answer: "Islam teaches that after death, souls enter a transitional state (Barzakh) until the Day of Judgment. On this day, all humans will be resurrected and judged by Allah based on their faith and deeds. Those who believed in Allah and did good deeds will enter Paradise (Jannah) - a place of eternal peace and happiness. Those who rejected faith and committed evil without repentance will face Hell (Jahannam). Allah is described as the Most Merciful, and sincere repentance during life can lead to forgiveness."
  },
  {
    question: "Is Elijah mentioned in Islam?",
    answer: "Yes, Elijah (known as Ilyas in Arabic) is mentioned in the Quran as one of the righteous prophets. He is mentioned twice in the Quran (Surah Al-An'am 6:85 and Surah As-Saffat 37:123-132). The Quran describes him as a prophet who called his people to worship Allah alone and abandon idol worship, specifically the worship of Baal. He is listed among the messengers who were 'among the righteous' and 'among the favored.'"
  },
  {
    question: "What is the Quran?",
    answer: "The Quran is the holy book of Islam, believed by Muslims to be the literal word of God (Allah) revealed to Prophet Muhammad through the Angel Gabriel over approximately 23 years. It contains 114 chapters (Surahs) and covers guidance on faith, worship, law, morality, and stories of previous prophets. Muslims believe the Quran has been perfectly preserved in its original Arabic and serves as the ultimate source of guidance for humanity."
  },
  {
    question: "What are Hadith?",
    answer: "Hadith are the recorded sayings, actions, and approvals of Prophet Muhammad (peace be upon him). They serve as the second source of Islamic guidance after the Quran, providing practical examples of how to implement Quranic teachings. Hadith collections like Sahih Bukhari and Sahih Muslim are considered the most authentic. Scholars carefully verify the chain of narration (isnad) to ensure the authenticity of each hadith."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Common Questions About Islam
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Find answers to the most common questions about Islamic beliefs,
            practices, and teachings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="pr-6 text-lg font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-200 px-6 pb-6 pt-4 dark:border-slate-700">
                      <p className="text-slate-600 leading-relaxed dark:text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
