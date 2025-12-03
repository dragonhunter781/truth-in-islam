-- Truth in Islam Database Schema
-- Comprehensive schema for Quran, Hadith, Blog, and User Interaction

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- QURAN TABLES
-- ============================================

-- Surahs (Chapters)
CREATE TABLE surahs (
    id SERIAL PRIMARY KEY,
    surah_number INTEGER UNIQUE NOT NULL,
    name_arabic TEXT NOT NULL,
    name_transliteration TEXT NOT NULL,
    name_english TEXT NOT NULL,
    total_verses INTEGER NOT NULL,
    revelation_type TEXT CHECK (revelation_type IN ('Meccan', 'Medinan')),
    revelation_order INTEGER,
    juz_start INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ayahs (Verses)
CREATE TABLE ayahs (
    id SERIAL PRIMARY KEY,
    surah_id INTEGER REFERENCES surahs(id) ON DELETE CASCADE,
    surah_number INTEGER NOT NULL,
    ayah_number INTEGER NOT NULL,
    text_arabic TEXT NOT NULL,
    text_transliteration TEXT,
    text_english TEXT,
    text_urdu TEXT,
    text_indonesian TEXT,
    text_turkish TEXT,
    text_french TEXT,
    text_spanish TEXT,
    juz INTEGER,
    hizb INTEGER,
    page INTEGER,
    sajda BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(surah_number, ayah_number)
);

-- Quran Topics (for categorizing verses)
CREATE TABLE quran_topics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    parent_id UUID REFERENCES quran_topics(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Link verses to topics
CREATE TABLE ayah_topics (
    ayah_id INTEGER REFERENCES ayahs(id) ON DELETE CASCADE,
    topic_id UUID REFERENCES quran_topics(id) ON DELETE CASCADE,
    relevance_score INTEGER DEFAULT 5,
    PRIMARY KEY (ayah_id, topic_id)
);

-- Tafsir (Commentary)
CREATE TABLE tafsir_sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    author TEXT,
    language TEXT DEFAULT 'en',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE tafsir (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ayah_id INTEGER REFERENCES ayahs(id) ON DELETE CASCADE,
    source_id UUID REFERENCES tafsir_sources(id),
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- HADITH TABLES
-- ============================================

-- Hadith Collections
CREATE TABLE hadith_collections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    name_arabic TEXT,
    author TEXT,
    author_arabic TEXT,
    tradition TEXT CHECK (tradition IN ('Sunni', 'Shia', 'Both')),
    description TEXT,
    total_hadiths INTEGER,
    grading_system TEXT,
    source_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hadith Books (sub-sections within collections)
CREATE TABLE hadith_books (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    collection_id UUID REFERENCES hadith_collections(id) ON DELETE CASCADE,
    book_number INTEGER,
    name TEXT NOT NULL,
    name_arabic TEXT,
    total_hadiths INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Individual Hadiths
CREATE TABLE hadiths (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    collection_id UUID REFERENCES hadith_collections(id) ON DELETE CASCADE,
    book_id UUID REFERENCES hadith_books(id),
    hadith_number TEXT,
    reference TEXT NOT NULL,
    text_arabic TEXT,
    text_english TEXT NOT NULL,
    text_urdu TEXT,
    narrator TEXT,
    narrator_arabic TEXT,
    chain TEXT,
    grading TEXT,
    grading_source TEXT,
    is_sahih BOOLEAN,
    source_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hadith Topics
CREATE TABLE hadith_topics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE hadith_topic_links (
    hadith_id UUID REFERENCES hadiths(id) ON DELETE CASCADE,
    topic_id UUID REFERENCES hadith_topics(id) ON DELETE CASCADE,
    PRIMARY KEY (hadith_id, topic_id)
);

-- ============================================
-- BIBLE TABLES (Cross-references)
-- ============================================

CREATE TABLE bible_books (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    abbreviation TEXT,
    testament TEXT CHECK (testament IN ('Old', 'New')),
    chapter_count INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE bible_verses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_id INTEGER REFERENCES bible_books(id),
    chapter INTEGER NOT NULL,
    verse INTEGER NOT NULL,
    text_kjv TEXT,
    text_niv TEXT,
    text_esv TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(book_id, chapter, verse)
);

-- Cross-references between Quran/Hadith and Bible
CREATE TABLE cross_references (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ayah_id INTEGER REFERENCES ayahs(id),
    hadith_id UUID REFERENCES hadiths(id),
    bible_verse_id UUID REFERENCES bible_verses(id),
    reference_type TEXT CHECK (reference_type IN ('parallel', 'contradiction', 'context', 'prophecy')),
    explanation TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- BLOG/ARTICLE TABLES
-- ============================================

CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    icon TEXT,
    color TEXT,
    parent_id UUID REFERENCES categories(id),
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    content_html TEXT,
    category_id UUID REFERENCES categories(id),
    featured BOOLEAN DEFAULT FALSE,
    featured_image TEXT,
    reading_time INTEGER,
    views INTEGER DEFAULT 0,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMPTZ,
    meta_title TEXT,
    meta_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE article_tags (
    article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (article_id, tag_id)
);

-- Link articles to Quran/Hadith sources
CREATE TABLE article_sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
    ayah_id INTEGER REFERENCES ayahs(id),
    hadith_id UUID REFERENCES hadiths(id),
    bible_verse_id UUID REFERENCES bible_verses(id),
    context TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TOPIC PAGES (Islamic Dilemma content)
-- ============================================

CREATE TABLE dilemma_topics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    subtitle TEXT,
    introduction TEXT,
    content TEXT NOT NULL,
    content_html TEXT,
    category TEXT,
    difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
    featured BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    meta_title TEXT,
    meta_description TEXT,
    views INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sources for dilemma topics
CREATE TABLE dilemma_sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID REFERENCES dilemma_topics(id) ON DELETE CASCADE,
    ayah_id INTEGER REFERENCES ayahs(id),
    hadith_id UUID REFERENCES hadiths(id),
    bible_verse_id UUID REFERENCES bible_verses(id),
    source_text TEXT,
    context TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- USER INTERACTION TABLES (Anonymous)
-- ============================================

-- Anonymous users (session-based)
CREATE TABLE anonymous_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_token TEXT UNIQUE NOT NULL,
    display_name TEXT,
    avatar_seed TEXT,
    country_code TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_active TIMESTAMPTZ DEFAULT NOW()
);

-- Questions
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES anonymous_users(id),
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    category TEXT,
    related_ayah_id INTEGER REFERENCES ayahs(id),
    related_hadith_id UUID REFERENCES hadiths(id),
    related_article_id UUID REFERENCES articles(id),
    upvotes INTEGER DEFAULT 0,
    downvotes INTEGER DEFAULT 0,
    answer_count INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    is_answered BOOLEAN DEFAULT FALSE,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'hidden', 'closed')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Answers/Comments
CREATE TABLE answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES anonymous_users(id),
    parent_id UUID REFERENCES answers(id),
    body TEXT NOT NULL,
    upvotes INTEGER DEFAULT 0,
    downvotes INTEGER DEFAULT 0,
    is_accepted BOOLEAN DEFAULT FALSE,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'hidden')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Votes (for questions and answers)
CREATE TABLE votes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES anonymous_users(id),
    question_id UUID REFERENCES questions(id),
    answer_id UUID REFERENCES answers(id),
    vote_type INTEGER CHECK (vote_type IN (-1, 1)),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, question_id),
    UNIQUE(user_id, answer_id)
);

-- Discussion threads on articles/topics
CREATE TABLE discussions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES anonymous_users(id),
    article_id UUID REFERENCES articles(id),
    topic_id UUID REFERENCES dilemma_topics(id),
    parent_id UUID REFERENCES discussions(id),
    body TEXT NOT NULL,
    upvotes INTEGER DEFAULT 0,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'hidden')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_ayahs_surah ON ayahs(surah_number);
