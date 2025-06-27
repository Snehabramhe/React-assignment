import React, { useState, useRef, useEffect } from "react";
import type { FilterOption } from "../../types";

interface DropdownProps {
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="justify-center items-stretch rounded-md border border-solid border-[#EAEAEA] flex min-h-9 pl-[10px] pr-[10px] pt-[9px] pb-[9px] flex-col w-full bg-[#FEFEFF] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#613FDD] focus:border-transparent"
      >
        <div className="flex w-full items-center gap-[100px] justify-between font-inter text-[13px] text-[#0F0C1B] font-normal tracking-[0.25px] leading-none">
          <div className="text-[#0F0C1B] self-stretch my-auto truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </div>
          <div
            className="bg-[rgba(179,179,179,0.6)] self-stretch flex my-auto w-[9px] flex-shrink-0 h-1 fill-[rgba(179,179,179,0.60)]"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-[#EAEAEA] rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ${
                value === option.value
                  ? "bg-purple-50 text-[#613FDD]"
                  : "text-[#0F0C1B]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
