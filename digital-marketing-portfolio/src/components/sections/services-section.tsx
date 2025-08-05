"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, ShoppingCart, PenTool, Search, Share2, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    features: ["Responsive Design", "Performance Optimization", "Custom CMS", "API Integration"],
    href: "/services/web-development"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store solutions with secure payment processing and inventory management systems.",
    features: ["Payment Integration", "Inventory Management", "Mobile Commerce", "Analytics"],
    href: "/services/ecommerce"
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Strategic content creation and marketing campaigns that engage your audience and drive conversions.",
    features: ["Content Strategy", "Blog Writing", "Video Production", "Brand Storytelling"],
    href: "/services/content-marketing"
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic.",
    features: ["Keyword Research", "On-page SEO", "Link Building", "Technical SEO"],
    href: "/services/seo"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Social media strategies and management to build your brand presence and engage with customers.",
    features: ["Social Strategy", "Content Creation", "Community Management", "Paid Advertising"],
    href: "/services/smm"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to execution, we provide comprehensive digital solutions that help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Link href={service.href}>
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}