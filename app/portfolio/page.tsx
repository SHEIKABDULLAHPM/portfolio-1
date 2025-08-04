"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Banner } from '@/components/banner';
import { ProjectCard } from '@/components/project-card';
import { ContactSection } from '@/components/contact-section';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Web Development', 'E-commerce', 'SEO', 'Content Marketing', 'Social Media'];

const projects = [
  {
    title: 'TechCorp 3D Showcase',
    description: 'An immersive 3D product showcase with WebGL animations, interactive product configurator, and advanced filtering system.',
    image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Three.js', 'WebGL', 'E-commerce'],
    category: 'Web Development',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'Fashion Boutique Store',
    description: 'Elegant fashion e-commerce platform with advanced filtering, wishlist functionality, and integrated payment processing.',
    image: 'https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Shopify Plus', 'React', 'Stripe'],
    category: 'E-commerce',
    liveUrl: '#'
  },
  {
    title: 'SaaS Dashboard',
    description: 'Comprehensive analytics dashboard with real-time data visualization, user management, and reporting features.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'D3.js', 'Node.js'],
    category: 'Web Development',
    liveUrl: '#'
  },
  {
    title: 'Legal Firm SEO Success',
    description: 'Complete SEO overhaul resulting in 300% increase in organic traffic and first-page rankings for competitive keywords.',
    image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Local SEO', 'Content Strategy', 'Technical SEO'],
    category: 'SEO',
    liveUrl: '#'
  },
  {
    title: 'B2B Tech Blog Strategy',
    description: 'Comprehensive content marketing strategy resulting in 400% increase in organic traffic and qualified lead generation.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Blog Strategy', 'B2B Content', 'Lead Generation'],
    category: 'Content Marketing',
    liveUrl: '#'
  },
  {
    title: 'Fashion Brand Social Growth',
    description: 'Instagram and TikTok marketing campaign achieving 500% follower growth and 300% increase in e-commerce sales.',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Instagram Marketing', 'TikTok Growth', 'Influencer Partnerships'],
    category: 'Social Media',
    liveUrl: '#'
  },
  {
    title: 'Restaurant Chain Website',
    description: 'Multi-location restaurant website with online ordering, table reservations, and loyalty program integration.',
    image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Online Ordering', 'Loyalty Program'],
    category: 'Web Development',
    liveUrl: '#'
  },
  {
    title: 'Electronics E-commerce Platform',
    description: 'Multi-vendor electronics marketplace with complex product configurations and B2B wholesale functionality.',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['WooCommerce', 'Multi-vendor', 'B2B Portal'],
    category: 'E-commerce',
    liveUrl: '#'
  },
  {
    title: 'Healthcare SEO Campaign',
    description: 'Medical practice SEO optimization achieving top rankings for local healthcare services and patient acquisition.',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Healthcare SEO', 'Local Search', 'Medical Marketing'],
    category: 'SEO',
    liveUrl: '#'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <Banner
        title="Our Portfolio"
        subtitle="Featured Work"
        description="Explore our collection of successful projects across web development, e-commerce, SEO, content marketing, and social media campaigns."
      />

      {/* Portfolio Filter & Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={project.featured ? 'lg:col-span-2' : ''}
              >
                <ProjectCard
                  {...project}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline">
              Load More Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Project Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from our portfolio of successful projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '300%', label: 'Average Traffic Increase' },
              { number: '99%', label: 'Client Satisfaction' },
              { number: '25+', label: 'Industries Served' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection
        title="Ready to Start Your Project?"
        description="Let's create something amazing together. Contact us to discuss your project requirements and see how we can help bring your vision to life."
      />
    </>
  );
}