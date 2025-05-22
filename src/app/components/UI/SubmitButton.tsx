interface SubmitButtonProps {
    isSubmitting: boolean;
    label?: string;
  }
  
  export function SubmitButton({ isSubmitting, label = 'Enviar' }: SubmitButtonProps) {
    return (
      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="w-full bg-white text-black py-3 rounded-lg font-semibold cursor-pointer text-sm"
      >
        {isSubmitting ? 'Enviando...' : label}
      </button>
    );
  }
  