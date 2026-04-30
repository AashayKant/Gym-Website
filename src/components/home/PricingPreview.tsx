'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { pricingPlans } from '@/lib/data';
import { cn, formatNumber } from '@/lib/utils';

export function PricingPreview() {
  return (
    <section className="site-section bg-background-elevated">
      <div className="site-container">
        <SectionHeader title="Membership plans with clear value" subtitle="Membership" />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={plan.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className={cn(
                  "relative h-full rounded-2xl border p-8 transition-all duration-300",
                  plan.highlighted
                    ? "border-accent bg-gradient-to-br from-accent/20 to-accent-secondary/15 shadow-lg shadow-accent/20"
                    : "card-premium border-white/10"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="mb-2 text-2xl font-semibold">{plan.name}</h3>
                  <p className="text-foreground-secondary text-sm mb-4">{plan.description}</p>
                  <div className="text-5xl font-bebas font-bold gradient-text mb-2">
                    ₹{formatNumber(plan.price)}
                  </div>
                  <p className="text-foreground-secondary text-sm">/{plan.period}</p>
                  {plan.savings && (
                    <p className="text-green-500 font-semibold mt-2">{plan.savings}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/membership"
                  className={cn(
                    "block rounded-full py-3 text-center font-semibold transition-all duration-300",
                    plan.highlighted
                      ? "bg-gradient-to-r from-accent to-accent-secondary hover:shadow-lg hover:shadow-accent/50"
                      : "border border-white/20 bg-white/[0.03] hover:border-accent"
                  )}
                >
                  Get Started
                </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/membership"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3"
          >
            View All Plans <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
