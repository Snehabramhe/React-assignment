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
    filteredWebsites,
    filters,
    currentPage,
    totalPages,
    itemsPerPage,
    setFilters,
    setCurrentPage,
    applyFilters,
  } = useWebsiteStore();

  // Apply filters when component mounts or filters change
  useEffect(() => {
    applyFilters();
  }, [filters, applyFilters]);

  const handleAddWebsite = () => {
    navigate("/add-website");
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
      className: "min-w-[240px] w-[266px]",
    },
    {
      key: "country",
      label: "Country",
      className: "w-[146px]",
      render: (_, website) => (
        <div className="flex items-center gap-1  justify-start whitespace-nowrap">
          <span className="gap-1">{website.country.flag}</span>
          <span className="text-[#0F0C1B]">{website.country.name}</span>
        </div>
      ),
    },
    {
      key: "language",
      label: "Language",
      className: "w-[140px]",
    },
    {
      key: "category",
      label: "Category",
      className: "min-w-[240px] w-[240px]",
    },
    {
      key: "otherCategories",
      label: "Other categories",
      className: "min-w-[240px] w-[240px]",
    },
    {
      key: "greyNiches",
      label: "Grey niches",
      className: "min-w-[240px] w-[280px]",
      render: (greyNiches) => renderGreyNichesIcons(greyNiches as string[]),
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
            <Table
              columns={columns}
              data={currentWebsites}
              className="w-full"
            />

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
