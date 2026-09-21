import React from "react";
import { Cpu, Search, Ruler, Code2, ServerCog } from "lucide-react";
import { Service } from "../_types";

export type { Service };

export const services: Service[] = [
  {
    title: "Desenvolvimento de Interface & Acessibilidade",
    description:
      "Construção de interfaces responsivas, reativas e com conformidade estrita às diretrizes WCAG 2.1 AA. Foco em tempos de carregamento instantâneos, fidelidade pixel-perfect e experiência fluida em qualquer dispositivo.",
    icon: <Cpu className="w-6 h-6 text-[#8B5CF6]" aria-hidden="true" />,
    tags: ["Core Web Vitals", "Acessibilidade WCAG", "Mobile-First", "Design Systems"],
  },
  {
    title: "SEO Técnico & Otimização de Performance",
    description:
      "Estruturação semântica de dados, metadados enriquecidos para redes sociais, redução de Cumulative Layout Shift (CLS) e otimização de renderização para maximizar a indexabilidade orgânica no Google.",
    icon: <Search className="w-6 h-6 text-[#8B5CF6]" aria-hidden="true" />,
    tags: ["SEO Semântico", "OpenGraph", "Lighthouse 95+", "Performance Audit"],
  },
  {
    title: "Arquitetura Modular & Clean Code",
    description:
      "Aplicação rigorosa de princípios SOLID, separação clara de responsabilidades e componentização atômica. Código sustentável, de fácil manutenção e pronto para crescer sem criar débitos técnicos.",
    icon: <Ruler className="w-6 h-6 text-[#8B5CF6]" aria-hidden="true" />,
    tags: ["Clean Code", "SOLID", "Componentização Atômica", "Refatoração"],
  },
  {
    title: "Ecossistema Front-End Moderno",
    description:
      "Domínio completo na construção de SPAs, SSR e SSG combinando React, Next.js e TypeScript com ferramentas de ponta para estilização e gerenciamento de estado.",
    icon: <Code2 className="w-6 h-6 text-[#8B5CF6]" aria-hidden="true" />,
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "SCSS Modular",
      "Stencil.js",
      "HTML5 Semântico",
      "APIs REST & GraphQL",
    ],
  },
  {
    title: "Plataformas Enterprise & E-commerce",
    description:
      "Vasta experiência no desenvolvimento, customização e migração de grandes plataformas de e-commerce e portais de conteúdo corporativo com equipes internacionais.",
    icon: <ServerCog className="w-6 h-6 text-[#8B5CF6]" aria-hidden="true" />,
    tags: [
      "VTEX IO",
      "VTEX Legacy",
      "Drupal DX8",
      "GraphQL",
      "Node.js",
      "Git & GitHub Flow",
      "Figma",
      "Scrum / Kanban",
    ],
  },
];
