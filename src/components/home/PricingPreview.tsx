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

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-7 md:mt-14 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={plan.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className={cn(
                  "relative h-full rounded-2xl border p-5 transition-all duration-300 sm:p-8",
                  plan.highlighted
                    ? "border-accent bg-gradient-to-br from-accent/20 to-accent-secondary/15 shadow-lg shadow-accent/20"
                    : "card-premium border-white/10"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-3 py-1 text-xs font-bold sm:-top-4 sm:px-4 sm:text-sm">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="mb-2 text-2xl font-semibold">{plan.name}</h3>
                  <p className="text-foreground-secondary text-sm mb-4">{plan.description}</p>
                  <div className="mb-2 text-4xl font-bebas font-bold gradient-text sm:text-5xl">
                    ₹{formatNumber(plan.price)}
                  </div>
                  <p className="text-foreground-secondary text-sm">/{plan.period}</p>
                  {plan.savings && (
                    <p className="text-green-500 font-semibold mt-2">{plan.savings}</p>
                  )}
                </div>

                <ul className="mb-7 space-y-2.5 sm:mb-8 sm:space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed">{feature}</span>
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
