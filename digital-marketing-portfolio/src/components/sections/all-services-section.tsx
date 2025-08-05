"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, ShoppingCart, PenTool, Search, Share2, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance, security, and user experience.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "Custom CMS Solutions",
      "API Integration",
      "E-commerce Platforms",
      "Progressive Web Apps"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    href: "/services/web-development",
    price: "Starting from $2,500"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store solutions with secure payment processing, inventory management, and analytics for maximum conversion.",
    features: [
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Mobile Commerce",
      "Analytics & Reporting",
      "Multi-vendor Support"
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "AWS"],
    href: "/services/ecommerce",
    price: "Starting from $3,500"
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Strategic content creation and marketing campaigns that engage your audience, build brand authority, and drive conversions.",
    features: [
      "Content Strategy",
      "Blog Writing & SEO",
      "Video Production",
      "Brand Storytelling",
      "Social Media Content",
      "Email Marketing"
    ],
    technologies: ["WordPress", "HubSpot", "Mailchimp", "Canva", "Adobe Creative Suite", "Google Analytics"],
    href: "/services/content-marketing",
    price: "Starting from $1,500/month"
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Comprehensive SEO strategies to improve search rankings, drive organic traffic, and increase online visibility.",
    features: [
      "Keyword Research & Analysis",
      "On-page SEO Optimization",
      "Technical SEO Audit",
      "Link Building",
      "Local SEO",
      "SEO Reporting & Analytics"
    ],
    technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Google Analytics", "Schema Markup"],
    href: "/services/seo",
    price: "Starting from $1,200/month"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Comprehensive social media strategies and management to build brand presence, engage customers, and drive business growth.",
    features: [
      "Social Media Strategy",
      "Content Creation & Curation",
      "Community Management",
      "Paid Social Advertising",
      "Influencer Marketing",
      "Analytics & Reporting"
    ],
    technologies: ["Facebook Ads", "Instagram", "LinkedIn", "Twitter", "TikTok", "Hootsuite"],
    href: "/services/smm",
    price: "Starting from $1,000/month"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function AllServicesSection() {
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
            Complete <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to succeed online, from strategy to execution. Our comprehensive services cover all aspects of digital marketing and development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-primary font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-foreground">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4 text-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href={service.href} className="btn-primary group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''} relative`}>
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-3xl p-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <service.icon className="w-32 h-32 text-primary opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}