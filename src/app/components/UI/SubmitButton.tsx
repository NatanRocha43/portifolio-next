import { Loader2, ArrowRight } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  isDisabled?: boolean;
  label?: string;
}

export function SubmitButton({
  isSubmitting,
  isDisabled = false,
  label = "Enviar Mensagem",
}: SubmitButtonProps) {
  const disabled = isSubmitting || isDisabled;

  return (
    <button
      type="submit"
      disabled={disabled}
      aria-disabled={disabled}
      aria-busy={isSubmitting}
      className="w-full inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#FAFAF9] py-3.5 px-6 rounded-full font-medium text-sm cursor-pointer shadow-xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none focus-visible:ring-offset-2"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
          <span>Enviando mensagem...</span>
        </>
      ) : (
        <>
          <span>{label}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </>
      )}
    </button>
  );
}
