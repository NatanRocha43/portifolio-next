import React from "react";

export const NAV_LINKS = [
  { label: "Sobre", href: "about" },
  { label: "Soluções", href: "services" },
  { label: "Projetos & Trajetória", href: "projects" },
  { label: "Contato", href: "contact" },
];

interface MenuLinksProps {
  onClick?: () => void;
  isMobile?: boolean;
  hidden?: boolean;
}

export default function MenuLinks({ onClick, isMobile = false, hidden = false }: MenuLinksProps) {
  if (hidden) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (onClick) onClick();
  };

  return (
    <ul className={`flex ${isMobile ? "flex-col gap-5 items-center w-full" : "items-center gap-7"}`}>
      {NAV_LINKS.map(({ label, href }) => (
        <li key={label}>
          <a
            href={`#${href}`}
            className={`rounded-md px-1 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none ${
              isMobile
                ? "text-lg font-medium text-[#1A1A1A] hover:text-[#7C3AED] min-h-[44px] px-3 py-2 flex items-center justify-center"
                : "text-sm font-medium text-[#5C5C5C] hover:text-[#1A1A1A]"
            }`}
            onClick={(e) => handleClick(e, href)}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
