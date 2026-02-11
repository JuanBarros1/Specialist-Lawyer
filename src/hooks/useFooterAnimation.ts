import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useFooterAnimation = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                }
            });

            tl.to(".footer-col", {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out"
            })
                .to(".footer-bottom", {
                    opacity: 1,
                    duration: 1
                }, "-=0.4");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return { containerRef };
};
