"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries"
  },
  {
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Building long-term partnerships with satisfied customers"
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Proven track record in digital marketing excellence"
  },
  {
    value: 99,
    suffix: "%",
    label: "Success Rate",
    description: "Consistently delivering results that exceed expectations"
  }
]

export function StatsSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Track Record</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 card-hover">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}