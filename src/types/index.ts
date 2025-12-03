export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

export interface NavItem {
  title: string
  href: string
  description?: string
  children?: NavItem[]
}

export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

export interface Pillar {
  name: string
  arabicName: string
  slug: string
  description: string
  icon: string
}

export interface Prophet {
  name: string
  arabicName: string
  slug: string
  description: string
  mentioned: number
}

export interface FAQItem {
  question: string
  answer: string
}
