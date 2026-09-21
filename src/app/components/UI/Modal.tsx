"use client";
import { useEffect, useRef } from "react";
import { Project } from "../../_types";
import { ProjectIcon } from "./ProjectIcon";
import { X, Calendar, Briefcase, CheckCircle2, Target, Cpu } from "lucide-react";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export function Modal({ project, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Foco inicial no botão fechar para usuários de teclado
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Focus Trap para navegação restrita ao modal
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      aria-describedby="modal-project-summary"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl rounded-3xl bg-[#FAFAF9] border border-[#E5E4E1] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
      >
        {/* Close Button com touch target de 44px+ e foco visível acessível */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E5E4E1] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAFAF9] flex items-center justify-center transition-all cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none"
          aria-label="Fechar detalhes do projeto"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* Modal Header without company logos, using clean tech icon */}
        <div className="p-6 sm:p-8 border-b border-[#E5E4E1] bg-white">
          <div className="flex items-start gap-4 pr-10">
            <ProjectIcon type={project.iconType} size="lg" />
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F4F2] border border-[#E5E4E1] text-xs font-semibold text-[#1A1A1A]">
                  <Briefcase className="w-3.5 h-3.5 text-[#7C3AED]" aria-hidden="true" />
                  {project.company}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F4F2] border border-[#E5E4E1] text-xs text-[#5C5C5C]">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {project.period}
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#6D28D9]">
                  {project.category}
                </span>
              </div>

              <h2
                id="modal-project-title"
                className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-tight"
              >
                {project.title}
              </h2>

              <span className="text-xs sm:text-sm font-semibold text-[#6D28D9] block mt-1.5">
                {project.role}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body with enriched technical sections */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7">
          {/* Executive Summary */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E4E1] shadow-xs">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#6D28D9] block mb-1.5">
              Visão Geral
            </span>
            <p id="modal-project-summary" className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed font-medium">
              {project.summary}
            </p>
          </div>

          {/* Context & Challenge */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-2.5">
              <Target className="w-4 h-4 text-[#7C3AED]" aria-hidden="true" />
              Contexto & Desafio
            </div>
            <p className="text-sm sm:text-base text-[#5C5C5C] leading-relaxed font-normal">
              {project.challenge}
            </p>
          </div>

          {/* Technical Solution */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-2.5">
              <Cpu className="w-4 h-4 text-[#7C3AED]" aria-hidden="true" />
              Solução Técnica & Arquitetura
            </div>
            <p className="text-sm sm:text-base text-[#5C5C5C] leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>

          {/* Key Results */}
          {project.results && project.results.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                Impactos & Resultados Chave
              </div>
              <ul className="space-y-2.5">
                {project.results.map((result, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-[#5C5C5C] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 shrink-0" aria-hidden="true" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="border-t border-[#E5E4E1] pt-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#5C5C5C] block mb-3">
              Tecnologias & Metodologias
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full bg-[#F5F4F2] border border-[#E5E4E1] text-xs font-medium text-[#1A1A1A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
