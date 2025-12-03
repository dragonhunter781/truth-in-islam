"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, AlertTriangle, ArrowRight, Eye, Scale, Shield, Users, Book, Star, Scroll, Calendar, Brain, Heart, ExternalLink, MessageCircleQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Core beliefs with comprehensive sources
const coreBeliefs = [
  {
    id: "tawhid",
    title: "Belief in Allah (Tawhid)",
    arabic: "التوحيد",
    transliteration: "at-Tawhid",
    icon: Star,
    description: "The absolute oneness of Allah. Muslims believe God has no partners, no son, and no equals.",
    quranVerses: [
      {
        verse: "Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.'",
        reference: "Quran 112:1-4",
        arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
        link: "https://quran.com/112"
      },
      {
        verse: "And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful.",
        reference: "Quran 2:163",
        arabic: "وَإِلَٰهُكُمْ إِلَٰهٌ وَٰحِدٌ لَّا إِلَٰهَ إِلَّا هُوَ ٱلرَّحْمَٰنُ ٱلرَّحِيمُ",
        link: "https://quran.com/2/163"
      }
    ],
    hadiths: [
      {
        text: "The Prophet (peace be upon him) said: 'Whoever says: La ilaha illallah (None has the right to be worshipped but Allah) and dies on that belief, will enter Paradise.'",
        reference: "Sahih Bukhari 1237",
        link: "https://sunnah.com/bukhari:1237"
      }
    ],
    contradictions: [
      "The Quran calls Allah 'the best of deceivers' (3:54, 8:30) - yet deception is considered sinful. How can a holy God be characterized by deception?",
      "Allah actively leads people astray (7:186, 14:4, 16:93) then punishes them for it. This contradicts the concept of a just, loving God.",
      "The Quran affirms the Torah and Gospel (3:3, 5:46-47) yet Muslims claim these are corrupted. If Allah couldn't preserve previous revelations, how can we trust He preserved the Quran?"
    ],
    biblicalComparison: {
      points: [
        "The Bible reveals God as Trinity - three persons, one essence (Matthew 28:19, 2 Corinthians 13:14)",
        "God is love (1 John 4:8), not arbitrary will. He desires all to be saved (1 Timothy 2:4), not leading some astray",
        "God never lies or deceives (Numbers 23:19, Hebrews 6:18) - directly opposing Allah's description as 'best of deceivers'"
      ],
      verses: [
        {
          text: "God is not a man, that he should lie, nor a son of man, that he should change his mind.",
          reference: "Numbers 23:19"
        }
      ]
    }
  },
  {
    id: "angels",
    title: "Belief in Angels",
    arabic: "الملائكة",
    transliteration: "al-Mala'ika",
    icon: Heart,
    description: "Belief in angels as beings made of light who carry out Allah's commands.",
    quranVerses: [
      {
        verse: "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers.",
        reference: "Quran 2:285",
        arabic: "آمَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ كُلٌّ آمَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ",
        link: "https://quran.com/2/285"
      },
      {
        verse: "And [mention] when We said to the angels, 'Prostrate to Adam,' and they prostrated, except for Iblees. He was of the jinn and departed from the command of his Lord.",
        reference: "Quran 18:50",
        arabic: "وَإِذْ قُلْنَا لِلْمَلَٰٓئِكَةِ ٱسْجُدُوا۟ لِءَادَمَ فَسَجَدُوٓا۟ إِلَّآ إِبْلِيسَ كَانَ مِنَ ٱلْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِۦ",
        link: "https://quran.com/18/50"
      }
    ],
    hadiths: [
      {
        text: "The Prophet said: 'Angels were created from light, jinn were created from smokeless fire, and Adam was created from what has been described to you.'",
        reference: "Sahih Muslim 2996",
        link: "https://sunnah.com/muslim:2996"
      }
    ],
    contradictions: [
      "Was Satan (Iblis) an angel or jinn? Quran 2:34 says angels prostrated except Iblis (implying he was an angel). Quran 18:50 says he was a jinn. This is a clear contradiction.",
      "Angels are sinless and always obey (Quran 66:6), yet Iblis disobeyed. How can a sinless being sin?",
      "If angels have no free will and only obey, how did Iblis choose to disobey?"
    ],
    biblicalComparison: {
      points: [
        "The Bible is consistent: Satan was a created angel (cherub) who fell through pride (Ezekiel 28:12-17, Isaiah 14:12-15)",
        "Angels have free will - 1/3 chose to rebel with Satan (Revelation 12:4)",
        "Angels worship Jesus (Hebrews 1:6), showing His divinity - contradicting Islamic teaching"
      ],
      verses: [
        {
          text: "How you have fallen from heaven, morning star, son of the dawn! You have been cast down to the earth, you who once laid low the nations!",
          reference: "Isaiah 14:12"
        }
      ]
    }
  },
  {
    id: "books",
    title: "Belief in Holy Books",
    arabic: "الكتب السماوية",
    transliteration: "al-Kutub as-Samawiyya",
    icon: Book,
    description: "Belief in the Torah (Tawrat), Psalms (Zabur), Gospel (Injeel), and Quran as revelations from Allah.",
    quranVerses: [
      {
        verse: "He has sent down upon you, [O Muhammad], the Book in truth, confirming what was before it. And He revealed the Torah and the Gospel.",
        reference: "Quran 3:3",
        arabic: "نَزَّلَ عَلَيْكَ ٱلْكِتَٰبَ بِٱلْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ ٱلتَّوْرَىٰةَ وَٱلْإِنجِيلَ",
        link: "https://quran.com/3/3"
      },
      {
        verse: "So if you are in doubt, [O Muhammad], about that which We have revealed to you, then ask those who have been reading the Scripture before you.",
        reference: "Quran 10:94",
        arabic: "فَإِن كُنتَ فِى شَكٍّۢ مِّمَّآ أَنزَلْنَآ إِلَيْكَ فَسْـَٔلِ ٱلَّذِينَ يَقْرَءُونَ ٱلْكِتَٰبَ مِن قَبْلِكَ",
        link: "https://quran.com/10/94"
      }
    ],
    hadiths: [
      {
        text: "The Prophet said: 'Do not believe the people of the Scripture, nor disbelieve them, but say: We believe in Allah and what has been sent down to us.'",
        reference: "Sahih Bukhari 4485",
        link: "https://sunnah.com/bukhari:4485"
      }
    ],
    contradictions: [
      "Muslims claim the Torah and Gospel are corrupted, yet the Quran says to ask people of the Book if in doubt (10:94). Why reference corrupted texts?",
      "The Quran says it confirms previous scriptures (3:3, 5:46-48), but contradicts them on key doctrines. Either the Quran is wrong or previous books weren't corrupted when Muhammad lived.",
      "No historical evidence exists for 'original' uncorrupted versions of Torah/Gospel that match Islamic teaching. The Dead Sea Scrolls (pre-Islam) match modern Bible manuscripts.",
      "If Allah couldn't preserve the Torah and Gospel from corruption, how can Muslims trust He preserved the Quran?"
    ],
    biblicalComparison: {
      points: [
        "The Bible has unparalleled manuscript evidence: 5,800+ Greek NT manuscripts, some dating to within decades of originals",
        "Dead Sea Scrolls (150 BC - 70 AD) prove the Old Testament hasn't changed",
        "The Gospel message has been consistent from the beginning: Jesus died for sins and rose again (1 Corinthians 15:3-4)",
        "God promises to preserve His Word (Isaiah 40:8, 1 Peter 1:25) - and has done so"
      ],
      verses: [
        {
          text: "The grass withers and the flowers fall, but the word of our God endures forever.",
          reference: "Isaiah 40:8"
        }
      ]
    }
  },
  {
    id: "prophets",
    title: "Belief in Prophets",
    arabic: "الرسل والأنبياء",
    transliteration: "ar-Rusul wal-Anbiya",
    icon: Users,
    description: "Belief in all prophets sent by Allah, with Muhammad as the final prophet (Seal of the Prophets).",
    quranVerses: [
      {
        verse: "Muhammad is not the father of [any] one of your men, but [he is] the Messenger of Allah and last of the prophets.",
        reference: "Quran 33:40",
        arabic: "مَّا كَانَ مُحَمَّدٌ أَبَآ أَحَدٍۢ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ ٱللَّهِ وَخَاتَمَ ٱلنَّبِيِّۦنَ",
        link: "https://quran.com/33/40"
      },
      {
        verse: "Say, [O believers], 'We have believed in Allah and what has been revealed to us and what has been revealed to Abraham and Ishmael and Isaac and Jacob and the Descendants and what was given to Moses and Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [in submission] to Him.'",
        reference: "Quran 2:136",
        arabic: "قُولُوٓا۟ ءَامَنَّا بِٱللَّهِ وَمَآ أُنزِلَ إِلَيْنَا وَمَآ أُنزِلَ إِلَىٰٓ إِبْرَٰهِيمَ وَإِسْمَٰعِيلَ وَإِسْحَٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطِ",
        link: "https://quran.com/2/136"
      }
    ],
    hadiths: [
      {
        text: "The Prophet said: 'I am the nearest of all the people to the son of Mary, and all the prophets are paternal brothers, and there has been no prophet between me and him (Jesus).'",
        reference: "Sahih Bukhari 3442",
        link: "https://sunnah.com/bukhari:3442"
      }
    ],
    contradictions: [
      "Islam claims biblical prophets were Muslims who taught Tawhid, yet their actual teachings in the Bible contradict Islam",
      "Muslims must believe in all prophets equally (2:136), yet Muhammad is clearly elevated above all others",
      "The Quran says Christians and Jews should judge by their scriptures (5:47, 5:68), but those scriptures contradict the Quran",
      "If earlier prophets taught Islam, why is there zero historical or archaeological evidence of Islamic practice before Muhammad?"
    ],
    biblicalComparison: {
      points: [
        "Biblical prophets pointed forward to the Messiah (Isaiah 53, Psalm 22, Daniel 9:24-27)",
        "Jesus claimed to be the final revelation: 'I am the way, the truth, and the life' (John 14:6)",
        "The apostles warned against anyone preaching a different gospel (Galatians 1:8-9)",
        "Jesus fulfilled over 300 Old Testament prophecies - Muhammad fulfilled none"
      ],
      verses: [
        {
          text: "But even if we or an angel from heaven should preach a gospel other than the one we preached to you, let them be under God's curse!",
          reference: "Galatians 1:8"
        }
      ]
    }
  },
  {
    id: "judgment",
    title: "Belief in Day of Judgment",
    arabic: "يوم القيامة",
    transliteration: "Yawm al-Qiyamah",
    icon: Scale,
    description: "Belief in a final day when all will be resurrected and judged by Allah based on their deeds.",
    quranVerses: [
      {
        verse: "And We place the scales of justice for the Day of Resurrection, so no soul will be treated unjustly at all. And if there is [even] the weight of a mustard seed, We will bring it forth. And sufficient are We as accountant.",
        reference: "Quran 21:47",
        arabic: "وَنَضَعُ ٱلْمَوَٰزِينَ ٱلْقِسْطَ لِيَوْمِ ٱلْقِيَٰمَةِ فَلَا تُظْلَمُ نَفْسٌ شَيْـًٔا",
        link: "https://quran.com/21/47"
      },
      {
        verse: "Say, 'I do not tell you that I have the depositories [containing the provision] of Allah or that I know the unseen, nor do I tell you that I am an angel. I only follow what is revealed to me.' Say, 'Is the blind equivalent to the seeing? Then will you not give thought?'",
        reference: "Quran 46:9",
        arabic: "قُلْ مَا كُنتُ بِدْعًا مِّنَ ٱلرُّسُلِ وَمَآ أَدْرِى مَا يُفْعَلُ بِى وَلَا بِكُمْ",
        link: "https://quran.com/46/9"
      }
    ],
    hadiths: [
      {
        text: "The Prophet said: 'None amongst you can get into Paradise by virtue of his deeds alone.' They said: 'Allah's Messenger, not even you?' Thereupon he said: 'Not even I, but that Allah should wrap me in His Grace and Mercy.'",
        reference: "Sahih Muslim 2816",
        link: "https://sunnah.com/muslim:2816"
      }
    ],
    contradictions: [
      "Salvation is based on deeds (scales of justice), yet even Muhammad couldn't earn Paradise by deeds (Muslim 2816). This creates uncertainty.",
      "Muhammad himself said 'I do not know what will be done with me' (46:9). If the prophet had no assurance, how can Muslims?",
      "Allah can forgive any sin except shirk (4:48), yet He arbitrarily chooses whom to guide or mislead (14:4). Where's the justice?",
      "Good deeds must outweigh bad deeds, but who defines the threshold? There's no objective standard."
    ],
    biblicalComparison: {
      points: [
        "Christians have assurance of salvation through faith in Christ (1 John 5:13, Romans 8:1)",
        "Salvation is a gift, not earned (Ephesians 2:8-9): 'not by works, so that no one can boast'",
        "Jesus bore our sins on the cross (1 Peter 2:24), providing substitutionary atonement",
        "There is no condemnation for those in Christ Jesus (Romans 8:1)"
      ],
      verses: [
        {
          text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast.",
          reference: "Ephesians 2:8-9"
        },
        {
          text: "I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.",
          reference: "1 John 5:13"
        }
      ]
    }
  },
  {
    id: "qadar",
    title: "Belief in Predestination (Qadar)",
    arabic: "القضاء والقدر",
    transliteration: "al-Qada wal-Qadar",
    icon: Brain,
    description: "Belief that Allah has predetermined everything that happens, including human actions.",
    quranVerses: [
      {
        verse: "Indeed, all things We created with predestination.",
        reference: "Quran 54:49",
        arabic: "إِنَّا كُلَّ شَىْءٍ خَلَقْنَٰهُ بِقَدَرٍۢ",
        link: "https://quran.com/54/49"
      },
      {
        verse: "And whoever Allah wills - He leaves astray. And whoever He wills - He puts him on a straight path.",
        reference: "Quran 6:39",
        arabic: "وَمَن يَشَإِ ٱللَّهُ يُضْلِلْهُ وَمَن يَشَأْ يَجْعَلْهُ عَلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
        link: "https://quran.com/6/39"
      },
      {
        verse: "And We have certainly created for Hell many of the jinn and mankind. They have hearts with which they do not understand, they have eyes with which they do not see, and they have ears with which they do not hear. Those are like livestock; rather, they are more astray. It is they who are the heedless.",
        reference: "Quran 7:179",
        arabic: "وَلَقَدْ ذَرَأْنَا لِجَهَنَّمَ كَثِيرًا مِّنَ ٱلْجِنِّ وَٱلْإِنسِ",
        link: "https://quran.com/7/179"
      }
    ],
    hadiths: [
      {
        text: "The Prophet said: 'Allah created Adam, and then wiped his back with His right hand and took out from it a progeny, and said: I have created these for Paradise. He then wiped his back and took out from it a progeny and said: I have created these for Hell.'",
        reference: "Sunan Abu Dawud 4703",
        link: "https://sunnah.com/abudawud:4703"
      }
    ],
    contradictions: [
      "If Allah predetermines everything, including who believes, how can humans be held accountable?",
      "Allah creates people specifically for Hell (7:179, Abu Dawud 4703), then punishes them for being what He made them. This is unjust.",
      "The Quran says Allah leads people astray (6:39, 7:186, 14:4), yet punishes them for being astray. This is cruel.",
      "Free will is necessary for moral responsibility, but predestination eliminates free will. Islam's doctrine is incoherent."
    ],
    biblicalComparison: {
      points: [
        "God grants genuine free will - humans choose to accept or reject Him (Deuteronomy 30:19, Joshua 24:15)",
        "God desires all people to be saved (1 Timothy 2:4, 2 Peter 3:9), not creating some for Hell",
        "God foreknows but doesn't force - He knows what we'll choose but doesn't make us choose it",
        "Humans are responsible for sin, not God: 'Let no one say when he is tempted, \"I am being tempted by God\"' (James 1:13)"
      ],
      verses: [
        {
          text: "This day I call the heavens and the earth as witnesses against you that I have set before you life and death, blessings and curses. Now choose life, so that you and your children may live.",
          reference: "Deuteronomy 30:19"
        },
        {
          text: "The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.",
          reference: "2 Peter 3:9"
        }
      ]
    }
  }
]

