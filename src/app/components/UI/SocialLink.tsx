import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

export default function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-[#C1C1C1] hover:text-[#4FC3F7] transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
