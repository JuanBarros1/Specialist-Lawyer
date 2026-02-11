import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const useHeroAnimation = () => {
    const textContainerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 1024;
            const duration = 1.4;

            // Set initial state
            gsap.set(".hero-badge", { x: -30, opacity: 0 });
            gsap.set(".hero-title span", { y: 80, opacity: 0, skewY: 4 });
            gsap.set(".hero-text", { x: -20, opacity: 0 });
            gsap.set([".hero-btn", ".hero-btn-alt"], { y: 20, opacity: 0, scale: 0.95 });
            gsap.set(".hero-visual", { x: 50, opacity: 0 });

            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            tl.to(".hero-badge", {
                x: 0,
                opacity: 1,
                duration: 1,
            })
                .to(".hero-title span", {
                    y: 0,
                    opacity: 1,
                    skewY: 0,
                    stagger: 0.15,
                    duration: duration
                }, "-=0.6")
                .to(".hero-visual", {
                    x: 0,
                    opacity: 1,
                    duration: duration
                }, "-=1.2")
                .to(".hero-text", {
                    x: 0,
                    opacity: 1,
                    duration: 1
                }, "-=1")
                .to([".hero-btn", ".hero-btn-alt"], {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    stagger: 0.05,
                    duration: 0.6,
                    ease: "power3.out",
                    onComplete: () => {
                        gsap.set([".hero-btn", ".hero-btn-alt"], { clearProps: "transform,scale" });
                    }
                }, "-=1");
        }, textContainerRef);

        return () => ctx.revert();
    }, []);

    return { textContainerRef };
};
