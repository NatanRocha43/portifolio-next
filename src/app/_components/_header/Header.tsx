"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#", current: true },
  { label: "About", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
];

function MenuLinks({
  onClick,
  isMobile = false,
}: {
  onClick?: () => void;
  isMobile?: boolean;
}) {
  return (
    <ul className={`flex ${isMobile ? "flex-col gap-4 mt-8 p-4" : "gap-12"}`}>
      {NAV_LINKS.map(({ label, href, current }) => (
        <li key={label}>
          <a
            href={href}
            className="text-lg text-[#C1C1C1] hover:text-[#4FC3F7]"
            onClick={onClick}
            aria-current={current ? "page" : undefined}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full px-12 py-6 z-50 bg-[#1A1A1A]"
    >
      <div className="flex items-center justify-between">
        <span
          role="img"
          aria-label="Logotipo Natan Rocha"
          className="text-white text-2xl font-bold"
        >
          Natan Rocha
        </span>
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex z-10" aria-label="Main navigation">
          <MenuLinks />
        </nav>
      </div>

      <nav
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-full bg-[#1A1A1A] z-40 transition-transform duration-300 ease-in-out transform md:hidden will-change-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
      >
        <MenuLinks isMobile onClick={() => setIsOpen(false)} />
      </nav>
    </header>
  );
}
