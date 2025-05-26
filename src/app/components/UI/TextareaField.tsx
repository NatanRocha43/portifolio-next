import { forwardRef, TextareaHTMLAttributes } from "react";

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  error?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  value?: string;
};

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ id, label, error, isInvalid, isValid, value, ...rest }, ref) => {
    const hasValue = value ? value.toString().length > 0 : false;

    let borderClass = "border-gray-700 focus:ring-blue-500";

    if (hasValue && isInvalid) {
      borderClass = "border-red-500 focus:ring-red-500";
    } else if (hasValue && isValid) {
      borderClass = "border-green-500 focus:ring-green-500";
    }

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium mb-1 text-[#E1E1E1]">
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          value={value}
          {...rest}
          className={`w-full p-3 rounded-lg border bg-transparent text-white placeholder-gray-400 resize-none
            focus:ring-2 focus:outline-none
            ${borderClass}`}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

TextareaField.displayName = "TextareaField";
