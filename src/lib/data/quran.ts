// Quran data with Arabic, transliteration, and translations

export interface Verse {
  reference: string
  surah: string
  surahNumber: number
  ayah: number
  arabic: string
  transliteration: string
  english: string
  pickthall?: string
  yusufAli?: string
  tafsir?: string
  topic: string
  category?: string
  relatedArticles?: string[]
  commonQuestions?: QuestionAnswer[]
}

export interface QuestionAnswer {
  question: string
  answer: string
}

export interface Surah {
  number: number
  nameArabic: string
  nameTransliteration: string
  nameEnglish: string
  totalVerses: number
  revelationType: "Meccan" | "Medinan"
  description?: string
}

export const surahs: Surah[] = [
  { number: 1, nameArabic: "الفاتحة", nameTransliteration: "Al-Fatihah", nameEnglish: "The Opening", totalVerses: 7, revelationType: "Meccan" },
  { number: 2, nameArabic: "البقرة", nameTransliteration: "Al-Baqarah", nameEnglish: "The Cow", totalVerses: 286, revelationType: "Medinan" },
  { number: 3, nameArabic: "آل عمران", nameTransliteration: "Al-Imran", nameEnglish: "Family of Imran", totalVerses: 200, revelationType: "Medinan" },
  { number: 4, nameArabic: "النساء", nameTransliteration: "An-Nisa", nameEnglish: "The Women", totalVerses: 176, revelationType: "Medinan" },
  { number: 5, nameArabic: "المائدة", nameTransliteration: "Al-Ma'idah", nameEnglish: "The Table Spread", totalVerses: 120, revelationType: "Medinan" },
  { number: 6, nameArabic: "الأنعام", nameTransliteration: "Al-An'am", nameEnglish: "The Cattle", totalVerses: 165, revelationType: "Meccan" },
  { number: 7, nameArabic: "الأعراف", nameTransliteration: "Al-A'raf", nameEnglish: "The Heights", totalVerses: 206, revelationType: "Meccan" },
  { number: 8, nameArabic: "الأنفال", nameTransliteration: "Al-Anfal", nameEnglish: "The Spoils of War", totalVerses: 75, revelationType: "Medinan" },
  { number: 9, nameArabic: "التوبة", nameTransliteration: "At-Tawbah", nameEnglish: "The Repentance", totalVerses: 129, revelationType: "Medinan" },
  { number: 10, nameArabic: "يونس", nameTransliteration: "Yunus", nameEnglish: "Jonah", totalVerses: 109, revelationType: "Meccan" },
  { number: 11, nameArabic: "هود", nameTransliteration: "Hud", nameEnglish: "Hud", totalVerses: 123, revelationType: "Meccan" },
  { number: 12, nameArabic: "يوسف", nameTransliteration: "Yusuf", nameEnglish: "Joseph", totalVerses: 111, revelationType: "Meccan" },
  { number: 13, nameArabic: "الرعد", nameTransliteration: "Ar-Ra'd", nameEnglish: "The Thunder", totalVerses: 43, revelationType: "Medinan" },
  { number: 14, nameArabic: "إبراهيم", nameTransliteration: "Ibrahim", nameEnglish: "Abraham", totalVerses: 52, revelationType: "Meccan" },
  { number: 15, nameArabic: "الحجر", nameTransliteration: "Al-Hijr", nameEnglish: "The Rocky Tract", totalVerses: 99, revelationType: "Meccan" },
  { number: 16, nameArabic: "النحل", nameTransliteration: "An-Nahl", nameEnglish: "The Bee", totalVerses: 128, revelationType: "Meccan" },
  { number: 17, nameArabic: "الإسراء", nameTransliteration: "Al-Isra", nameEnglish: "The Night Journey", totalVerses: 111, revelationType: "Meccan" },
  { number: 18, nameArabic: "الكهف", nameTransliteration: "Al-Kahf", nameEnglish: "The Cave", totalVerses: 110, revelationType: "Meccan" },
  { number: 19, nameArabic: "مريم", nameTransliteration: "Maryam", nameEnglish: "Mary", totalVerses: 98, revelationType: "Meccan" },
  { number: 20, nameArabic: "طه", nameTransliteration: "Ta-Ha", nameEnglish: "Ta-Ha", totalVerses: 135, revelationType: "Meccan" },
  { number: 21, nameArabic: "الأنبياء", nameTransliteration: "Al-Anbiya", nameEnglish: "The Prophets", totalVerses: 112, revelationType: "Meccan" },
  { number: 22, nameArabic: "الحج", nameTransliteration: "Al-Hajj", nameEnglish: "The Pilgrimage", totalVerses: 78, revelationType: "Medinan" },
  { number: 23, nameArabic: "المؤمنون", nameTransliteration: "Al-Mu'minun", nameEnglish: "The Believers", totalVerses: 118, revelationType: "Meccan" },
  { number: 24, nameArabic: "النور", nameTransliteration: "An-Nur", nameEnglish: "The Light", totalVerses: 64, revelationType: "Medinan" },
  { number: 25, nameArabic: "الفرقان", nameTransliteration: "Al-Furqan", nameEnglish: "The Criterion", totalVerses: 77, revelationType: "Meccan" },
  { number: 26, nameArabic: "الشعراء", nameTransliteration: "Ash-Shu'ara", nameEnglish: "The Poets", totalVerses: 227, revelationType: "Meccan" },
  { number: 27, nameArabic: "النمل", nameTransliteration: "An-Naml", nameEnglish: "The Ant", totalVerses: 93, revelationType: "Meccan" },
  { number: 28, nameArabic: "القصص", nameTransliteration: "Al-Qasas", nameEnglish: "The Stories", totalVerses: 88, revelationType: "Meccan" },
  { number: 29, nameArabic: "العنكبوت", nameTransliteration: "Al-Ankabut", nameEnglish: "The Spider", totalVerses: 69, revelationType: "Meccan" },
  { number: 30, nameArabic: "الروم", nameTransliteration: "Ar-Rum", nameEnglish: "The Romans", totalVerses: 60, revelationType: "Meccan" },
  { number: 31, nameArabic: "لقمان", nameTransliteration: "Luqman", nameEnglish: "Luqman", totalVerses: 34, revelationType: "Meccan" },
  { number: 32, nameArabic: "السجدة", nameTransliteration: "As-Sajdah", nameEnglish: "The Prostration", totalVerses: 30, revelationType: "Meccan" },
  { number: 33, nameArabic: "الأحزاب", nameTransliteration: "Al-Ahzab", nameEnglish: "The Combined Forces", totalVerses: 73, revelationType: "Medinan" },
  { number: 34, nameArabic: "سبأ", nameTransliteration: "Saba", nameEnglish: "Sheba", totalVerses: 54, revelationType: "Meccan" },
  { number: 35, nameArabic: "فاطر", nameTransliteration: "Fatir", nameEnglish: "Originator", totalVerses: 45, revelationType: "Meccan" },
  { number: 36, nameArabic: "يس", nameTransliteration: "Ya-Sin", nameEnglish: "Ya-Sin", totalVerses: 83, revelationType: "Meccan" },
  { number: 37, nameArabic: "الصافات", nameTransliteration: "As-Saffat", nameEnglish: "Those Who Set The Ranks", totalVerses: 182, revelationType: "Meccan" },
  { number: 38, nameArabic: "ص", nameTransliteration: "Sad", nameEnglish: "Sad", totalVerses: 88, revelationType: "Meccan" },
  { number: 39, nameArabic: "الزمر", nameTransliteration: "Az-Zumar", nameEnglish: "The Troops", totalVerses: 75, revelationType: "Meccan" },
  { number: 40, nameArabic: "غافر", nameTransliteration: "Ghafir", nameEnglish: "The Forgiver", totalVerses: 85, revelationType: "Meccan" },
  { number: 41, nameArabic: "فصلت", nameTransliteration: "Fussilat", nameEnglish: "Explained in Detail", totalVerses: 54, revelationType: "Meccan" },
  { number: 42, nameArabic: "الشورى", nameTransliteration: "Ash-Shura", nameEnglish: "The Consultation", totalVerses: 53, revelationType: "Meccan" },
  { number: 43, nameArabic: "الزخرف", nameTransliteration: "Az-Zukhruf", nameEnglish: "The Ornaments of Gold", totalVerses: 89, revelationType: "Meccan" },
  { number: 44, nameArabic: "الدخان", nameTransliteration: "Ad-Dukhan", nameEnglish: "The Smoke", totalVerses: 59, revelationType: "Meccan" },
  { number: 45, nameArabic: "الجاثية", nameTransliteration: "Al-Jathiyah", nameEnglish: "The Crouching", totalVerses: 37, revelationType: "Meccan" },
  { number: 46, nameArabic: "الأحقاف", nameTransliteration: "Al-Ahqaf", nameEnglish: "The Wind-Curved Sandhills", totalVerses: 35, revelationType: "Meccan" },
  { number: 47, nameArabic: "محمد", nameTransliteration: "Muhammad", nameEnglish: "Muhammad", totalVerses: 38, revelationType: "Medinan" },
  { number: 48, nameArabic: "الفتح", nameTransliteration: "Al-Fath", nameEnglish: "The Victory", totalVerses: 29, revelationType: "Medinan" },
  { number: 49, nameArabic: "الحجرات", nameTransliteration: "Al-Hujurat", nameEnglish: "The Rooms", totalVerses: 18, revelationType: "Medinan" },
  { number: 50, nameArabic: "ق", nameTransliteration: "Qaf", nameEnglish: "Qaf", totalVerses: 45, revelationType: "Meccan" },
  { number: 51, nameArabic: "الذاريات", nameTransliteration: "Adh-Dhariyat", nameEnglish: "The Winnowing Winds", totalVerses: 60, revelationType: "Meccan" },
  { number: 52, nameArabic: "الطور", nameTransliteration: "At-Tur", nameEnglish: "The Mount", totalVerses: 49, revelationType: "Meccan" },
  { number: 53, nameArabic: "النجم", nameTransliteration: "An-Najm", nameEnglish: "The Star", totalVerses: 62, revelationType: "Meccan" },
  { number: 54, nameArabic: "القمر", nameTransliteration: "Al-Qamar", nameEnglish: "The Moon", totalVerses: 55, revelationType: "Meccan" },
  { number: 55, nameArabic: "الرحمن", nameTransliteration: "Ar-Rahman", nameEnglish: "The Beneficent", totalVerses: 78, revelationType: "Medinan" },
  { number: 56, nameArabic: "الواقعة", nameTransliteration: "Al-Waqi'ah", nameEnglish: "The Inevitable", totalVerses: 96, revelationType: "Meccan" },
  { number: 57, nameArabic: "الحديد", nameTransliteration: "Al-Hadid", nameEnglish: "The Iron", totalVerses: 29, revelationType: "Medinan" },
  { number: 58, nameArabic: "المجادلة", nameTransliteration: "Al-Mujadila", nameEnglish: "The Pleading Woman", totalVerses: 22, revelationType: "Medinan" },
  { number: 59, nameArabic: "الحشر", nameTransliteration: "Al-Hashr", nameEnglish: "The Exile", totalVerses: 24, revelationType: "Medinan" },
  { number: 60, nameArabic: "الممتحنة", nameTransliteration: "Al-Mumtahanah", nameEnglish: "She That is to be Examined", totalVerses: 13, revelationType: "Medinan" },
  { number: 61, nameArabic: "الصف", nameTransliteration: "As-Saff", nameEnglish: "The Ranks", totalVerses: 14, revelationType: "Medinan" },
  { number: 62, nameArabic: "الجمعة", nameTransliteration: "Al-Jumu'ah", nameEnglish: "The Congregation", totalVerses: 11, revelationType: "Medinan" },
  { number: 63, nameArabic: "المنافقون", nameTransliteration: "Al-Munafiqun", nameEnglish: "The Hypocrites", totalVerses: 11, revelationType: "Medinan" },
  { number: 64, nameArabic: "التغابن", nameTransliteration: "At-Taghabun", nameEnglish: "The Mutual Disillusion", totalVerses: 18, revelationType: "Medinan" },
  { number: 65, nameArabic: "الطلاق", nameTransliteration: "At-Talaq", nameEnglish: "The Divorce", totalVerses: 12, revelationType: "Medinan" },
  { number: 66, nameArabic: "التحريم", nameTransliteration: "At-Tahrim", nameEnglish: "The Prohibition", totalVerses: 12, revelationType: "Medinan" },
  { number: 67, nameArabic: "الملك", nameTransliteration: "Al-Mulk", nameEnglish: "The Sovereignty", totalVerses: 30, revelationType: "Meccan" },
  { number: 68, nameArabic: "القلم", nameTransliteration: "Al-Qalam", nameEnglish: "The Pen", totalVerses: 52, revelationType: "Meccan" },
  { number: 69, nameArabic: "الحاقة", nameTransliteration: "Al-Haqqah", nameEnglish: "The Reality", totalVerses: 52, revelationType: "Meccan" },
  { number: 70, nameArabic: "المعارج", nameTransliteration: "Al-Ma'arij", nameEnglish: "The Ascending Stairways", totalVerses: 44, revelationType: "Meccan" },
  { number: 71, nameArabic: "نوح", nameTransliteration: "Nuh", nameEnglish: "Noah", totalVerses: 28, revelationType: "Meccan" },
  { number: 72, nameArabic: "الجن", nameTransliteration: "Al-Jinn", nameEnglish: "The Jinn", totalVerses: 28, revelationType: "Meccan" },
  { number: 73, nameArabic: "المزمل", nameTransliteration: "Al-Muzzammil", nameEnglish: "The Enshrouded One", totalVerses: 20, revelationType: "Meccan" },
  { number: 74, nameArabic: "المدثر", nameTransliteration: "Al-Muddaththir", nameEnglish: "The Cloaked One", totalVerses: 56, revelationType: "Meccan" },
  { number: 75, nameArabic: "القيامة", nameTransliteration: "Al-Qiyamah", nameEnglish: "The Resurrection", totalVerses: 40, revelationType: "Meccan" },
  { number: 76, nameArabic: "الإنسان", nameTransliteration: "Al-Insan", nameEnglish: "The Man", totalVerses: 31, revelationType: "Medinan" },
  { number: 77, nameArabic: "المرسلات", nameTransliteration: "Al-Mursalat", nameEnglish: "The Emissaries", totalVerses: 50, revelationType: "Meccan" },
  { number: 78, nameArabic: "النبأ", nameTransliteration: "An-Naba", nameEnglish: "The Tidings", totalVerses: 40, revelationType: "Meccan" },
  { number: 79, nameArabic: "النازعات", nameTransliteration: "An-Nazi'at", nameEnglish: "Those Who Drag Forth", totalVerses: 46, revelationType: "Meccan" },
  { number: 80, nameArabic: "عبس", nameTransliteration: "Abasa", nameEnglish: "He Frowned", totalVerses: 42, revelationType: "Meccan" },
  { number: 81, nameArabic: "التكوير", nameTransliteration: "At-Takwir", nameEnglish: "The Overthrowing", totalVerses: 29, revelationType: "Meccan" },
  { number: 82, nameArabic: "الانفطار", nameTransliteration: "Al-Infitar", nameEnglish: "The Cleaving", totalVerses: 19, revelationType: "Meccan" },
  { number: 83, nameArabic: "المطففين", nameTransliteration: "Al-Mutaffifin", nameEnglish: "The Defrauding", totalVerses: 36, revelationType: "Meccan" },
  { number: 84, nameArabic: "الانشقاق", nameTransliteration: "Al-Inshiqaq", nameEnglish: "The Sundering", totalVerses: 25, revelationType: "Meccan" },
  { number: 85, nameArabic: "البروج", nameTransliteration: "Al-Buruj", nameEnglish: "The Mansions of the Stars", totalVerses: 22, revelationType: "Meccan" },
  { number: 86, nameArabic: "الطارق", nameTransliteration: "At-Tariq", nameEnglish: "The Morning Star", totalVerses: 17, revelationType: "Meccan" },
  { number: 87, nameArabic: "الأعلى", nameTransliteration: "Al-A'la", nameEnglish: "The Most High", totalVerses: 19, revelationType: "Meccan" },
  { number: 88, nameArabic: "الغاشية", nameTransliteration: "Al-Ghashiyah", nameEnglish: "The Overwhelming", totalVerses: 26, revelationType: "Meccan" },
  { number: 89, nameArabic: "الفجر", nameTransliteration: "Al-Fajr", nameEnglish: "The Dawn", totalVerses: 30, revelationType: "Meccan" },
  { number: 90, nameArabic: "البلد", nameTransliteration: "Al-Balad", nameEnglish: "The City", totalVerses: 20, revelationType: "Meccan" },
  { number: 91, nameArabic: "الشمس", nameTransliteration: "Ash-Shams", nameEnglish: "The Sun", totalVerses: 15, revelationType: "Meccan" },
  { number: 92, nameArabic: "الليل", nameTransliteration: "Al-Layl", nameEnglish: "The Night", totalVerses: 21, revelationType: "Meccan" },
  { number: 93, nameArabic: "الضحى", nameTransliteration: "Ad-Duhaa", nameEnglish: "The Morning Hours", totalVerses: 11, revelationType: "Meccan" },
  { number: 94, nameArabic: "الشرح", nameTransliteration: "Ash-Sharh", nameEnglish: "The Relief", totalVerses: 8, revelationType: "Meccan" },
  { number: 95, nameArabic: "التين", nameTransliteration: "At-Tin", nameEnglish: "The Fig", totalVerses: 8, revelationType: "Meccan" },
  { number: 96, nameArabic: "العلق", nameTransliteration: "Al-Alaq", nameEnglish: "The Clot", totalVerses: 19, revelationType: "Meccan" },
  { number: 97, nameArabic: "القدر", nameTransliteration: "Al-Qadr", nameEnglish: "The Power", totalVerses: 5, revelationType: "Meccan" },
  { number: 98, nameArabic: "البينة", nameTransliteration: "Al-Bayyinah", nameEnglish: "The Clear Proof", totalVerses: 8, revelationType: "Medinan" },
  { number: 99, nameArabic: "الزلزلة", nameTransliteration: "Az-Zalzalah", nameEnglish: "The Earthquake", totalVerses: 8, revelationType: "Medinan" },
  { number: 100, nameArabic: "العاديات", nameTransliteration: "Al-Adiyat", nameEnglish: "The Courser", totalVerses: 11, revelationType: "Meccan" },
  { number: 101, nameArabic: "القارعة", nameTransliteration: "Al-Qari'ah", nameEnglish: "The Calamity", totalVerses: 11, revelationType: "Meccan" },
  { number: 102, nameArabic: "التكاثر", nameTransliteration: "At-Takathur", nameEnglish: "The Rivalry in World Increase", totalVerses: 8, revelationType: "Meccan" },
  { number: 103, nameArabic: "العصر", nameTransliteration: "Al-Asr", nameEnglish: "The Declining Day", totalVerses: 3, revelationType: "Meccan" },
  { number: 104, nameArabic: "الهمزة", nameTransliteration: "Al-Humazah", nameEnglish: "The Traducer", totalVerses: 9, revelationType: "Meccan" },
  { number: 105, nameArabic: "الفيل", nameTransliteration: "Al-Fil", nameEnglish: "The Elephant", totalVerses: 5, revelationType: "Meccan" },
  { number: 106, nameArabic: "قريش", nameTransliteration: "Quraysh", nameEnglish: "Quraysh", totalVerses: 4, revelationType: "Meccan" },
  { number: 107, nameArabic: "الماعون", nameTransliteration: "Al-Ma'un", nameEnglish: "The Small Kindnesses", totalVerses: 7, revelationType: "Meccan" },
  { number: 108, nameArabic: "الكوثر", nameTransliteration: "Al-Kawthar", nameEnglish: "The Abundance", totalVerses: 3, revelationType: "Meccan" },
  { number: 109, nameArabic: "الكافرون", nameTransliteration: "Al-Kafirun", nameEnglish: "The Disbelievers", totalVerses: 6, revelationType: "Meccan" },
  { number: 110, nameArabic: "النصر", nameTransliteration: "An-Nasr", nameEnglish: "The Divine Support", totalVerses: 3, revelationType: "Medinan" },
  { number: 111, nameArabic: "المسد", nameTransliteration: "Al-Masad", nameEnglish: "The Palm Fiber", totalVerses: 5, revelationType: "Meccan" },
  { number: 112, nameArabic: "الإخلاص", nameTransliteration: "Al-Ikhlas", nameEnglish: "The Sincerity", totalVerses: 4, revelationType: "Meccan" },
  { number: 113, nameArabic: "الفلق", nameTransliteration: "Al-Falaq", nameEnglish: "The Daybreak", totalVerses: 5, revelationType: "Meccan" },
  { number: 114, nameArabic: "الناس", nameTransliteration: "An-Nas", nameEnglish: "Mankind", totalVerses: 6, revelationType: "Meccan" },
]

