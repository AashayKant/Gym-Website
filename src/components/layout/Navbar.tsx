'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Dumbbell, Home, ImageIcon, MapPin, Menu, MessageCircle, Phone, Sparkles, UserRound, X } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/membership', label: 'Membership' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
];

const mobilePrimaryLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/programs', label: 'Programs', icon: Dumbbell },
  { href: '/trainers', label: 'Trainers', icon: UserRound },
  { href: '/membership', label: 'Plans', icon: CreditCard },
  { href: '/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/contact', label: 'Visit', icon: MapPin }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollY / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent-secondary origin-left z-[60]"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/70 backdrop-blur-2xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="site-container">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link href="/" className="group relative">
              <span className="text-lg font-jakarta font-bold tracking-tight text-white md:text-2xl">
                APEX FITNESS<span className="text-accent">.</span>
              </span>
              <motion.div 
                className="absolute -bottom-1 left-0 h-[2px] bg-accent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground-secondary transition-colors duration-300 hover:text-white"
                >
                  <span className="relative z-10">{link.label}</span>
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-white/[0.1]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="ml-3"
              >
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Join Now
                </a>
              </motion.div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2.5 transition-colors hover:bg-white/[0.06] lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/72 backdrop-blur-xl md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 420, damping: 38 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-[88vw] max-w-sm flex-col overflow-hidden border-l border-white/10 bg-background/96 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 pb-4 pt-[calc(1rem+env(safe-area-inset-top))]">
                <div>
                  <p className="font-jakarta text-lg font-bold text-white">APEX FITNESS<span className="text-accent">.</span></p>
                  <p className="mt-1 text-xs text-foreground-muted">Premium fitness app menu</p>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full border border-white/10 bg-white/[0.04] p-2.5"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5">
                <div className="rounded-[26px] border border-accent/25 bg-gradient-to-br from-accent/20 via-white/[0.05] to-white/[0.02] p-4">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h2 className="font-jakarta text-2xl font-bold leading-tight text-white">Start with a guided trial.</h2>
                  <p className="mt-2 text-sm leading-6 text-white/68">Meet a coach, tour the gym, and get a clear plan in one visit.</p>
                  <Link
                    href="/membership"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary mt-5 flex min-h-12 items-center justify-center px-5 text-sm"
                  >
                    Claim Free Trial
                  </Link>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {mobilePrimaryLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.035 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex min-h-24 flex-col justify-between rounded-[22px] border p-4 transition ${
                          pathname === link.href
                            ? 'border-accent/50 bg-accent/15 text-white'
                            : 'border-white/10 bg-white/[0.035] text-foreground-secondary'
                        }`}
                      >
                        <link.icon className="h-5 w-5 text-accent" />
                        <span className="text-sm font-semibold">{link.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-white/10 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-4 text-sm font-bold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.045] px-4 text-sm font-bold text-white"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  Call
                </a>
              </div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 hidden bg-background/95 backdrop-blur-2xl md:block lg:hidden"
            >
              <div className="site-container flex h-full flex-col pt-20">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex min-h-14 items-center rounded-xl px-5 py-4 text-lg font-medium transition-all ${
                          pathname === link.href
                            ? 'bg-white/[0.08] text-white'
                            : 'text-foreground-secondary hover:bg-white/[0.03] hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.08 }}
                    className="mt-4 border-t border-white/10 pt-5"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="/membership"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="btn-primary flex w-full items-center justify-center gap-2 px-5 py-3 text-sm"
                      >
                        Start Trial
                      </a>
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="btn-secondary flex w-full items-center justify-center gap-2 px-5 py-3 text-sm"
                      >
                        Call Now
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
