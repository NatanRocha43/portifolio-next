import { forwardRef, InputHTMLAttributes } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  value?: string | number;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, error, isInvalid, isValid, value, ...rest }, ref) => {
    const hasValue = value ? value.toString().length > 0 : false;

    let borderClass = "border-[#E5E4E1] focus:border-[#7C3AED] focus:ring-[#7C3AED]/20";

    if (hasValue && isInvalid) {
      borderClass = "border-red-400 focus:border-red-500 focus:ring-red-100";
    } else if (hasValue && isValid) {
      borderClass = "border-green-500/60 focus:border-green-500 focus:ring-green-100";
    }

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
          {label}
        </label>
        <div className="relative flex items-center">
          <input
            id={id}
            ref={ref}
            value={value}
            aria-required="true"
            aria-invalid={isInvalid ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            {...rest}
            className={`w-full px-4 py-3 rounded-xl border bg-white text-[#1A1A1A] placeholder-[#6B7280] text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${borderClass}`}
          />
          {hasValue && isValid && (
            <CheckCircle2 className="absolute right-3.5 w-4 h-4 text-green-600 pointer-events-none" aria-hidden="true" />
          )}
        </div>
        {error && (
          <p id={`${id}-error`} role="alert" aria-live="polite" className="text-xs text-red-600 font-medium flex items-center gap-1 mt-0.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
