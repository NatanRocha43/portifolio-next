import { forwardRef, InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, error, ...rest }, ref) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1 text-[#E1E1E1]">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        {...rest}
        className={`w-full p-3 rounded-lg border border-gray-700 bg-transparent text-white placeholder-gray-400
          focus:ring-2 focus:ring-blue-500 focus:outline-none
          ${error ? "border-red-500" : "border-gray-700"}`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
);

InputField.displayName = "InputField";
