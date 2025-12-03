// Bible cross-references for Islamic topics

export interface BibleVerse {
  reference: string
  book: string
  chapter: number
  verse: number
  text: string
  topic: string
}

export interface CrossReference {
  quranRef: string
  bibleRef: string
  type: "parallel" | "contradiction" | "context" | "prophecy"
  explanation: string
}

// Key Bible verses for cross-referencing with Islamic topics
export const bibleVerses: Record<string, BibleVerse[]> = {
  jesus: [
    { reference: "John 14:6", book: "John", chapter: 14, verse: 6, text: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'", topic: "Jesus as the Way" },
    { reference: "John 8:58", book: "John", chapter: 8, verse: 58, text: "Jesus said to them, 'Truly, truly, I say to you, before Abraham was, I am.'", topic: "Jesus' Divinity" },
    { reference: "John 10:30", book: "John", chapter: 10, verse: 30, text: "I and the Father are one.", topic: "Unity with Father" },
    { reference: "Matthew 28:18-20", book: "Matthew", chapter: 28, verse: 18, text: "And Jesus came and said to them, 'All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations...'", topic: "Great Commission" },
    { reference: "Philippians 2:5-11", book: "Philippians", chapter: 2, verse: 5, text: "...Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped...", topic: "Christ's Humility and Divinity" },
    { reference: "Colossians 2:9", book: "Colossians", chapter: 2, verse: 9, text: "For in him the whole fullness of deity dwells bodily.", topic: "Deity of Christ" },
  ],
  crucifixion: [
    { reference: "Isaiah 53:5-6", book: "Isaiah", chapter: 53, verse: 5, text: "But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace.", topic: "Prophecy of Crucifixion" },
    { reference: "Matthew 27:35", book: "Matthew", chapter: 27, verse: 35, text: "And when they had crucified him, they divided his garments among them by casting lots.", topic: "Crucifixion Account" },
    { reference: "Mark 15:37-39", book: "Mark", chapter: 15, verse: 37, text: "And Jesus uttered a loud cry and breathed his last... 'Truly this man was the Son of God!'", topic: "Death of Jesus" },
    { reference: "1 Corinthians 15:3-4", book: "1 Corinthians", chapter: 15, verse: 3, text: "...that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day...", topic: "Gospel Summary" },
    { reference: "Galatians 3:13", book: "Galatians", chapter: 3, verse: 13, text: "Christ redeemed us from the curse of the law by becoming a curse for us—for it is written, 'Cursed is everyone who is hanged on a tree.'", topic: "Redemption Through Cross" },
  ],
  violence: [
    { reference: "Matthew 5:44", book: "Matthew", chapter: 5, verse: 44, text: "But I say to you, Love your enemies and pray for those who persecute you.", topic: "Love Enemies" },
    { reference: "Matthew 26:52", book: "Matthew", chapter: 26, verse: 52, text: "Then Jesus said to him, 'Put your sword back into its place. For all who take the sword will perish by the sword.'", topic: "Against Violence" },
    { reference: "Romans 12:17-21", book: "Romans", chapter: 12, verse: 17, text: "Repay no one evil for evil... If your enemy is hungry, feed him... Do not be overcome by evil, but overcome evil with good.", topic: "Overcoming Evil with Good" },
    { reference: "Luke 6:27-29", book: "Luke", chapter: 6, verse: 27, text: "But I say to you who hear, Love your enemies, do good to those who hate you... To one who strikes you on the cheek, offer the other also.", topic: "Turn the Other Cheek" },
  ],
  women: [
    { reference: "Galatians 3:28", book: "Galatians", chapter: 3, verse: 28, text: "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.", topic: "Equality in Christ" },
    { reference: "Ephesians 5:25", book: "Ephesians", chapter: 5, verse: 25, text: "Husbands, love your wives, as Christ loved the church and gave himself up for her.", topic: "Husband's Love" },
    { reference: "1 Peter 3:7", book: "1 Peter", chapter: 3, verse: 7, text: "Likewise, husbands, live with your wives in an understanding way, showing honor to the woman as the weaker vessel, since they are heirs with you of the grace of life.", topic: "Honoring Wives" },
    { reference: "Colossians 3:19", book: "Colossians", chapter: 3, verse: 19, text: "Husbands, love your wives, and do not be harsh with them.", topic: "Against Harshness" },
  ],
  apostasy: [
    { reference: "Luke 15:11-32", book: "Luke", chapter: 15, verse: 11, text: "[The Prodigal Son parable - the father welcomes back the son who left]", topic: "Father's Forgiveness" },
    { reference: "2 Peter 3:9", book: "2 Peter", chapter: 3, verse: 9, text: "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.", topic: "God's Patience" },
    { reference: "John 6:67-68", book: "John", chapter: 6, verse: 67, text: "So Jesus said to the twelve, 'Do you want to go away as well?' Simon Peter answered him, 'Lord, to whom shall we go? You have the words of eternal life.'", topic: "Freedom to Leave" },
  ],
  slavery: [
    { reference: "Galatians 3:28", book: "Galatians", chapter: 3, verse: 28, text: "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.", topic: "No Slave or Free" },
    { reference: "Philemon 1:16", book: "Philemon", chapter: 1, verse: 16, text: "No longer as a bondservant but more than a bondservant, as a beloved brother.", topic: "Slave as Brother" },
    { reference: "1 Timothy 1:10", book: "1 Timothy", chapter: 1, verse: 10, text: "The sexually immoral, men who practice homosexuality, enslavers, liars, perjurers...", topic: "Enslavers Condemned" },
  ],
  abraham: [
    { reference: "Genesis 22:2", book: "Genesis", chapter: 22, verse: 2, text: "He said, 'Take your son, your only son Isaac, whom you love, and go to the land of Moriah, and offer him there as a burnt offering...'", topic: "Sacrifice of Isaac" },
    { reference: "Genesis 17:19", book: "Genesis", chapter: 17, verse: 19, text: "God said, 'No, but Sarah your wife shall bear you a son, and you shall call his name Isaac. I will establish my covenant with him...'", topic: "Covenant with Isaac" },
    { reference: "Hebrews 11:17-19", book: "Hebrews", chapter: 11, verse: 17, text: "By faith Abraham, when he was tested, offered up Isaac... He considered that God was able even to raise him from the dead.", topic: "Abraham's Faith" },
  ],
  elijah: [
    { reference: "1 Kings 18:21", book: "1 Kings", chapter: 18, verse: 21, text: "And Elijah came near to all the people and said, 'How long will you go limping between two different opinions? If the LORD is God, follow him; but if Baal, then follow him.'", topic: "Choose: YHWH or Baal" },
    { reference: "1 Kings 18:38-39", book: "1 Kings", chapter: 18, verse: 38, text: "Then the fire of the LORD fell and consumed the burnt offering... And when all the people saw it, they fell on their faces and said, 'The LORD, he is God.'", topic: "YHWH Answers by Fire" },
    { reference: "1 Kings 19:10", book: "1 Kings", chapter: 19, verse: 10, text: "I have been very jealous for the LORD, the God of hosts. For the people of Israel have forsaken your covenant, thrown down your altars, and killed your prophets with the sword.", topic: "Elijah's Zeal" },
  ],
  moses: [
    { reference: "Deuteronomy 18:15", book: "Deuteronomy", chapter: 18, verse: 15, text: "The LORD your God will raise up for you a prophet like me from among you, from your brothers—it is to him you shall listen.", topic: "Prophet Like Moses" },
    { reference: "Acts 3:22-23", book: "Acts", chapter: 3, verse: 22, text: "Moses said, 'The Lord God will raise up for you a prophet like me from your brothers. You shall listen to him...'", topic: "Fulfilled in Jesus" },
    { reference: "John 1:45", book: "John", chapter: 1, verse: 45, text: "We have found him of whom Moses in the Law and also the prophets wrote, Jesus of Nazareth.", topic: "Jesus Fulfills Moses" },
  ],
}

// Cross-references between Quran and Bible
export const crossReferences: CrossReference[] = [
  // Jesus
  { quranRef: "4:157-158", bibleRef: "Matthew 27:35", type: "contradiction", explanation: "The Quran denies Jesus was crucified; the Bible affirms it as historical fact witnessed by many." },
  { quranRef: "5:116-117", bibleRef: "John 10:30", type: "contradiction", explanation: "The Quran denies Jesus claimed divinity; the Bible records Jesus claiming equality with God." },
  { quranRef: "3:45-55", bibleRef: "Isaiah 53:5-6", type: "contradiction", explanation: "Islamic Jesus doesn't die for sins; Biblical Jesus dies as atonement." },

  // Violence
  { quranRef: "9:5", bibleRef: "Matthew 5:44", type: "contradiction", explanation: "The Quran commands killing polytheists; Jesus commands loving enemies." },
  { quranRef: "9:29", bibleRef: "Luke 6:27-29", type: "contradiction", explanation: "The Quran commands fighting People of the Book; Jesus taught turning the other cheek." },
  { quranRef: "8:12", bibleRef: "Matthew 26:52", type: "contradiction", explanation: "The Quran commands striking necks and fingers; Jesus said those who live by the sword die by it." },
  { quranRef: "47:4", bibleRef: "Romans 12:17-21", type: "contradiction", explanation: "The Quran commands smiting necks of disbelievers; Paul commands overcoming evil with good." },
  { quranRef: "2:191", bibleRef: "Matthew 5:39", type: "contradiction", explanation: "The Quran commands killing wherever found; Jesus commands not resisting an evil person." },
  { quranRef: "8:39", bibleRef: "John 18:36", type: "contradiction", explanation: "The Quran commands fighting until all religion is for Allah; Jesus said His kingdom is not of this world." },
  { quranRef: "2:216", bibleRef: "Matthew 5:9", type: "contradiction", explanation: "The Quran prescribes fighting as obligatory; Jesus blesses the peacemakers." },
  { quranRef: "5:33", bibleRef: "Romans 12:14", type: "contradiction", explanation: "The Quran commands crucifixion for corruption; Paul commands blessing persecutors." },
  { quranRef: "48:29", bibleRef: "Luke 6:35", type: "contradiction", explanation: "The Quran says be harsh on disbelievers; Jesus commands loving enemies and doing good." },

  // Women
  { quranRef: "4:34", bibleRef: "Ephesians 5:25", type: "contradiction", explanation: "The Quran permits striking wives; the Bible commands husbands to love sacrificially." },
  { quranRef: "2:228", bibleRef: "Galatians 3:28", type: "contradiction", explanation: "The Quran says men have a degree over women; Paul says all are equal in Christ." },
  { quranRef: "2:282", bibleRef: "Acts 2:17-18", type: "contradiction", explanation: "The Quran says women's testimony is half a man's; the Bible shows God speaking through women equally." },
  { quranRef: "4:11", bibleRef: "Numbers 27:7-8", type: "context", explanation: "The Quran gives daughters half inheritance; the Bible allowed daughters full inheritance when no sons." },
  { quranRef: "4:3", bibleRef: "Matthew 19:5-6", type: "contradiction", explanation: "The Quran permits up to 4 wives; Jesus affirms the one-flesh union of man and wife." },
  { quranRef: "65:4", bibleRef: "Ezekiel 16:8", type: "contradiction", explanation: "The Quran addresses divorce of prepubescent wives; Biblical marriage presupposes maturity." },
  { quranRef: "33:50", bibleRef: "1 Corinthians 7:2", type: "contradiction", explanation: "The Quran permits captive women; Paul commands each man have his own wife." },

  // Slavery
  { quranRef: "23:5-6", bibleRef: "1 Corinthians 7:21", type: "contradiction", explanation: "The Quran permits sexual relations with slaves; Paul encourages slaves to gain freedom if possible." },
  { quranRef: "4:24", bibleRef: "Philemon 1:16", type: "contradiction", explanation: "The Quran permits married captives; Paul calls the slave Onesimus a beloved brother." },

  // Scientific Issues
  { quranRef: "18:86", bibleRef: "Ecclesiastes 1:5", type: "context", explanation: "The Quran describes the sun setting in muddy water; the Bible uses phenomenological language but not error." },
  { quranRef: "86:6-7", bibleRef: "Psalm 139:13-14", type: "contradiction", explanation: "The Quran says sperm comes from backbone; the Bible correctly attributes creation to God's wisdom." },
  { quranRef: "67:5", bibleRef: "Job 38:31-33", type: "context", explanation: "The Quran says stars are missiles against demons; the Bible describes their order and beauty." },

  // Abraham's Sacrifice
  { quranRef: "37:102-107", bibleRef: "Genesis 22:2", type: "contradiction", explanation: "Islam implies Ishmael was sacrificed; the Bible clearly names Isaac." },

  // Elijah
  { quranRef: "37:123-128", bibleRef: "1 Kings 18:21", type: "context", explanation: "Both mention Elijah confronting Baal worship, but the Quranic account is minimal." },

  // Apostasy
  { quranRef: "4:89", bibleRef: "Luke 15:11-32", type: "contradiction", explanation: "The Quran commands killing apostates; Jesus told of a father welcoming back a wayward son." },
  { quranRef: "2:217", bibleRef: "2 Peter 3:9", type: "contradiction", explanation: "The Quran says apostasy is worse than killing; God is patient, wanting none to perish." },
]

export function getBibleVersesByTopic(topic: string): BibleVerse[] {
  return bibleVerses[topic] || []
}

export function getCrossReferencesForQuran(quranRef: string): CrossReference[] {
  return crossReferences.filter(cr => cr.quranRef === quranRef)
}

export function getAllCrossReferences(): CrossReference[] {
  return crossReferences
}
