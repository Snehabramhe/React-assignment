import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex w-full px-6 py-2 items-center justify-center max-lg:max-w-full max-lg:px-5">
      <div className="flex items-start shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] min-w-[240px] my-auto justify-start flex-wrap max-lg:max-w-full">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex justify-center items-center rounded-l-lg border border-[#EAEAEA] px-4 py-2.5 gap-2 overflow-hidden bg-[#FEFEFF] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f45e304a98e3653818318e4086e0a161acfabf?placeholderIfAbsent=true"
            className="aspect-square object-contain object-center w-5 h-5 flex-shrink-0"
            alt=""
          />
          <span className="text-[#0F0C1B] font-['DM_Sans'] text-sm font-medium">
            Previous
          </span>
        </button>

        {/* Page Numbers */}
        {visiblePages.map((page, index) => {
          if (page === "...") {
            return (
              <div
                key={`ellipsis-${index}`}
                className="flex justify-center items-stretch flex-col w-10 h-10 bg-[#FEFEFF] border-t border-b border-[#EAEAEA]"
              >
                <div className="flex min-h-[1px] w-full bg-[#EAEAEA]" />
                <div className="text-[#0F0C1B] self-center px-2 py-2 font-['Inter'] text-sm font-medium">
                  ...
                </div>
                <div className="flex min-h-[1px] w-full bg-[#EAEAEA]" />
              </div>
            );
          }

          const isActive = page === currentPage;

          return (
            <React.Fragment key={page}>
              {index > 0 && (
                <div className="bg-[#EAEAEA] flex w-[1px] flex-shrink-0 h-10" />
              )}
              <button
                onClick={() => onPageChange(page as number)}
                className={`flex justify-center items-stretch flex-col w-10 h-10 ${
                  isActive ? "bg-[#EAEAEA]" : "bg-[#FEFEFF] hover:bg-gray-50"
                }`}
              >
                <div className="flex min-h-[1px] w-full bg-[#EAEAEA]" />
                <div className="text-[#0F0C1B] self-center px-2 py-2 font-['DM_Sans'] text-sm font-medium">
                  {page}
                </div>
                <div className="flex min-h-[1px] w-full bg-[#EAEAEA]" />
              </button>
            </React.Fragment>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex justify-center items-center rounded-r-lg border border-[#EAEAEA] px-4 py-2.5 gap-2 overflow-hidden bg-[#FEFEFF] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <span className="text-[#0F0C1B] font-['DM_Sans'] text-sm font-medium">
            Next
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd12710606b11f406700471c40e4b7f14e1d66a?placeholderIfAbsent=true"
            className="aspect-square object-contain object-center w-5 h-5 flex-shrink-0"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
