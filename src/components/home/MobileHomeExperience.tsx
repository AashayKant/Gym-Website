'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users
} from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '@/lib/constants';
import { galleryImages, pricingPlans, programs, testimonials, trainers, transformations } from '@/lib/data';
import { formatNumber } from '@/lib/utils';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

const proofItems = [
  { icon: Users, value: '500+', label: 'Members trained' },
  { icon: Trophy, value: '200+', label: 'Transformations' },
  { icon: Star, value: '4.9', label: 'Member rating' }
];

function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
}

function MobileSection({
  eyebrow,
  title,
  children,
  className = ''
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      variants={fadeUp}
      initial={reducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`px-4 py-9 ${className}`}
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="text-balance font-jakarta text-2xl font-bold leading-tight text-white">{title}</h2>
      {children}
    </motion.section>
  );
}

export function MobileHomeExperience() {
  const featuredPlan = pricingPlans.find((plan) => plan.highlighted) ?? pricingPlans[0];
  const featuredPrograms = programs.slice(0, 4);
  const featuredTrainers = trainers.slice(0, 3);
  const featuredGallery = galleryImages.slice(0, 5);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="md:hidden">
      <section className="relative min-h-[92svh] overflow-hidden px-4 pb-7 pt-24">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=82)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/66 to-background" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/85 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex min-h-[calc(92svh-7.75rem)] flex-col justify-end"
        >
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/28 px-3 py-2 text-xs font-semibold text-white/88 backdrop-blur-xl">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Premium coaching in Jamshedpur
          </div>

          <h1 className="text-balance font-jakarta text-[2.7rem] font-bold leading-[0.98] tracking-tight text-white">
            Build your strongest body with APEX.
          </h1>
          <p className="mt-4 max-w-[21rem] text-[15px] leading-6 text-white/78">
            Start with a guided trial, meet your coach, and get a plan made for your goal.
          </p>

          <div className="mt-7 grid gap-3">
            <Link href="/membership" className="btn-primary flex min-h-14 items-center justify-center gap-2 px-6 text-[15px]">
              Start 3-Day Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.08] px-6 text-[15px] font-semibold text-white backdrop-blur-xl"
            >
              <MessageCircle className="h-5 w-5 text-green-400" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2.5">
            {proofItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl">
                <item.icon className="mb-2 h-4 w-4 text-accent" />
                <div className="font-jakarta text-lg font-bold text-white">{item.value}</div>
                <div className="mt-1 text-[10px] leading-tight text-white/58">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <MobileSection eyebrow="Your path" title="A guided transformation, not a random workout.">
        <div className="mt-5 space-y-3">
          {[
            ['01', 'Book your trial', 'Tell us your goal and preferred time.'],
            ['02', 'Meet your coach', 'Get a quick assessment and training direction.'],
            ['03', 'Follow the plan', 'Train with structure, tracking, and accountability.']
          ].map(([step, title, text]) => (
            <div key={step} className="flex gap-4 rounded-3xl border border-white/10 bg-surface/70 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 font-jakarta text-sm font-bold text-accent">
                {step}
              </div>
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-5 text-foreground-secondary">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </MobileSection>

      <MobileSection eyebrow="Proof" title="Real outcomes from real members." className="bg-background-elevated">
        <div className="-mx-4 mt-5 flex snap-x gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none]">
          {transformations.map((item) => (
            <article key={item.id} className="min-w-[82%] snap-center overflow-hidden rounded-[24px] border border-white/10 bg-background">
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.afterImage})` }}
              />
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-jakarta text-xl font-bold">{item.name}</h3>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">{item.weightLoss} lost</span>
                </div>
                <p className="mt-2 text-sm text-foreground-secondary">{item.duration} with guided coaching</p>
              </div>
            </article>
          ))}
        </div>
      </MobileSection>

      <MobileSection eyebrow="Programs" title="Choose the track that matches your goal.">
        <div className="mt-5 grid gap-3">
          {featuredPrograms.map((program, index) => (
            <Link
              key={program.id}
              href="/programs"
              className="group grid grid-cols-[5.75rem_1fr_auto] items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.035] p-3"
            >
              <div
                className="h-24 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${program.image})` }}
              />
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">Track {index + 1}</p>
                <h3 className="font-semibold text-white">{program.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-foreground-secondary">{program.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-white/45 group-active:text-accent" />
            </Link>
          ))}
        </div>
      </MobileSection>

      <MobileSection eyebrow="Coaches" title="Expert trainers who make progress feel personal." className="bg-background-elevated">
        <div className="-mx-4 mt-5 flex snap-x gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none]">
          {featuredTrainers.map((trainer) => (
            <article key={trainer.id} className="relative min-w-[72%] snap-center overflow-hidden rounded-[26px] border border-white/10 bg-background">
              <div
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${trainer.image})` }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-4 pt-20">
                <h3 className="font-jakarta text-xl font-bold">{trainer.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{trainer.specialization}</p>
                <p className="mt-1 text-xs text-white/66">{trainer.experience} experience</p>
              </div>
            </article>
          ))}
        </div>
      </MobileSection>

      <MobileSection eyebrow="Membership" title="Start with the plan most members choose.">
        <div className="mt-5 rounded-[28px] border border-accent/55 bg-gradient-to-br from-accent/20 via-white/[0.04] to-surface p-5 shadow-[0_24px_70px_rgba(249,115,22,0.16)]">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">Most Popular</span>
              <h3 className="mt-4 font-jakarta text-2xl font-bold">{featuredPlan.name}</h3>
              <p className="mt-1 text-sm text-foreground-secondary">{featuredPlan.description}</p>
            </div>
            <div className="text-right">
              <div className="font-jakarta text-2xl font-bold text-white">Rs {formatNumber(featuredPlan.price)}</div>
              <p className="text-xs text-foreground-secondary">/{featuredPlan.period}</p>
            </div>
          </div>
          <div className="space-y-3">
            {featuredPlan.features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-sm text-white/84">
                <Check className="h-4 w-4 shrink-0 text-accent" />
                {feature}
              </div>
            ))}
          </div>
          <Link href="/membership" className="btn-primary mt-6 flex min-h-13 items-center justify-center gap-2 px-5 text-sm">
            View plans
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </MobileSection>

      <MobileSection eyebrow="Inside APEX" title="A cinematic space built for focused training." className="bg-background-elevated">
        <div className="mt-5 grid grid-cols-2 gap-3">
          {featuredGallery.map((image, index) => (
            <Link
              key={image.id}
              href="/gallery"
              className={`overflow-hidden rounded-[22px] border border-white/10 ${index === 0 ? 'col-span-2' : ''}`}
            >
              <div
                className={`${index === 0 ? 'h-60' : 'h-36'} bg-cover bg-center`}
                style={{ backgroundImage: `url(${image.src})` }}
              />
            </Link>
          ))}
        </div>
      </MobileSection>

      <MobileSection eyebrow="Members say" title="The trust comes from the experience.">
        <div className="mt-5 space-y-3">
          {featuredTestimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${testimonial.image})` }} />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-xs text-foreground-secondary">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/76">&ldquo;{testimonial.content}&rdquo;</p>
            </article>
          ))}
        </div>
      </MobileSection>

      <section className="px-4 pb-8 pt-4">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-5">
          <div className="absolute right-4 top-4 rounded-full bg-accent/15 p-3 text-accent">
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Ready now</p>
          <h2 className="mt-3 max-w-[16rem] font-jakarta text-2xl font-bold leading-tight">Claim your trial and meet your coach.</h2>
          <p className="mt-3 text-sm leading-6 text-foreground-secondary">
            No pressure. Just a focused first visit, clear guidance, and the next step.
          </p>
          <div className="mt-5 grid gap-3">
            <a href={whatsappUrl('Hi! I want to claim my 3-day free trial at APEX Fitness.')} target="_blank" rel="noreferrer" className="btn-primary flex min-h-13 items-center justify-center gap-2 px-5 text-sm">
              <MessageCircle className="h-4 w-4" />
              Claim on WhatsApp
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-5 text-sm font-semibold text-white">
              <Phone className="h-4 w-4 text-accent" />
              Call APEX Fitness
            </a>
          </div>
        </div>
      </section>

      <div className="h-5" />
    </div>
  );
}
