import React from "react";

interface FormInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "url";
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <label className="text-[#0F0C1B] text-sm font-medium leading-5">
        {label}
      </label>
      <div className="flex flex-col items-start gap-2.5 w-full rounded-md border border-[#EAEAEA] shadow-sm bg-white">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="text-[rgba(15,12,27,0.40)] text-sm font-medium leading-5 w-full p-2.5 rounded-md border-none outline-none bg-transparent"
        />
      </div>
    </div>
  );
};
