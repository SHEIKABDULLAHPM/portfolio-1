"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MessageCircle, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your
            <br />
            <span className="gradient-text">Digital Presence?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's work together to create something amazing. Whether you need a new website, 
            marketing strategy, or complete digital transformation, we're here to help.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/contact" className="btn-primary group text-lg px-8 py-4">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link href="/contact" className="btn-secondary group text-lg px-8 py-4">
              <MessageCircle className="mr-2 h-5 w-5" />
              Let's Talk
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="group">
              <div className="p-6 rounded-2xl glass-effect border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover">
                <Calendar className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                <p className="text-muted-foreground">Schedule a free 30-minute strategy session to discuss your goals.</p>
              </div>
            </div>

            <div className="group">
              <div className="p-6 rounded-2xl glass-effect border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover">
                <MessageCircle className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Get round-the-clock support for all your digital marketing needs.</p>
              </div>
            </div>

            <div className="group">
              <div className="p-6 rounded-2xl glass-effect border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover">
                <ArrowRight className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">Quick turnaround times without compromising on quality.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}