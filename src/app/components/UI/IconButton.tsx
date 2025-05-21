import React from "react";

interface IconButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
  download?: boolean;
  target?: string;
  rel?: string;
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({
  href,
  text,
  icon,
  download = false,
  target,
  rel,
  ariaLabel,
  onClick,
  className,
}: IconButtonProps) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      role="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border border-[#4FC3F7] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4FC3F7]/10 ${className ?? ""}`}
    >
      {text} {icon}
    </a>
  );
}
