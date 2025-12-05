import { MetadataRoute } from 'next'
import { articles } from '@/lib/data/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://truth-in-islam.vercel.app'
  const currentDate = new Date().toISOString()

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // Static pages
  const staticPages = [
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.7 },
    { path: '/questions', priority: 0.7 },
    { path: '/privacy', priority: 0.5 },
    { path: '/terms', priority: 0.5 },
    { path: '/beliefs', priority: 0.8 },
    { path: '/islam', priority: 0.8 },
    { path: '/hadith', priority: 0.8 },
    { path: '/afterlife', priority: 0.8 },
    { path: '/quran', priority: 0.8 },
  ]

  staticPages.forEach(({ path, priority }) => {
    routes.push({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority,
    })
  })

  // Blog listing page
  routes.push({
    url: `${baseUrl}/blog`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  })

  // Individual blog articles
  articles.forEach((article) => {
    routes.push({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.publishedAt || currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // Prophets section
  const prophetSlugs = ['muhammad', 'isa', 'musa', 'ibrahim', 'ilyas']

  routes.push({
    url: `${baseUrl}/prophets`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  prophetSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/prophets/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Pillars section
  const pillarSlugs = ['shahada', 'salah', 'zakat', 'sawm', 'hajj']

  routes.push({
    url: `${baseUrl}/pillars`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  pillarSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/pillars/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  return routes
}
