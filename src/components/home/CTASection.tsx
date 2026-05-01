'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '@/lib/constants';

export function CTASection() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="site-section relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1016]/90 via-[#111927]/85 to-accent/60" />

      <div className="site-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-balance mb-5 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-6xl">
            Ready to become the strongest version of yourself?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/85 sm:mb-12 sm:text-lg">
            Start with a free trial, meet your coach, and receive a practical plan tailored to your current fitness level.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/membership"
              className="btn-primary px-7 py-3.5 text-base sm:px-10 sm:py-4 sm:text-lg"
            >
              Claim My Free Trial
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:bg-green-600 sm:px-10 sm:py-4 sm:text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="btn-secondary flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold sm:px-10 sm:py-4 sm:text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-white/85 sm:mt-10 sm:gap-6 sm:text-sm">
            <div>✓ 3-day free trial</div>
            <div>✓ No hidden fees</div>
            <div>✓ Coach onboarding</div>
            <div>✓ Flexible plans</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
