import { Accessibility, Brain, Users, Scale, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT_DATA } from "@/data/contact";
import { useAreasAnimation } from "@/hooks/useAreasAnimation";

interface AreaNode {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const AREAS: AreaNode[] = [
  {
    icon: <Accessibility className="h-8 w-8" />,
    title: "Social Security",
    description: "Complete consultancy for BPC/LOAS, disability, age, or contribution time pensions.",
    features: ["BPC/LOAS", "Pensions", "Value Review"]
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Disability Rights",
    description: "Specialized legal protection for people with disabilities, autism (ASD), and serious illnesses.",
    features: ["ASD Diagnoses", "Disability Exemptions", "Medications"]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Family & Succession",
    description: "Strategic resolution of family conflicts, divorces, alimony, and probate.",
    features: ["Divorces", "Alimony", "Probate"]
  },
  {
    icon: <Scale className="h-8 w-8" />,
    title: "Strategic Consulting",
    description: "Prior risk analysis and full monitoring to ensure the best procedural strategy.",
    features: ["Planning", "Agility", "Results"]
  }
];

export const AreasSection = () => {
  const { containerRef } = useAreasAnimation();

  const handleConsultancyClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="areas"
      className="py-16 md:py-24 bg-[#050505] relative overflow-hidden"
    >
      <BackgroundDecor />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <Header />

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[350px]">
            {AREAS.map((area, index) => (
              <AreaCard
                key={area.title}
                area={area}
                index={index}
                onClick={handleConsultancyClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Header = () => (
  <div className="area-header opacity-0 flex flex-col lg:flex-row gap-8 items-start lg:items-end mb-12 md:mb-16">
    <div className="space-y-6 lg:w-3/5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-px bg-accent" />
        <span className="text-accent font-black text-sm uppercase tracking-[0.4em]">Expertise</span>
      </div>
      <h2 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-[0.85] tracking-tighter">
        Solutions for <br />
        your <span className="text-accent">Rights.</span>
      </h2>
    </div>
    <div className="lg:w-2/5 pb-4">
      <p className="text-white/40 text-xl font-light leading-relaxed max-w-md hidden lg:block">
        Strategic and personalized approach to ensure each case receives the technical excellence it deserves.
      </p>
      <p className="text-white/40 text-lg font-light leading-relaxed md:max-w-md lg:hidden">
        Personalized strategy and technical excellence in every case.
      </p>
    </div>
  </div>
);

const AreaCard = ({ area, index, onClick }: { area: AreaNode; index: number; onClick: () => void }) => {
  const isWide = index === 0 || index === 3;

  return (
    <div
      className={cn(
        "area-card opacity-0 group cursor-pointer transition-all duration-700",
        isWide ? "md:col-span-7" : "md:col-span-5"
      )}
      onClick={onClick}
    >
      <div className="h-full glass-card p-10 rounded-[3.5rem] flex flex-col justify-between group-hover:bg-white/[0.04] group-hover:border-accent/30 overflow-hidden">
        <div className="flex justify-between items-start mb-4">
          <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-law-navy transition-all duration-700">
            {area.icon}
          </div>
          <ArrowRight className="w-6 h-6 text-white/10 group-hover:text-accent transform group-hover:translate-x-2 transition-all" />
        </div>

        <div className="space-y-3 flex-1 flex flex-col justify-end">
          <h3 className="font-display text-xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
            {area.title}
          </h3>
          <p className="text-white/30 text-base md:text-lg font-medium leading-tight line-clamp-2 group-hover:text-white/60 transition-colors">
            {area.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2 opacity-40 group-hover:opacity-100 transition-opacity">
            {area.features.slice(0, 2).map((feat) => (
              <span
                key={feat}
                className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-accent border border-white/5"
              >
                {feat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BackgroundDecor = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="blob absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/2 rounded-full blur-[180px]" />
  </div>
);