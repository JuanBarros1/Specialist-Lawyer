import { Card, CardContent } from "@/components/ui/card";
import { useResponsive } from "@/hooks/useResponsive";
import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { useTestimonialAnimation } from "@/hooks/useTestimonialAnimation";

import { TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/utils";

/**
 * TestimonialsSection Component
 * Featuring a high-end 3D CSS carousel for professional social proof.
 */
export const TestimonialsSection = () => {
  const { isMobile } = useResponsive();
  const [activeIndex, setActiveIndex] = useState(2);
  const { containerRef } = useTestimonialAnimation();

  // Auto-play interval for passive engagement
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /**
   * Calculates dynamic styles for 3D carousel positioning
   * Based on the difference between the card index and current active index.
   */
  const getCardStyle = useCallback((index: number) => {
    const totalCards = TESTIMONIALS.length;
    let diff = index - activeIndex;

    // Normalize diff for circular wrapping
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;

    const isCenter = diff === 0;
    const isVisible = Math.abs(diff) <= 2;

    if (!isVisible) {
      return { transform: 'translateX(0) scale(0.6)', opacity: 0, zIndex: 0, filter: 'brightness(0.5)' };
    }

    const baseOffset = isMobile ? 220 : 320;
    const xOffset = diff * baseOffset + (isCenter ? 0 : diff * 40);
    const scale = isCenter ? 1.05 : 0.8 - Math.abs(diff) * 0.05;
    const zIndex = 10 - Math.abs(diff);
    const brightness = isCenter ? 1 : 0.6 - Math.abs(diff) * 0.1;
    const opacity = isCenter ? 1 : 0.9 - Math.abs(diff) * 0.15;

    return {
      transform: `translateX(${xOffset}px) scale(${scale})`,
      opacity,
      zIndex,
      filter: `brightness(${brightness})`,
    };
  }, [activeIndex, isMobile]);

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="pt-32 md:pt-48 pb-16 md:pb-24 bg-[#050505] relative overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">

        <Header
          badge="Testimonials"
          title={<>Voices of <br /> <span className="text-accent italic">Trust</span></>}
        />

        {/* 3D Carousel Container */}
        <div
          className="test-carousel opacity-0 relative h-[450px] md:h-[550px] flex items-center justify-center"
          style={{ perspective: '2000px' }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              style={getCardStyle(index)}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Sub-components --- */

const Header = ({ badge, title }: { badge: string; title: React.ReactNode }) => (
  <header className="test-header opacity-0 text-left md:text-center mb-16 md:mb-24 space-y-6">
    <div className="flex items-center justify-start md:justify-center gap-4">
      <div className="w-12 h-px bg-accent" />
      <span className="text-accent font-black text-sm uppercase tracking-[0.4em]">{badge}</span>
      <div className="w-12 h-px bg-accent hidden md:block" />
    </div>
    <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
      {title}
    </h2>
  </header>
);

interface CardProps {
  testimonial: typeof TESTIMONIALS[0];
  style: React.CSSProperties;
  onClick: () => void;
}

const TestimonialCard = memo(({ testimonial, style, onClick }: CardProps) => (
  <div
    className="absolute transition-all duration-1000 ease-out cursor-pointer gpu"
    style={style}
    onClick={onClick}
  >
    <Card className="w-[320px] md:w-[450px] min-h-[380px] bg-[#0A0A0A] border border-white/5 rounded-[3rem] overflow-hidden group shadow-2xl transition-all duration-700 hover:bg-[#0F0F0F] hover:border-accent/20">
      <CardContent className="p-12 md:p-16 flex flex-col relative z-10 h-full">
        <div className="flex flex-col h-full space-y-12">

          <blockquote className="text-white/90 text-xl md:text-2xl leading-[1.6] font-light flex-1 font-display italic">
            “{testimonial.content}”
          </blockquote>

          <div className="flex items-center gap-6 pt-10 border-t border-white/10">
            <Avatar src={testimonial.image} alt={testimonial.name} />
            <div className="space-y-0.5">
              <h4 className="font-display font-bold text-white text-lg tracking-wide uppercase">
                {testimonial.name}
              </h4>
              <div className="flex items-center gap-3">
                <div className="w-4 h-px bg-accent/40" />
                <p className="text-[9px] text-accent font-bold uppercase tracking-[0.3em]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
));

const Avatar = memo(({ src, alt }: { src: string; alt: string }) => (
  <div className="w-14 h-14 rounded-full overflow-hidden grayscale brightness-75 group-hover:brightness-100 transition-all duration-700 ring-2 ring-white/5 group-hover:ring-accent/20 gpu">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
));
