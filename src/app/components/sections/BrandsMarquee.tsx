"use client";

import React, { useState, useMemo } from "react";

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

const CATEGORIES: Category[] = [
  {
    key: "all",
    label: "Todos",
    items: [...BRANDS, ...ECOSYSTEMS, ...TECHNOLOGIES],
  },
  {
    key: "brands",
    label: "Marcas",
    items: BRANDS,
  },
  {
    key: "ecosystems",
    label: "Ecossistemas",
    items: ECOSYSTEMS,
  },
  {
    key: "technologies",
    label: "Tecnologias",
    items: TECHNOLOGIES,
  },
];

export default function BrandsMarquee() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("all");

  const currentCategory = useMemo(() => {
    return CATEGORIES.find((c) => c.key === activeTab) || CATEGORIES[0];
  }, [activeTab]);

  // Garante que o total de repetições seja sempre um número par para transição perfeita de -50%
  const marqueeItems = useMemo(() => {
    const current = currentCategory.items;
    const baseRepeat = Math.ceil(24 / (current.length || 1));
    const repeatCount = baseRepeat % 2 === 0 ? Math.max(2, baseRepeat) : baseRepeat + 1;
    return Array.from({ length: repeatCount }).flatMap(() => current);
  }, [currentCategory]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % CATEGORIES.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + CATEGORIES.length) % CATEGORIES.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = CATEGORIES.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextCategory = CATEGORIES[nextIndex];
    setActiveTab(nextCategory.key);
    const nextTabButton = document.getElementById(`tab-${nextCategory.key}`);
    nextTabButton?.focus();
  };

  return (
    <section
      aria-label="Marcas, Ecossistemas e Tecnologias"
      className="w-full border-y border-[#E5E4E1] py-6 sm:py-8 bg-[#FAFAF9] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Section Heading */}
        <div>
          <h2 className="font-display font-bold text-lg sm:text-xl text-[#1A1A1A] tracking-tight">
            Marcas, Ecossistemas & Tecnologias
          </h2>
        </div>

        {/* Filter Tabs com suporte a WAI-ARIA e navegação por setas */}
        <div
          role="tablist"
          aria-label="Filtro de Marcas, Ecossistemas e Tecnologias"
          className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none"
        >
          {CATEGORIES.map((cat, idx) => {
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
