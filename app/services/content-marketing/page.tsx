"use client";

import { ServiceLayout } from '@/components/service-layout';
import { PenTool, Users, TrendingUp, Video, Image, BookOpen } from 'lucide-react';

const features = [
  {
    title: 'Content Strategy Development',
    description: 'Comprehensive content strategies aligned with your business goals and target audience preferences.',
    icon: <PenTool className="h-8 w-8" />
  },
  {
    title: 'Audience Research',
    description: 'Deep audience analysis to understand your customers and create content that resonates with them.',
    icon: <Users className="h-8 w-8" />
  },
  {
    title: 'Performance Optimization',
    description: 'Data-driven content optimization to improve engagement, conversions, and ROI.',
    icon: <TrendingUp className="h-8 w-8" />
  },
  {
    title: 'Video Content Creation',
    description: 'Engaging video content including tutorials, testimonials, and promotional videos.',
    icon: <Video className="h-8 w-8" />
  },
  {
    title: 'Visual Content Design',
    description: 'Eye-catching graphics, infographics, and visual content that supports your messaging.',
    icon: <Image className="h-8 w-8" />
  },
  {
    title: 'Editorial Calendar',
    description: 'Structured content planning and scheduling to maintain consistent brand messaging.',
    icon: <BookOpen className="h-8 w-8" />
  }
];

const process = [
  {
    step: 1,
    title: 'Content Audit',
    description: 'Analyze existing content performance and identify gaps in your current content strategy.'
  },
  {
    step: 2,
    title: 'Strategy Planning',
    description: 'Develop a comprehensive content marketing strategy based on your goals and audience insights.'
  },
  {
    step: 3,
    title: 'Content Creation',
    description: 'Produce high-quality, engaging content across multiple formats and channels.'
  },
  {
    step: 4,
    title: 'Distribution & Promotion',
    description: 'Strategic content distribution across owned, earned, and paid media channels.'
  },
  {
    step: 5,
    title: 'Performance Analysis',
    description: 'Monitor content performance and gather insights to optimize future content.'
  },
  {
    step: 6,
    title: 'Strategy Refinement',
    description: 'Continuously refine content strategy based on performance data and market changes.'
  }
];

const benefits = [
  'Increased brand awareness and authority',
  'Higher search engine rankings',
  'Improved customer engagement',
  'Enhanced lead generation',
  'Better customer retention',
  'Cost-effective marketing approach',
  'Multi-channel content distribution',
  'Measurable ROI and performance',
  'Consistent brand messaging',
  'Long-term asset building'
];

const portfolio = [
  {
    title: 'B2B Tech Blog Strategy',
    description: 'Comprehensive blog strategy resulting in 400% increase in organic traffic and lead generation.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Blog Strategy', 'B2B Content', 'Lead Generation', 'SEO Content']
  },
  {
    title: 'Social Media Campaign',
    description: 'Multi-platform social media content campaign achieving 200% growth in follower engagement.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Social Media', 'Visual Content', 'Community Building', 'Brand Awareness']
  },
  {
    title: 'Video Marketing Series',
    description: 'Educational video series that became the most-watched content in the industry niche.',
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Video Marketing', 'Educational Content', 'YouTube SEO', 'Brand Building']
  }
];

export default function ContentMarketing() {
  return (
    <ServiceLayout
      title="Content Marketing"
      subtitle="Strategic Content Creation"
      description="Create compelling content that attracts, educates, and converts your target audience while building lasting brand authority."
      features={features}
      process={process}
      benefits={benefits}
      portfolio={portfolio}
    />
  );
}