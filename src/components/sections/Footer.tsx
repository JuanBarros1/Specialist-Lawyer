import { useFooterAnimation } from "@/hooks/useFooterAnimation";
import { CONTACT_DATA } from "@/data/contact";

export const Footer = () => {
  const { containerRef } = useFooterAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={containerRef} className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* Logo & Manifesto */}
          <div className="lg:col-span-5 space-y-8 opacity-0 footer-col">
            <h2 className="font-display text-4xl font-bold text-white tracking-tighter">
              Juan <span className="text-accent">Barros.</span>
            </h2>
            <p className="text-white/30 text-lg font-light leading-relaxed max-w-sm">
              Unwavering technical defense. Non-negotiable commitment to justice and human dignity.
            </p>
            <div className="pt-2 hidden md:block">
              <span className="text-accent/60 text-[10px] font-bold uppercase tracking-[0.2em] border border-accent/20 px-3 py-1 rounded-full">
                OAB/RJ 249.231
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-8 opacity-0 footer-col">
            <p className="text-accent font-black text-[10px] uppercase tracking-[0.4em]">Navigation</p>
            <ul className="space-y-4">
              {['Home', 'Areas', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace('á', 'a'))}
                    className="text-white/50 hover:text-accent transition-colors font-medium text-lg"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Direct */}
          <div className="lg:col-span-4 space-y-8 opacity-0 footer-col">
            <p className="text-accent font-black text-[10px] uppercase tracking-[0.4em]">Direct Connection</p>
            <div className="space-y-6">
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="block group"
              >
                <p className="text-white/20 text-xs font-bold uppercase tracking-widest group-hover:text-accent transition-colors">Direct Email</p>
                <p className="text-white text-2xl font-black tracking-tighter mt-1">{CONTACT_DATA.email}</p>
              </a>

              <div className="pt-8 border-t border-white/5 opacity-0 footer-bottom">
                <p className="text-white/10 text-xs font-medium">© {new Date().getFullYear()} Juan Barros. All rights reserved.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};