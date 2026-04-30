import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ProgramsPreview } from '@/components/home/ProgramsPreview';
import { TrainersPreview } from '@/components/home/TrainersPreview';
import { Transformations } from '@/components/home/Transformations';
import { PricingPreview } from '@/components/home/PricingPreview';
import { BMICalculator } from '@/components/home/BMICalculator';
import { Facilities } from '@/components/home/Facilities';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <Transformations />
        <AboutPreview />
        <ProgramsPreview />
        <TrainersPreview />
        <PricingPreview />
        <Facilities />
        <BMICalculator />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
