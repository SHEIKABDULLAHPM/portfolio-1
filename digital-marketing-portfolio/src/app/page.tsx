import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { StatsSection } from "@/components/sections/stats-section"
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
