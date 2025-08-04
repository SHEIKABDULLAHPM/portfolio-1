"use client";

import { motion } from 'framer-motion';
import { Banner } from '@/components/banner';
import { TeamCard } from '@/components/team-card';
import { StatsCounter } from '@/components/stats-counter';
import { ContactSection } from '@/components/contact-section';
import { 
  Target, 
  Users, 
  Lightbulb, 
  Award,
  Code,
  Palette,
  Search,
  TrendingUp
} from 'lucide-react';

const timeline = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Started with a vision to create stunning 3D web experiences'
  },
  {
    year: '2021',
    title: 'First 50 Clients',
    description: 'Reached our first major milestone with diverse project portfolio'
  },
  {
    year: '2022',
    title: 'Team Expansion',
    description: 'Grew to a team of 10+ talented designers and developers'
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Received "Best Web Design Agency" award from WebExcellence'
  },
  {
    year: '2024',
    title: 'Global Reach',
    description: 'Expanded services to clients across North America and Europe'
  },
  {
    year: '2025',
    title: 'Innovation Hub',
    description: 'Launched dedicated R&D division for emerging web technologies'
  }
];

const values = [
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Excellence',
    description: 'We strive for perfection in every project, ensuring the highest quality deliverables.'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners to achieve shared success.'
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies to create unique digital experiences.'
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Integrity',
    description: 'We maintain transparency and honesty in all our business relationships.'
  }
];

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 8+ years in web development and business strategy.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/alexrivera',
      twitter: 'https://twitter.com/alexrivera',
      email: 'alex@brand-ur.com'
    }
  },
  {
    name: 'Sarah Kim',
    role: 'Creative Director',
    bio: 'Award-winning designer specializing in 3D web experiences and user interfaces.',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/sarahkim',
      twitter: 'https://twitter.com/sarahkim',
      email: 'sarah@brand-ur.com'
    }
  },
  {
    name: 'David Chen',
    role: 'Lead Developer',
    bio: 'Full-stack developer expert in React, Node.js, and WebGL technologies.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/davidchen',
      github: 'https://github.com/davidchen',
      email: 'david@brand-ur.com'
    }
  },
  {
    name: 'Maya Patel',
    role: 'SEO Specialist',
    bio: 'Digital marketing expert focused on search optimization and content strategy.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/mayapatel',
      twitter: 'https://twitter.com/mayapatel',
      email: 'maya@brand-ur.com'
    }
  }
];

const tools = [
  { name: 'React & Next.js', icon: <Code className="h-6 w-6" /> },
  { name: 'Three.js & WebGL', icon: <Code className="h-6 w-6" /> },
  { name: 'Figma & Adobe CC', icon: <Palette className="h-6 w-6" /> },
  { name: 'SEMrush & Analytics', icon: <Search className="h-6 w-6" /> },
  { name: 'HubSpot & Salesforce', icon: <TrendingUp className="h-6 w-6" /> },
];

export default function About() {
  return (
    <>
      <Banner
        title="About brand.ur"
        subtitle="Our Story"
        description="We're a passionate team of designers, developers, and digital strategists creating exceptional web experiences that drive business growth."
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2020, brand.ur emerged from a simple belief: that web experiences should be both beautiful and functional. We started as a small team with big dreams, determined to push the boundaries of what's possible on the web.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, we're proud to be at the forefront of 3D web technology, helping businesses create immersive digital experiences that captivate audiences and drive results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to democratize cutting-edge web technology, making it accessible to businesses of all sizes while maintaining the highest standards of quality and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-lg flex items-center justify-center"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our journey to becoming a leading web development agency
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  index % 2 === 1 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter end={150} suffix="+" label="Projects Completed" index={0} />
            <StatsCounter end={98} suffix="%" label="Client Retention" index={1} />
            <StatsCounter end={25} suffix="+" label="Team Members" index={2} />
            <StatsCounter end={15} suffix="+" label="Countries Served" index={3} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                {...member}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tools & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The cutting-edge tools we use to create exceptional experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-md transition-shadow"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {tool.icon}
                </div>
                <h3 className="font-semibold">{tool.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection
        title="Ready to Work Together?"
        description="Let's discuss how our team can help bring your vision to life with cutting-edge web solutions."
      />
    </>
  );
}