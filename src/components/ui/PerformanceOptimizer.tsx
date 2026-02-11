import heroImage from "@/assets/juan-lawyer-portrait-optimized.webp";
import { useEffect } from 'react';

/**
 * PerformanceOptimizer Component
 * Implements various browser-level optimizations to improve Core Web Vitals.
 */
export const PerformanceOptimizer = () => {
  useEffect(() => {
    // 1. Preload critical above-the-fold assets
    const preloadCriticalResources = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = heroImage;
      document.head.appendChild(link);
    };

    // 2. Progressive enhancement for images
    const optimizeImages = () => {
      document.querySelectorAll('img').forEach(img => {
        if (!img.loading) img.loading = 'lazy';
        if (!img.decoding) img.decoding = 'async';
      });
    };

    // 3. Layout Stability (CLS Protection)
    const preventLayoutShift = () => {
      document.querySelectorAll<HTMLElement>('[data-prevent-shift]').forEach(el => {
        if (!el.style.aspectRatio && el.dataset.aspectRatio) {
          el.style.aspectRatio = el.dataset.aspectRatio;
        }
      });
    };

    // Initialize optimizations
    preloadCriticalResources();

    // Defer non-critical logic to avoid blocking the main thread
    const timer = setTimeout(() => {
      optimizeImages();
      preventLayoutShift();
    }, 150);

    // 4. Font Loading Strategy
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
      });
    }

    // 5. RUM (Real User Monitoring) - Silent Capture
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Entry processing logic (e.g. sending to analytics)
          if (entry.entryType === 'largest-contentful-paint') {
            /* LCP processed */
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      } catch (e) {
        // Monitoring not fully supported in this browser
      }
    }

    return () => clearTimeout(timer);
  }, []);

  return null;
};