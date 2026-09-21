"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

interface MenuLinksProps {
  onClick?: () => void;
  isMobile?: boolean;
  hidden?: boolean;
}

export default function MenuLinks({ onClick, isMobile = false, hidden = false }: MenuLinksProps) {
  const { t } = useLanguage();

  if (hidden) return null;

  const links = [
    { label: t.header.nav.about, href: "about" },
    { label: t.header.nav.services, href: "services" },
    { label: t.header.nav.projects, href: "projects" },
    { label: t.header.nav.contact, href: "contact" },
  ];

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
      {links.map(({ label, href }) => (
        <li key={href}>
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
