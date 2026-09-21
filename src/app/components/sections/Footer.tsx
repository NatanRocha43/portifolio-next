import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer role="contentinfo" className="w-full border-t border-[#E5E4E1] bg-[#FAFAF9] py-10 px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#5C5C5C] font-normal">
        <p>
          &copy; {new Date().getFullYear()} Natan Rocha. Desenvolvido com Next.js & TypeScript.
        </p>

        <a
          href="#home"
          className="inline-flex items-center gap-1.5 font-medium text-[#1A1A1A] hover:text-[#7C3AED] transition-colors rounded-md min-h-[44px] px-3 py-2 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none"
          aria-label="Voltar para o topo da página"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
