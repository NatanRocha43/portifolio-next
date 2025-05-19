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
    <ul className={`flex ${isMobile ? "flex-col gap-6 mt-16 p-6" : "gap-12"}`}>
      {NAV_LINKS.map(({ label, href, current }) => (
        <li key={label}>
          <a
            href={href}
            className="text-lg text-white"
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
    <header className="relative bg-[#222831] border-b-1 border-[#EEEEEE]/10 px-12 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Natan Rocha</h1>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex" aria-label="Main navigation">
          <MenuLinks />
        </nav>
      </div>

      <nav
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-1/2 bg-[#222831] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        aria-label="Main navigation"
      >
        <MenuLinks isMobile onClick={() => setIsOpen(false)} />
      </nav>
    </header>
  );
}
