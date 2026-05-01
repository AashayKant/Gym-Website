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
    <section className="py-18 bg-background sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="WHY CHOOSE APEX FITNESS"
          subtitle="About Us"
        />

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div
                className="w-full h-[280px] rounded-2xl bg-cover bg-center sm:h-[420px] lg:h-[500px]"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800)'
                }}
              />
              <div className="glass-effect absolute -bottom-4 right-3 rounded-xl p-4 sm:-bottom-6 sm:-right-6 sm:p-6">
                <div className="gradient-text text-3xl font-bold sm:text-4xl">10+ Years</div>
                <p className="text-sm text-foreground-secondary">of Excellence</p>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right">
            <div>
              <h3 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">
                Your Journey to <span className="gradient-text">Fitness Starts Here</span>
              </h3>
              <p className="mb-6 text-base leading-relaxed text-foreground-secondary sm:mb-8 sm:text-lg">
                At APEX Fitness, we believe everyone deserves access to world-class fitness facilities and expert guidance. 
                Our mission is to transform lives through personalized training, cutting-edge equipment, and a supportive community 
                that keeps you motivated every step of the way.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 sm:gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-accent-secondary sm:h-12 sm:w-12">
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
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-secondary px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 sm:mt-10 sm:w-auto"
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
