import { Hero } from "@/components/sections/hero"
import { TopicsSection } from "@/components/sections/topics-section"
import { FeaturedArticles } from "@/components/sections/featured-articles"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <TopicsSection />
      <FeaturedArticles />
      <CTASection />
    </>
  )
}
