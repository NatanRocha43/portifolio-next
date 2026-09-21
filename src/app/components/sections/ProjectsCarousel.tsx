"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { projects } from "../../_data/projects";
import { Project } from "../../_types";
import dynamic from "next/dynamic";
import { ProjectIcon } from "../UI/ProjectIcon";
import { SectionTitle } from "../UI/SectionTitle";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Modal = dynamic(() => import("../UI/Modal").then((mod) => mod.Modal), {
  ssr: false,
});

export default function ProjectsCarousel() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const handleOpenModal = (project: Project) => {
    lastFocusedElementRef.current = document.activeElement as HTMLElement;
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Retorna foco para o card que abriu o modal
    setTimeout(() => {
      lastFocusedElementRef.current?.focus();
    }, 50);
  };

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const isAtStart = scrollLeft <= 15;
    const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 25;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);

    if (isAtEnd) {
      setCurrentIndex(projects.length - 1);
      return;
    }

    if (isAtStart) {
      setCurrentIndex(0);
      return;
    }

    // Identifica o card cujo início está mais próximo da área visível do container
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-carousel-card]"));
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardStart = card.offsetLeft;
      const distance = Math.abs(cardStart - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    updateScrollState();

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const safeIndex = Math.max(0, Math.min(projects.length - 1, index));
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-carousel-card]"));

    if (safeIndex === projects.length - 1) {
      el.scrollTo({
        left: el.scrollWidth - el.clientWidth,
        behavior: "smooth",
      });
      setCurrentIndex(projects.length - 1);
      return;
    }

    if (safeIndex === 0) {
      el.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      setCurrentIndex(0);
      return;
    }

    if (cards[safeIndex]) {
      const card = cards[safeIndex];
      el.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
      setCurrentIndex(safeIndex);
    }
  };

  const handlePrev = () => {
    scrollToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
  };

  return (
    <section
      id="projects"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Projetos e Trajetória Profissional de Natan Rocha"
      className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1200px] mx-auto w-full border-t border-[#E5E4E1] overflow-hidden"
    >
      {/* Header with Title and Nav Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
        <div className="[&>div]:mb-0">
          <SectionTitle
            title="Projetos & Experiência"
            description="Casos de sucesso reais, migrações de plataformas corporativas e arquitetura front-end de alta performance."
          />
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pb-2">
          <span className="font-display font-bold text-sm text-[#1A1A1A]" aria-live="polite">
            <span className="sr-only">Slide atual: </span>
            {String(currentIndex + 1).padStart(2, "0")}{" "}
            <span className="text-[#5C5C5C] font-normal" aria-hidden="true">
              / {String(projects.length).padStart(2, "0")}
            </span>
            <span className="sr-only"> de {projects.length}</span>
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-controls="projects-track"
              className="w-11 h-11 rounded-full border border-[#E5E4E1] bg-white flex items-center justify-center text-[#1A1A1A] hover:border-[#7C3AED] hover:bg-[#F0EFED] hover:text-[#7C3AED] transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-xs active:scale-95 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none"
              aria-label="Projeto anterior"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-controls="projects-track"
              className="w-11 h-11 rounded-full border border-[#E5E4E1] bg-white flex items-center justify-center text-[#1A1A1A] hover:border-[#7C3AED] hover:bg-[#F0EFED] hover:text-[#7C3AED] transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-xs active:scale-95 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none"
              aria-label="Próximo projeto"
            >
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track with smooth snap */}
      <div
        id="projects-track"
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 -mr-6 sm:-mr-12 pr-6 sm:pr-12 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, idx) => (
          <div
            key={project.id}
            data-carousel-card
            onClick={() => handleOpenModal(project)}
            role="group"
            aria-roledescription="slide"
            aria-label={`Projeto ${idx + 1} de ${projects.length}: ${project.company} - ${project.title}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpenModal(project);
              }
            }}
            className="w-[86vw] max-w-[420px] sm:max-w-none sm:w-[480px] lg:w-[540px] shrink-0 snap-start flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E4E1] hover:border-[#7C3AED] hover:-translate-y-1 transition-all duration-300 shadow-xs cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
          >
            <div>
              {/* Card Header with Tech Icon, Company, and Period */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3.5">
                  <ProjectIcon type={project.iconType} size="md" />
                  <div>
                    <span className="font-display font-bold text-lg sm:text-xl text-[#1A1A1A] tracking-tight leading-snug block">
                      {project.company}
                    </span>
                    <span className="text-xs text-[#5C5C5C] font-medium block">
                      {project.period}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#F5F4F2] border border-[#E5E4E1] flex items-center justify-center text-[#5C5C5C] group-hover:bg-[#7C3AED] group-hover:text-white group-hover:border-[#6D28D9] transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-200" aria-hidden="true" />
                </div>
              </div>

              {/* Title with standardized height */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight group-hover:text-[#7C3AED] transition-colors leading-snug mb-3 min-h-[3.5rem] line-clamp-2">
                {project.title}
              </h3>

              {/* Summary snippet with standardized height */}
              <p className="text-sm text-[#5C5C5C] font-normal leading-relaxed line-clamp-3 mb-6 min-h-[4.25rem]">
                {project.summary}
              </p>
            </div>

            <div>
              {/* Tech Badges with Category as featured badge */}
              <div className="flex flex-wrap items-center gap-1.5 mb-5 pt-4 border-t border-[#F0EFED] min-h-[4.25rem] content-start">
                <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#6D28D9] whitespace-nowrap">
                  {project.category}
                </span>
                {project.techs.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 rounded-full bg-[#F5F4F2] border border-[#E5E4E1] text-xs font-medium text-[#1A1A1A] whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
                {project.techs.length > 4 && (
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#E5E4E1] text-xs font-medium text-[#5C5C5C] whitespace-nowrap">
                    +{project.techs.length - 4}
                  </span>
                )}
              </div>

              {/* Card Action Link */}
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A] group-hover:text-[#7C3AED] group-hover:gap-2.5 transition-all">
                <span>Ver Estudo de Caso Completo</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </div>
          </div>
        ))}

        {/* Trailing space element to allow the last card to scroll completely with comfort */}
        <div className="w-6 sm:w-16 shrink-0 pointer-events-none" aria-hidden="true" />
      </div>

      {/* Interactive Dots Pagination com touch target acessível de 44px */}
      <div className="flex items-center justify-center gap-1 mt-4 px-6" role="tablist" aria-label="Indicadores dos slides de projetos">
        {projects.map((proj, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={currentIndex === idx}
            aria-controls="projects-track"
            onClick={() => scrollToIndex(idx)}
            className="min-w-[40px] min-h-[44px] sm:min-w-[44px] p-2.5 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none rounded-full"
            aria-label={`Ir para projeto ${idx + 1} de ${projects.length}: ${proj.company}`}
          >
            <span
              className={`transition-all duration-300 rounded-full block pointer-events-none ${
                currentIndex === idx
                  ? "w-7 h-2 bg-[#7C3AED]"
                  : "w-2 h-2 bg-[#D6D5D2] hover:bg-[#7C3AED]/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Modal for Full Details */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
}
