'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { programs } from '@/lib/data';

export function ProgramsPreview() {
  const displayedPrograms = programs.slice(0, 6);

  return (
    <section className="site-section bg-background-elevated">
      <div className="site-container">
        <SectionHeader
          title="Programs built for measurable results"
          subtitle="Programs"
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {displayedPrograms.map((program, index) => (
            <FadeIn key={program.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="card-premium group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-accent/40"
              >
                <div
                  className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${program.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                <div className="relative flex flex-1 flex-col p-6">
                  <div className="mb-4 text-4xl">{program.icon}</div>
                  <h3 className="mb-3 text-2xl font-semibold">{program.title}</h3>
                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-foreground-secondary">
                    {program.description}
                  </p>

                  <Link
                    href="/programs"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 hover:gap-3"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/programs"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3"
          >
            View All Programs <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
