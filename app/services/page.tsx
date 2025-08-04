"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Banner } from '@/components/banner';
import { ContactSection } from '@/components/contact-section';
import { 
  Code, 
  ShoppingCart, 
  Search, 
  PenTool, 
  Share2,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: <Code className="h-12 w-12" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies like React, Next.js, and Three.js for immersive 3D experiences.',
    features: ['Responsive Design', '3D WebGL Integration', 'Performance Optimization', 'SEO Ready'],
    href: '/services/web-development',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <ShoppingCart className="h-12 w-12" />,
    title: 'E-commerce Solutions',
    description: 'Comprehensive online stores with advanced features, payment integration, and conversion optimization to maximize your sales.',
    features: ['Secure Payment Processing', 'Inventory Management', 'Mobile Commerce', 'Analytics Dashboard'],
    href: '/services/ecommerce',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Search className="h-12 w-12" />,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and organic visibility with our comprehensive SEO strategies and technical optimization.',
    features: ['Keyword Research', 'Technical SEO', 'Content Optimization', 'Link Building'],
    href: '/services/seo',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <PenTool className="h-12 w-12" />,
    title: 'Content Marketing',
    description: 'Engaging content strategies that attract, educate, and convert your target audience while building brand authority.',
    features: ['Content Strategy', 'Blog Writing', 'Visual Content', 'Content Distribution'],
    href: '/services/content-marketing',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Share2 className="h-12 w-12" />,
    title: 'Social Media Marketing',
    description: 'Build your brand presence across social platforms with targeted campaigns and community management.',
    features: ['Social Strategy', 'Community Management', 'Paid Advertising', 'Performance Tracking'],
    href: '/services/smm',
    color: 'from-indigo-500 to-blue-500'
  }
];

export default function Services() {
  return (
    <>
      <Banner
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive digital solutions designed to help your business succeed in the modern web landscape."
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-card p-8 rounded-lg shadow-sm border border-border hover:shadow-lg transition-all duration-300"
              >
                {/* Service Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'We start by understanding your business goals, target audience, and project requirements.'
              },
              {
                step: '02',
                title: 'Design & Development',
                description: 'Our team creates stunning designs and develops robust solutions using cutting-edge technologies.'
              },
              {
                step: '03',
                title: 'Launch & Optimization',
                description: 'We deploy your project and continuously optimize performance based on real-world data.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection
        title="Ready to Get Started?"
        description="Let's discuss your project requirements and find the perfect solution for your business needs."
      />
    </>
  );
}