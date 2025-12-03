import { Metadata } from "next"
import Link from "next/link"
import { Heart, Clock, HandHeart, Moon, Building, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig, pillars } from "@/lib/config"

export const metadata: Metadata = {
  title: "Five Pillars of Islam - The 5 Pillars Explained | The Truth in Islam",
  description: "Learn about the Five Pillars of Islam: Shahada (Faith), Salah (Prayer), Zakat (Charity), Sawm (Fasting), and Hajj (Pilgrimage). Discover the foundation of Muslim life and worship.",
  keywords: [
    "five pillars of Islam",
    "5 pillars of Islam",
    "about 5 pillars of Islam",
    "pillars of Islam",
    "Shahada",
    "Salah",
    "Zakat",
    "Sawm",
    "Hajj",
    "Islamic pillars",
    "Muslim pillars",
    "Islam five pillars",
  ],
  openGraph: {
    title: "Five Pillars of Islam - The Foundation of Muslim Life",
    description: "Learn about the Five Pillars of Islam: Shahada, Salah, Zakat, Sawm, and Hajj. Discover the foundation of Muslim life and worship.",
    url: `${siteConfig.url}/pillars`,
    type: "article",
  },
  alternates: {
    canonical: `${siteConfig.url}/pillars`,
  },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  clock: Clock,
  "hand-heart": HandHeart,
  moon: Moon,
  kaaba: Building,
}

const pillarDetails = [
  {
    slug: "shahada",
    name: "Shahada",
    arabicName: "الشهادة",
    meaning: "Declaration of Faith",
    description: "The Shahada is the Islamic declaration of faith: 'Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasul Allah' (I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah).",
    importance: "It is the foundation upon which all other pillars rest. Sincerely declaring the Shahada is the first step to becoming a Muslim.",
    practice: "Muslims recite the Shahada during daily prayers, important life events, and when someone wishes to convert to Islam.",
    icon: Heart,
    color: "rose",
  },
  {
    slug: "salah",
    name: "Salah",
    arabicName: "الصلاة",
    meaning: "The Five Daily Prayers",
    description: "Salah is the ritual prayer performed five times daily: Fajr (dawn), Dhuhr (noon), Asr (afternoon), Maghrib (sunset), and Isha (night). Each prayer involves specific movements and recitations from the Quran.",
    importance: "Prayer establishes a direct connection between the worshipper and Allah. It is a constant reminder of faith throughout the day.",
    practice: "Muslims face the Kaaba in Mecca, perform ablution (wudu), and pray at specified times. Friday midday prayer (Jumu'ah) is especially important.",
    icon: Clock,
    color: "blue",
  },
  {
    slug: "zakat",
    name: "Zakat",
    arabicName: "الزكاة",
    meaning: "Obligatory Charity",
    description: "Zakat is the obligatory giving of a portion of one's wealth (typically 2.5%) to those in need. It purifies wealth and helps distribute resources within the Muslim community.",
    importance: "Zakat reminds Muslims that all wealth ultimately belongs to Allah and should be shared with those less fortunate.",
    practice: "Muslims calculate their zakatable assets annually and distribute the required amount to eligible recipients, including the poor and needy.",
    icon: HandHeart,
    color: "emerald",
  },
  {
    slug: "sawm",
    name: "Sawm",
    arabicName: "الصوم",
    meaning: "Fasting During Ramadan",
    description: "Sawm is fasting from dawn to sunset during the holy month of Ramadan. Muslims abstain from food, drink, and other physical needs during daylight hours.",
    importance: "Fasting develops self-discipline, spiritual reflection, and empathy for those who are hungry and less fortunate.",
    practice: "The fast is broken each evening with Iftar, often beginning with dates and water. The pre-dawn meal is called Suhoor.",
    icon: Moon,
    color: "amber",
  },
  {
    slug: "hajj",
    name: "Hajj",
    arabicName: "الحج",
    meaning: "Pilgrimage to Mecca",
    description: "Hajj is the annual pilgrimage to Mecca that every able-bodied Muslim who can afford it must perform at least once in their lifetime. It takes place during the Islamic month of Dhul Hijjah.",
    importance: "Hajj symbolizes the unity of Muslims worldwide and their submission to Allah. It commemorates the trials of Prophet Ibrahim and his family.",
    practice: "Pilgrims wear simple white garments (Ihram), perform rituals including circling the Kaaba, and visit other sacred sites.",
    icon: Building,
    color: "purple",
  },
]

