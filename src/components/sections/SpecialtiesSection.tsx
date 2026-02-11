import { Card, CardContent } from "@/components/ui/card";
import { Users, Home, FileText, Heart, Accessibility, Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Social Security Law",
    description: "You've worked your whole life and deserve to have your retirement guaranteed. I fight to ensure Social Security recognizes your rights so you can have the financial peace of mind you've always dreamed of."
  },
  {
    icon: <Accessibility className="h-8 w-8" />,
    title: "Disability Rights",
    description: "Your child, relative, or yourself deserve all possible support. I know every detail of reports and expert examinations to ensure you have the benefits and rights that the law provides."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Family Law",
    description: "Difficult times in the family require someone who understands your pain. I will handle the legal part so you can focus on what really matters: the well-being of your children."
  }
];

export const SpecialtiesSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      console.log('[GSAP]', 'Specialties animation init');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      tl.from(".spec-badge", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
        .from(".spec-header > *", {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8
        }, "-=0.4")
        .from(".spec-card", {
          y: 80,
          opacity: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power4.out"
        }, "-=0.6");

    }, containerRef);
    return () => ctx.revert();
  }, []);



  return (
    <section id="specialties" ref={containerRef} className="py-8 md:py-16 lg:py-32 relative overflow-hidden">
      {/* Sophisticated layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-law-navy-light/10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-law-navy/8 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite_3s]"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-10 right-20 w-48 h-48 bg-law-gold/10 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite_4s]"></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating badge */}
        <div className="spec-badge text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center bg-accent/10 backdrop-blur-xl border border-accent/20 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full shadow-glow">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            <span className="text-accent font-semibold tracking-wide uppercase text-xs sm:text-sm">Legal Expertise</span>
          </div>
        </div>

        {/* Enhanced header with premium styling */}
        <div className="spec-header text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="relative inline-block">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-law-navy mb-4 sm:mb-5 lg:mb-6 relative leading-tight">
              PRACTICE{" "}
              <span className="text-accent md:inline relative">
                AREAS
              </span>
            </h2>

            {/* Decorative elements around title */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-2 sm:w-3 h-2 sm:h-3 bg-accent/60 rounded-full animate-[pulse_2s_infinite]"></div>
            <div className="absolute -top-1 sm:-top-2 -right-6 sm:-right-8 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-law-navy/40 rounded-full animate-[pulse_2s_infinite_1s]"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-4 w-3 sm:w-4 h-3 sm:h-4 bg-accent/40 rounded-full animate-[pulse_2s_infinite_0.5s]"></div>
          </div>

          <p className="text-base md:text-lg text-law-text-light mt-3 sm:mt-4 lg:mt-5 max-w-3xl mx-auto leading-relaxed font-light">
            Each case is unique, each person has their story. Therefore, my work is personalized to resolve exactly what you need.
          </p>
        </div>

        {/* Enhanced cards layout with Flexbox for better 'fittings' (visual balance) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="spec-card group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-3rem)] flex"
            >
              <Card className="h-full border-none shadow-elegant bg-white/90 backdrop-blur-xl hover:shadow-glow group-hover:scale-100 sm:group-hover:scale-105 transition-all duration-700 ease-out hover:bg-white relative overflow-hidden group-hover:-rotate-1">
                {/* Multiple layered hover effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-law-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700"></div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[1px] rounded-xl bg-white"></div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent via-law-gold to-accent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]"></div>
                </div>

                <CardContent className="p-5 sm:p-8 lg:p-10 text-center relative z-10">
                  {/* Enhanced icon with multiple effects */}
                  <div className="mb-6 sm:mb-8 lg:mb-10 flex justify-center">
                    <div className="relative">
                      {/* Main icon container */}
                      <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-law-gold-light to-accent/20 rounded-2xl sm:rounded-3xl group-hover:bg-gradient-to-br group-hover:from-accent/20 group-hover:to-law-gold-light transition-all duration-700 group-hover:rotate-12 group-hover:scale-125 shadow-lg group-hover:shadow-xl">
                        <div className="text-accent group-hover:text-white transition-colors duration-500 drop-shadow-sm">
                          {specialty.icon}
                        </div>
                      </div>

                      {/* Layered glow effects */}
                      <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 bg-accent/30 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                      <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 bg-accent/40 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-md"></div>

                      {/* Floating particles effect */}
                      <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-2 sm:w-3 h-2 sm:h-3 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                      <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-law-gold/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                    </div>
                  </div>

                  {/* Enhanced typography */}
                  {/* Enhanced typography */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-law-navy mb-3 sm:mb-6 leading-tight group-hover:text-accent transition-all duration-500 group-hover:scale-105">
                    {specialty.title}
                  </h3>

                  {/* Mobile Description (Summarized) */}
                  <p className="text-base text-law-text/90 leading-relaxed group-hover:text-law-text transition-all duration-500 md:hidden font-medium">
                    {index === 0 && "Secure your retirement and the financial peace of mind you deserve."}
                    {index === 1 && "Full support to ensure essential benefits and rights."}
                    {index === 2 && "Legal protection focused on your family's well-being."}
                  </p>

                  {/* Desktop Description (Full) */}
                  <p className="hidden md:block text-sm sm:text-base leading-relaxed group-hover:text-law-text transition-all duration-500 group-hover:scale-105">
                    {specialty.description}
                  </p>

                  {/* Enhanced bottom accent with animation */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 sm:h-2 bg-gradient-accent group-hover:w-full group-hover:left-0 transition-all duration-700 rounded-t-full shadow-lg"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 sm:h-1 bg-accent/60 group-hover:w-full group-hover:left-0 transition-all duration-700 rounded-t-full blur-sm"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional premium elements */}
        <div className="spec-footer mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 bg-white/60 backdrop-blur-xl border border-accent/10 px-6 sm:px-8 lg:px-12 py-4 sm:py-6 rounded-full shadow-elegant">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-law-navy font-semibold text-sm sm:text-base">Excellence</span>
            </div>
            <div className="hidden sm:block w-px h-4 sm:h-6 bg-accent/30"></div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-law-navy rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-law-navy font-semibold text-sm sm:text-base">Dedication</span>
            </div>
            <div className="hidden sm:block w-px h-4 sm:h-6 bg-accent/30"></div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-law-navy font-semibold text-sm sm:text-base">Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};