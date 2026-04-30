'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { stats } from '@/lib/data';

export function TrustBar() {
  return (
    <section className="relative border-y border-white/10 bg-background-elevated py-14">
      <div className="site-container">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-foreground-muted">Proof and trust signals</p>
          <p className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-foreground-secondary">
            Limited: 22 trial slots left this week
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-premium rounded-2xl p-5 text-center"
            >
              <div className="mb-2 text-4xl font-jakarta font-bold text-white md:text-5xl">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-medium text-foreground-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
