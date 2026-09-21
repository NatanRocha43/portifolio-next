"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import MenuLinks from "../UI/MenuLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu mobile ao pressionar Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 flex items-center justify-between transition-all duration-300 bg-[#FAFAF9]/90 backdrop-blur-md ${
        scrolled
          ? "py-3.5 border-b border-[#E5E4E1] shadow-xs"
          : "py-5 border-b border-transparent"
      }`}
    >
      {/* Logo with Avatar */}
      <a
        href="#home"
        className="flex items-center gap-2.5 group text-[#1A1A1A] rounded-full focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none"
        aria-label="Natan Rocha - Desenvolvedor Front-End, ir para o início"
      >
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#E5E4E1] group-hover:border-[#7C3AED] transition-colors">
          <Image
            src="/self.webp"
            alt="Foto de perfil de Natan Rocha"
            fill
            sizes="(max-width: 640px) 32px, 36px"
            priority
            className="object-cover"
          />
        </div>
        <span className="font-display font-bold text-lg tracking-tight">
          Natan Rocha
          <span className="text-xs font-normal text-[#5C5C5C] ml-1.5 hidden sm:inline">
            • Front-End
          </span>
        </span>
      </a>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex items-center" aria-label="Navegação principal">
        <MenuLinks />
      </nav>

      {/* Desktop Quick CTA */}
      <div className="hidden md:flex items-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-1 px-5 py-2 rounded-full bg-[#1A1A1A] text-[#FAFAF9] text-xs font-medium hover:-translate-y-0.5 hover:shadow-md transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none"
        >
          Fale Comigo →
        </a>
      </div>

      {/* Mobile Toggle com touch target de 44px */}
      <button
        type="button"
        className="md:hidden w-11 h-11 flex items-center justify-center text-[#1A1A1A] rounded-lg focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className="absolute top-full left-0 w-full bg-[#FAFAF9] border-b border-[#E5E4E1] p-6 flex flex-col gap-6 shadow-xl md:hidden animate-fade-up"
        >
          <MenuLinks isMobile onClick={() => setIsOpen(false)} />
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 min-h-[44px] flex items-center justify-center rounded-full bg-[#1A1A1A] text-[#FAFAF9] text-sm font-medium shadow-sm focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none"
          >
            Fale Comigo →
          </a>
        </nav>
      )}
    </header>
  );
}
