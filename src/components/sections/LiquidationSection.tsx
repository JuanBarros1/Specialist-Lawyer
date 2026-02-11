import { ArrowUpRight } from "lucide-react";
import juanPortrait from "@/assets/juan-portrait-alt.jpg";
import { useLiquidationAnimation } from "@/hooks/useLiquidationAnimation";
import { CONTACT_DATA } from "@/data/contact";
import { cn } from "@/lib/utils";

interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    id: "audit",
    number: "01",
    title: "Technical Audit of Reports",
    description: "Complete sweep of each document to identify medical and procedural errors by Social Security."
  },
  {
    id: "shield",
    number: "02",
    title: "360º Legal Shield",
    description: "Full monitoring until the actual granting of the benefit, with no room for failure."
  }
];

export const LiquidationSection = () => {
  const { containerRef } = useLiquidationAnimation();

  const handleActionClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-screen">

        <VisualColumn image={juanPortrait} />

        <div className="w-full md:w-1/2 flex items-center bg-[#050505] relative z-20 px-6 py-24 md:px-16 lg:px-24 md:py-0 order-2 md:order-1 liquid-content opacity-0">
          <div className="space-y-20 md:space-y-16 max-w-xl">

            <Header headline={<>For those who <br /><span className="text-accent">cannot</span> <br /><span className="text-accent">wait</span></>} />

            <div className="space-y-12">
              {FEATURES.map((feature) => (
                <FeatureItem key={feature.id} {...feature} />
              ))}
            </div>

            <CTAButton onClick={handleActionClick} />

          </div>
        </div>
      </div>
    </section>
  );
};

const VisualColumn = ({ image }: { image: string }) => (
  <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto order-1 md:order-2 liquid-visual opacity-0">
    <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-32 pointer-events-none mix-blend-difference">
      <div className="w-px h-32 bg-accent/50 mx-auto" />
      <span className="text-accent/80 text-xs font-bold uppercase tracking-[0.4em] [writing-mode:vertical-lr] rotate-180">
        Technical Exclusivity
      </span>
      <div className="w-px h-32 bg-accent/50 mx-auto" />
    </div>

    <div className="absolute inset-0 z-10 w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050505]/20 to-[#050505] z-20 hidden md:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 md:hidden" />
      <img
        src={image}
        alt="Dr. Juan Barros"
        className="w-full h-full object-cover object-top grayscale contrast-[1.1] brightness-[0.9]"
      />
    </div>
  </div>
);

const Header = ({ headline }: { headline: React.ReactNode }) => (
  <div className="space-y-6 md:space-y-2">
    <h2 className="font-display text-6xl md:text-8xl text-white leading-[0.85]">
      {headline}
    </h2>
    <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed pt-8 max-w-sm">
      We transform administrative denials into definitive judicial victories through meticulous forensic analysis.
    </p>
  </div>
);

const FeatureItem = ({ number, title, description }: Omit<Feature, 'id'>) => (
  <div className="group cursor-default">
    <div className="flex items-baseline gap-6 mb-2">
      <span className="font-display text-4xl text-accent/20 group-hover:text-accent transition-colors duration-500">{number}</span>
      <h3 className="text-white text-2xl font-display">
        {title}
      </h3>
    </div>
    <p className="text-white/40 pl-[4.5rem] leading-relaxed relative">
      <span className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-white/5 group-hover:bg-accent/20 transition-colors duration-500" />
      {description}
    </p>
  </div>
);

const CTAButton = ({ onClick }: { onClick: () => void }) => (
  <div className="pt-8">
    <button
      onClick={onClick}
      className="group flex items-center gap-6 text-left focus:outline-none"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center text-[#050505] group-hover:scale-110 transition-transform duration-500 shadow-glow">
        <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-45 transition-transform duration-500" />
      </div>
      <div>
        <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1">Strategic Call</p>
        <p className="text-xl md:text-2xl font-display text-white group-hover:text-accent transition-colors">Request Free Analysis</p>
      </div>
    </button>
  </div>
);