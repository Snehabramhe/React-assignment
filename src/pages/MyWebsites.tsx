import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWebsiteStore } from "../store/websiteStore";
import { Button } from "../components/ui/Button";
import Table from "../components/ui/Table";
import { Pagination } from "../components/ui/Pagination";
import type { TableColumn, Website } from "../types";
import { Navbar } from "@/components";

const MyWebsites: React.FC = () => {
  const navigate = useNavigate();

  const {
    websites,
    filteredWebsites,
    filters,
    currentPage,
    totalPages,
    itemsPerPage,
    setFilters,
    setCurrentPage,
    applyFilters,
  } = useWebsiteStore();

  // Apply filters when component mounts, filters change, or websites change
  useEffect(() => {
    applyFilters();
  }, [filters, applyFilters, websites.length]);

  const handleAddWebsite = () => {
    navigate("/add-website");
  };

  const handleEditWebsite = (websiteId: string) => {
    console.log("Edit website with ID:", websiteId);
    // You can navigate to an edit page or open a modal here
    // navigate(`/edit-website/${websiteId}`);
  };

  const handleFiltersChange = (newFilters: Partial<typeof filters>) => {
    setFilters(newFilters);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate items to display for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentWebsites = filteredWebsites.slice(startIndex, endIndex);

  const renderGreyNichesIcons = (greyNiches: string[]) => {
    return (
      <div className="flex items-center gap-[5px] justify-start w-[143px]">
        {greyNiches.slice(0, 6).map((iconUrl, index) => (
          <img
            key={index}
            src={iconUrl}
            className="aspect-[0.95] object-contain object-center w-[19px] flex-shrink-0"
            alt=""
          />
        ))}
      </div>
    );
  };

  // Define table columns
  const columns: TableColumn<Website>[] = [
    {
      key: "domain",
      label: "Website",
      className: "w-[220px]",
    },
    {
      key: "country",
      label: "Country",
      className: "w-[120px]",
      render: (_, website) => (
        <div className="flex items-center gap-1 justify-start whitespace-nowrap">
          <span className="text-lg">{website.country.flag}</span>
          <span className="text-[#0F0C1B]">{website.country.name}</span>
        </div>
      ),
    },
    {
      key: "language",
      label: "Language",
      className: "w-[110px]",
    },
    {
      key: "category",
      label: "Category",
      className: "w-[220px]",
    },
    {
      key: "otherCategories",
      label: "Other categories",
      className: "w-[240px]",
      render: (otherCategories) => (
        <div className="text-left">{otherCategories}</div>
      ),
    },
    {
      key: "greyNiches",
      label: "Grey niches",
      className: "w-[200px]",
      render: (greyNiches) => renderGreyNichesIcons(greyNiches as string[]),
    },
    {
      key: "id",
      label: "Action",
      className: "w-[30px]",
      render: (_, website) => (
        <div className="flex items-center justify-center">
          <button
            onClick={() => handleEditWebsite(website.id)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            title="Edit website"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#0F0C1B]"
            >
              <path
                d="M11.334 2.00004C11.5091 1.82494 11.7169 1.68605 11.9457 1.59129C12.1745 1.49653 12.4197 1.44775 12.6673 1.44775C12.9149 1.44775 13.1601 1.49653 13.3889 1.59129C13.6177 1.68605 13.8255 1.82494 14.0007 2.00004C14.1758 2.17513 14.3147 2.383 14.4094 2.61178C14.5042 2.84055 14.553 3.08575 14.553 3.33337C14.553 3.58099 14.5042 3.82619 14.4094 4.05497C14.3147 4.28374 14.1758 4.49161 14.0007 4.66671L5.00065 13.6667L1.33398 14.6667L2.33398 11L11.334 2.00004Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[rgba(242,244,250,1)] overflow-hidden">
      {/* Navigation */}
      <Navbar activeTab="My websites" />

      {/* Main Content */}
      <div className="items-stretch flex w-full pl-6 pr-6 pt-6 pb-[38px] flex-col overflow-hidden max-lg:max-w-full max-lg:pl-5 max-lg:pr-5 bg-[#FDFCFF]">
        {/* Page Title */}
        <div className="text-[#0F0C1B] font-dm-sans text-2xl font-semibold leading-[2] self-start">
          All websites
        </div>

        {/* Controls Section */}
        <div className="mt-[74px] w-full max-lg:max-w-full max-lg:mt-10">
          <div className="flex w-full items-start justify-start flex-wrap max-lg:max-w-full">
            {/* Add Website Button */}
            <Button
              onClick={handleAddWebsite}
              className="bg-[#613FDD] hover:bg-[#5336c7] text-[#FEFEFF] font-dm-sans text-xs font-medium leading-[2] w-[228px] h-9 rounded-lg gap-3 cursor-pointer"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aa35cc1ac8afe5297b91027d5d499250f006f96?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
                className="aspect-square object-contain object-center w-4 flex-shrink-0"
                alt=""
              />
              Add website
            </Button>
          </div>

          {/* Table Section */}
          <div className="mt-4 w-full max-lg:max-w-full">
            <div className="overflow-x-auto">
              <Table
                columns={columns}
                data={currentWebsites}
                className="w-full"
              />
            </div>

            {/* Pagination */}
            <div className="w-full font-dm-sans text-sm text-[#0F0C1B] font-medium whitespace-nowrap leading-none max-lg:max-w-full max-lg:whitespace-normal">
              <div className="w-full max-lg:max-w-full max-lg:whitespace-normal">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWebsites;
