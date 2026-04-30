'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { facilities } from '@/lib/data';

export function Facilities() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="WORLD-CLASS FACILITIES" subtitle="Our Amenities" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {facilities.map((facility, index) => (
            <FadeIn key={facility.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-background-secondary rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{facility.name}</h3>
                <p className="text-foreground-secondary text-sm">{facility.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
