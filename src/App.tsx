import React from 'react';
import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { TrustBar } from './components/trust-bar';
import { ProblemSection } from './components/problem-section';
import { SolutionSection } from './components/solution-section';
import { FeaturesSection } from './components/features-section';
import { TestimonialsSection } from './components/testimonials-section';
import { PricingSection } from './components/pricing-section';
import { EZDashIntro } from './components/ezdash-intro';
import { FAQSection } from './components/faq-section';
import { CTADivider } from './components/cta-divider';
import { FinalCTA } from './components/final-cta';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <EZDashIntro />
      <FAQSection />
      <CTADivider />
      <FinalCTA />
      <Footer />
    </div>
  );
}
