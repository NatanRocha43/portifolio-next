import { Project, ProjectIconType } from "../_types";

export type { Project, ProjectIconType };

export const projects: Project[] = [
  {
    id: 1,
    title: "Portal Digital & Ecossistema de Web Components",
    company: "TIM Brasil",
    role: "Front-End Specialist & Web Components Lead",
    period: "2023 — Presente",
    category: "Drupal DX8 & Web Components",
    iconType: "drupal",
    techs: [
      "Drupal DX8",
      "Stencil.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "SCSS Modular",
      "Acessibilidade WCAG 2.1 AA",
      "SEO Técnico Avançado",
      "PHP",
    ],
    summary:
      "Liderança na evolução e engenharia front-end do portal corporativo da TIM Brasil, concebendo Web Components modulares com Stencil.js e garantindo conformidade rigorosa com normas internacionais de acessibilidade (WCAG).",
    challenge:
      "Como um dos maiores ecossistemas digitais de telecomunicações da América Latina, a TIM exige que dezenas de jornadas e produtos operem sob altíssima disponibilidade, com tempo de resposta imperceptível e padrões inegociáveis de acessibilidade para usuários com deficiência visual, motora ou cognitiva, em conformidade com exigências regulatórias.",
    solution:
      "Arquitetei e implementei uma suíte de Web Components encapsulados e reutilizáveis utilizando Stencil.js, perfeitamente orquestrados no CMS Drupal com DX8. Estruturei um fluxo de desenvolvimento pautado em semântica HTML estrita, tokens de design em SCSS, auditorias contínuas de leitores de tela (NVDA/TalkBack) e otimização profunda do caminho crítico de renderização (Critical CSS e carregamento assíncrono).",
    results: [
      "Aceleração de mais de 35% no time-to-market de novas páginas e landing pages de campanhas corporativas.",
      "Conformidade validada com o nível AA das diretrizes WCAG, tornando a plataforma verdadeiramente inclusiva.",
      "Ganhos consistentes nas métricas de Core Web Vitals (LCP e CLS), resultando em melhoria tangível no ranqueamento orgânico no Google.",
    ],
  },
  {
    id: 2,
    title: "Sustentação Crítica & Otimização de Conversão",
    company: "Carinhoso (Grupo Malwee)",
    role: "Front-End Engineer (VTEX Legacy & IO)",
    period: "2022 — 2023",
    category: "VTEX IO & Moda Infantil",
    iconType: "vtex",
    techs: [
      "VTEX Legacy",
      "VTEX IO",
      "React",
      "JavaScript",
      "SCSS",
      "Node.js",
      "Otimização de Funil",
    ],
    summary:
      "Engenharia de sustentação, eliminação de débitos técnicos críticos e implementação de novas funcionalidades de alta conversão para o e-commerce da marca Carinhoso.",
    challenge:
      "A loja operava sobre uma base legada com acúmulo de scripts assíncronos, inconsistências de layout em dispositivos móveis e lentidão no cálculo de frete, o que elevava a fricção do checkout e a taxa de abandono durante campanhas de pico.",
    solution:
      "Realizei um diagnóstico técnico aprofundado, refatorando trechos legados de scripts, introduzindo componentes reativos com React e reescrevendo a estilização para uma arquitetura SCSS otimizada e mobile-first. Implementei monitoramento em tempo real de erros de cliente e criei componentes compatíveis com a esteira de transição para VTEX IO.",
    results: [
      "Eliminação de mais de 45 bugs críticos de interface e inconsistências no funil de compras.",
      "Aumento mensurável na taxa de conversão mobile após refatoração da usabilidade do checkout.",
      "Estabilidade de 100% mantida durante grandes picos promocionais como Black Friday e Dia das Crianças.",
    ],
  },
  {
    id: 3,
    title: "Modernização e Migração Institucional em Larga Escala",
    company: "Grupo Malwee",
    role: "Front-End Developer (Migração Legacy → IO)",
    period: "2022 — 2023",
    category: "VTEX IO & Design System",
    iconType: "vtex",
    techs: [
      "VTEX IO",
      "React",
      "TypeScript",
      "SCSS",
      "JSON Schema",
      "Site Editor VTEX",
      "SEO Migration",
    ],
    summary:
      "Reconstrução e migração da presença institucional da Malwee para a arquitetura VTEX IO, conferindo autonomia editorial total ao time de marketing sem comprometer a performance.",
    challenge:
      "Desacoplar dezenas de páginas institucionais ricas em conteúdo e design da estrutura rígida da VTEX Legacy, garantindo fidelidade visual pixel-perfect, preservação estrita do tráfego orgânico e entrega de um painel de edição acessível a equipes não técnicas.",
    solution:
      "Desenvolvi blocos e componentes React modulares integrados ao Site Editor da VTEX através de JSON Schemas customizados. Mapeei a integridade das URLs para garantir preservação do SEO, apliquei carregamento inteligente de assets e otimizei a entrega de fontes e imagens com WebP.",
    results: [
      "Autonomia de 100% para a equipe de marketing criar e atualizar páginas sem necessidade de novos deploys.",
      "Redução de 45% no tempo médio de carregamento em comparação com os antigos templates legados.",
      "Zero perdas de indexação nos mecanismos de busca durante e após a virada da plataforma.",
    ],
  },
  {
    id: 4,
    title: "Reengenharia da Página de Produto (PDP) de Alta Performance",
    company: "Bringeri",
    role: "Front-End Developer (Modernização de PDP)",
    period: "2022",
    category: "VTEX IO & Varejo E-commerce",
    iconType: "vtex",
    techs: [
      "VTEX IO",
      "React",
      "TypeScript",
      "SCSS",
      "GraphQL",
      "APIs REST VTEX",
      "Core Web Vitals",
    ],
    summary:
      "Reconstrução completa da página de produto (PDP) para o ecossistema VTEX IO, reduzindo o tempo de carregamento e aperfeiçoando a experiência de compra em eletrodomésticos e móveis.",
    challenge:
      "A PDP anterior apresentava lentidão crítica no carregamento de tabelas de frete volumosas, travamentos na seleção de atributos de SKU e métricas de Core Web Vitals desfavoráveis, comprometendo a conversão do maior canal de receita da empresa.",
    solution:
      "Reconstruí a página utilizando os aplicativos nativos do Store Framework da VTEX IO combinados a componentes React tipados em TypeScript. Otimizei as chamadas assíncronas de preço e estoque, implementei skeleton loaders elegantes e garanti carregamento prioritário das imagens principais.",
    results: [
      "Queda de mais de 50% no Largest Contentful Paint (LCP) da página de produto.",
      "Fluidez imediata na alternância de modelos, voltagens e cores de produtos sem qualquer recarregamento de página.",
      "Melhoria substancial na experiência do usuário em redes móveis 3G/4G.",
    ],
  },
  {
    id: 5,
    title: "E-commerce Enterprise para a Rede Jumbo",
    company: "Cencosud Argentina",
    role: "Front-End Developer Internacional",
    period: "2022 — 2023",
    category: "VTEX IO & Global Scale",
    iconType: "vtex",
    techs: [
      "VTEX IO",
      "React",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "SCSS",
      "Scrum Distribuído",
    ],
    summary:
      "Atuação integrada na equipe de engenharia da Cencosud na Argentina, desenvolvendo soluções e mantendo a estabilidade da plataforma digital da rede de supermercados Jumbo.",
    challenge:
      "Uma das maiores operações de supermercados da Argentina, caracterizada por carrinhos com centenas de itens simultâneos, regras complexas de precificação regional e sprints aceleradas em um time multicultural e distribuído.",
    solution:
      "Colaborei no desenvolvimento de novas funcionalidades front-end com React e TypeScript, construindo consultas GraphQL eficientes para evitar over-fetching. Atuei na identificação e mitigação de bugs de alta prioridade na navegação de categorias e no agendamento de entregas, com comunicação fluida em espanhol e inglês.",
    results: [
      "Cumprimento com excelência de 100% dos objetivos das sprints e lançamentos de catálogo.",
      "Otimização do payload de requisições GraphQL, aliviando o consumo de rede no cliente.",
      "Reconhecimento pela velocidade de adaptação ao ecossistema técnico e aos padrões internacionais do time.",
    ],
  },
  {
    id: 6,
    title: "Landing Page Dinâmica & Motor de Conversão",
    company: "ZenBox",
    role: "Front-End Engineer & UI Specialist (Freelance)",
    period: "2022",
    category: "React & Alta Conversão",
    iconType: "react",
    techs: [
      "React",
      "JavaScript (ES6+)",
      "SCSS Modular",
      "UI/UX Design",
      "Validação em Tempo Real",
      "Performance Web",
    ],
    summary:
      "Concepção e desenvolvimento de uma landing page focada em máxima conversão, com microinterações refinadas e formulário de captura inteligente de dados.",
    challenge:
      "Desenvolver do zero uma interface visualmente impactante, leve e convincente para um lançamento de produto digital, capaz de converter visitantes em leads qualificados com o mínimo de atrito.",
    solution:
      "Construí a interface utilizando React com modularidade estrita de componentes, transições em CSS moderno, validações instantâneas de campos no front-end para evitar perda de dados e carregamento ultra-rápido de assets.",
    results: [
      "Taxa de conversão de visitantes para cadastros acima da média do segmento de SaaS.",
      "Score 98 no Google PageSpeed Insights com carregamento total em apenas 1.1s.",
      "Entrega ágil, com código limpo e de facílima expansão para novas campanhas.",
    ],
  },
  {
    id: 7,
    title: "Plataforma de Comércio Digital para a Rede Easy",
    company: "Cencosud Argentina",
    role: "Front-End Developer Internacional",
    period: "2022 — 2023",
    category: "VTEX IO & Home Center",
    iconType: "vtex",
    techs: [
      "VTEX IO",
      "React",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "SCSS",
      "CI/CD Git",
    ],
    summary:
      "Mais de 1 ano de dedicação técnica contínua na evolução da maior rede de materiais de construção e decoração da Argentina, construída sobre a infraestrutura da VTEX IO.",
    challenge:
      "Sustentar e expandir uma aplicação de alta complexidade técnica, com catálogos segmentados por dezenas de províncias argentinas, modalidades de entrega customizadas e regras de negócio específicas para o setor de construção civil.",
    solution:
      "Desenvolvi e refatorei componentes front-end em React, padronizando tipagens sólidas com TypeScript para aumentar a segurança do código. Aprimorei os filtros facetados de busca e o fluxo de checkout, além de colaborar ativamente em code reviews colaborativos com a equipe internacional.",
    results: [
      "Estabilidade operacional impecável durante eventos comerciais de tráfego extremo (CyberMonday e Hot Sale).",
      "Redução sensível de erros em tempo de execução graças à migração progressiva de componentes para TypeScript.",
      "Fortalecimento da consistência visual e da experiência de navegação do usuário.",
    ],
  },
  {
    id: 8,
    title: "App de Automação para Clonagem de Promoções",
    company: "Ecossistema VTEX",
    role: "Front-End Engineer (VTEX App)",
    period: "2021 — 2022",
    category: "VTEX IO & Automação",
    iconType: "vtex",
    techs: [
      "VTEX IO",
      "React",
      "TypeScript",
      "SCSS",
      "APIs REST VTEX",
      "Automação Operacional",
    ],
    summary:
      "Aplicativo customizado integrado nativamente ao Admin da VTEX IO, permitindo a sincronização e clonagem em lote de campanhas e promoções entre múltiplas lojas.",
    challenge:
      "Grandes redes de varejo com múltiplas lojas e franquias na VTEX enfrentavam um processo moroso e vulnerável a erros humanos: cadastrar individualmente dezenas de promoções complexas em cada conta da rede.",
    solution:
      "Desenvolvi uma aplicação front-end com interface em tabela interativa, consumindo as APIs REST de promoções da VTEX. O lojista seleciona as regras comerciais da loja de origem e, com um único clique, a aplicação valida e replica as regras para todas as contas de destino.",
    results: [
      "Economia de mais de 80% do tempo operacional das equipes de e-commerce e marketing.",
      "Eliminação de inconsistências de preços e condições comerciais entre lojas da mesma marca.",
      "Demonstração prática de domínio avançado sobre a arquitetura interna e APIs da plataforma VTEX.",
    ],
  },
  {
    id: 9,
    title: "Formulário Dinâmico Orientado por Notion API",
    company: "Sobtic / Independente",
    role: "Full-Stack Web Developer (Independente)",
    period: "2021",
    category: "React & Notion API",
    iconType: "notion",
    techs: [
      "React",
      "JavaScript (ES6+)",
      "Node.js",
      "Express",
      "Notion API",
      "CSS3 Flex/Grid",
    ],
    summary:
      "Engenharia de uma solução dinâmica que transforma bases de dados relacionais do Notion em formulários web públicos e interativos em tempo real, sem necessidade de deploys adicionais.",
    challenge:
      "Criar uma solução escalável onde equipes de negócios pudessem criar novos formulários, adicionar tipos de perguntas variados (textos, seletores, tags) e receber respostas automaticamente, sem depender da intervenção de desenvolvedores para alterar o código da interface.",
    solution:
      "Construí um client em React conectado a um middleware em Node.js/Express que consome a Notion API. O sistema lê o schema das colunas do banco de dados do Notion e renderiza dinamicamente os componentes de formulário correspondentes, validando os inputs e gravando as respostas de volta no Notion instantaneamente.",
    results: [
      "Autonomia absoluta para equipes de operações criarem formulários dinâmicos sem programar uma única linha.",
      "Zero custo de infraestrutura ou necessidade de pipelines de deploy para novas perguntas ou enquetes.",
      "Projeto emblemático que consolidou habilidades de integração de APIs de terceiros, dinamismo de interface e visão de produto.",
    ],
  },
];
