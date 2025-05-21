import React from "react";

const NAV_LINKS = [
  { label: "Home", href: "#", current: true },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface MenuLinksProps {
  onClick?: () => void;
  isMobile?: boolean;
  hidden?: boolean;
}

export default function MenuLinks({ onClick, isMobile = false, hidden = false }: MenuLinksProps) {
  if (hidden) return null;

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