CREATE INDEX idx_ayahs_search ON ayahs USING gin(to_tsvector('english', text_english));
CREATE INDEX idx_hadiths_collection ON hadiths(collection_id);
CREATE INDEX idx_hadiths_search ON hadiths USING gin(to_tsvector('english', text_english));
CREATE INDEX idx_articles_status ON articles(status);
CREATE INDEX idx_articles_category ON articles(category_id);
CREATE INDEX idx_articles_search ON articles USING gin(to_tsvector('english', title || ' ' || COALESCE(content, '')));
CREATE INDEX idx_questions_status ON questions(status);
CREATE INDEX idx_discussions_article ON discussions(article_id);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

ALTER TABLE anonymous_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussions ENABLE ROW LEVEL SECURITY;

-- Public read access for content
CREATE POLICY "Public read access" ON surahs FOR SELECT USING (true);
CREATE POLICY "Public read access" ON ayahs FOR SELECT USING (true);
CREATE POLICY "Public read access" ON hadiths FOR SELECT USING (true);
CREATE POLICY "Public read access" ON articles FOR SELECT USING (status = 'published');
CREATE POLICY "Public read access" ON questions FOR SELECT USING (status = 'active');
CREATE POLICY "Public read access" ON answers FOR SELECT USING (status = 'active');
CREATE POLICY "Public read access" ON discussions FOR SELECT USING (status = 'active');
