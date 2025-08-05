"use client"

import { motion } from "framer-motion"
import { Lightbulb, Palette, Rocket, BarChart } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "We analyze your business goals, target audience, and market landscape to create a comprehensive digital strategy.",
    details: [
      "Market Research & Analysis",
      "Competitor Analysis",
      "Goal Setting & KPIs",
      "Target Audience Definition"
    ]
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our creative team designs engaging experiences that reflect your brand identity and resonate with your audience.",
    details: [
      "User Experience Design",
      "Visual Identity Creation",
      "Wireframing & Prototyping",
      "Brand Guidelines"
    ]
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We bring your vision to life with cutting-edge development and seamless deployment across all platforms.",
    details: [
      "Development & Coding",
      "Quality Assurance Testing",
      "Performance Optimization",
      "Deployment & Go-Live"
    ]
  },
  {
    icon: BarChart,
    title: "Optimize",
    description: "Continuous monitoring and optimization ensure your digital presence evolves with your business needs.",
    details: [
      "Performance Monitoring",
      "Data Analysis & Insights",
      "Continuous Improvements",
      "Ongoing Support"
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export function ProcessSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures every project delivers exceptional results. From strategy to optimization, we guide you through every step.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-4 z-0" />
              )}

              <div className="relative z-10 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
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
          <div className="max-w-3xl mx-auto p-8 rounded-2xl glass-effect border border-border/50">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Start Your <span className="gradient-text">Digital Journey?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and create a custom strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Free Consultation
              </button>
              <button className="btn-secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}