"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "hello@digitalmarketing.com",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+1 (555) 123-4567",
    action: "Start Call"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team",
    action: "Start Chat"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "123 Business Ave, NY 10001",
    action: "Get Directions"
  }
]

export function ContactHeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-shadow"
          >
            Let's Create Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Ready to transform your digital presence? Get in touch with our expert team and let's discuss how we can help you achieve your business goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl glass-effect border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <button className="text-sm text-primary font-medium hover:underline">
                    {method.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}