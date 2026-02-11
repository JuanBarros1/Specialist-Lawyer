import { useState, useEffect, useRef } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";
import logo from "@/assets/logo-optimized.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useResponsive();
  const navRef = useRef<HTMLElement>(null);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Specialties", href: "#specialties" },
    { label: "Why choose me?", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ];

  /* GSAP scroll header toggle + Entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".nav-logo", {
        x: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.5
      })
        .from(".nav-link", {
          y: -10,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6
        }, "-=0.4")
        .from(".nav-cta", {
          scale: 0.9,
          opacity: 0,
          duration: 0.6
        }, "-=0.2");

      // Scroll Hide/Show
      const showAnim = gsap.from(navRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: "power2.inOut"
      }).progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (self.direction === -1) {
            showAnim.play();
          } else if (self.direction === 1 && self.scroll() > 100) {
            showAnim.reverse();
          }
        }
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-law-navy/5 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.03)] transition-all duration-500">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="nav-logo flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection("#home")}>
            <img src={logo} alt="Logo Juan Advogado" className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-sm" />
            <span className="font-display font-bold text-xs sm:text-base lg:text-lg text-law-navy truncate group-hover:text-accent transition-colors duration-300">
              Specialist Lawyer
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="nav-link relative group text-law-navy/80 hover:text-law-navy transition-colors duration-300 font-medium text-sm xl:text-base px-1 py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-out"></span>
              </button>
            ))}
            <Button
              className="nav-cta relative overflow-hidden bg-transparent border border-accent text-law-navy font-semibold hover:text-white hover:border-accent transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(234,179,8,0.6)] group rounded-xl px-6"
              onClick={() => scrollToSection("#contact")}
            >
              <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10"></span>
              <span className="relative z-10">Contact Us</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-law-navy min-h-[44px] min-w-[44px] active:scale-95 transition-transform"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-law-text hover:text-accent transition-colors duration-300 text-left px-4 py-3 rounded-lg hover:bg-accent/5 min-h-[44px] active:scale-95 transition-transform"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full mt-4 mx-4 min-h-[44px] active:scale-95 transition-transform"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};