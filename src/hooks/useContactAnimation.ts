import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useContactAnimation = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            tl.to(".contact-left-content", {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            })
                .to(".contact-card-wrapper", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.8")
                .from(".contact-left-content > *", {
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
