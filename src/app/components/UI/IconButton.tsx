import React from "react";

interface IconButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  download?: boolean | string;
  target?: string;
  rel?: string;
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
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
  className = "",
  variant = "primary",
}: IconButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-200 cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[#1A1A1A] text-[#FAFAF9] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10",
    secondary:
      "bg-transparent text-[#1A1A1A] border border-[#E5E4E1] hover:border-[#7C3AED] hover:bg-[#F0EFED] hover:-translate-y-0.5",
  };

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span>{text}</span>
      {icon && <span aria-hidden="true">{icon}</span>}
    </a>
  );
}
