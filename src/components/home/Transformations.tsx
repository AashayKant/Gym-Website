'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { testimonials, transformations } from '@/lib/data';

export function Transformations() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="site-section bg-background">
      <div className="site-container">
        <SectionHeader title="Real member transformation stories" subtitle="Transformation + Social Proof" />

        {/* Transformations */}
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {transformations.map((trans, index) => (
            <FadeIn key={trans.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-premium relative overflow-hidden rounded-2xl"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${trans.afterImage})` }}
                />
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{trans.name}</h3>
                    <span className="font-semibold text-accent">{trans.weightLoss} lost</span>
                  </div>
                  <p className="text-foreground-secondary text-sm mb-3">Duration: {trans.duration}</p>
                  <p className="text-sm italic">&ldquo;{trans.testimonial}&rdquo;</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-20">
          <h3 className="mb-10 text-center text-3xl font-bold">
            What our <span className="gradient-text">members say</span>
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonials[currentTestimonial].image})` }}
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-foreground-secondary text-sm">{testimonials[currentTestimonial].role}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">&ldquo;{testimonials[currentTestimonial].content}&rdquo;</p>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 rounded-full bg-accent p-3 transition-colors hover:bg-accent-secondary md:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 hidden translate-x-4 -translate-y-1/2 rounded-full bg-accent p-3 transition-colors hover:bg-accent-secondary md:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
