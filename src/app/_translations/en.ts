import { TranslationDictionary } from "./types";

export const en: TranslationDictionary = {
  header: {
    nav: {
      about: "About",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
    },
    cta: "Get in Touch →",
    roleTag: "• Front-End",
    aria: {
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      mainNav: "Main navigation",
      skipLink: "Skip to main content",
      logoLabel: "Natan Rocha - Front-End Developer, go to home",
      switchLanguage: "Switch language",
    },
  },
  hero: {
    titlePrefix: "Front-End Development & ",
    titleHighlight: "high-performance interfaces",
    titleSuffix: " that convert.",
    subtitle:
      "Transforming complex business requirements into fast, accessible, and scalable web experiences. Front-end specialist proficient in React, Next.js, VTEX IO, and Drupal DX8, combining architectural rigor with flawless user experience.",
    ctaContact: "Get in Touch",
    ctaProjects: "Explore Track Record & Projects",
    ctaCv: "Download CV",
    cvFile: "./natan-rocha-front-end.pdf",
    cvDownloadName: "Resume-Natan-Rocha-Front-End.pdf",
    stats: {
      stat1: { value: "+5 Years", label: "Front-End Experience" },
      stat2: { value: "9+", label: "Enterprise Projects" },
      stat3: { value: "100%", label: "Focus on Performance & A11y" },
    },
  },
  brands: {
    title: "Client Track Record & Brands",
    subtitle:
      "Telecom leaders, premium fashion retail, multinational supermarket chains, and high-impact digital products.",
    filterLabel: "Filter by:",
    tabs: {
      all: "All Projects",
      telecom: "Telecom & Corporate",
      fashion: "Fashion & Retail",
      retail: "Supermarkets & B2B",
      saas: "Innovation & SaaS",
    },
  },
  about: {
    title: "About Me",
    subtitle:
      "Front-end developer dedicated to turning complex challenges into lightweight, intuitive, and sustainable digital interfaces.",
    paragraphs: [
      "Mid-level Front-End Developer with over 5 years of professional experience crafting dynamic, scalable web applications. Specialized in optimizing performance and user experience (UX) for high-traffic enterprise platforms. Core technical expertise includes React, Next.js, TypeScript, and Stencil.js.",
      "My primary focus lies in developing Enterprise E-commerce solutions and Corporate Portals. I hold solid hands-on experience in the VTEX IO ecosystem and Drupal-based enterprise architectures, seamlessly integrating modern front-end layers into complex back-ends.",
      "Beyond the React ecosystem, I build full-stack solutions using Node.js and leverage modular preprocessors such as Sass. My key differentiator is active, cross-functional collaboration with UX/UI designers, back-end engineers, and product managers, ensuring the delivery of best practices and tangible business outcomes.",
      "Always seeking ambitious technical challenges. I am currently deepening my web architecture expertise in a Postgraduate Specialization in Web Development (IFSP). Let's connect and discuss how I can elevate your digital product's user experience!",
    ],
    skillsTitle: "Technical Skills & Tooling",
    highlightsTitle: "Core Strengths & Highlights",
    highlights: [
      {
        number: "01",
        title: "Scalable Architecture",
        description:
          "Reusable web components and modular system architecture with TypeScript and Stencil.js.",
      },
      {
        number: "02",
        title: "Obsession with Performance",
        description:
          "Continuous optimization of Core Web Vitals (LCP, CLS, INP) targeting real-world user speed.",
      },
      {
        number: "03",
        title: "Native Accessibility (a11y)",
        description:
          "Strict compliance with WCAG 2.1 AA guidelines to create truly inclusive digital experiences.",
      },
      {
        number: "04",
        title: "Continuous Learning",
        description:
          "Postgraduate specialization in Web Development at IFSP, reinforcing software engineering fundamentals.",
      },
    ],
  },
  services: {
    title: "Services & Capabilities",
    subtitle:
      "Software engineering with a relentless focus on robust delivery, clean code, and measurable business impact.",
    items: [
      {
        title: "Interface Engineering & Accessibility",
        description:
          "Building responsive, high-fidelity interfaces strictly aligned with WCAG 2.1 AA accessibility standards. Laser focus on instant load times, pixel-perfect accuracy, and seamless cross-device performance.",
        tags: ["Core Web Vitals", "WCAG Accessibility", "Mobile-First", "Design Systems"],
      },
      {
        title: "Technical SEO & Performance Optimization",
        description:
          "Semantic data structuring, rich OpenGraph metadata, elimination of Cumulative Layout Shift (CLS), and rendering pipeline optimization to maximize organic search visibility on Google.",
        tags: ["Semantic SEO", "OpenGraph", "Lighthouse 95+", "Performance Audit"],
      },
      {
        title: "Modular Architecture & Clean Code",
        description:
          "Rigorous adherence to SOLID principles, clear separation of concerns, and atomic componentization. Maintainable, clean code ready to scale without accumulating technical debt.",
        tags: ["Clean Code", "Design Patterns", "Strict TypeScript", "Componentization"],
      },
      {
        title: "E-commerce & API Integrations",
        description:
          "Development and maintenance of high-volume digital storefronts on VTEX IO and VTEX Legacy. Resilient back-end connections via GraphQL and REST APIs, optimizing checkout velocity and conversions.",
        tags: ["VTEX IO", "GraphQL", "REST APIs", "Optimized Checkout"],
      },
      {
        title: "Design Systems & Rapid Prototyping",
        description:
          "Authoring and documenting consistent UI component libraries, transforming Figma designs into fully functional React and Stencil.js components with scalable tokens.",
        tags: ["Figma to Code", "Design Tokens", "Stencil.js", "Storybook"],
      },
    ],
  },
  projects: {
    title: "Case Studies & Track Record",
    subtitle:
      "A curated selection of corporate initiatives, enterprise e-commerce platforms, and proprietary tools built with technical excellence.",
    viewDetails: "View Case Details",
    projectOf: "Project {current} of {total}",
    prevLabel: "Previous project",
    nextLabel: "Next project",
    items: [
      {
        id: 1,
        title: "Digital Portal & Web Components Ecosystem",
        company: "TIM Brasil",
        role: "Front-End Specialist & Web Components Lead",
        period: "2023 — Present",
        category: "Drupal DX8 & Web Components",
        summary:
          "Led the front-end architecture and modernization of TIM Brasil's corporate web portal, designing modular Web Components with Stencil.js and enforcing strict WCAG accessibility compliance.",
        challenge:
          "As one of Latin America's largest telecom ecosystems, TIM required dozens of corporate journeys and products to operate with high availability, sub-second response times, and uncompromising accessibility standards for users with disabilities under strict regulatory mandates.",
        solution:
          "Architected and shipped an encapsulated suite of reusable Web Components using Stencil.js, orchestrated seamlessly within Drupal CMS (DX8). Built an automated workflow rooted in semantic HTML, SCSS design tokens, regular screen reader audits (NVDA/TalkBack), and critical rendering path optimization.",
        results: [
          "Over 35% reduction in time-to-market for publishing new campaign landing pages.",
          "Validated AA compliance across WCAG guidelines, ensuring true digital inclusion.",
          "Consistent Core Web Vitals score gains (LCP and CLS), directly boosting organic Google search rank.",
        ],
      },
      {
        id: 2,
        title: "Critical Maintenance & Conversion Rate Optimization",
        company: "Carinhoso (Malwee Group)",
        role: "Front-End Developer (VTEX Legacy & IO)",
        period: "2022 — 2023",
        category: "VTEX IO & Kids Fashion",
        summary:
          "Ongoing maintenance engineering, elimination of critical technical debt, and implementation of high-converting checkout features for Carinhoso's e-commerce store.",
        challenge:
          "The online store operated on legacy architecture plagued with asynchronous script bloat, mobile layout bugs, and slow shipping calculation, driving up checkout friction and cart abandonment during peak flash sales.",
        solution:
          "Conducted an in-depth technical audit, refactored legacy scripts, integrated reactive React components, and redesigned styling into a mobile-first, modular SCSS architecture. Deployed real-time client error monitoring and built components ready for VTEX IO migration.",
        results: [
          "Resolved over 45 critical UI defects and purchasing funnel inconsistencies.",
          "Measurable increase in mobile conversion rates following the checkout UX refactor.",
          "Maintained 100% platform uptime during massive traffic spikes on Black Friday and Children's Day.",
        ],
      },
      {
        id: 3,
        title: "Large-Scale Institutional Modernization & Migration",
        company: "Malwee Group",
        role: "Front-End Developer (Legacy → IO Migration)",
        period: "2022 — 2023",
        category: "VTEX IO & Design System",
        summary:
          "Rebuilt and migrated Malwee's institutional web presence to the VTEX IO architecture, granting marketing teams total content autonomy without compromising page performance.",
        challenge:
          "Decoupling dozens of content-heavy, design-rich institutional pages from rigid VTEX Legacy templates while preserving pixel-perfect visual fidelity, protecting search equity, and providing an intuitive editing experience for non-technical teams.",
        solution:
          "Developed custom React blocks integrated into VTEX Site Editor via structured JSON Schemas. Mapped 100% of URLs to safeguard SEO rankings, implemented lazy loading strategies, and optimized font and image delivery with modern WebP formatting.",
        results: [
          "100% editorial autonomy for marketing teams to launch pages without code deployments.",
          "45% average reduction in page load times compared to legacy templates.",
          "Zero drop in search engine indexing throughout and following DNS migration.",
        ],
      },
      {
        id: 4,
        title: "High-Performance Product Detail Page (PDP) Re-engineering",
        company: "Bringeri",
        role: "Front-End Developer (PDP Modernization)",
        period: "2022",
        category: "VTEX IO & Retail E-commerce",
        summary:
          "Full-scale redesign and engineering of the PDP on the VTEX IO framework, drastically cutting load latency and elevating the shopping experience for appliances and furniture.",
        challenge:
          "The former PDP suffered from critical rendering delays when calculating bulky shipping matrices, UI freezes during SKU selection, and poor Core Web Vitals, suppressing conversion on the brand's primary revenue channel.",
        solution:
          "Reconstructed the PDP combining VTEX IO Store Framework apps with custom typed React components. Optimized asynchronous pricing and inventory calls, introduced polished skeleton placeholders, and prioritized primary image loading.",
        results: [
          "Over 50% decrease in Largest Contentful Paint (LCP) on key product detail pages.",
          "Instantaneous SKU switching (models, voltages, colors) without page reloads.",
          "Substantial boost in mobile UX on slower 3G/4G network conditions.",
        ],
      },
      {
        id: 5,
        title: "Enterprise E-commerce Platform for Jumbo Supermarkets",
        company: "Cencosud Argentina",
        role: "International Front-End Developer",
        period: "2022 — 2023",
        category: "VTEX IO & Global Scale",
        summary:
          "Integrated collaboration within Cencosud's engineering team in Argentina, developing modern digital storefront solutions and ensuring uptime for Jumbo Supermarkets.",
        challenge:
          "One of Argentina's largest retail grocery operations, handling large cart volumes (hundreds of items per cart), intricate regional pricing rules, and fast-paced agile delivery in a multicultural, distributed team.",
        solution:
          "Contributed to front-end feature development using React and TypeScript, crafting performant GraphQL queries to prevent over-fetching. Diagnosed and resolved high-priority UX defects in category browsing and delivery scheduling, collaborating fluently in Spanish and English.",
        results: [
          "Delivered 100% of sprint goals and promotional catalog launches on schedule.",
          "Minimized GraphQL query payloads, significantly reducing client-side network overhead.",
          "Earned recognition for rapid onboarding and adaptation to international team standards.",
        ],
      },
      {
        id: 6,
        title: "Dynamic High-Conversion Landing Page",
        company: "ZenBox",
        role: "Front-End Developer & UI Specialist (Freelance)",
        period: "2022",
        category: "React & High Conversion",
        summary:
          "Conceptualization and end-to-end development of a conversion-optimized landing page, featuring polished micro-interactions and smart data capture forms.",
        challenge:
          "Build from scratch a visually striking, featherweight, and persuasive interface for a new SaaS product launch, converting visitors into qualified leads with zero friction.",
        solution:
          "Developed the application in React with strict component modularity, CSS micro-animations, real-time client-side input validation, and ultra-fast asset delivery.",
        results: [
          "Visitor-to-lead conversion rates significantly higher than SaaS industry benchmarks.",
          "Score 98 on Google PageSpeed Insights with a 1.1s total page load time.",
          "Rapid delivery with clean, highly maintainable code easily adaptable for subsequent campaigns.",
        ],
      },
      {
        id: 7,
        title: "Digital Commerce Platform for Easy Home Center",
        company: "Cencosud Argentina",
        role: "International Front-End Developer",
        period: "2022 — 2023",
        category: "VTEX IO & Home Center",
        summary:
          "Over 1 year of continuous technical dedication advancing the flagship digital store of Argentina's leading home improvement chain on VTEX IO.",
        challenge:
          "Maintaining and scaling a high-complexity storefront with catalogs segmented across dozens of Argentine provinces, localized delivery schemes, and complex business logic tailored to home construction materials.",
        solution:
          "Developed and refactored React components, enforcing strict TypeScript typing to enhance runtime stability. Enhanced faceted search filters and the checkout journey, actively participating in international code reviews.",
        results: [
          "Uninterrupted platform reliability during high-traffic commercial milestones (CyberMonday and Hot Sale).",
          "Noticable decline in client-side runtime errors following systematic TypeScript migration.",
          "Strengthened design consistency and intuitive user journeys across categories.",
        ],
      },
      {
        id: 8,
        title: "Automation App for Promotion Cloning",
        company: "VTEX Ecosystem",
        role: "Front-End Developer (VTEX App)",
        period: "2021 — 2022",
        category: "VTEX IO & Automation",
        summary:
          "Custom administrative extension integrated natively into VTEX IO Admin, enabling batch synchronization and cloning of promotions across multi-store franchise networks.",
        challenge:
          "Retail groups managing dozens of stores on VTEX faced a tedious, error-prone operational workflow: manually configuring intricate promo rules individually in every separate account.",
        solution:
          "Engineered a dedicated front-end application with an interactive data table consuming VTEX Promotion REST APIs. Retailers select rules from a source store and replicate them across target storefronts with a single click.",
        results: [
          "Over 80% reduction in operational time for e-commerce and promotional teams.",
          "Eliminated pricing discrepancies and promotional errors across chain branches.",
          "Demonstrated advanced architectural mastery over VTEX internal APIs and admin extensions.",
        ],
      },
      {
        id: 9,
        title: "Dynamic Form Generator Driven by Notion API",
        company: "Sobtic / Independent",
        role: "Full-Stack Web Developer (Independent)",
        period: "2021",
        category: "React & Notion API",
        summary:
          "Engineered an automated solution transforming relational Notion databases into live, interactive public web forms in real time without requiring code deployments.",
        challenge:
          "Provide non-technical business teams with a frictionless way to deploy web forms, introduce diverse question types (text, selects, tags), and collect responses automatically without developer assistance.",
        solution:
          "Engineered a React client linked to a lightweight Node.js/Express service interacting with the Notion API. The system inspects the database schema on the fly, renders matching inputs dynamically, and persists submissions straight to Notion.",
        results: [
          "Complete autonomy for operations teams to deploy dynamic surveys with zero engineering overhead.",
          "Zero serverless hosting costs or continuous deployment friction for new surveys.",
          "High-impact personal project demonstrating third-party API integration and product mindset.",
        ],
      },
    ],
  },
  modal: {
    close: "Close project details modal",
    challengeTitle: "Challenge Faced",
    solutionTitle: "Architecture & Solution",
    resultsTitle: "Results & Technical Impact",
    techsTitle: "Technologies & Tooling",
    companyLabel: "Company",
    periodLabel: "Period",
    roleLabel: "Role / Engagement",
  },
  opportunities: {
    title: "Let's build something remarkable together.",
    roles: [
      "Front-End Developer (Mid / Senior)",
      "VTEX IO & E-commerce Specialist",
      "Drupal DX8 & Stencil.js Specialist",
      "React & Next.js Development",
      "Freelance Projects & Consulting",
    ],
    cta: "Start a Conversation Now",
  },
  contact: {
    title: "Let's Connect",
    subtitle:
      "Have a challenging project, an open role, or want to discuss modern front-end architecture? Send a message.",
    labels: {
      name: "Full Name",
      email: "Your Best Email",
      message: "How can I help you?",
    },
    placeholders: {
      name: "e.g. Jane Doe",
      email: "e.g. jane@company.com",
      message: "Tell me about your project, timeline, and goals...",
    },
    errors: {
      nameRequired: "Name is required",
      nameMin: "Name must be at least 3 characters",
      emailInvalid: "Please enter a valid email address",
      messageEmpty: "Message cannot be empty",
      messageMin: "Message must be at least 10 characters",
      genericError: "An error occurred while sending. Please try again.",
    },
    submitting: "Sending message...",
    submit: "Send Message",
    successToast: "Message sent successfully! I'll get back to you shortly.",
    errorToast: "Failed to send message. Please try again.",
  },
  footer: {
    roleDescription:
      "Front-End Developer specializing in React, Next.js, VTEX IO, and web accessibility.",
    status: "Available for new projects",
    navigation: "Navigation",
    social: "Connect",
    backToTop: "Back to top",
    rights: "All rights reserved.",
  },
};
