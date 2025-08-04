"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'E-commerce', href: '/services/ecommerce' },
      { name: 'SEO', href: '/services/seo' },
      { name: 'Content Marketing', href: '/services/content-marketing' },
      { name: 'Social Media', href: '/services/smm' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Contact Info',
    links: [
      { name: 'hello@brand-ur.com', href: 'mailto:hello@brand-ur.com', icon: Mail },
      { name: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: Phone },
      { name: 'New York, NY', href: '#', icon: MapPin },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/brand-ur', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com/brand_ur', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/brand-ur', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/brand.ur', icon: Instagram },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                brand.ur
              </h3>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Creating stunning 3D web experiences and digital solutions that drive real business results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                    >
                      {link.icon && <link.icon className="h-4 w-4" />}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 brand.ur. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}