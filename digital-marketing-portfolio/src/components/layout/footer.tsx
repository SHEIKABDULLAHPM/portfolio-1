import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "E-commerce", href: "/services/ecommerce" },
    { name: "Content Marketing", href: "/services/content-marketing" },
    { name: "SEO", href: "/services/seo" },
    { name: "Social Media Marketing", href: "/services/smm" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  contact: [
    { icon: Mail, text: "hello@digitalmarketing.com", href: "mailto:hello@digitalmarketing.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "123 Business Ave, NY 10001", href: "#" },
  ],
  social: [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">DM</span>
              </div>
              <span className="font-bold text-xl gradient-text">Digital Marketing</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We create digital experiences that drive results. Our team of experts helps businesses grow through innovative marketing strategies and cutting-edge technology.
            </p>
            <div className="flex space-x-3">
              {footerLinks.social.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-secondary hover:bg-primary transition-colors duration-300 rounded-lg flex items-center justify-center group"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact, index) => (
                <li key={index}>
                  <Link
                    href={contact.href}
                    className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <contact.icon className="w-4 h-4 group-hover:text-primary" />
                    <span>{contact.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Digital Marketing. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}