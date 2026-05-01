'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { facilities } from '@/lib/data';

export function Facilities() {
  return (
    <section className="py-18 bg-background sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="WORLD-CLASS FACILITIES" subtitle="Our Amenities" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:mt-16 lg:grid-cols-4">
          {facilities.map((facility, index) => (
            <FadeIn key={facility.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group rounded-xl border border-white/10 bg-background-secondary p-5 text-center transition-all duration-300 hover:border-accent/50 sm:p-6"
              >
                <div className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:text-5xl">
                  {facility.icon}
                </div>
                <h3 className="mb-2 text-base font-bold sm:text-lg">{facility.name}</h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">{facility.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
