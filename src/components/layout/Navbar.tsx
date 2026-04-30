'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/membership', label: 'Membership' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
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
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="group relative">
              <span className="text-xl font-jakarta font-bold tracking-tight text-white md:text-2xl">
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
              className="rounded-lg p-2 transition-colors hover:bg-white/[0.06] lg:hidden"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="site-container flex h-full flex-col pt-24">
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
                      className={`flex items-center rounded-xl px-5 py-4 text-lg font-medium transition-all ${
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
                  className="mt-6 border-t border-white/10 pt-6"
                >
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="btn-primary flex w-full items-center justify-center gap-2 px-8 py-4 text-base"
                  >
                    Call Now
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
