import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
  className?: string;
}

export default function SocialLink({ href, icon: Icon, label, className = "" }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#F5F4F2] border border-[#E5E4E1] text-[#1A1A1A] hover:bg-[#7C3AED] hover:border-[#6D28D9] hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none ${className}`}
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
    </a>
  );
}
