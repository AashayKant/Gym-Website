import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { pricingPlans } from '@/lib/data';
import { Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership Plans | APEX Fitness Jamshedpur - Affordable Pricing',
  description: 'Choose from our flexible membership plans starting at ₹2,999/month. Monthly, quarterly, and yearly options available.',
};

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-24 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="MEMBERSHIP PLANS" subtitle="Choose Your Plan" />
            <FadeIn className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-lg text-foreground-secondary">
                Flexible plans designed to fit your budget and fitness goals
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <FadeIn key={plan.id} delay={index * 0.1}>
                  <div className={`relative p-8 rounded-2xl border ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-accent/20 to-accent-secondary/20 border-accent shadow-lg shadow-accent/20 scale-105'
                      : 'bg-background-tertiary border-white/10'
                  }`}>
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-3xl font-bebas font-bold mb-2">{plan.name}</h3>
                      <p className="text-foreground-secondary text-sm mb-4">{plan.description}</p>
                      <div className="text-6xl font-bebas font-bold gradient-text mb-2">₹{plan.price.toLocaleString()}</div>
                      <p className="text-foreground-secondary text-sm">/{plan.period}</p>
                      {plan.savings && <p className="text-green-500 font-semibold mt-2">{plan.savings}</p>}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`block text-center py-3 rounded-full font-semibold transition-all ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-accent to-accent-secondary hover:shadow-lg'
                          : 'bg-background-secondary border border-white/20 hover:border-accent'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-20 glass-effect p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bebas font-bold mb-4 text-center gradient-text">SPECIAL OFFERS</h3>
              <ul className="space-y-3 text-foreground-secondary">
                <li>✓ Student Discount: 15% off with valid ID</li>
                <li>✓ Corporate Plans: Special rates for companies</li>
                <li>✓ Family Plans: Additional 10% off for family members</li>
                <li>✓ Referral Bonus: Get 1 month free for every successful referral</li>
              </ul>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
