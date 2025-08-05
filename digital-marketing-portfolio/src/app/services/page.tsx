import type { Metadata } from "next"
import { ServicesHeroSection } from "@/components/sections/services-hero-section"
import { AllServicesSection } from "@/components/sections/all-services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Services - Digital Marketing Solutions",
  description: "Comprehensive digital marketing services including web development, e-commerce, SEO, content marketing, and social media management. Professional solutions that drive results.",
  keywords: ["digital marketing services", "web development", "e-commerce", "SEO", "content marketing", "social media marketing"],
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <AllServicesSection />
      <ProcessSection />
      <CTASection />
    </>
  )
}