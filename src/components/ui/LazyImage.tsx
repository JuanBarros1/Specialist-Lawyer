import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

/**
 * Enhanced LazyImage component for superior mobile performance.
 * Features:
 * - Adaptive Intersection Observer (higher margin for faster loading)
 * - Optimized decoded state handling
 * - CLS (Cumulative Layout Shift) protection with aspect-ratio
 * - High-end shimmer effect for loaders
 */
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  priority?: boolean; // If true, loads immediately for LCP
}

export const LazyImage = ({
  src,
  alt,
  className,
  imgClassName,
  aspectRatio,
  priority = false,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        // On mobile, users scroll faster, so we start loading earlier (400px before)
        rootMargin: '400px',
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => setIsLoaded(true);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-white/[0.03]",
        className
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Premium Shimmer Placeholder */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer transition-opacity duration-700",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        style={{ backgroundSize: '200% 100%' }}
      />

      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          className={cn(
            "w-full h-full object-cover transition-all duration-1000 ease-out",
            isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-md",
            imgClassName
          )}
          {...props}
        />
      )}
    </div>
  );
};