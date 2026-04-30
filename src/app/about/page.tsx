import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { stats, facilities } from '@/lib/data';
import { Trophy, Users, Dumbbell, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | APEX Fitness Jamshedpur - Our Story & Mission',
  description: 'Learn about APEX Fitness journey, mission, and why we\'re Jamshedpur\'s most trusted gym with 10+ years of excellence.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="ABOUT APEX FITNESS" subtitle="Our Story" centered />
            <FadeIn className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-lg text-foreground-secondary leading-relaxed">
                Founded in 2014, APEX Fitness has grown from a small workout space to Jamshedpur&apos;s premier fitness destination. 
                Our mission is simple: to provide world-class fitness facilities, expert guidance, and a supportive community 
                that empowers every individual to achieve their fitness goals.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <FadeIn key={stat.label}>
                  <div className="text-center">
                    <div className="text-5xl font-bebas font-bold gradient-text mb-2">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-foreground-secondary">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn direction="left">
                <div className="glass-effect p-8 rounded-2xl">
                  <h3 className="text-3xl font-bebas font-bold mb-4 gradient-text">OUR MISSION</h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    To democratize fitness by making world-class facilities and expert training accessible to everyone in Jamshedpur. 
                    We&apos;re committed to transforming lives through personalized fitness solutions, cutting-edge equipment, and a 
                    community that inspires excellence.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div className="glass-effect p-8 rounded-2xl">
                  <h3 className="text-3xl font-bebas font-bold mb-4 gradient-text">OUR VISION</h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    To be the most trusted and results-driven fitness center in Eastern India, setting new standards in 
                    training excellence, member experience, and transformation success. We envision a healthier, stronger 
                    Jamshedpur where fitness is a lifestyle, not a chore.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="WHY CHOOSE US" subtitle="Our Advantages" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                { icon: Trophy, title: 'Proven Results', desc: '500+ successful transformations' },
                { icon: Users, title: 'Expert Team', desc: '15+ certified trainers' },
                { icon: Dumbbell, title: 'Premium Equipment', desc: 'World-class machines & weights' },
                { icon: Clock, title: 'Flexible Hours', desc: '5 AM - 10 PM, 7 days a week' },
              ].map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div className="text-center p-6 bg-background-secondary rounded-xl border border-white/10">
                    <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-foreground-secondary text-sm">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-24 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="OUR FACILITIES" subtitle="World-Class Amenities" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
              {facilities.map((facility, index) => (
                <FadeIn key={facility.id} delay={index * 0.05}>
                  <div className="p-6 bg-background-tertiary rounded-xl border border-white/10 text-center">
                    <div className="text-4xl mb-3">{facility.icon}</div>
                    <h4 className="font-bold mb-2">{facility.name}</h4>
                    <p className="text-foreground-secondary text-sm">{facility.description}</p>
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
