import React from "react";

const NAV_LINKS = [
  { label: "Home", href: "section-home", current: true },
  { label: "Sobre mim", href: "section-about" },
  { label: "Projects", href: "projects" },
  { label: "Formulário", href: "section-form" },
];

interface MenuLinksProps {
  onClick?: () => void;
  isMobile?: boolean;
  hidden?: boolean;
}

export default function MenuLinks({ onClick, isMobile = false, hidden = false }: MenuLinksProps) {
  if (hidden) return null;

  // Função para scroll suave
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (onClick) onClick();
  };

  return (
    <ul className={`flex ${isMobile ? "flex-col gap-4 mt-8 p-4" : "gap-12"}`}>
      {NAV_LINKS.map(({ label, href, current }) => (
        <li key={label}>
          <a
            href={`#${href}`}
            className="text-lg text-[#C1C1C1] hover:text-[#4FC3F7]"
            onClick={(e) => handleClick(e, href)}
            aria-current={current ? "page" : undefined}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
