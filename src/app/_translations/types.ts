import { Language } from "../_types";

export interface TranslationDictionary {
  header: {
    nav: {
      about: string;
      projects: string;
      services: string;
      contact: string;
    };
    cta: string;
    roleTag: string;
    aria: {
      openMenu: string;
      closeMenu: string;
      mainNav: string;
      skipLink: string;
      logoLabel: string;
      switchLanguage: string;
    };
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    ctaContact: string;
    ctaProjects: string;
    ctaCv: string;
    cvFile: string;
    cvDownloadName: string;
    stats: {
      stat1: { value: string; label: string };
      stat2: { value: string; label: string };
      stat3: { value: string; label: string };
    };
  };
  brands: {
    title: string;
    subtitle: string;
    filterLabel: string;
    tabs: {
      all: string;
      telecom: string;
      fashion: string;
      retail: string;
      saas: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    skillsTitle: string;
    highlightsTitle: string;
    highlights: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  projects: {
    title: string;
    subtitle: string;
    viewDetails: string;
    projectOf: string; // "Projeto {current} de {total}"
    prevLabel: string;
    nextLabel: string;
    items: Array<{
      id: number;
      title: string;
      company: string;
      role: string;
      period: string;
      category: string;
      summary: string;
      challenge: string;
      solution: string;
      results: string[];
    }>;
  };
  modal: {
    close: string;
    challengeTitle: string;
    solutionTitle: string;
    resultsTitle: string;
    techsTitle: string;
    companyLabel: string;
    periodLabel: string;
    roleLabel: string;
  };
  opportunities: {
    title: string;
    roles: string[];
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    labels: {
      name: string;
      email: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    errors: {
      nameRequired: string;
      nameMin: string;
      emailInvalid: string;
      messageEmpty: string;
      messageMin: string;
      genericError: string;
    };
    submitting: string;
    submit: string;
    successToast: string;
    errorToast: string;
  };
  footer: {
    roleDescription: string;
    status: string;
    navigation: string;
    social: string;
    backToTop: string;
    rights: string;
  };
}

export type { Language };
