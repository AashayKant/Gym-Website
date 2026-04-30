'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dumbbell, Users, Trophy, Clock } from 'lucide-react';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';

const features = [
  {
    icon: Dumbbell,
    title: 'World-Class Equipment',
    description: 'State-of-the-art machines and free weights from top brands'
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: '15+ certified professionals dedicated to your success'
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: '500+ successful transformations and counting'
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Open 5 AM to 10 PM to fit your schedule'
  }
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="WHY CHOOSE APEX FITNESS"
          subtitle="About Us"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div
                className="w-full h-[500px] rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800)'
                }}
              />
              <div className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-xl">
                <div className="text-4xl font-bebas font-bold gradient-text">10+ Years</div>
                <p className="text-sm text-foreground-secondary">of Excellence</p>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right">
            <div>
              <h3 className="text-3xl md:text-4xl font-bebas font-bold mb-6">
                Your Journey to <span className="gradient-text">Fitness Starts Here</span>
              </h3>
              <p className="text-foreground-secondary text-lg mb-8 leading-relaxed">
                At APEX Fitness, we believe everyone deserves access to world-class fitness facilities and expert guidance. 
                Our mission is to transform lives through personalized training, cutting-edge equipment, and a supportive community 
                that keeps you motivated every step of the way.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-secondary rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-foreground-secondary">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-block mt-10 px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
