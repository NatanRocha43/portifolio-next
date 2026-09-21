import IconButton from "../UI/IconButton";
import { ArrowRight, ArrowDownToLine } from "lucide-react";

const STATS = [
  { value: "+5 Anos", label: "Atuação em Front-End" },
  { value: "9+", label: "Projetos de Grande Porte" },
  { value: "100%", label: "Foco em Performance & A11y" },
] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[92vh] sm:min-h-screen flex items-center pt-32 sm:pt-40 pb-16 px-6 sm:px-12 max-w-[1200px] mx-auto w-full"
      aria-label="Apresentação de Natan Rocha"
    >
      <div className="w-full flex flex-col items-start text-left">
        {/* Big Editorial Heading with Fraunces */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-[#1A1A1A] leading-[1.1] max-w-4xl mb-6">
          Engenharia Front-End &{" "}
          <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent italic font-normal">
            interfaces de alta performance
          </span>{" "}
          e conversão.
        </h1>

        {/* Subtitle / Description */}
        <p className="text-base sm:text-lg text-[#5C5C5C] max-w-2xl leading-relaxed mb-10 font-normal">
          Transformo requisitos complexos de negócios em experiências web rápidas, inclusivas e escaláveis. Especialista no desenvolvimento com React, Next.js, VTEX IO e Drupal DX8, unindo rigor de arquitetura a uma usabilidade impecável.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-16 sm:mb-20">
          <IconButton
            href="#contact"
            text="Entrar em Contato"
            ariaLabel="Ir para o formulário de contato"
            variant="primary"
            icon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          />

          <IconButton
            href="#projects"
            text="Explorar Trajetória & Projetos"
            ariaLabel="Navegar até a seção de projetos e casos de sucesso"
            variant="secondary"
          />

          <IconButton
            href="./natan-rocha-front-end.pdf"
            download="Curriculo-Natan-Rocha-Front-End.pdf"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Baixar currículo de Natan Rocha em formato PDF (abre em nova aba)"
            text="Baixar CV"
            variant="secondary"
            icon={<ArrowDownToLine className="w-4 h-4 text-[#7C3AED]" aria-hidden="true" />}
          />
        </div>

        {/* Stats Strip - Semântico para leitores de tela */}
        <dl className="grid grid-cols-3 gap-6 sm:gap-16 pt-8 border-t border-[#E5E4E1] w-full max-w-2xl">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dd className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] block tracking-tight order-1">
                {stat.value}
              </dd>
              <dt className="text-xs sm:text-sm text-[#5C5C5C] mt-1 block order-2">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
