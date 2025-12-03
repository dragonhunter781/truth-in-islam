import { NavItem, Pillar, Prophet, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'The Truth in Islam',
  description: 'Examine what Islamic sources really teach. Explore Quranic verses, authentic Hadiths, and scholarly interpretations that reveal the complete picture of Islamic doctrine.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://thetruthinislam.org',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/thetruthinislam',
    facebook: 'https://facebook.com/thetruthinislam',
    instagram: 'https://instagram.com/thetruthinislam',
    youtube: 'https://youtube.com/@thetruthinislam'
  }
}

export const mainNav: NavItem[] = [
  {
    title: 'Islam',
    href: '/islam',
    description: 'What Islamic sources reveal'
  },
  {
    title: 'Five Pillars',
    href: '/pillars',
    description: 'The foundational requirements',
    children: [
      { title: 'Shahada', href: '/pillars/shahada', description: 'Declaration of faith' },
      { title: 'Salah', href: '/pillars/salah', description: 'The five daily prayers' },
      { title: 'Zakat', href: '/pillars/zakat', description: 'Obligatory charity' },
      { title: 'Sawm', href: '/pillars/sawm', description: 'Fasting during Ramadan' },
      { title: 'Hajj', href: '/pillars/hajj', description: 'Pilgrimage to Mecca' }
    ]
  },
  {
    title: 'Quran',
    href: '/quran',
    description: 'Examine Quranic teachings'
  },
  {
    title: 'Hadith',
    href: '/hadith',
    description: 'Prophetic traditions examined'
  },
  {
    title: 'Beliefs',
    href: '/beliefs',
    description: 'Core Islamic doctrines'
  },
  {
    title: 'Prophets',
    href: '/prophets',
    description: 'Prophets in Islamic tradition'
  },
  {
    title: 'Articles',
    href: '/blog',
    description: 'In-depth analysis'
  }
]

export const pillars: Pillar[] = [
  {
    name: 'Shahada',
    arabicName: 'الشهادة',
    slug: 'shahada',
    description: 'The declaration of faith - the binding oath that commits one to Islam.',
    icon: 'heart'
  },
  {
    name: 'Salah',
    arabicName: 'الصلاة',
    slug: 'salah',
    description: 'The five daily prayers - mandatory rituals with specific requirements.',
    icon: 'clock'
  },
  {
    name: 'Zakat',
    arabicName: 'الزكاة',
    slug: 'zakat',
    description: 'Obligatory charity - including its prescribed recipients and purposes.',
    icon: 'hand-heart'
  },
  {
    name: 'Sawm',
    arabicName: 'الصوم',
    slug: 'sawm',
    description: 'Fasting during Ramadan - the rules, exceptions, and penalties.',
    icon: 'moon'
  },
  {
    name: 'Hajj',
    arabicName: 'الحج',
    slug: 'hajj',
    description: 'Pilgrimage to Mecca - rituals with pre-Islamic origins.',
    icon: 'kaaba'
  }
]

export const prophets: Prophet[] = [
  { name: 'Adam', arabicName: 'آدم', slug: 'adam', description: 'The first human and prophet', mentioned: 25 },
  { name: 'Ibrahim (Abraham)', arabicName: 'إبراهيم', slug: 'ibrahim', description: 'The father of prophets', mentioned: 69 },
  { name: 'Musa (Moses)', arabicName: 'موسى', slug: 'musa', description: 'Who spoke directly with Allah', mentioned: 136 },
  { name: 'Isa (Jesus)', arabicName: 'عيسى', slug: 'isa', description: 'The Messiah in Islamic view', mentioned: 25 },
  { name: 'Muhammad', arabicName: 'محمد', slug: 'muhammad', description: 'The founder of Islam', mentioned: 4 },
  { name: 'Nuh (Noah)', arabicName: 'نوح', slug: 'nuh', description: 'Who built the ark', mentioned: 43 },
  { name: 'Yusuf (Joseph)', arabicName: 'يوسف', slug: 'yusuf', description: 'Known for his story', mentioned: 27 },
  { name: 'Dawud (David)', arabicName: 'داود', slug: 'dawud', description: 'The king and prophet', mentioned: 16 },
  { name: 'Sulaiman (Solomon)', arabicName: 'سليمان', slug: 'sulaiman', description: 'The wise king', mentioned: 17 },
  { name: 'Ilyas (Elijah)', arabicName: 'إلياس', slug: 'ilyas', description: 'Prophet mentioned in the Quran', mentioned: 2 }
]

export const categories = [
  { name: 'Quran Analysis', slug: 'quran-analysis', description: 'Critical examination of Quranic verses' },
  { name: 'Hadith Studies', slug: 'hadith-studies', description: 'What the traditions reveal' },
  { name: 'Women in Islam', slug: 'women-in-islam', description: 'Treatment and status of women' },
  { name: 'Violence & Jihad', slug: 'violence-jihad', description: 'Teachings on warfare and violence' },
  { name: 'Apostasy & Blasphemy', slug: 'apostasy-blasphemy', description: 'Leaving Islam and criticism' },
  { name: 'Comparative Religion', slug: 'comparative-religion', description: 'Islam compared to other faiths' },
  { name: 'History', slug: 'history', description: 'Historical events and figures' },
  { name: 'Sharia Law', slug: 'sharia-law', description: 'Islamic legal rulings' }
]
