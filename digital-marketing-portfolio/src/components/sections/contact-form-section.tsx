"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  service: string
  budget: string
  message: string
}

const services = [
  "Web Development",
  "E-commerce Solutions",
  "Content Marketing",
  "Search Engine Optimization",
  "Social Media Marketing",
  "Digital Strategy Consultation"
]

const budgets = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+"
]

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-muted-foreground mb-6">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Send Another Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

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
            Start Your <span className="gradient-text">Project Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you with a customized proposal for your project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-card border border-border shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.name ? 'border-red-500' : 'border-border focus:border-primary'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <div className="flex items-center mt-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.email ? 'border-red-500' : 'border-border focus:border-primary'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-200"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-200"
              >
                <option value="">Select budget range</option>
                {budgets.map((budget, index) => (
                  <option key={index} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-vertical ${
                  errors.message ? 'border-red-500' : 'border-border focus:border-primary'
                }`}
                placeholder="Tell us about your project goals, requirements, and timeline..."
              />
              {errors.message && (
                <div className="flex items-center mt-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message}
                </div>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}