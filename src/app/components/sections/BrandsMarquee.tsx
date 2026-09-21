"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext";

const BRANDS = [
  "TIM",
  "MALWEE",
  "CARINHOSO",
  "CENCOSUD",
  "JUMBO",
  "EASY",
  "BRINGERI",
  "ZENBOX",
  "IFSP",
];

const ECOSYSTEMS = [
  "VTEX IO",
  "DRUPAL DX8",
  "VTEX LEGACY",
  "STORE FRAMEWORK",
  "HEADLESS COMMERCE",
];

const TECHNOLOGIES = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "STENCIL.JS",
  "TAILWIND CSS",
  "GRAPHQL",
  "NODE.JS",
  "SCSS MODULAR",
];

type CategoryKey = "all" | "brands" | "ecosystems" | "technologies";

interface Category {
  key: CategoryKey;
  label: string;
  items: string[];
}

export default function BrandsMarquee() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<CategoryKey>("all");

  const categories: Category[] = useMemo(() => [
    {
      key: "all",
      label: language === "en" ? "All" : "Todos",
      items: [...BRANDS, ...ECOSYSTEMS, ...TECHNOLOGIES],
    },
    {
      key: "brands",
      label: language === "en" ? "Brands" : "Marcas",
      items: BRANDS,
    },
    {
      key: "ecosystems",
      label: language === "en" ? "Ecosystems" : language === "es" ? "Ecosistemas" : "Ecossistemas",
      items: ECOSYSTEMS,
    },
    {
      key: "technologies",
      label: language === "en" ? "Technologies" : language === "es" ? "Tecnologías" : "Tecnologias",
      items: TECHNOLOGIES,
    },
  ], [language]);

  const currentCategory = useMemo(() => {
    return categories.find((c) => c.key === activeTab) || categories[0];
  }, [activeTab, categories]);

  // Garante que o total de repetições seja sempre um número par para transição perfeita de -50%
  const marqueeItems = useMemo(() => {
    const list = currentCategory.items;
    const minItems = 24;
    const multiplier = Math.ceil(minItems / list.length);
    const evenMultiplier = multiplier % 2 === 0 ? multiplier : multiplier + 1;
    return Array(evenMultiplier).fill(list).flat();
  }, [currentCategory]);

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = currentIndex;

    if (e.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % categories.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + categories.length) % categories.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = categories.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextCategory = categories[nextIndex];
    setActiveTab(nextCategory.key);
    const nextTabButton = document.getElementById(`tab-${nextCategory.key}`);
    nextTabButton?.focus();
  };

  const sectionTitle =
    language === "en"
      ? "Brands, Ecosystems & Technologies"
      : language === "es"
      ? "Marcas, Ecosistemas & Tecnologías"
      : "Marcas, Ecossistemas & Tecnologias";

  return (
    <section
      aria-label={sectionTitle}
      className="w-full border-y border-[#E5E4E1] py-6 sm:py-8 bg-[#FAFAF9] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 mb-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Section Heading */}
        <div>
          <h2 className="font-display font-bold text-lg sm:text-xl text-[#1A1A1A] tracking-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Filter Tabs com suporte a WAI-ARIA e navegação por setas */}
        <div
          role="tablist"
          aria-label={sectionTitle}
          className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none"
        >
          {categories.map((cat, idx) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                id={`tab-${cat.key}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls="tabpanel-marquee"
                tabIndex={isActive ? 0 : -1}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onClick={() => setActiveTab(cat.key)}
                className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none ${
                  isActive
                    ? "bg-[#1A1A1A] text-white shadow-xs"
                    : "bg-white text-[#5C5C5C] border border-[#E5E4E1] hover:text-[#1A1A1A] hover:border-[#7C3AED]/50"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#F0EFED] text-[#374151]"
                  }`}
                >
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Conteúdo acessível para leitores de tela */}
      <ul className="sr-only" aria-label={`Lista de ${currentCategory.label}`}>
        {currentCategory.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Marquee Track Visual (oculto de leitores de tela para evitar repetição massiva de elementos decorativos) */}
      <div
        id="tabpanel-marquee"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        aria-hidden="true"
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div
          key={activeTab}
          className="animate-marquee flex items-center gap-8 sm:gap-14"
        >
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`${activeTab}-${idx}`}>
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] opacity-40 hover:opacity-100 hover:text-[#7C3AED] transition-all duration-200 cursor-default whitespace-nowrap">
                {item}
              </span>
              <span className="text-[#D6D5D2] text-xs sm:text-sm select-none">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
