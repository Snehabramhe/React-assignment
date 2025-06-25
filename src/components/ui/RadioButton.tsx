import React from "react";

interface RadioButtonProps {
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  selectedValue,
  onChange,
  label,
  className = "",
}) => {
  const isSelected = selectedValue === value;

  return (
    <div className={`flex items-center gap-2 w-full ${className}`}>
      <div
        className={`w-4 h-4 rounded-full border-2 cursor-pointer ${
          isSelected
            ? "border-[#613FDD] bg-[#613FDD]"
            : "border-[#EAEAEA] bg-white"
        }`}
        onClick={() => onChange(value)}
      >
        {isSelected && (
          <div className="w-full h-full rounded-full bg-[#613FDD] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
        )}
      </div>
      <label
        className="text-[rgba(15,12,27,0.60)] text-sm font-normal leading-5 flex-1 cursor-pointer"
        onClick={() => onChange(value)}
      >
        {label}
      </label>
    </div>
  );
};