const colorClasses: Record<string, string> = {
  rose: "bg-red-500/10 text-red-500 border border-red-500/30",
  blue: "bg-blue-500/10 text-blue-500 border border-blue-500/30",
  emerald: "bg-amber-500/10 text-amber-500 border border-amber-500/30",
  amber: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
  purple: "bg-red-500/10 text-red-500 border border-red-500/30",
}

export default function PillarsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)`,
          }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 backdrop-blur-sm">
            Foundation of Faith
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Five Pillars of Islam
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">
            The Five Pillars are the core practices that form the foundation of Muslim life.
            They represent the framework of worship and commitment that unites Muslims worldwide.
          </p>

          {/* Quick Navigation */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {pillarDetails.map((pillar, index) => (
              <a
                key={pillar.slug}
                href={`#${pillar.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-amber-500/30 hover:bg-slate-800"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-xs font-bold text-white">
                  {index + 1}
                </span>
                {pillar.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
            <h2 className="text-2xl font-bold text-white">
              What Are the Five Pillars of Islam?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              The Five Pillars of Islam (<span className="font-arabic">أركان الإسلام</span>) are the five
              basic acts of worship that are obligatory for all Muslims. They were outlined by Prophet
              Muhammad (peace be upon him) in a famous Hadith where he said:
            </p>
            <blockquote className="mt-6 border-l-4 border-amber-500 pl-4 italic text-slate-300">
              "Islam is built upon five [pillars]: testifying that there is no god but Allah and that
              Muhammad is the messenger of Allah, establishing prayer, paying Zakat, performing Hajj
              to the House, and fasting in Ramadan."
              <footer className="mt-2 text-sm font-medium text-amber-400">
                — Sahih al-Bukhari & Sahih Muslim
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Each Pillar */}
      {pillarDetails.map((pillar, index) => (
        <section
          key={pillar.slug}
          id={pillar.slug}
          className={index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"}
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colorClasses[pillar.color]}`}>
                    <pillar.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-400">
                      Pillar {index + 1}
                    </span>
                    <h2 className="text-3xl font-bold text-white">
                      {pillar.name}
                    </h2>
                  </div>
                </div>

                <p className="mt-2 text-2xl font-arabic text-amber-400">
                  {pillar.arabicName}
                </p>
                <p className="mt-1 text-lg font-medium text-slate-300">
                  {pillar.meaning}
                </p>

                <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <div>
                      <h4 className="font-semibold text-white">Why It's Important</h4>
                      <p className="text-slate-400">{pillar.importance}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <div>
                      <h4 className="font-semibold text-white">How It's Practiced</h4>
                      <p className="text-slate-400">{pillar.practice}</p>
                    </div>
                  </div>
                </div>

                <Link href={`/pillars/${pillar.slug}`}>
                  <Button className="mt-8 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700">
                    Learn More About {pillar.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} relative`}>
                <div className={`aspect-square rounded-3xl border border-slate-700 bg-slate-800/50 p-12 flex items-center justify-center`}>
                  <pillar.icon className="h-48 w-48 text-slate-700" />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl border border-slate-700 bg-slate-800 p-4 shadow-xl">
                  <div className="text-3xl font-bold text-white">
                    {index + 1}<span className="text-lg text-slate-500">/5</span>
                  </div>
                  <p className="text-sm text-slate-400">Pillar</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 to-amber-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Ready to Learn More?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Explore our comprehensive guides on each pillar, or begin your journey to understanding Islam.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/islam">
              <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100">
                What is Islam?
              </Button>
            </Link>
            <Link href="/conversion">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                How to Become Muslim
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "The Five Pillars of Islam Explained",
            description: "Learn about the Five Pillars of Islam: Shahada (Faith), Salah (Prayer), Zakat (Charity), Sawm (Fasting), and Hajj (Pilgrimage).",
            url: `${siteConfig.url}/pillars`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: pillarDetails.map((pillar, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Article",
                  name: `${pillar.name} (${pillar.arabicName})`,
                  description: pillar.description,
                  url: `${siteConfig.url}/pillars/${pillar.slug}`,
                },
              })),
            },
            publisher: {
              "@type": "Organization",
              name: "Truth in Islam",
              url: siteConfig.url,
            },
          }),
        }}
      />
    </>
  )
}
