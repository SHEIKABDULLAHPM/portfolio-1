"use client";

import { ServiceLayout } from '@/components/service-layout';
import { Search, TrendingUp, Target, FileText, Link, BarChart } from 'lucide-react';

const features = [
  {
    title: 'Keyword Research & Strategy',
    description: 'Comprehensive keyword analysis to identify high-value opportunities and create targeted content strategies.',
    icon: <Search className="h-8 w-8" />
  },
  {
    title: 'Technical SEO Optimization',
    description: 'Website structure, speed optimization, and technical improvements to enhance search engine crawling.',
    icon: <TrendingUp className="h-8 w-8" />
  },
  {
    title: 'Local SEO',
    description: 'Optimize your business for local search results and Google My Business to attract nearby customers.',
    icon: <Target className="h-8 w-8" />
  },
  {
    title: 'Content Optimization',
    description: 'Create and optimize high-quality content that ranks well and provides value to your audience.',
    icon: <FileText className="h-8 w-8" />
  },
  {
    title: 'Link Building',
    description: 'Strategic link building campaigns to improve domain authority and search engine rankings.',
    icon: <Link className="h-8 w-8" />
  },
  {
    title: 'Performance Tracking',
    description: 'Detailed analytics and reporting to track SEO performance and measure ROI.',
    icon: <BarChart className="h-8 w-8" />
  }
];

const process = [
  {
    step: 1,
    title: 'SEO Audit',
    description: 'Comprehensive analysis of your current website performance, identifying technical issues and opportunities.'
  },
  {
    step: 2,
    title: 'Keyword Research',
    description: 'In-depth keyword analysis to identify the most valuable search terms for your business.'
  },
  {
    step: 3,
    title: 'Strategy Development',
    description: 'Create a customized SEO strategy aligned with your business goals and target audience.'
  },
  {
    step: 4,
    title: 'On-Page Optimization',
    description: 'Optimize website content, meta tags, headers, and internal linking structure.'
  },
  {
    step: 5,
    title: 'Content Creation',
    description: 'Develop high-quality, SEO-optimized content that engages users and ranks well.'
  },
  {
    step: 6,
    title: 'Monitoring & Refinement',
    description: 'Continuous monitoring and strategy refinement based on performance data and algorithm updates.'
  }
];

const benefits = [
  'Increased organic search visibility',
  'Higher quality website traffic',
  'Improved brand credibility and trust',
  'Better user experience and site performance',
  'Long-term sustainable growth',
  'Competitive advantage in search results',
  'Enhanced local business visibility',
  'Comprehensive performance tracking',
  'Regular strategy updates and optimization',
  'Cost-effective marketing investment'
];

const portfolio = [
  {
    title: 'Legal Firm SEO Campaign',
    description: 'Complete SEO overhaul resulting in 300% increase in organic traffic and first-page rankings.',
    image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Local SEO', 'Content Strategy', 'Technical SEO', 'Link Building']
  },
  {
    title: 'E-commerce SEO Growth',
    description: 'Product page optimization and category restructuring leading to 250% increase in organic sales.',
    image: 'https://images.pexels.com/photos/5583964/pexels-photo-5583964.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['E-commerce SEO', 'Product Optimization', 'Schema Markup', 'Site Speed']
  },
  {
    title: 'SaaS Company Ranking',
    description: 'B2B SaaS SEO strategy achieving top 3 rankings for competitive industry keywords.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['B2B SEO', 'Content Marketing', 'Competitive Analysis', 'Conversion Optimization']
  }
];

export default function SEO() {
  return (
    <ServiceLayout
      title="SEO Optimization"
      subtitle="Search Engine Optimization"
      description="Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies and technical optimization."
      features={features}
      process={process}
      benefits={benefits}
      portfolio={portfolio}
    />
  );
}