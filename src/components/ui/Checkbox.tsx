import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`w-4 h-4 flex justify-center items-center rounded border cursor-pointer ${
          checked
            ? "bg-[#613FDD] border-[#613FDD]"
            : "bg-white border-[rgba(179,179,179,0.60)]"
        }`}
        onClick={() => onChange(!checked)}
      >
        {checked && (
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3337 1L4.00033 8.33333L0.666992 5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <label
        className="flex-1 text-[#0F0C1B] text-sm font-medium leading-5 cursor-pointer"
        onClick={() => onChange(!checked)}
      >
        {label}
      </label>
    </div>
  );
};
