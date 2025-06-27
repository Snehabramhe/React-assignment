import React from "react";
import { Input } from "./Input";
import { cn } from "../../lib/utils";

interface PriceInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
}

export const PriceInput: React.FC<PriceInputProps> = ({
  value,
  onChange,
  placeholder,
  className,
  disabled = false,
  id,
}) => {
  return (
    <div className={cn("flex", className)}>
      <div className="w-10 h-10 px-2.5 py-2.5 rounded-l-md border border-r-0 border-[#EAEAEA] text-[#B3B3B3] text-center font-inter text-base font-normal leading-6 bg-[#FEFEFF] flex items-center justify-center">
        $
      </div>
      <Input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-[222px] rounded-l-none border-l-0 font-dm-sans text-sm font-medium leading-none"
      />
    </div>
  );
};
