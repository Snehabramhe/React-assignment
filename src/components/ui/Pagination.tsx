import React from "react";
import type { PaginationProps } from "../../types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = [];
  const maxVisiblePages = 5;

  // Generate page numbers to display
  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const PaginationButton: React.FC<{
    children: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
    isDisabled?: boolean;
    className?: string;
  }> = ({ children, onClick, isActive, isDisabled, className = "" }) => (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        flex items-center justify-center min-h-[40px] px-2 py-2.5 text-sm font-medium text-[#0F0C1B] border border-[#EAEAEA]
        ${
          isActive
            ? "bg-[#EAEAEA] border-[#EAEAEA]"
            : "bg-white hover:bg-gray-50"
        }
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        focus:outline-none focus:ring-2 focus:ring-[#613FDD] focus:border-transparent
        ${className}
      `}
    >
      {children}
    </button>
  );

  return (
    <div className="flex items-center justify-center w-full px-6 py-2 font-['DM_Sans'] text-sm text-[#0F0C1B] font-medium">
      <div className="flex items-start shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] min-w-[240px]">
        {/* Previous Button */}
        <PaginationButton
          onClick={handlePrevious}
          isDisabled={currentPage === 1}
          className="rounded-l-lg px-4 gap-2"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c4a06c1?placeholderIfAbsent=true"
            alt="Previous"
            className="w-5 h-5"
          />
          <span>Previous</span>
        </PaginationButton>

        {/* Page Numbers */}
        {pages.map((page, index) => (
          <React.Fragment key={index}>
            {index > 0 && <div className="w-px h-[40px] bg-[#EAEAEA]" />}
            <PaginationButton
              onClick={
                typeof page === "number" ? () => onPageChange(page) : undefined
              }
              isActive={page === currentPage}
              className={`
                flex-col w-[40px] h-[40px] p-0
                ${typeof page === "string" ? 'cursor-default font-["Inter"]' : ""}
              `}
            >
              <div className="h-px w-full bg-[#EAEAEA]" />
              <div className="flex-1 flex items-center justify-center px-2 py-2.5">
                {page}
              </div>
              <div className="h-px w-full bg-[#EAEAEA]" />
            </PaginationButton>
          </React.Fragment>
        ))}

        {/* Next Button */}
        <div className="w-px h-[40px] bg-[#EAEAEA]" />
        <PaginationButton
          onClick={handleNext}
          isDisabled={currentPage === totalPages}
          className="rounded-r-lg px-4 gap-2"
        >
          <span>Next</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dae43c5d?placeholderIfAbsent=true"
            alt="Next"
            className="w-5 h-5"
          />
        </PaginationButton>
      </div>
    </div>
  );
};

export default Pagination;