// Quick Questions
const quickQuestions = [
  {
    question: "Do Muslims worship the same God as Christians?",
    answer: "No. While both claim to worship the God of Abraham, the character and nature are fundamentally different. The God of the Bible is Trinity (Father, Son, Holy Spirit), is love, never deceives, and offers salvation through grace. Allah is strictly monotheistic, is described as 'the best of deceivers,' leads people astray, and salvation is based on works with no assurance. These cannot be the same God."
  },
  {
    question: "Why do Muslims reject the Trinity?",
    answer: "Muslims misunderstand the Trinity, thinking Christians worship three gods. The Quran incorrectly describes the Trinity as Allah, Jesus, and Mary (5:116), showing Muhammad didn't understand Christian theology. The Trinity is one God in three persons - not three gods. Muslims reject it because the Quran explicitly denies Jesus is the Son of God (112:3)."
  },
  {
    question: "Can Muslims have assurance of salvation?",
    answer: "No. Islamic theology provides no assurance. Salvation depends on deeds outweighing sins on judgment day, but no one knows the threshold. Even Muhammad said 'I do not know what will be done with me' (Quran 46:9). A hadith states even Muhammad needed Allah's mercy, not just deeds (Muslim 2816). This creates perpetual uncertainty."
  },
  {
    question: "What is the Islamic view of sin?",
    answer: "Islam views sin as individual bad deeds that can be balanced by good deeds. There's no concept of original sin or inherent human sinfulness. The greatest sin is shirk (associating partners with Allah), which is unforgivable (4:48). This differs from Christianity, which sees sin as rebellion against God requiring atonement, not just good deeds."
  },
  {
    question: "How does Islamic predestination affect morality?",
    answer: "It creates a logical problem. If Allah predetermines all actions (54:49), including who believes and disbelieves (6:39), and even creates people for Hell (7:179), how can humans be morally responsible? Muslims often respond that humans don't know their destiny so must try - but this doesn't solve the philosophical problem of determinism vs. accountability."
  },
  {
    question: "Why do Muslims believe earlier scriptures are corrupted?",
    answer: "Because they contradict the Quran. The Bible affirms Jesus' divinity, death, and resurrection - which the Quran denies. Rather than acknowledge contradiction, Muslims claim the Bible was changed. However, there's zero manuscript evidence for this. The Dead Sea Scrolls (pre-Islam) match modern Bibles, and the Quran itself says to consult previous scriptures (10:94)."
  },
  {
    question: "What is Taqiyya and is it really Islamic?",
    answer: "Taqiyya is the practice of concealing one's faith or lying to protect oneself or Islam. It has Quranic basis (3:28, 16:106). While primarily a Shia doctrine for persecution scenarios, it's sometimes used to justify deception in presenting Islam favorably to non-Muslims. This is controversial even among Muslims, but the textual basis exists."
  },
  {
    question: "How do Muslims view Jesus?",
    answer: "Muslims see Jesus (Isa) as a prophet, born of a virgin, who performed miracles. However, they deny His divinity, His death on the cross (believing someone else was crucified), and His resurrection. The Quran says He's not God's Son (112:3) and Christians who believe this are kafir (disbelievers). See more on our <a href='/prophets' class='text-emerald-600 hover:text-emerald-700 underline'>Prophets</a> page."
  }
]

