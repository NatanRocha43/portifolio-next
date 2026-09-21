import React from "react";

export type ProjectIconType = "drupal" | "vtex" | "react" | "notion";

export type Project = {
  id: number;
  title: string;
  company: string;
  role: string;
  period: string;
  category: string;
  iconType: ProjectIconType;
  techs: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
};

export type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
};

export type ContactFormData = {
  nome: string;
  email: string;
  mensagem: string;
};
