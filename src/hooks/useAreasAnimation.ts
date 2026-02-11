import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAreasAnimation = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            // Header Reveal
            tl.to(".area-header", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            })
                // Cards Stagger with 3D feel
                .to(".area-card", {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power2.out"
                }, "-=0.6");

            // Floating blobs parallax
            gsap.to(".blob", {
                yPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return { containerRef };
};
