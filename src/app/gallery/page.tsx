'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { galleryImages } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'equipment', 'facilities', 'classes', 'training', 'events'];
  const filteredImages = filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const featured = filteredImages[selectedImage ?? 0];

  return (
    <>
      <Navbar />
      <main>
        <section className="site-section pt-28">
          <div className="site-container">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted">Cinematic fitness showcase</p>
              <h1 className="mt-4 text-balance text-4xl font-jakarta font-bold text-white md:text-6xl">
                Explore APEX Through Motion, Space, and Energy
              </h1>
              <p className="mt-4 text-base leading-relaxed text-foreground-secondary md:text-lg">
                A premium visual experience designed to build trust: real equipment, real training moments, and an environment built for transformation.
              </p>
            </div>

            <div className="mb-10 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium capitalize transition ${
                    filter === cat
                      ? 'border-accent bg-accent/15 text-white'
                      : 'border-white/12 bg-white/[0.03] text-foreground-secondary hover:border-white/25 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
              {filteredImages.map((image, index) => (
                <motion.button
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (index % 8) * 0.04 }}
                  onClick={() => setSelectedImage(index)}
                  className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 opacity-0 transition group-hover:opacity-100" />
                  <p className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.12em] text-white">
                    {image.category}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute right-4 top-4 rounded-full border border-white/20 p-2 text-white transition hover:border-accent hover:text-accent"
              onClick={() => setSelectedImage(null)}
              aria-label="Close preview"
            >
              <X className="h-7 w-7" />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15"
            >
              <Image
                src={featured.src}
                alt={featured.alt}
                width={1600}
                height={1100}
                priority
                className="max-h-[85vh] w-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
