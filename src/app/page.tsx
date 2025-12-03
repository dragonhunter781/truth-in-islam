import { Hero } from "@/components/sections/hero"
import { PillarsSection } from "@/components/sections/pillars-section"
import { FeaturedArticles } from "@/components/sections/featured-articles"
import { CTASection } from "@/components/sections/cta-section"
import { TopicsSection } from "@/components/sections/topics-section"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq-section"

export default function Home() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <TopicsSection />
      <FeaturedArticles />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
