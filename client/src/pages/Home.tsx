import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import DigitalPetCard from '@/components/DigitalPetCard';
import ProductFlow from '@/components/ProductFlow';
import TrustSecurity from '@/components/TrustSecurity';
import EmotionalStory from '@/components/EmotionalStory';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

/**
 * PetOlife Landing Page
 * Design: Minimal Brutalism with Warmth
 * Premium SaaS landing page for digital pet identity infrastructure
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <DigitalPetCard />
      <ProductFlow />
      <TrustSecurity />
      <EmotionalStory />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
