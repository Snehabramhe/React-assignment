import React from "react";

interface PreconditionsSectionProps {
  onToggle: () => void;
}

export const PreconditionsSection: React.FC<PreconditionsSectionProps> = ({
  onToggle,
}) => {
  return (
    <div className="flex w-full h-14 p-6 flex-col justify-center items-center gap-2.5 rounded-md border border-[#EAEAEA] bg-[#FEFEFF]">
      <div className="flex h-14 justify-between items-center w-full">
        <div className="text-[#0F0C1B] font-['Inter'] text-sm font-normal leading-5 tracking-[0.25px]">
          Hey, Accept Preconditions before you start the listing!
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex w-[107px] h-[31px] p-2.5 flex-col justify-center items-center gap-2.5 rounded-[21px] bg-[rgba(52,199,89,0.10)]">
            <div className="flex items-center gap-[11px] w-full">
              <div className="w-4 h-4">
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3337 1L4.00033 8.33333L0.666992 5"
                    stroke="#34C759"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-[#0F0C1B] text-[13px] font-medium leading-[18px]">
                Accepted
              </div>
            </div>
          </div>
          <div className="w-5 h-5 cursor-pointer" onClick={onToggle}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#B3B3B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
