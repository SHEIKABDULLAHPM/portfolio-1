"use client"

import { motion } from "framer-motion"
import { Lightbulb, Heart, Trophy, Zap, Users, Shield } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Solutions Uniquely Crafted",
    description: "Every project is tailored to your specific business needs and goals. No cookie-cutter solutions, just innovative approaches that deliver results."
  },
  {
    icon: Heart,
    title: "Creative Excellence",
    description: "Our team of creative professionals brings artistic vision and technical expertise together to create stunning, effective digital experiences."
  },
  {
    icon: Trophy,
    title: "Client Satisfaction First",
    description: "Your success is our success. We're committed to exceeding expectations and building long-lasting partnerships with our clients."
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We understand the importance of time in business. Our streamlined processes ensure quick turnaround without compromising quality."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work with seasoned professionals who stay updated with the latest trends and technologies in digital marketing and web development."
  },
  {
    icon: Shield,
    title: "Reliable Support",
    description: "24/7 support and maintenance services ensure your digital assets are always running smoothly and performing at their best."
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
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function WhyChooseUsSection() {
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
            Why Choose <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional results that drive your business forward.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}