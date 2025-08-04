"use client";

import { motion } from 'framer-motion';
import { Hero3D } from '@/components/hero-3d';
import { StatsCounter } from '@/components/stats-counter';
import { ProjectCard } from '@/components/project-card';
import { ContactSection } from '@/components/contact-section';
import { 
  Code, 
  ShoppingCart, 
  Search, 
  PenTool, 
  Share2, 
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    href: '/services/web-development'
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: 'E-commerce',
    description: 'Online stores that convert visitors into customers',
    href: '/services/ecommerce'
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: 'SEO',
    description: 'Improve your search rankings and organic visibility',
    href: '/services/seo'
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'Content Marketing',
    description: 'Engaging content that drives traffic and conversions',
    href: '/services/content-marketing'
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: 'Social Media',
    description: 'Build your brand presence across social platforms',
    href: '/services/smm'
  },
];

const whyChooseUs = [
  'Cutting-edge 3D web technologies',
  '99% client satisfaction rate',
  'Mobile-first responsive design',
  'SEO optimized from day one',
  'Ongoing support and maintenance',
  'Fast loading performance'
];

const featuredProjects = [
  {
    title: 'TechCorp 3D Showcase',
    description: 'An immersive 3D product showcase with WebGL animations and interactive features.',
    image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Three.js', 'WebGL', 'E-commerce'],
    liveUrl: '#',
    featured: true
  },
  {
    title: 'Fashion Store Platform',
    description: 'Modern e-commerce platform with advanced filtering and payment integration.',
    image: 'https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    liveUrl: '#'
  },
  {
    title: 'SaaS Dashboard',
    description: 'Comprehensive analytics dashboard with real-time data visualization.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'D3.js', 'Node.js'],
    liveUrl: '#'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'brand.ur transformed our vision into a stunning 3D website that exceeded all expectations. Our conversion rate increased by 300%.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    content: 'The team delivered exceptional results. Our new website not only looks amazing but performs incredibly well in search rankings.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, CreativeSpace',
    content: 'Professional, creative, and results-driven. They understood our brand perfectly and created something truly special.',
    rating: 5
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero3D />

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter end={150} suffix="+" label="Projects Completed" index={0} />
            <StatsCounter end={99} suffix="%" label="Client Satisfaction" index={1} />
            <StatsCounter end={5} suffix=" Years" label="Industry Experience" index={2} />
            <StatsCounter end={24} suffix="/7" label="Support Available" index={3} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
                  asChild
                >
                  <a href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild>
              <a href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose brand.ur</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-border"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our latest work and creative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild>
              <a href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-sm border border-border"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <cite className="font-semibold text-foreground not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}