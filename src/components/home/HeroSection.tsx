'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MessageCircle, PlayCircle, ShieldCheck, Star } from 'lucide-react';
import gsap from 'gsap';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '@/lib/constants';

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 700], [0, 160]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;
    const tl = gsap.timeline();
    if (headingRef.current && ctaRef.current) {
      tl.fromTo(
        headingRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }
      ).fromTo(
        ctaRef.current,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      );
    }
    return () => {
      tl.kill();
    };
  }, [isMobile, prefersReducedMotion]);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-10 pt-20 md:pb-0">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: isMobile ? 0 : y1 }}
      >
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/75 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,115,22,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%)]" />
      </motion.div>

      <div 
        className="absolute inset-0 z-[1] opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <motion.div 
        style={isMobile ? undefined : { opacity }}
        className="site-container relative z-10 grid gap-8 pt-6 md:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
      >
        <div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-foreground-secondary sm:px-4 sm:py-2 sm:text-sm">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Trusted by 500+ members in Jamshedpur
            </span>
          </motion.div>

          <h1
            ref={headingRef}
            className="text-balance text-4xl font-jakarta font-bold leading-[1.06] text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Transform Into Your
            <span className="gradient-text"> Strongest Self</span>
            <span className="block pt-3 text-base text-foreground-secondary sm:text-lg md:text-2xl md:leading-relaxed">
              Premium coaching, cinematic training spaces, and a conversion-focused plan built around your goals.
            </span>
          </h1>

          <div ref={ctaRef} className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a href="/membership" className="btn-primary inline-flex w-full items-center justify-center gap-2 px-8 py-3.5 text-base sm:w-auto sm:py-4">
              Start 3-Day Free Trial
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="btn-secondary inline-flex w-full items-center justify-center gap-2 px-7 py-3.5 text-base sm:w-auto sm:py-4"
            >
              <MessageCircle className="h-5 w-5" />
              Talk on WhatsApp
            </button>
            <a href="/gallery" className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-foreground-secondary hover:text-white sm:justify-start sm:py-3">
              <PlayCircle className="h-5 w-5 text-accent" />
              Watch the gym tour
            </a>
          </div>

          <div className="mt-7 grid max-w-3xl grid-cols-1 gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3">
            {['No joining fee', 'Google-rated 4.9/5', 'Certified trainers'].map((item) => (
              <div key={item} className="glass-effect rounded-2xl px-4 py-3 text-sm text-foreground-secondary">
                {item}
              </div>
            ))}
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="card-premium glass-effect rounded-[24px] p-5 sm:p-6 lg:mb-6"
        >
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.16em] text-foreground-muted">Today’s momentum</p>
            <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">Live</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="text-sm text-foreground-secondary">Booked Trials</span>
              <span className="text-xl font-bold">32</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="text-sm text-foreground-secondary">Transformations</span>
              <span className="text-xl font-bold">200+</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="text-sm text-foreground-secondary">Avg. Rating</span>
              <span className="inline-flex items-center gap-1 text-xl font-bold">
                4.9 <Star className="h-4 w-4 fill-accent text-accent" />
              </span>
            </div>
          </div>
        </motion.aside>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-foreground-muted">Scroll</span>
          <ArrowDown className="w-4 h-4 text-foreground-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
