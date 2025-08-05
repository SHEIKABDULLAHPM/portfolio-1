"use client"

import { motion } from "framer-motion"
import { Code, ShoppingCart, PenTool, Search, Share2, Zap } from "lucide-react"

const serviceIcons = [Code, ShoppingCart, PenTool, Search, Share2, Zap]

export function ServicesHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden hero-gradient">
      {/* Floating icons background */}
      <div className="absolute inset-0">
        {serviceIcons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-12 h-12 text-primary" />
          </motion.div>
        ))}
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-shadow"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            From web development to digital marketing strategies, we provide comprehensive solutions that help your business thrive in the digital landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
          >
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground">Service Areas</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold gradient-text">Fast</div>
              <div className="text-sm text-muted-foreground">Delivery</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}