// Controversial verses organized by topic
export const controversialVerses: Record<string, Verse[]> = {
  violence: [
    {
      reference: "2:191",
      surah: "Al-Baqarah",
      surahNumber: 2,
      ayah: 191,
      arabic: "وَاقْتُلُوهُمْ حَيْثُ ثَقِفْتُمُوهُمْ وَأَخْرِجُوهُم مِّنْ حَيْثُ أَخْرَجُوكُمْ",
      transliteration: "Waqtuloohum haythu thaqiftumoohum wa-akhrijoohum min haythu akhrajookum",
      english: "And kill them wherever you find them and expel them from wherever they have expelled you",
      pickthall: "And slay them wherever ye find them, and drive them out of the places whence they drove you out",
      yusufAli: "And slay them wherever ye catch them, and turn them out from where they have turned you out",
      topic: "Kill Wherever You Find Them",
      relatedArticles: ["kill-wherever-find-them", "sword-verse-quran-9-5"],
      commonQuestions: [
        {
          question: "Doesn't this verse only apply in self-defense?",
          answer: "While some apologists claim context limits this to defensive war, classical Islamic scholars like Ibn Kathir affirm this was a general command. The next verse (2:193) commands fighting 'until there is no fitnah and religion is for Allah,' showing the goal is Islamic dominance, not just self-defense."
        },
        {
          question: "Was this command limited to Muhammad's time?",
          answer: "Islamic jurisprudence (fiqh) has historically applied these verses as ongoing commands. The four major schools of Islamic law all maintain that jihad is an obligation until the world submits to Islam. This isn't an ancient relic—it's still taught today."
        }
      ]
    },
    { reference: "2:193", surah: "Al-Baqarah", surahNumber: 2, ayah: 193, arabic: "وَقَاتِلُوهُمْ حَتَّىٰ لَا تَكُونَ فِتْنَةٌ", transliteration: "Waqatiloohum hatta la takoona fitnatun", english: "And fight them until there is no fitnah and religion is for Allah", topic: "Fight Until Islam Dominates" },
    { reference: "3:151", surah: "Al-Imran", surahNumber: 3, ayah: 151, arabic: "سَنُلْقِي فِي قُلُوبِ الَّذِينَ كَفَرُوا الرُّعْبَ", transliteration: "Sanulqee fee quloobi allatheena kafaroo alrruAAba", english: "We will cast terror into the hearts of those who disbelieve", topic: "Terror Against Disbelievers" },
    { reference: "4:89", surah: "An-Nisa", surahNumber: 4, ayah: 89, arabic: "فَخُذُوهُمْ وَاقْتُلُوهُمْ حَيْثُ وَجَدتُّمُوهُمْ", transliteration: "Fakhuthoohum waoqtuloohum haythu wajadtumoohum", english: "Seize them and kill them wherever you find them", topic: "Kill Apostates" },
    { reference: "5:33", surah: "Al-Ma'idah", surahNumber: 5, ayah: 33, arabic: "أَن يُقَتَّلُوا أَوْ يُصَلَّبُوا أَوْ تُقَطَّعَ أَيْدِيهِمْ وَأَرْجُلُهُم مِّنْ خِلَافٍ", transliteration: "An yuqattaloo aw yusallaboo aw tuqattaAAa aydeehim waarjuluhum min khilafin", english: "They be killed or crucified or their hands and feet be cut off from opposite sides", topic: "Crucifixion and Mutilation" },
    { reference: "8:12", surah: "Al-Anfal", surahNumber: 8, ayah: 12, arabic: "فَاضْرِبُوا فَوْقَ الْأَعْنَاقِ وَاضْرِبُوا مِنْهُمْ كُلَّ بَنَانٍ", transliteration: "Faidriboo fawqa alaAAnaqi waidriboo minhum kulla bananin", english: "Strike upon the necks and strike from them every fingertip", topic: "Beheading" },
    { reference: "8:60", surah: "Al-Anfal", surahNumber: 8, ayah: 60, arabic: "تُرْهِبُونَ بِهِ عَدُوَّ اللَّهِ وَعَدُوَّكُمْ", transliteration: "Turhiboona bihi AAaduwwa Allahi waAAaduwwakum", english: "By which you may terrify the enemy of Allah", topic: "Terrorize Enemies" },
    {
      reference: "9:5",
      surah: "At-Tawbah",
      surahNumber: 9,
      ayah: 5,
      arabic: "فَإِذَا انسَلَخَ الْأَشْهُرُ الْحُرُمُ فَاقْتُلُوا الْمُشْرِكِينَ حَيْثُ وَجَدتُّمُوهُمْ وَخُذُوهُمْ وَاحْصُرُوهُمْ وَاقْعُدُوا لَهُمْ كُلَّ مَرْصَدٍ",
      transliteration: "Fa-itha insalakha al-ashhuru al-hurumu faqtuloo almushrikeena haythu wajadtumoohum wakhuthoohum waohsuroohum waqAAudoo lahum kulla marsadin",
      english: "And when the sacred months have passed, then kill the polytheists wherever you find them and capture them and besiege them and sit in wait for them at every place of ambush",
      pickthall: "Then, when the sacred months have passed, slay the idolaters wherever ye find them, and take them (captive), and besiege them, and prepare for them each ambush",
      yusufAli: "But when the forbidden months are past, then fight and slay the Pagans wherever ye find them, and seize them, besiege them, and lie in wait for them in every stratagem (of war)",
      topic: "The Sword Verse",
      relatedArticles: ["sword-verse-quran-9-5", "abrogation-peaceful-verses"],
      commonQuestions: [
        {
          question: "Doesn't verse 9:6 offer peace to those who seek it?",
          answer: "Verse 9:6 only offers temporary protection to polytheists who 'seek your protection' - and only so they can hear the message of Islam. After that, they must be 'conducted to a place of safety.' The choice given is convert, pay jizya (if People of the Book), or be killed. This isn't religious freedom."
        },
        {
          question: "How many peaceful verses does 9:5 abrogate?",
          answer: "Classical scholars like Ibn Kathir say this verse abrogates 124 verses calling for patience and tolerance. Ibn Salama al-Nahas says it abrogates every peace treaty in the Quran. This single verse effectively cancels the 'no compulsion in religion' principle."
        }
      ]
    },
    { reference: "9:29", surah: "At-Tawbah", surahNumber: 9, ayah: 29, arabic: "قَاتِلُوا الَّذِينَ لَا يُؤْمِنُونَ بِاللَّهِ", transliteration: "Qatiloo allatheena la yuminoona biAllahi", english: "Fight those who do not believe in Allah... until they pay the jizyah with willing submission", topic: "Fight People of the Book" },
    { reference: "9:111", surah: "At-Tawbah", surahNumber: 9, ayah: 111, arabic: "يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ فَيَقْتُلُونَ وَيُقْتَلُونَ", transliteration: "Yuqatiloona fee sabeeli Allahi fayaqtuloona wayuqtaloona", english: "They fight in the cause of Allah, so they kill and are killed", topic: "Paradise Through Killing" },
    { reference: "47:4", surah: "Muhammad", surahNumber: 47, ayah: 4, arabic: "فَإِذَا لَقِيتُمُ الَّذِينَ كَفَرُوا فَضَرْبَ الرِّقَابِ", transliteration: "Faitha laqeetumu allatheena kafaroo fadarba alrriqabi", english: "When you meet those who disbelieve, strike necks", topic: "Strike Their Necks" },
  ],
  women: [
    { reference: "2:223", surah: "Al-Baqarah", surahNumber: 2, ayah: 223, arabic: "نِسَاؤُكُمْ حَرْثٌ لَّكُمْ فَأْتُوا حَرْثَكُمْ أَنَّىٰ شِئْتُمْ", transliteration: "Nisaokum harthun lakum fatoo harthakum anna shitum", english: "Your wives are a place of sowing for you, so come to your place of cultivation however you wish", topic: "Women as Fields" },
    { reference: "2:228", surah: "Al-Baqarah", surahNumber: 2, ayah: 228, arabic: "وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌ", transliteration: "Walirrijali AAalayhinna darajatun", english: "And men have a degree over them", topic: "Men Above Women" },
    { reference: "2:282", surah: "Al-Baqarah", surahNumber: 2, ayah: 282, arabic: "فَإِن لَّمْ يَكُونَا رَجُلَيْنِ فَرَجُلٌ وَامْرَأَتَانِ", transliteration: "Fain lam yakoona rajulayni farajulun waimraatani", english: "If not two men, then a man and two women", topic: "Women Half Witness" },
    { reference: "4:3", surah: "An-Nisa", surahNumber: 4, ayah: 3, arabic: "فَانكِحُوا مَا طَابَ لَكُم مِّنَ النِّسَاءِ مَثْنَىٰ وَثُلَاثَ وَرُبَاعَ", transliteration: "Fainkihoo ma taba lakum mina alnnisai mathna wathalatha warubaAAa", english: "Marry those that please you of women, two or three or four", topic: "Polygamy" },
    { reference: "4:11", surah: "An-Nisa", surahNumber: 4, ayah: 11, arabic: "لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ", transliteration: "Lilththakari mithlu haththi alonthayayni", english: "The male shall have the equivalent of the portion of two females", topic: "Women Half Inheritance" },
    {
      reference: "4:34",
      surah: "An-Nisa",
      surahNumber: 4,
      ayah: 34,
      arabic: "الرِّجَالُ قَوَّامُونَ عَلَى النِّسَاءِ بِمَا فَضَّلَ اللَّهُ بَعْضَهُمْ عَلَىٰ بَعْضٍ وَبِمَا أَنفَقُوا مِنْ أَمْوَالِهِمْ ... وَاللَّاتِي تَخَافُونَ نُشُوزَهُنَّ فَعِظُوهُنَّ وَاهْجُرُوهُنَّ فِي الْمَضَاجِعِ وَاضْرِبُوهُنَّ",
      transliteration: "Alrrijalu qawwamoona AAala alnnisai bima faddala Allahu baAAdahum AAala baAAdin wabima anfaqoo min amwalihim... waallatee takhafoona nushoozahunna faAAithoohunna waohjuroohunna fee almadajiAAi waidriboohunna",
      english: "Men are in charge of women by [right of] what Allah has given one over the other and what they spend [for maintenance] from their wealth... But those [wives] from whom you fear arrogance - [first] advise them; [then if they persist], forsake them in bed; and [finally], strike them",
      pickthall: "Men are in charge of women, because Allah hath made the one of them to excel the other... As for those from whom ye fear rebellion, admonish them and banish them to beds apart, and scourge them",
      yusufAli: "Men are the protectors and maintainers of women, because Allah has given the one more (strength) than the other... As to those women on whose part ye fear disloyalty and ill-conduct, admonish them (first), (next), refuse to share their beds, (and last) beat them (lightly)",
      topic: "Wife Beating",
      relatedArticles: ["wife-beating-quran-4-34", "women-fields-quran-2-223"],
      commonQuestions: [
        {
          question: "Doesn't 'daraba' mean 'separate from' not 'strike'?",
          answer: "This is a modern reinterpretation. Classical scholars, hadith, and 1400 years of Islamic jurisprudence uniformly understood 'daraba' as physical striking. Muhammad himself struck Aisha (Sahih Muslim 2127). Every major tafsir (Ibn Kathir, Al-Tabari, Al-Qurtubi) interprets this as permission to hit. The word 'daraba' is used 58 times in the Quran and means 'to strike' in virtually every instance."
        },
        {
          question: "Does 'lightly' make it acceptable?",
          answer: "The word 'lightly' doesn't appear in the Arabic text - translators added it to soften the verse. Hadith specify it should leave no marks, but permission to strike a wife for 'disobedience' is still domestic violence by any moral standard. This isn't about severity - it's about the fundamental principle that husbands have authority to physically discipline their wives."
        },
        {
          question: "What does Islamic law say about this verse today?",
          answer: "Many Muslim-majority countries still allow wife-beating in their legal codes, citing this verse. The Reliance of the Traveller (certified Shafi'i manual) states a husband may strike his wife if she 'refuses him sexually' or 'goes where he has forbidden her to go.' This isn't historical - it's current Islamic jurisprudence."
        }
      ]
    },
    { reference: "65:4", surah: "At-Talaq", surahNumber: 65, ayah: 4, arabic: "وَاللَّائِي لَمْ يَحِضْنَ", transliteration: "Waallaee lam yahidna", english: "Those who have not yet menstruated", topic: "Child Marriage" },
  ],
  slavery: [
    { reference: "4:24", surah: "An-Nisa", surahNumber: 4, ayah: 24, arabic: "وَالْمُحْصَنَاتُ مِنَ النِّسَاءِ إِلَّا مَا مَلَكَتْ أَيْمَانُكُمْ", transliteration: "Waalmuhsanatu mina alnnisai illa ma malakat aymanukum", english: "And married women except those your right hands possess", topic: "Sex with Captives" },
    { reference: "23:5-6", surah: "Al-Mu'minun", surahNumber: 23, ayah: 5, arabic: "إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ", transliteration: "Illa AAala azwajihim aw ma malakat aymanuhum", english: "Except from their wives or those their right hands possess", topic: "Slaves for Sexual Use" },
    { reference: "33:50", surah: "Al-Ahzab", surahNumber: 33, ayah: 50, arabic: "وَمَا مَلَكَتْ يَمِينُكَ مِمَّا أَفَاءَ اللَّهُ عَلَيْكَ", transliteration: "Wama malakat yameenuka mimma afaa Allahu AAalayka", english: "Those your right hand possesses from what Allah has returned to you", topic: "War Captives" },
  ],
  scientific: [
    { reference: "18:86", surah: "Al-Kahf", surahNumber: 18, ayah: 86, arabic: "وَجَدَهَا تَغْرُبُ فِي عَيْنٍ حَمِئَةٍ", transliteration: "Wajadaha taghrubu fee AAaynin hamiatin", english: "He found it setting in a spring of dark mud", topic: "Sun Sets in Mud", relatedArticles: ["sun-sets-muddy-spring"] },
    { reference: "67:5", surah: "Al-Mulk", surahNumber: 67, ayah: 5, arabic: "وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ", transliteration: "WajaAAalnaha rujooman lilshshayateeni", english: "Made them as missiles to stone the devils", topic: "Stars as Missiles", relatedArticles: ["stars-missiles-devils"] },
    { reference: "86:5-7", surah: "At-Tariq", surahNumber: 86, ayah: 5, arabic: "يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ", transliteration: "Yakhruju min bayni alssulbi waalttaraibi", english: "Emerging from between the backbone and the ribs", topic: "Sperm from Backbone", relatedArticles: ["sperm-backbone-quran"] },
  ],
  apostasy: [
    {
      reference: "4:89",
      surah: "An-Nisa",
      surahNumber: 4,
      ayah: 89,
      arabic: "فَخُذُوهُمْ وَاقْتُلُوهُمْ حَيْثُ وَجَدتُّمُوهُمْ",
      transliteration: "Fakhuthoohum waoqtuloohum haythu wajadtumoohum",
      english: "Seize them and kill them wherever you find them",
      pickthall: "So choose them not for friends until they forsake their homes in the way of Allah; if they turn back (to enmity) then take them and kill them wherever ye find them",
      yusufAli: "Seize them and slay them wherever ye find them",
      topic: "Kill Apostates",
      relatedArticles: ["death-leaving-islam-hadith", "change-religion-kill-him"],
      commonQuestions: [
        {
          question: "Is death for apostasy really Islamic?",
          answer: "Yes. This verse combined with multiple authentic hadith (Bukhari 9:83:17, 9:84:57) where Muhammad said 'Whoever changes his religion, kill him' forms the basis for Islamic apostasy law. All four major schools of Islamic jurisprudence (Hanafi, Maliki, Shafi'i, Hanbali) prescribe death for apostasy."
        },
        {
          question: "Do Muslim countries still apply this today?",
          answer: "Yes. Countries like Afghanistan, Iran, Malaysia, Mauritania, Qatar, Saudi Arabia, Somalia, Sudan, UAE, and Yemen have death penalty or severe punishment for apostasy in their legal codes. Even in countries without official laws, apostates face extrajudicial killings, imprisonment, and torture."
        }
      ]
    },
    {
      reference: "2:217",
      surah: "Al-Baqarah",
      surahNumber: 2,
      ayah: 217,
      arabic: "وَمَن يَرْتَدِدْ مِنكُمْ عَن دِينِهِ فَيَمُتْ وَهُوَ كَافِرٌ",
      transliteration: "Wa man yartadid minkum 'an deenihi fayamut wa huwa kafirun",
      english: "And whoever of you reverts from his religion and dies while he is a disbeliever",
      topic: "Apostasy Condemned",
      relatedArticles: ["apostasy-islamic-law-history"]
    }
  ],
  abrogation: [
    {
      reference: "2:106",
      surah: "Al-Baqarah",
      surahNumber: 2,
      ayah: 106,
      arabic: "مَا نَنسَخْ مِنْ آيَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍ مِّنْهَا",
      transliteration: "Ma nansakh min ayatin aw nunsiha nati bikhayrin minha",
      english: "We do not abrogate a verse or cause it to be forgotten except that We bring forth one better than it",
      topic: "Doctrine of Abrogation",
      relatedArticles: ["abrogation-peaceful-verses", "allah-word-change-abrogation"],
      commonQuestions: [
        {
          question: "What is abrogation (naskh)?",
          answer: "Abrogation is the Islamic doctrine that later Quranic verses cancel out earlier contradictory verses. This is crucial because the peaceful Meccan verses are abrogated by the violent Medinan verses. The 'Verse of the Sword' (9:5) alone abrogates 124 peaceful verses according to some scholars."
        },
        {
          question: "Doesn't abrogation prove the Quran is imperfect?",
          answer: "Yes. If the Quran is the eternal, perfect word of Allah, why would it need corrections and cancellations? The doctrine of abrogation contradicts claims that the Quran is preserved and unchanging. Muslims explain this by saying Allah's commands changed based on circumstances, but this makes Allah appear indecisive."
        }
      ]
    }
  ],
}

export function getSurah(number: number): Surah | undefined {
  return surahs.find(s => s.number === number)
}

export function getVersesByTopic(topic: string): Verse[] {
  return controversialVerses[topic] || []
}

export function getAllSurahs(): Surah[] {
  return surahs
}
