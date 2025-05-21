import { Cpu, Search, Ruler, Code2, ServerCog } from "lucide-react"
import { JSX } from "react/jsx-runtime"

export type Service = {
  title: string
  description: string
  icon: JSX.Element
  spanTwoCols?: boolean
}

export const services: Service[] = [
  {
    title: "Interfaces Performáticas",
    description:
      "Desenvolvimento de interfaces responsivas, fluidas e acessíveis, com foco em usabilidade, tempo de carregamento e experiência consistente em múltiplos dispositivos.",
    icon: <Cpu className="w-7 h-7 text-sky-400 opacity-80" aria-hidden="true" />,
  },
  {
    title: "SEO",
    description:
      "Implementação de estratégias de SEO técnico para garantir melhor visibilidade nos mecanismos de busca, com foco em estrutura semântica, performance e rastreabilidade.",
    icon: <Search className="w-7 h-7 text-green-400 opacity-80" aria-hidden="true" />,
  },
  {
    title: "Clean Code e Arquitetura",
    description:
      "Aplicação de boas práticas como Clean Code, SOLID e modularização, visando legibilidade, manutenibilidade e escalabilidade no desenvolvimento de aplicações.",
    icon: <Ruler className="w-7 h-7 text-orange-400 opacity-80" aria-hidden="true" />,
  },
  {
    title: "Stacks de Front-End",
    description:
      "HTML5 • CSS3 • Sass • Tailwind CSS • JavaScript • TypeScript • jQuery • React • React Native • Next.js • Stencil.js • Integração com APIs.",
    icon: <Code2 className="w-7 h-7 text-purple-400 opacity-80" aria-hidden="true" />,
    spanTwoCols: true,
  },
  {
    title: "Outras Stacks",
    description:
      "Node.js • Express.js • MongoDB • PostgreSQL • GraphQL • Docker • CI/CD • Git • Drupal (DX8) • VTEX IO • Figma • Metodologias Ágeis.",
    icon: <ServerCog className="w-7 h-7 text-yellow-400 opacity-80" aria-hidden="true" />,
  },
] as const

