'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '@/lib/constants';

export function FloatingWhatsApp() {
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
        className="fixed bottom-6 right-6 z-50"
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

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/90 p-3 backdrop-blur-lg md:hidden">
        <button
          onClick={handleClick}
          className="btn-primary flex w-full items-center justify-center gap-2 px-5 py-3 text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          Free Trial on WhatsApp
        </button>
      </div>
    </>
  );
}
