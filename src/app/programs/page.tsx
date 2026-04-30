import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { programs } from '@/lib/data';
import { Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs | APEX Fitness Jamshedpur - Weight Loss, Muscle Building & More',
  description: 'Explore our comprehensive fitness programs including weight loss, muscle building, CrossFit, yoga, personal training, and more.',
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-24 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="OUR PROGRAMS" subtitle="Transform Your Body" />
            <FadeIn className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-lg text-foreground-secondary">
                Choose from our diverse range of programs designed for every fitness level and goal
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {programs.map((program, index) => (
                <FadeIn key={program.id} delay={index * 0.1}>
                  <div className="group bg-background-tertiary rounded-2xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all duration-300">
                    <div
                      className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${program.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="text-5xl mb-4">{program.icon}</div>
                      <h3 className="text-2xl font-bebas font-bold mb-3">{program.title}</h3>
                      <p className="text-foreground-secondary text-sm mb-4">{program.description}</p>
                      <ul className="space-y-2 mb-6">
                        {program.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/membership"
                        className="block text-center py-3 bg-gradient-to-r from-accent to-accent-secondary rounded-full font-semibold hover:shadow-lg transition-all"
                      >
                        Enroll Now
                      </a>
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
