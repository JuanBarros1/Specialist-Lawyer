import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTestimonialAnimation = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            tl.to(".test-header", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            })
                .to(".test-carousel", {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out"
                }, "-=0.6");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return { containerRef };
};
