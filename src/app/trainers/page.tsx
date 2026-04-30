import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { trainers } from '@/lib/data';
import type { Metadata } from 'next';
import React from 'react';

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    instagram: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>),
    facebook: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>),
    linkedin: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>),
  };
  return icons[type] || null;
};

export const metadata: Metadata = {
  title: 'Expert Trainers | APEX Fitness Jamshedpur - Certified Fitness Professionals',
  description: 'Meet our team of 15+ certified personal trainers specializing in strength training, weight loss, yoga, CrossFit, and more.',
};

export default function TrainersPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-24 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="OUR EXPERT TRAINERS" subtitle="Meet The Team" />
            <FadeIn className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-lg text-foreground-secondary">
                Our certified professionals are dedicated to helping you achieve your fitness goals
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {trainers.map((trainer, index) => (
                <FadeIn key={trainer.id} delay={index * 0.1}>
                  <div className="group bg-background-tertiary rounded-2xl border border-white/10 overflow-hidden">
                    <div
                      className="h-96 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${trainer.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bebas font-bold mb-1">{trainer.name}</h3>
                      <p className="text-accent font-semibold mb-2">{trainer.specialization}</p>
                      <p className="text-foreground-secondary text-sm mb-3">{trainer.experience} • {trainer.certifications.length} certifications</p>
                      <p className="text-sm text-foreground-secondary mb-4">{trainer.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {trainer.certifications.map((cert, i) => (
                          <span key={i} className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">
                            {cert}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a href={trainer.social.instagram} className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                          <SocialIcon type="instagram" />
                        </a>
                        <a href={trainer.social.facebook} className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                          <SocialIcon type="facebook" />
                        </a>
                        <a href={trainer.social.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                          <SocialIcon type="linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
