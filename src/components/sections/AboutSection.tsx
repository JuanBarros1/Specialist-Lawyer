import juanPortrait from "@/assets/juan-lawyer-portrait-optimized.webp";
import { useAboutAnimation } from "@/hooks/useAboutAnimation";
import { LazyImage } from "@/components/ui/LazyImage";
import { cn } from "@/lib/utils";

/**
 * AboutSection Component
 * Dedicated to professional storytelling and brand identity.
 */
export const AboutSection = () => {
  const { containerRef } = useAboutAnimation();

  return (
    <section
      id="about"
      ref={containerRef}
      className="pt-40 md:pt-64 pb-20 md:pb-32 bg-[#050505] relative overflow-hidden"
    >
      <EditorialWatermark text="ADVOCACY" />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Portrait Visual Column */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1 about-img-wrapper opacity-0">
            <PortraitBox src={juanPortrait} />
            <ExpertiseBadge text="Specialist in Disability Rights" />
          </div>

          {/* Biography Content Column */}
          <div className="lg:col-span-7 space-y-16 order-1 lg:order-2 about-content opacity-0">
            <header className="space-y-8">
              <span className="text-accent font-black text-sm uppercase tracking-[0.4em]">Expert</span>
              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-[0.85] tracking-tighter">
                Expertise <br />
                <span className="text-accent">with Purpose.</span>
              </h2>
            </header>

            <BiographyText />
            <AffiliationFooter />
          </div>

        </div>
      </div>
    </section>
  );
};

/* --- Refined Sub-components --- */

const EditorialWatermark = ({ text }: { text: string }) => (
  <div className="absolute top-1/4 -left-10 text-[20rem] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter hidden lg:block">
    {text}
  </div>
);

const PortraitBox = ({ src }: { src: string }) => (
  <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl gpu">
    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-20" />
    <LazyImage
      src={src}
      alt="Dr. Juan Barros"
      aspectRatio="3/4"
      imgClassName="grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
    />
  </div>
);


const ExpertiseBadge = ({ text }: { text: string }) => (
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full flex items-center justify-center p-8 rotate-12 group-hover:rotate-0 transition-transform duration-700 shadow-2xl border-4 border-[#050505]">
    <p className="text-law-navy text-xs font-black uppercase tracking-widest text-center leading-tight">
      {text}
    </p>
  </div>
);

const BiographyText = () => (
  <div className="space-y-10 border-l border-accent/30 pl-12">
    {/* Desktop Content */}
    <div className="hidden md:block space-y-10">
      <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-light">
        Lawyer dedicated to the protection of social security and fundamental rights. Our mission is to navigate legal complexity to deliver life-transforming results.
      </p>
      <p className="text-white/40 text-lg md:text-xl leading-relaxed italic">
        Specialist in ASD (Autism) cases and BPC/LOAS benefits, combining technical rigor and deep empathy in every case.
      </p>
    </div>

    {/* Mobile Content */}
    <div className="md:hidden space-y-6">
      <p className="text-white/60 text-xl leading-relaxed font-light">
        Lawyer focused on the protection of fundamental rights, with technical expertise in <span className="text-accent">ASD (Autism)</span> and <span className="text-accent">BPC/LOAS</span> benefits.
      </p>
    </div>
  </div>
);

const AffiliationFooter = () => (
  <div className="pt-8">
    <div className="flex items-center gap-8">
      <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
        <p className="text-accent text-2xl font-black">OAB/RJ</p>
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Registered</p>
      </div>
      <div className="h-px flex-1 bg-white/5" />
    </div>
  </div>
);
