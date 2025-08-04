"use client";

import { ServiceLayout } from '@/components/service-layout';
import { Share2, Users, TrendingUp, MessageCircle, Camera, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Social Media Strategy',
    description: 'Comprehensive social media strategies tailored to your brand voice and business objectives.',
    icon: <Share2 className="h-8 w-8" />
  },
  {
    title: 'Community Management',
    description: 'Active community engagement, responding to comments, and building meaningful relationships.',
    icon: <Users className="h-8 w-8" />
  },
  {
    title: 'Growth Optimization',
    description: 'Data-driven strategies to increase followers, engagement, and conversions across platforms.',
    icon: <TrendingUp className="h-8 w-8" />
  },
  {
    title: 'Social Advertising',
    description: 'Targeted paid campaigns on Facebook, Instagram, Twitter, LinkedIn, and other platforms.',
    icon: <MessageCircle className="h-8 w-8" />
  },
  {
    title: 'Content Creation',
    description: 'Eye-catching visual content, graphics, and videos optimized for each social platform.',
    icon: <Camera className="h-8 w-8" />
  },
  {
    title: 'Analytics & Reporting',
    description: 'Detailed performance tracking and insights to measure ROI and optimize campaigns.',
    icon: <BarChart3 className="h-8 w-8" />
  }
];

const process = [
  {
    step: 1,
    title: 'Social Audit',
    description: 'Comprehensive analysis of your current social media presence and competitive landscape.'
  },
  {
    step: 2,
    title: 'Strategy Development',
    description: 'Create a tailored social media strategy aligned with your brand and business goals.'
  },
  {
    step: 3,
    title: 'Content Planning',
    description: 'Develop content calendars and create engaging posts optimized for each platform.'
  },
  {
    step: 4,
    title: 'Campaign Execution',
    description: 'Launch organic and paid campaigns while maintaining consistent brand messaging.'
  },
  {
    step: 5,
    title: 'Community Engagement',
    description: 'Active monitoring and engagement with your audience to build strong relationships.'
  },
  {
    step: 6,
    title: 'Performance Optimization',
    description: 'Continuous analysis and optimization based on performance data and trends.'
  }
];

const benefits = [
  'Increased brand visibility and awareness',
  'Higher customer engagement rates',
  'Improved brand loyalty and trust',
  'Enhanced website traffic and conversions',
  'Better customer service and support',
  'Competitive market intelligence',
  'Cost-effective advertising solutions',
  'Real-time customer feedback',
  'Viral marketing opportunities',
  'Multi-platform brand consistency'
];

const portfolio = [
  {
    title: 'Fashion Brand Growth',
    description: 'Instagram and TikTok strategy resulting in 500% follower growth and 300% increase in sales.',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Instagram Marketing', 'TikTok Growth', 'Influencer Partnerships', 'E-commerce Integration']
  },
  {
    title: 'B2B LinkedIn Campaign',
    description: 'Professional services LinkedIn strategy generating 200% increase in qualified leads.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['LinkedIn Marketing', 'B2B Lead Generation', 'Thought Leadership', 'Professional Networking']
  },
  {
    title: 'Restaurant Social Presence',
    description: 'Multi-platform social strategy for restaurant chain increasing foot traffic by 150%.',
    image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Local Marketing', 'Food Photography', 'Community Engagement', 'Event Promotion']
  }
];

export default function SMM() {
  return (
    <ServiceLayout
      title="Social Media Marketing"
      subtitle="Build Your Social Presence"
      description="Grow your brand presence across social platforms with targeted campaigns, engaging content, and strategic community management."
      features={features}
      process={process}
      benefits={benefits}
      portfolio={portfolio}
    />
  );
}