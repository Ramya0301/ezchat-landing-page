import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Handle smooth scroll with offset for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const navHeight = 100; // Height of fixed navigation
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            
            // Update URL without triggering scroll
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Handle initial page load with hash
    if (window.location.hash) {
      setTimeout(() => {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navHeight = 100;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 z-[9999] rounded">
        Skip to main content
      </a>
      <header role="banner">
        <Navigation />
      </header>
      <main id="main-content" className="min-h-screen bg-white" role="main">
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
      </main>
      <Footer />
    </>
  );
}
