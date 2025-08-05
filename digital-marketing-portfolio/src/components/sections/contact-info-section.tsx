"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Phone, Mail, Calendar, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@digitalmarketing.com", "support@digitalmarketing.com"],
    action: "Send Email"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Business Avenue", "New York, NY 10001", "United States"],
    action: "Get Directions"
  }
]

const businessHours = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" }
]

const quickActions = [
  {
    icon: Calendar,
    title: "Schedule a Meeting",
    description: "Book a free 30-minute consultation",
    action: "Schedule Now",
    color: "primary"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team instantly",
    action: "Start Chat",
    color: "secondary"
  }
]

export function ContactInfoSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h3>
                      <div className="space-y-1 mb-3">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <button className="text-primary font-medium hover:underline text-sm">
                        {info.action}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-semibold text-lg">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map and Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    Visit us at our office in the heart of New York City
                  </p>
                  <button className="mt-4 btn-secondary">
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <action.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {action.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {action.description}
                    </p>
                    <button className="btn-primary w-full">
                      {action.action}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-semibold text-lg mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">24h</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}