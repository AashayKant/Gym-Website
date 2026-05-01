'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { stats } from '@/lib/data';

export function TrustBar() {
  return (
    <section className="relative border-y border-white/10 bg-background-elevated py-10 sm:py-14">
      <div className="site-container">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 sm:mb-8 sm:gap-4">
          <p className="text-xs uppercase tracking-[0.16em] text-foreground-muted sm:text-sm sm:tracking-[0.18em]">Proof and trust signals</p>
          <p className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground-secondary sm:px-4 sm:py-2 sm:text-sm">
            Limited: 22 trial slots left this week
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-premium rounded-2xl p-4 text-center sm:p-5"
            >
              <div className="mb-1 text-3xl font-jakarta font-bold text-white sm:mb-2 sm:text-4xl md:text-5xl">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs font-medium text-foreground-secondary sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
