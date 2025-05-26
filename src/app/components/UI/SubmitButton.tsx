interface SubmitButtonProps {
  isSubmitting: boolean;
  isDisabled?: boolean;
  label?: string;
}

export function SubmitButton({ isSubmitting, isDisabled = false, label = "Enviar" }: SubmitButtonProps) {
  const disabled = isSubmitting || isDisabled;

  return (
    <button
      type="submit"
      disabled={disabled}
      aria-busy={isSubmitting}
      className="w-full bg-white text-black py-3 rounded-lg font-semibold cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      {isSubmitting ? "Enviando..." : label}
    </button>
  );
}
