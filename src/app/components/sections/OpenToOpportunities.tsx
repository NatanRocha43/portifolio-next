import { ArrowRight } from "lucide-react";

const ROLES = [
  "Front-End Developer (Pleno / Senior)",
  "Especialista VTEX IO & E-commerce",
  "Especialista Drupal DX8 & Stencil.js",
  "Engenharia React & Next.js",
  "Projetos Freelance & Consultoria",
] as const;

export default function OpenToOpportunities() {
  return (
    <section aria-label="Disponibilidade para projetos e oportunidades" className="py-12 sm:py-16 px-6 sm:px-12 max-w-[1200px] mx-auto w-full">
      <div className="relative overflow-hidden rounded-3xl bg-[#1A1A1A] text-[#FAFAF9] p-8 sm:p-14 shadow-xl">
        {/* Subtle violet ambient glow on corner */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#8B5CF6] opacity-15 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white mb-6 leading-[1.15]">
            Vamos construir algo extraordinário juntos.
          </h2>

          <div role="list" aria-label="Formatos de atuação profissional" className="flex flex-wrap gap-2 mb-8">
            {ROLES.map((role) => (
              <span
                key={role}
                role="listitem"
                className="px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-medium text-neutral-300 hover:border-[#7C3AED] hover:text-white transition-colors"
              >
                {role}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#7C3AED] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#6D28D9] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#7C3AED]/25 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
          >
            <span>Iniciar Conversa</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
