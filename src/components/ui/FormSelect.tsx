import React from "react";

interface Option {
  value: string;
  label: string;
  flag?: string;
}

interface FormSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
  showFlag?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  onChange,
  options,
  className = "",
  showFlag = false,
}) => {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <label className="text-[#0F0C1B] text-sm font-medium leading-5">
        {label}
      </label>
      <div className="relative w-full">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex w-full p-2.5 flex-col items-start gap-2.5 rounded-md border border-[#EAEAEA] shadow-sm bg-white text-[rgba(15,12,27,0.40)] text-sm font-medium leading-5 cursor-pointer appearance-none pr-10"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Flag icon for selected option */}
        {showFlag && selectedOption?.flag && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 pointer-events-none">
            <div className="w-5 h-3.5 flex justify-center items-center relative">
              {/* US Flag */}
              <svg
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H19V0.974074H0V0ZM0 1.94815H19V2.92222H0V1.94815ZM0 3.8963H19V4.87037H0V3.8963ZM0 5.84444H19V6.81852H0V5.84444ZM0 7.7963H19V8.77037H0V7.7963ZM0 9.74444H19V10.7185H0V9.74444ZM0 11.6926H19V12.6667H0V11.6926Z"
                  fill="#EF4444"
                />
                <path d="M0 0H9.5V6.81852H0V0Z" fill="#613FDD" />
                <path
                  d="M1.7707 5.14369L1.62255 4.66962L1.45959 5.14369H0.970703L1.367 5.42888L1.21885 5.90295L1.62255 5.61036L2.01515 5.90295L1.8633 5.42888L2.267 5.14369H1.7707ZM3.85589 5.14369L3.70404 4.66962L3.54848 5.14369H3.05959L3.45589 5.42888L3.30774 5.90295L3.70404 5.61036L4.10404 5.90295L3.95589 5.42888L4.35218 5.14369H3.85589ZM5.94848 5.14369L5.78922 4.66962L5.64107 5.14369H5.14107L5.54848 5.42888L5.39293 5.90295L5.78922 5.61036L6.19663 5.90295L6.04107 5.42888L6.43737 5.14369H5.94848ZM8.02996 5.14369L7.88181 4.66962L7.72626 5.14369H7.23367L7.63367 5.42888L7.48552 5.90295L7.88181 5.61036L8.28181 5.90295L8.12256 5.42888L8.52996 5.14369H8.02996ZM3.70404 2.78814L3.54848 3.26221H3.05959L3.45589 3.5548L3.30774 4.02147L3.70404 3.73258L4.10404 4.02147L3.95589 3.5548L4.35218 3.26221H3.85589L3.70404 2.78814ZM1.62255 2.78814L1.45959 3.26221H0.970703L1.367 3.5548L1.21885 4.02147L1.62255 3.73258L2.01515 4.02147L1.8633 3.5548L2.267 3.26221H1.7707L1.62255 2.78814ZM5.78922 2.78814L5.64107 3.26221H5.14107L5.54848 3.5548L5.39293 4.02147L5.78922 3.73258L6.19663 4.02147L6.04107 3.5548L6.43737 3.26221H5.94848L5.78922 2.78814ZM7.88181 2.78814L7.72626 3.26221H7.23367L7.63367 3.5548L7.48552 4.02147L7.88181 3.73258L8.28181 4.02147L8.12256 3.5548L8.52996 3.26221H8.02996L7.88181 2.78814ZM1.62255 0.914062L1.45959 1.38073H0.970703L1.367 1.67332L1.21885 2.14369L1.62255 1.8511L2.01515 2.14369L1.8633 1.67332L2.267 1.38073H1.7707L1.62255 0.914062ZM3.70404 0.914062L3.54848 1.38073H3.05959L3.45589 1.67332L3.30774 2.14369L3.70404 1.8511L4.10404 2.14369L3.95589 1.67332L4.35218 1.38073H3.85589L3.70404 0.914062ZM5.78922 0.914062L5.64107 1.38073H5.14107L5.54848 1.67332L5.39293 2.14369L5.78922 1.8511L6.19663 2.14369L6.04107 1.67332L6.43737 1.38073H5.94848L5.78922 0.914062ZM7.88181 0.914062L7.72626 1.38073H7.23367L7.63367 1.67332L7.48552 2.14369L7.88181 1.8511L8.28181 2.14369L8.12256 1.67332L8.52996 1.38073H8.02996L7.88181 0.914062Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Chevron down icon */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#667085"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
