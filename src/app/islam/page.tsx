import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Heart, Users, Globe, Star, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Islam - The Complete Guide to Islamic Faith | The Truth in Islam",
  description: "Discover Islam: the world's fastest-growing religion with over 1.8 billion followers. Learn about Islamic beliefs, the Five Pillars, Prophet Muhammad, the Quran, and the path to understanding the truth.",
  keywords: [
    "Islam",
    "what is Islam",
    "Islam religion",
    "Islam meaning",
    "founder of Islam",
    "Islam founder",
    "Islam history",
    "Islam facts",
    "learn about Islam",
    "understanding Islam",
  ],
  openGraph: {
    title: "Islam - The Complete Guide to Islamic Faith",
    description: "Discover Islam: the world's fastest-growing religion with over 1.8 billion followers. Learn about Islamic beliefs, practices, and teachings.",
    url: `${siteConfig.url}/islam`,
    type: "article",
  },
  alternates: {
    canonical: `${siteConfig.url}/islam`,
  },
}

const sections = [
  {
    title: "The Five Pillars",
    description: "The core practices that form the foundation of Muslim life",
    href: "/pillars",
    icon: Star,
  },
  {
    title: "Islamic Beliefs",
    description: "Core tenets of faith: belief in God, angels, prophets, and more",
    href: "/beliefs",
    icon: Heart,
  },
  {
    title: "The Quran",
    description: "The holy book of Islam, revealed to Prophet Muhammad",
    href: "/quran",
    icon: BookOpen,
  },
  {
    title: "Prophet Muhammad",
    description: "The life and teachings of the final messenger",
    href: "/prophets/muhammad",
    icon: Moon,
  },
]

export default function IslamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Understanding the Faith
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            What is Islam?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-emerald-100">
            Islam is a monotheistic Abrahamic religion that teaches submission to the will of
            God (Allah) and following the guidance revealed to Prophet Muhammad through the Quran.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/pillars">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Explore the Five Pillars
              </Button>
            </Link>
            <Link href="/conversion">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                How to Become Muslim
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              The Meaning of Islam
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The word <strong>"Islam"</strong> comes from the Arabic root "s-l-m" which means peace,
              purity, submission, and obedience. In the religious sense, Islam means submission to
              the will of God and obedience to His law. A person who follows Islam is called a
              <strong> Muslim</strong>, which means "one who submits to Allah."
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Islam is not a new religion but rather the same eternal message revealed to all
              prophets throughout history—from Adam to Noah, Abraham, Moses, Jesus, and finally
              Muhammad (peace be upon them all). Muslims believe that Muhammad is the final
              prophet and the Quran is the final revelation from God to humanity.
            </p>

            <div className="my-12 rounded-2xl bg-emerald-50 p-8 dark:bg-emerald-900/20">
              <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200">
                Key Facts About Islam
              </h3>
              <ul className="mt-4 space-y-3 text-emerald-700 dark:text-emerald-300">
                <li className="flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 flex-shrink-0" />
                  <span><strong>1.8+ billion</strong> Muslims worldwide (24% of world population)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Present in virtually <strong>every country</strong> on Earth</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="mt-1 h-5 w-5 flex-shrink-0" />
                  <span>The Quran has <strong>114 chapters</strong> (Surahs) and over 6,000 verses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="mt-1 h-5 w-5 flex-shrink-0" />
                  <span><strong>25 prophets</strong> are mentioned by name in the Quran</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              The Founder of Islam
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              While Prophet Muhammad (peace be upon him) is often referred to as the "founder of Islam"
              in Western discourse, Muslims understand that he did not create a new religion. Rather,
              he was chosen by Allah as the final messenger to restore and complete the message of all
              previous prophets—the message of pure monotheism (Tawhid).
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Muhammad was born in Mecca (modern-day Saudi Arabia) around 570 CE. At age 40, he
              received his first revelation from Allah through the Angel Gabriel in the Cave of
              Hira. Over the next 23 years, he received the complete Quran and established the
              Muslim community, transforming Arabian society and laying the foundation for one
              of history's most influential civilizations.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Core Beliefs of Islam
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Islam is built upon six articles of faith (Iman):
            </p>
            <ol className="text-slate-600 dark:text-slate-300">
              <li><strong>Belief in Allah</strong> - The one true God, creator of all things</li>
              <li><strong>Belief in Angels</strong> - Spiritual beings created by Allah</li>
              <li><strong>Belief in Holy Books</strong> - Including the Torah, Psalms, Gospel, and Quran</li>
              <li><strong>Belief in Prophets</strong> - All messengers sent by Allah, from Adam to Muhammad</li>
              <li><strong>Belief in the Day of Judgment</strong> - When all will be held accountable</li>
              <li><strong>Belief in Divine Decree</strong> - That Allah has knowledge of all things</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Continue Your Journey
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Explore these foundational topics to deepen your understanding of Islam
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-700">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
                    <section.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {section.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What is Islam? A Complete Guide to Islamic Faith",
            description: "Discover Islam: the world's fastest-growing religion with over 1.8 billion followers. Learn about Islamic beliefs, the Five Pillars, Prophet Muhammad, and the Quran.",
            author: {
              "@type": "Organization",
              name: "The Truth in Islam",
            },
            publisher: {
              "@type": "Organization",
              name: "The Truth in Islam",
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${siteConfig.url}/islam`,
            },
          }),
        }}
      />
    </>
  )
}
