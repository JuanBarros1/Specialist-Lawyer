import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import juanPortrait from "@/assets/juan-lawyer-portrait-optimized.webp";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { HERO_CONTENT } from "@/data/hero-content";
import { CONTACT_DATA } from "@/data/contact";
import { cn } from "@/lib/utils";

/**
 * HeroSection Component
 * Represents the primary header of the site with video/image backgrounds
 * and key calls to action.
 */
export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Custom animation hook for entrance effects
  const { textContainerRef } = useHeroAnimation();

  // Handle responsive video visibility logic
  useEffect(() => {
    const checkVideoSupport = () => {
      const isMobile = window.innerWidth < 768;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      return !isMobile && !reducedMotion;
    };

    setShowVideo(checkVideoSupport());

    const handleResize = () => setShowVideo(checkVideoSupport());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle video playback
  useEffect(() => {
    if (!showVideo || videoError) return;

    videoRef.current?.play().catch(() => setVideoError(true));
  }, [showVideo, videoError]);

  const onCTAClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const onExploreClick = () => {
    document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' });
  };

  const useFallback = !showVideo || videoError;

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0D14]"
    >
      <BackgroundOverlays hideContent={false} />

      {useFallback ? (
        <FallbackBackground src={juanPortrait} />
      ) : (
        <VideoBackground
          videoRef={videoRef}
          isPlaying={videoIsPlaying}
          onPlaying={() => setVideoIsPlaying(true)}
          onError={() => setVideoError(true)}
        />
      )}

      <Decorations />

      <div className="relative z-20 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* Content Column */}
          <div ref={textContainerRef} className="space-y-10 lg:space-y-12 gpu">
            <header className="space-y-8 md:space-y-6">
              <div className="hero-badge opacity-0 flex items-center gap-4">
                <div className="w-8 h-px bg-accent" />
                <span className="text-accent text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  Excellence in Law
                </span>
              </div>

              <h1 className="hero-title font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white">
                <span className="inline-block opacity-0">{HERO_CONTENT.title.line1}</span>
                <br />
                <span className="inline-block text-accent opacity-0">{HERO_CONTENT.title.line2}</span>
              </h1>
            </header>

            <p className="hero-text opacity-0 text-lg lg:text-xl font-light leading-relaxed text-white/50 max-w-2xl hidden lg:block">
              {HERO_CONTENT.description.desktop}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start lg:items-center">
              <button
                className="hero-btn opacity-0 premium-btn h-12 lg:h-16 px-8 lg:px-10 text-base lg:text-lg w-fit"
                onClick={onCTAClick}
              >
                {HERO_CONTENT.cta}
              </button>

              <button
                className="hero-btn-alt opacity-0 group hidden lg:flex items-center gap-3 text-white/60 hover:text-accent transition-all font-bold tracking-widest uppercase text-xs lg:text-sm"
                onClick={onExploreClick}
              >
                <span>Explore Specialties</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-law-navy transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Visual Column */}
          <div className="hidden lg:flex justify-end relative">
            <div className="hero-visual opacity-0 relative w-full h-[600px] flex justify-end items-center">
              <PortraitCard image={juanPortrait} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* --- Sub-components for cleaner structure --- */

const BackgroundOverlays = ({ hideContent }: { hideContent: boolean }) => (
  <>
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D14] via-transparent to-[#0A0D14] z-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-transparent to-transparent z-10 opacity-80" />
  </>
);

const FallbackBackground = ({ src }: { src: string }) => (
  <div className="absolute inset-0 scale-105 gpu">
    <img
      src={src}
      alt="Dr. Juan - Background"
      fetchPriority="high"
      loading="eager"
      className="w-full h-full object-cover object-[center_15%] opacity-30 grayscale-[50%]"

    />
  </div>
);

const VideoBackground = ({ videoRef, isPlaying, onPlaying, onError }: any) => (
  <video
    ref={videoRef}
    loop
    muted
    playsInline
    autoPlay
    preload="none"
    className={cn(
      "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 grayscale-[30%]",
      isPlaying ? "opacity-40" : "opacity-0"
    )}
    onPlaying={onPlaying}
    onError={onError}
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>
);

const Decorations = () => (
  <>
    <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-[20%] right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
  </>
);

const PortraitCard = ({ image }: { image: string }) => (
  <div className="relative group transition-transform duration-1000">
    <div className="relative w-[340px] aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
      <img
        src={image}
        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
      />

      {/* OAB Badge */}
      <div className="absolute top-6 left-6 glass-card px-4 py-2 border-accent/30 z-30 hidden md:block">
        <p className="text-accent text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5">OAB/RJ 249.231</p>
        <p className="text-white text-xs font-bold tracking-widest italic">Registered</p>
      </div>
    </div>
  </div>
);
