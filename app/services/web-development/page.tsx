"use client";

import { ServiceLayout } from '@/components/service-layout';
import { Code, Smartphone, Zap, Shield, Palette, Cog } from 'lucide-react';

const features = [
  {
    title: 'Custom Web Applications',
    description: 'Tailored solutions built with React, Next.js, and modern frameworks to meet your specific business needs.',
    icon: <Code className="h-8 w-8" />
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first approach ensuring your website looks and works perfectly on all devices and screen sizes.',
    icon: <Smartphone className="h-8 w-8" />
  },
  {
    title: 'Performance Optimization',
    description: 'Lightning-fast loading times with advanced optimization techniques and best practices.',
    icon: <Zap className="h-8 w-8" />
  },
  {
    title: 'Security & Reliability',
    description: 'Robust security measures and reliable hosting solutions to keep your website safe and available.',
    icon: <Shield className="h-8 w-8" />
  },
  {
    title: '3D Web Experiences',
    description: 'Immersive 3D elements using Three.js and WebGL to create engaging visual experiences.',
    icon: <Palette className="h-8 w-8" />
  },
  {
    title: 'CMS Integration',
    description: 'Easy-to-use content management systems that allow you to update your website independently.',
    icon: <Cog className="h-8 w-8" />
  }
];

const process = [
  {
    step: 1,
    title: 'Requirements Analysis',
    description: 'We conduct thorough research to understand your business objectives, target audience, and technical requirements.'
  },
  {
    step: 2,
    title: 'Design & Prototyping',
    description: 'Our designers create wireframes, mockups, and interactive prototypes to visualize the final product.'
  },
  {
    step: 3,
    title: 'Development',
    description: 'Our developers build your website using modern technologies, ensuring clean code and best practices.'
  },
  {
    step: 4,
    title: 'Testing & QA',
    description: 'Comprehensive testing across devices, browsers, and performance metrics to ensure quality.'
  },
  {
    step: 5,
    title: 'Deployment',
    description: 'Secure deployment to production servers with proper monitoring and backup systems in place.'
  },
  {
    step: 6,
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and maintenance to keep your website running smoothly.'
  }
];

const benefits = [
  'Modern, future-proof technology stack',
  'SEO-optimized structure from the ground up',
  'Mobile-first responsive design approach',
  'Advanced security implementations',
  'Fast loading times and performance optimization',
  'Scalable architecture for business growth',
  'Cross-browser compatibility guaranteed',
  'Accessibility standards compliance',
  'Ongoing technical support and maintenance',
  'Analytics and performance monitoring'
];

const portfolio = [
  {
    title: 'TechCorp 3D Showcase',
    description: 'Interactive product showcase with WebGL animations and immersive 3D product views.',
    image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Three.js', 'WebGL', 'TypeScript']
  },
  {
    title: 'SaaS Platform Dashboard',
    description: 'Comprehensive dashboard application with real-time data visualization and user management.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Chart.js']
  },
  {
    title: 'Corporate Website Redesign',
    description: 'Complete website overhaul with modern design and improved user experience.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Tailwind', 'Framer Motion', 'CMS']
  }
];

export default function WebDevelopment() {
  return (
    <ServiceLayout
      title="Web Development"
      subtitle="Custom Solutions"
      description="Create stunning, high-performance websites and web applications that drive business growth and engage your audience."
      features={features}
      process={process}
      benefits={benefits}
      portfolio={portfolio}
    />
  );
}