export default function BeliefsPage() {
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
              The Six Articles of Faith in Islam
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Every Muslim must believe these six doctrines. Here we examine them with Quranic sources, hadith references, and critical analysis comparing them to biblical truth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white dark:bg-slate-900 sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {coreBeliefs.map((belief) => {
                const Icon = belief.icon
                return (
                  <a
                    key={belief.id}
                    href={`#${belief.id}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{belief.title.split(' ')[belief.title.split(' ').length - 1]}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs - Detailed Sections */}
      {coreBeliefs.map((belief, index) => {
        const Icon = belief.icon
        return (
          <section key={belief.id} id={belief.id} className={`py-16 ${index % 2 === 0 ? 'bg-slate-50 dark:bg-slate-900/50' : ''}`}>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{belief.title}</h2>
                      <div className="flex items-center gap-3 mt-1">
                        <p className="text-xl font-arabic text-emerald-600 dark:text-emerald-400">{belief.arabic}</p>
                        <span className="text-sm text-slate-500 dark:text-slate-400">({belief.transliteration})</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300">{belief.description}</p>
                </div>

                {/* Tabbed Content */}
                <Tabs defaultValue="quran" className="w-full">
                  <TabsList className="w-full justify-start mb-6">
                    <TabsTrigger value="quran">Quran</TabsTrigger>
                    <TabsTrigger value="hadith">Hadith</TabsTrigger>
                    <TabsTrigger value="contradictions">Contradictions</TabsTrigger>
                    <TabsTrigger value="biblical">Biblical Comparison</TabsTrigger>
                  </TabsList>

                  {/* Quran Tab */}
                  <TabsContent value="quran">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-emerald-600" />
                          Quranic References
                        </CardTitle>
                        <CardDescription>
                          Primary sources from the Quran about this belief. Visit our <Link href="/quran" className="text-emerald-600 hover:text-emerald-700 underline">Quran page</Link> for more verses.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {belief.quranVerses.map((verse, idx) => (
                          <div key={idx} className="space-y-3">
                            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                              <p className="text-xl font-arabic text-right mb-3 leading-loose" dir="rtl">
                                {verse.arabic}
                              </p>
                              <p className="text-slate-700 dark:text-slate-300 italic border-l-4 border-emerald-500 pl-4">
                                "{verse.verse}"
                              </p>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-emerald-600 dark:text-emerald-400">{verse.reference}</p>
                              <a
                                href={verse.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                              >
                                Read on Quran.com <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Hadith Tab */}
                  <TabsContent value="hadith">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Scroll className="h-5 w-5 text-amber-600" />
                          Hadith References
                        </CardTitle>
                        <CardDescription>
                          Sayings and actions of Muhammad about this belief. Visit our <Link href="/hadith" className="text-emerald-600 hover:text-emerald-700 underline">Hadith page</Link> for more.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {belief.hadiths.map((hadith, idx) => (
                          <div key={idx} className="space-y-3">
                            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
                              <p className="text-slate-700 dark:text-slate-300 italic">
                                {hadith.text}
                              </p>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-amber-600 dark:text-amber-400">{hadith.reference}</p>
                              <a
                                href={hadith.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400"
                              >
                                Read on Sunnah.com <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Contradictions Tab */}
                  <TabsContent value="contradictions">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          Critical Problems & Contradictions
                        </CardTitle>
                        <CardDescription>
                          Logical inconsistencies and theological problems with this belief
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {belief.contradictions.map((contradiction, idx) => (
                            <li key={idx} className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                              <p className="text-slate-700 dark:text-slate-300">{contradiction}</p>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Biblical Comparison Tab */}
                  <TabsContent value="biblical">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Book className="h-5 w-5 text-blue-600" />
                          Biblical Perspective
                        </CardTitle>
                        <CardDescription>
                          How this Islamic belief compares to Christian teaching
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Differences:</h4>
                          <ul className="space-y-3">
                            {belief.biblicalComparison.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                <p className="text-slate-700 dark:text-slate-300">{point}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Biblical References:</h4>
                          <div className="space-y-4">
                            {belief.biblicalComparison.verses.map((verse, idx) => (
                              <div key={idx} className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                                <p className="text-slate-700 dark:text-slate-300 italic mb-2">"{verse.text}"</p>
                                <p className="font-semibold text-blue-600 dark:text-blue-400">{verse.reference}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>
          </section>
        )
      })}

      {/* Quick Questions Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <MessageCircleQuestion className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Quick Questions & Answers
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Common questions about Islamic beliefs with direct answers
              </p>
            </div>

            <div className="space-y-4">
              {quickQuestions.map((qa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900 dark:text-white">{qa.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: qa.answer }} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Continue Your Research
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Link href="/quran">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <BookOpen className="h-5 w-5 text-emerald-600" />
                      Examine the Quran
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Read and analyze Quranic verses with critical commentary
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/hadith">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Scroll className="h-5 w-5 text-amber-600" />
                      Hadith Collections
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Explore Muhammad's sayings and actions from Sahih collections
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/prophets">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="h-5 w-5 text-blue-600" />
                      Islamic Prophets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Learn about prophets in Islam and historical accuracy
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      Blog Articles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Read in-depth articles about Islamic theology and history
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Questions About What You've Read?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              These beliefs raise serious theological questions. If you're a Muslim reading this, we encourage you to investigate these concerns. If you're researching Islam, understand that these are not peripheral issues but core doctrines.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/afterlife">
                <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                  Islamic Afterlife
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/salvation">
                <Button variant="outline" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Salvation in Islam
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
