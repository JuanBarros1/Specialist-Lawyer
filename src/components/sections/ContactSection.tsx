import { Mail } from "lucide-react";
import { useContactAnimation } from "@/hooks/useContactAnimation";
import { CONTACT_DATA } from "@/data/contact";
import { cn } from "@/lib/utils";

/**
 * ContactSection Component
 * Provides direct contact channels and a strong call to action.
 */
export const ContactSection = () => {
  const { containerRef } = useContactAnimation();

  const onEmailAction = () => {
    window.location.href = `mailto:${CONTACT_DATA.email}`;
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="pt-16 md:pt-24 pb-40 md:pb-64 bg-[#050505] relative overflow-hidden"
    >
      <EditorialBackground text="CONTACT" />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Left Side: Information */}
          <div className="space-y-20 md:space-y-16 contact-left-content opacity-0">
            <header className="space-y-12 md:space-y-8 contact-header">
              <SectionBadge text="Direct Contact" />
              <MainHeading
                line1="Ready for"
                line2="the next step?"
              />
              <p className="text-white/40 text-xl font-light leading-relaxed max-w-md">
                Click the button below to send us an email and start a confidential consultation.
              </p>
            </header>

            <ContactDetails
              email={CONTACT_DATA.email}
              className="hidden md:block"
            />
          </div>

          {/* Right Side: Primary Action Card */}
          <div className="relative contact-card-wrapper opacity-0">
            <ActionCard onAction={onEmailAction} />
            <DecorationLight />
          </div>

        </div>
      </div>
    </section>
  );
};

/* --- Refined Utility Components --- */

const EditorialBackground = ({ text }: { text: string }) => (
  <div className="absolute bottom-0 right-0 text-[15rem] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter hidden lg:block uppercase">
    {text}
  </div>
);

const SectionBadge = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-px bg-accent" />
    <span className="text-accent font-black text-sm uppercase tracking-[0.4em]">{text}</span>
  </div>
);

const MainHeading = ({ line1, line2 }: { line1: string; line2: string }) => (
  <h2 className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
    {line1} <br />
    <span className="text-accent">{line2}</span>
  </h2>
);

const ContactDetails = ({ email, className }: { email: string; className?: string }) => (
  <div className={cn("space-y-8", className)}>
    <div className="space-y-2">
      <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Email</p>
      <p className="text-white text-xl font-medium">{email}</p>
    </div>
  </div>
);

const ActionCard = ({ onAction }: { onAction: () => void }) => (
  <div className="glass-card p-12 md:p-20 flex flex-col items-center text-center space-y-10 border-none shadow-2xl relative overflow-hidden group">
    <div className="w-24 h-24 bg-accent/10 rounded-[2.5rem] flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors duration-500">
      <Mail className="w-12 h-12" />
    </div>

    <div className="space-y-4">
      <h3 className="font-display text-4xl font-bold text-white">Direct Email</h3>
      <p className="text-white/30 text-lg font-medium">Send us a message and we will get back to you soon.</p>
    </div>

    <button
      onClick={onAction}
      className="premium-btn w-full h-14 md:h-20 text-lg md:text-xl active:scale-95 transition-transform"
    >
      Send Email
    </button>

    <p className="text-white/10 text-xs font-bold uppercase tracking-[0.2em]">Typical response time: Within 24 hours</p>
  </div>
);

const DecorationLight = () => (
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
);