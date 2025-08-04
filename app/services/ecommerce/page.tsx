"use client";

import { ServiceLayout } from '@/components/service-layout';
import { ShoppingCart, CreditCard, BarChart3, Shield, Truck, Users } from 'lucide-react';

const features = [
  {
    title: 'Custom E-commerce Platforms',
    description: 'Tailored online stores built with modern technologies to provide exceptional shopping experiences.',
    icon: <ShoppingCart className="h-8 w-8" />
  },
  {
    title: 'Secure Payment Processing',
    description: 'Multiple payment gateways with PCI compliance and fraud protection for safe transactions.',
    icon: <CreditCard className="h-8 w-8" />
  },
  {
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics dashboard to track sales, customer behavior, and performance metrics.',
    icon: <BarChart3 className="h-8 w-8" />
  },
  {
    title: 'Security & Compliance',
    description: 'Advanced security measures and compliance with industry standards to protect customer data.',
    icon: <Shield className="h-8 w-8" />
  },
  {
    title: 'Inventory Management',
    description: 'Automated inventory tracking, low stock alerts, and seamless supplier integration.',
    icon: <Truck className="h-8 w-8" />
  },
  {
    title: 'Customer Management',
    description: 'Complete CRM integration with customer profiles, order history, and personalized experiences.',
    icon: <Users className="h-8 w-8" />
  }
];

const process = [
  {
    step: 1,
    title: 'Business Analysis',
    description: 'Deep dive into your business model, target market, and e-commerce requirements to create the perfect strategy.'
  },
  {
    step: 2,
    title: 'Platform Selection',
    description: 'Choose the best e-commerce platform or build a custom solution based on your specific needs and budget.'
  },
  {
    step: 3,
    title: 'Design & UX',
    description: 'Create intuitive, conversion-focused designs that guide customers through the purchasing journey.'
  },
  {
    step: 4,
    title: 'Development & Integration',
    description: 'Build your store with payment gateways, shipping providers, and third-party tool integrations.'
  },
  {
    step: 5,
    title: 'Testing & Launch',
    description: 'Thorough testing of all functionality, payment processes, and user experience before going live.'
  },
  {
    step: 6,
    title: 'Growth & Optimization',
    description: 'Continuous optimization based on analytics data to improve conversions and customer satisfaction.'
  }
];

const benefits = [
  'Mobile-optimized shopping experience',
  'Multiple payment gateway integrations',
  'Advanced SEO for product discovery',
  'Automated inventory management',
  'Customer review and rating systems',
  'Email marketing automation',
  'Social media integration',
  'Multi-currency and multi-language support',
  'Advanced search and filtering',
  'Abandoned cart recovery systems'
];

const portfolio = [
  {
    title: 'Fashion Boutique Store',
    description: 'Elegant fashion e-commerce platform with advanced filtering and virtual try-on features.',
    image: 'https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Shopify Plus', 'React', 'Stripe', 'AR Integration']
  },
  {
    title: 'Electronics Marketplace',
    description: 'Multi-vendor marketplace with complex product configurations and B2B functionality.',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['WooCommerce', 'Multi-vendor', 'B2B Portal', 'API Integration']
  },
  {
    title: 'Artisan Craft Store',
    description: 'Handcrafted goods marketplace with artist profiles and custom product personalization.',
    image: 'https://images.pexels.com/photos/1070974/pexels-photo-1070974.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Custom Platform', 'Personalization', 'Artist Portal', 'Social Features']
  }
];

export default function Ecommerce() {
  return (
    <ServiceLayout
      title="E-commerce Solutions"
      subtitle="Online Store Development"
      description="Build powerful e-commerce platforms that convert visitors into customers and drive sustainable business growth."
      features={features}
      process={process}
      benefits={benefits}
      portfolio={portfolio}
    />
  );
}