import { Zap, ShieldCheck, Globe, GraduationCap } from "lucide-react";
import { SectionTitle } from "../UI/SectionTitle";

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "VTEX IO",
  "VTEX Legacy",
  "Drupal (DX8)",
  "Stencil.js (Web Components)",
  "Tailwind CSS",
  "SCSS Modular",
  "GraphQL",
  "Node.js",
  "Acessibilidade Digital (WCAG)",
  "SEO Técnico & Core Web Vitals",
  "Git & GitHub Flow",
  "Figma para Devs",
  "Metodologias Ágeis (Scrum/Kanban)",
  "Testes & Code Review",
];

const HIGHLIGHTS = [
  {
    icon: <Zap className="w-6 h-6 text-[#7C3AED]" aria-hidden="true" />,
    title: "Performance Sem Concessões",
    description:
      "Otimização milimétrica de Core Web Vitals (LCP, CLS, INP), redução de bundle e entrega instantânea de assets.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#7C3AED]" aria-hidden="true" />,
    title: "Acessibilidade Universal (a11y)",
    description:
      "Interfaces desenvolvidas sob conformidade estrita às normas WCAG 2.1 AA, garantindo inclusão e conformidade legal.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#7C3AED]" aria-hidden="true" />,
    title: "Atuação em Escala Global",
    description:
      "Experiência sólida trabalhando com equipes distribuídas internacionais (Argentina e Brasil) em operações multinacionais.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#7C3AED]" aria-hidden="true" />,
    title: "Especialização Acadêmica",
    description:
      "Pós-graduação em Desenvolvimento Web pelo IFSP, consolidando fundamentos avançados de arquitetura e engenharia de software.",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1200px] mx-auto w-full border-t border-[#E5E4E1]"
      aria-label="Sobre Natan Rocha"
    >
      <SectionTitle
        title="Sobre Mim"
        description="Desenvolvedor front-end dedicado a transformar problemas complexos em interfaces leves, intuitivas e sustentáveis."
      />

      <div className="flex flex-col gap-12">
        {/* Story Narrative */}
        <div className="max-w-3xl space-y-6 text-base sm:text-lg text-[#5C5C5C] leading-relaxed font-normal">
          <p>
            Desenvolvedor Front-End Pleno com <strong className="text-[#1A1A1A] font-semibold">mais de 5 anos de experiência</strong> focado na construção de interfaces dinâmicas e escaláveis. Especializado em otimizar a performance e a usabilidade (UX) de aplicações web de alto tráfego. Minha base técnica inclui proficiência em <strong className="text-[#1A1A1A] font-semibold">React, Next.js, TypeScript e Stencil.js</strong>.
          </p>
          <p>
            Meu foco principal está no desenvolvimento de soluções de <strong className="text-[#1A1A1A] font-semibold">E-commerce e Portais Corporativos</strong>. Possuo experiência sólida no ecossistema <strong className="text-[#1A1A1A] font-semibold">VTEX IO</strong> e em projetos baseados em <strong className="text-[#1A1A1A] font-semibold">Drupal</strong>, integrando front-end com plataformas complexas. Essa base me permite adaptar e expandir arquiteturas para diferentes necessidades de negócio.
          </p>
          <p>
            Além do ecossistema React, utilizo <strong className="text-[#1A1A1A] font-semibold">Node.js</strong> para soluções Full-Stack e tenho experiência com pré-processadores como <strong className="text-[#1A1A1A] font-semibold">Sass</strong>. Meu diferencial é a abordagem colaborativa com equipes multidisciplinares (UX/UI, Back-End e Produto), garantindo a implementação das melhores práticas de desenvolvimento e a entrega de projetos com foco em resultados e inovação contínua.
          </p>
          <p>
            Buscando oportunidades desafiadoras que permitam aplicar e expandir minhas habilidades. Atualmente, aprofundo meus conhecimentos em arquitetura web na <strong className="text-[#1A1A1A] font-semibold">Pós-Graduação em Desenvolvimento Web (IFSP, conc. Dez/2025)</strong>. Vamos conversar sobre como posso otimizar a experiência do usuário em seu próximo projeto!
          </p>
        </div>

        {/* Skills Tag Cloud */}
        <div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight mb-4">
            Competências Técnicas & Ferramentas
          </h3>
          <div role="list" aria-label="Competências Técnicas" className="flex flex-wrap gap-2 sm:gap-2.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                role="listitem"
                className="px-4 py-2 rounded-full bg-[#F5F4F2] border border-[#E5E4E1] text-xs sm:text-sm font-medium text-[#1A1A1A] hover:bg-[#7C3AED] hover:border-[#6D28D9] hover:text-white transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Highlights Grid */}
        <div role="list" aria-label="Diferenciais e Destaques" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              role="listitem"
              className="p-6 rounded-2xl bg-white border border-[#E5E4E1] hover:border-[#7C3AED] hover:-translate-y-1 transition-all duration-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F5F4F2] flex items-center justify-center mb-4 text-[#7C3AED]" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-base text-[#1A1A1A] mb-2 tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
