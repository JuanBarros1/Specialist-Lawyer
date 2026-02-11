import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLiquidationAnimation = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            tl.to(".liquid-visual", {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power4.out"
            })
                .to(".liquid-content", {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.8")
                .from(".liquid-content h2, .liquid-content p, .liquid-content .group, .liquid-content button", {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8
                }, "-=0.6");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return { containerRef };
};
