import type { Metadata } from "next"
import { ContactHeroSection } from "@/components/sections/contact-hero-section"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact-info-section"

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free Consultation",
  description: "Ready to transform your digital presence? Contact our expert team for a free consultation. We're here to help you achieve your business goals.",
  keywords: ["contact", "consultation", "digital marketing", "web development", "get quote"],
}

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
    </>
  )
}