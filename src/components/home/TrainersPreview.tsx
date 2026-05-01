'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { trainers } from '@/lib/data';
import type { ReactNode } from 'react';

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, ReactNode> = {
    instagram: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    facebook: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    linkedin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  };
  return icons[type] || null;
};

export function TrainersPreview() {
  const displayedTrainers = trainers.slice(0, 4);

  return (
    <section className="py-18 bg-background sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="EXPERT TRAINERS"
          subtitle="Meet Our Team"
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-7 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {displayedTrainers.map((trainer, index) => (
            <FadeIn key={trainer.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-background-secondary border border-white/10"
              >
                <div
                  className="h-72 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 sm:h-80"
                  style={{ backgroundImage: `url(${trainer.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="mb-1 text-xl font-bold sm:text-2xl">{trainer.name}</h3>
                  <p className="text-accent text-sm font-semibold mb-2">{trainer.specialization}</p>
                  <p className="text-foreground-secondary text-xs mb-3">{trainer.experience} experience</p>

                  <div className="flex gap-3 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                    <a href={trainer.social.instagram} className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-accent">
                      <SocialIcon type="instagram" />
                    </a>
                    <a href={trainer.social.facebook} className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-accent">
                      <SocialIcon type="facebook" />
                    </a>
                    <a href={trainer.social.linkedin} className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-accent">
                      <SocialIcon type="linkedin" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <Link
            href="/trainers"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
          >
            Meet All Trainers <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
