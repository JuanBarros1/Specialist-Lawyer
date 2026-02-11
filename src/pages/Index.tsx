import { lazy, Suspense } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { PerformanceOptimizer } from "@/components/ui/PerformanceOptimizer";

// Lazy load below-the-fold sections for improved initial load performance
const AboutSection = lazy(() => import("@/components/sections/AboutSection").then(module => ({ default: module.AboutSection })));
const LiquidationSection = lazy(() => import("@/components/sections/LiquidationSection").then(module => ({ default: module.LiquidationSection })));
const AreasSection = lazy(() => import("@/components/sections/AreasSection").then(module => ({ default: module.AreasSection })));
const ContactSection = lazy(() => import("@/components/sections/ContactSection").then(module => ({ default: module.ContactSection })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(module => ({ default: module.TestimonialsSection })));
const Footer = lazy(() => import("@/components/sections/Footer").then(module => ({ default: module.Footer })));

const Index = () => {
  console.log('[HomePage]', 'Page rendered successfully');

  return (
    <div className="min-h-screen bg-background">
      <PerformanceOptimizer />

      <main>
        <HeroSection />
        <Suspense fallback={<div className="w-full h-20" />}>
          <AboutSection />
          <AreasSection />
          <LiquidationSection />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
