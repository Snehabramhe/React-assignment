import React from "react";
import { categoryOptions, greyNichesOptions } from "../../data/mockData";
import type { WebsiteFilters } from "../../store/websiteStore";

interface FilterControlsProps {
  filters: WebsiteFilters;
  onFiltersChange: (filters: Partial<WebsiteFilters>) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  filters,
  onFiltersChange,
}) => {
  return (
    <div className="flex min-w-[240px] items-center gap-3 font-['Inter'] text-sm text-[#0F0C1B] font-normal tracking-[0.25px] leading-none justify-start">
      {/* Category Filter */}
      <div className="justify-center items-stretch rounded-md border border-[#EAEAEA] min-h-9 px-2.5 py-2 flex-col whitespace-nowrap w-[190px] bg-[#FEFEFF] relative">
        <div className="flex w-full items-center gap-[100px] justify-between">
          <select
            value={filters.category}
            onChange={(e) => onFiltersChange({ category: e.target.value })}
            className="text-[#0F0C1B] appearance-none bg-transparent border-none outline-none cursor-pointer w-full"
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div
            className="bg-[rgba(179,179,179,0.6)] w-2 h-1 flex-shrink-0"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          />
        </div>
      </div>

      {/* Grey Niches Filter */}
      <div className="justify-center items-stretch rounded-md border border-[#EAEAEA] min-h-9 px-2.5 py-2 flex-col w-[190px] bg-[#FEFEFF] relative">
        <div className="flex w-full items-center gap-[83px] justify-between">
          <select
            value={filters.greyNiches}
            onChange={(e) => onFiltersChange({ greyNiches: e.target.value })}
            className="text-[#0F0C1B] appearance-none bg-transparent border-none outline-none cursor-pointer w-full"
          >
            {greyNichesOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div
            className="bg-[rgba(179,179,179,0.6)] w-2 h-1 flex-shrink-0"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          />
        </div>
      </div>
    </div>
  );
};
