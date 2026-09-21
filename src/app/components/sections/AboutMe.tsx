"use client";

import { Zap, ShieldCheck, Globe, GraduationCap } from "lucide-react";
import { SectionTitle } from "../UI/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

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

const HIGHLIGHT_ICONS = [
  <Zap key="zap" className="w-6 h-6 text-[#7C3AED]" aria-hidden="true" />,
  <ShieldCheck key="shield" className="w-6 h-6 text-[#7C3AED]" aria-hidden="true" />,
  <Globe key="globe" className="w-6 h-6 text-[#7C3AED]" aria-hidden="true" />,
  <GraduationCap key="grad" className="w-6 h-6 text-[#7C3AED]" aria-hidden="true" />,
];

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1200px] mx-auto w-full border-t border-[#E5E4E1]"
      aria-label={t.about.title}
    >
      <SectionTitle
        title={t.about.title}
        description={t.about.subtitle}
      />

      <div className="flex flex-col gap-12">
        {/* Story Narrative */}
        <div className="max-w-3xl space-y-6 text-base sm:text-lg text-[#5C5C5C] leading-relaxed font-normal">
          {t.about.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Skills Tag Cloud */}
        <div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight mb-4">
            {t.about.skillsTitle}
          </h3>
          <div role="list" aria-label={t.about.skillsTitle} className="flex flex-wrap gap-2 sm:gap-2.5">
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
        <div role="list" aria-label={t.about.highlightsTitle} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {t.about.highlights.map((item, idx) => (
            <div
              key={item.title}
              role="listitem"
              className="p-6 rounded-2xl bg-white border border-[#E5E4E1] hover:border-[#7C3AED] hover:-translate-y-1 transition-all duration-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F5F4F2] flex items-center justify-center mb-4 text-[#7C3AED]" aria-hidden="true">
                  {HIGHLIGHT_ICONS[idx % HIGHLIGHT_ICONS.length]}
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
