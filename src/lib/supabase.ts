import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  featured_image?: string
  author: string
  published_at: string
  created_at: string
  updated_at: string
  views: number
  reading_time: number
  quran_references?: string[]
  hadith_references?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
  post_count: number
}

export interface QuranVerse {
  id: string
  surah_number: number
  surah_name: string
  verse_number: number
  arabic_text: string
  english_translation: string
  transliteration?: string
  tafsir?: string
}

export interface Hadith {
  id: string
  collection: string
  book: string
  number: string
  narrator: string
  arabic_text?: string
  english_text: string
  grade: string
  reference: string
}

// Database functions
export async function getBlogPosts(options?: {
  category?: string
  limit?: number
  offset?: number
  search?: string
}) {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .order('published_at', { ascending: false })

  if (options?.category) {
    query = query.eq('category', options.category)
  }
  if (options?.search) {
    query = query.ilike('title', `%${options.search}%`)
  }
  if (options?.limit) {
    query = query.limit(options.limit)
  }
  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1)
  }

  const { data, error } = await query
  if (error) throw error
  return data as BlogPost[]
}

export async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as BlogPost
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  if (error) throw error
  return data as Category[]
}

export async function incrementViews(slug: string) {
  const { error } = await supabase.rpc('increment_views', { post_slug: slug })
  if (error) console.error('Failed to increment views:', error)
}
