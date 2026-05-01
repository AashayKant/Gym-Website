'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CreditCard, Dumbbell, Home, ImageIcon, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '@/lib/constants';

const mobileTabs = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/programs', label: 'Train', icon: Dumbbell },
  { href: '/membership', label: 'Plans', icon: CreditCard },
  { href: '/gallery', label: 'Gallery', icon: ImageIcon }
];

export function FloatingWhatsApp() {
  const pathname = usePathname();

  const handleClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.45 }}
        className="fixed bottom-6 right-6 z-50 hidden md:block"
      >
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="relative rounded-full bg-green-500 p-4 text-white shadow-lg transition-colors duration-300 hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90"
          aria-label="Chat on WhatsApp"
        >
          <motion.div
            animate={{ scale: [1, 1.22, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-green-500 opacity-45"
          />
          <MessageCircle className="relative z-10 h-7 w-7" />
        </motion.button>
      </motion.div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/92 px-3 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-18px_45px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:hidden">
        <div className="mb-2 grid grid-cols-[1fr_1fr_auto] gap-2">
          <Link
            href="/membership"
            className="btn-primary flex min-h-12 items-center justify-center px-4 text-sm font-bold"
          >
            Free Trial
          </Link>
          <button
            onClick={handleClick}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-4 text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </button>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05]"
            aria-label="Call APEX Fitness"
          >
            <Phone className="h-5 w-5 text-accent" />
          </a>
        </div>

        <div className="grid grid-cols-4 rounded-[22px] border border-white/10 bg-white/[0.035] p-1">
          {mobileTabs.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-[18px] text-[10px] font-semibold transition ${
                  active ? 'bg-white/[0.09] text-white' : 'text-foreground-muted'
                }`}
              >
                <tab.icon className={`h-4 w-4 ${active ? 'text-accent' : ''}`} />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
