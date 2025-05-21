import { useState } from "react";
import { Menu, X } from "lucide-react";
import MenuLinks from "../UI/MenuLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="fixed top-0 left-0 w-full px-12 py-6 z-50 bg-[#1A1A1A]">
      <div className="flex items-center justify-between">
        <span role="img" aria-label="Logotipo Natan Rocha" className="text-white text-2xl font-bold">
          Natan Rocha
        </span>

        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>

        <nav className="hidden md:flex z-10" aria-label="Navegação principal">
          <MenuLinks />
        </nav>
      </div>

      <nav
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-full bg-[#1A1A1A] z-40 transition-transform duration-300 ease-in-out transform md:hidden will-change-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Navegação principal"
        aria-hidden={!isOpen}
      >
        <MenuLinks isMobile onClick={() => setIsOpen(false)} hidden={!isOpen} />
      </nav>
    </header>
  );
}
