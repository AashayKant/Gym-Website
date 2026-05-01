import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { pricingPlans } from '@/lib/data';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '@/lib/constants';
import { ArrowRight, Check, MessageCircle, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership Plans | APEX Fitness Jamshedpur - Affordable Pricing',
  description: 'Choose from our flexible membership plans starting at ₹2,999/month. Monthly, quarterly, and yearly options available.',
};

export default function MembershipPage() {
  const highlightedPlan = pricingPlans.find((plan) => plan.highlighted) ?? pricingPlans[0];
  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-background-secondary pb-0 pt-0 md:pb-24 md:pt-32">
          <div className="px-4 pb-8 pt-24 md:hidden">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Membership</p>
            <h1 className="mt-3 font-jakarta text-4xl font-bold leading-[1.02] text-white">
              Choose your training lane.
            </h1>
            <p className="mt-3 text-sm leading-6 text-foreground-secondary">
              Start simple, upgrade when you are ready, and get help choosing the right plan instantly.
            </p>

            <div className="mt-6 rounded-[30px] border border-accent/55 bg-gradient-to-br from-accent/22 via-white/[0.045] to-background p-5 shadow-[0_24px_80px_rgba(249,115,22,0.16)]">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">Recommended</span>
              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-jakarta text-3xl font-bold">{highlightedPlan.name}</h2>
                  <p className="mt-1 text-sm text-foreground-secondary">{highlightedPlan.description}</p>
                </div>
                <div className="text-right">
                  <div className="font-jakarta text-2xl font-bold text-white">Rs {highlightedPlan.price.toLocaleString()}</div>
                  <p className="text-xs text-foreground-secondary">/{highlightedPlan.period}</p>
                </div>
              </div>
              {highlightedPlan.savings && (
                <p className="mt-4 rounded-2xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-sm font-semibold text-green-400">
                  {highlightedPlan.savings}
                </p>
              )}
              <div className="mt-5 space-y-3">
                {highlightedPlan.features.slice(0, 5).map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-white/84">
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary flex min-h-13 items-center justify-center gap-2 px-5 text-sm">
                  <MessageCircle className="h-4 w-4" />
                  Ask on WhatsApp
                </a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-5 text-sm font-semibold text-white">
                  <Phone className="h-4 w-4 text-accent" />
                  Call before joining
                </a>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {pricingPlans.filter((plan) => plan.id !== highlightedPlan.id).map((plan) => (
                <a
                  key={plan.id}
                  href="/contact"
                  className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4"
                >
                  <div>
                    <h3 className="font-jakarta text-lg font-bold">{plan.name}</h3>
                    <p className="mt-1 text-xs text-foreground-secondary">{plan.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white">Rs {plan.price.toLocaleString()}</p>
                    <p className="text-xs text-foreground-muted">/{plan.period}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent" />
                </a>
              ))}
            </div>

            <div className="mt-5 rounded-[24px] border border-white/10 bg-background p-4">
              <h2 className="font-jakarta text-xl font-bold">Extra value</h2>
              <div className="mt-4 grid gap-3 text-sm text-foreground-secondary">
                <p>Student and corporate discounts are available after verification.</p>
                <p>Coach onboarding is included with your trial visit.</p>
                <p>Family and referral offers can be confirmed on WhatsApp.</p>
              </div>
            </div>
          </div>

          <div className="mx-auto hidden max-w-7xl px-4 sm:px-6 md:block lg:px-8">
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
