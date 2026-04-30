'use client';

import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className = '' }: SectionHeaderProps) {
  return (
    <FadeIn direction="up" className={`${centered ? 'text-center' : ''} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {subtitle && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {subtitle}
          </p>
        )}
        <h2 className="text-balance mb-5 text-3xl font-jakarta font-bold tracking-tight md:text-4xl lg:text-5xl">
          <span className="text-white">{title}</span>
        </h2>
        <div className={`h-[2px] w-16 rounded-full bg-gradient-to-r from-accent to-accent-secondary ${centered ? 'mx-auto' : ''}`} />
      </motion.div>
    </FadeIn>
  );
}
