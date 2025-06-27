import React from "react";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Textarea } from "../ui/Textarea";
import { useWebsiteStore } from "../../store/websiteStore";

export const HomepageLinkForm: React.FC = () => {
  const { formData, updateFormData } = useWebsiteStore();

  return (
    <div className="flex flex-col items-start w-full max-w-[542px] px-5 pb-5 box-border md:w-full md:max-w-[542px] sm:w-full sm:px-4 sm:pb-4">
      <div className="flex w-full flex-col justify-end items-start gap-8 md:gap-6 sm:gap-4">
        {/* Price Section */}
        <div className="flex items-start gap-8 md:gap-6 sm:gap-4">
          <div className="flex w-[262px] flex-col items-start gap-2 md:w-full md:max-w-[262px] sm:w-full">
            <Label
              htmlFor="homepage-price"
              className="font-inter font-normal text-sm text-[#0F0C1B] w-full leading-5 text-left"
            >
              Price
            </Label>
            <div className="flex flex-col items-start gap-2.5 w-full rounded-md border border-[#EAEAEA]">
              <div className="flex w-full items-center">
                <div className="flex w-10 h-10 p-2.5 flex-col justify-center items-center gap-2.5 flex-shrink-0 rounded-l-md border-t border-r-[0.5px] border-b border-l border-[#EAEAEA] box-border bg-white">
                  <div className="font-inter font-normal text-base text-[#B3B3B3] w-full text-center leading-6">
                    $
                  </div>
                </div>
                <Input
                  id="homepage-price"
                  type="number"
                  value={formData.homepageLinkPrice.toString()}
                  onChange={(e) =>
                    updateFormData({
                      homepageLinkPrice: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-[222px] sm:w-[calc(100%-40px)] flex-shrink-0 rounded-l-none rounded-r-md border-t border-r border-b border-[#EAEAEA] box-border bg-white font-dm-sans font-normal text-base text-[#09090B] leading-6 border-l-0"
                  placeholder="54"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Offer Guidelines Section */}
        <div className="flex w-full items-start gap-8 md:gap-6 sm:gap-4">
          <div className="flex w-full flex-col items-start gap-2 flex-shrink-0">
            <Label
              htmlFor="offer-guidelines"
              className="font-dm-sans font-normal text-sm text-[#0F0C1B] w-full leading-5 text-left"
            >
              Offer Guidelines
            </Label>
            <div className="relative flex w-full h-[145px] p-2.5 flex-col items-start gap-2.5 rounded-md border border-[#EAEAEA] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] box-border bg-white">
              <Textarea
                id="offer-guidelines"
                value={formData.offerGuidelines}
                onChange={(e) =>
                  updateFormData({
                    offerGuidelines: e.target.value,
                  })
                }
                placeholder="Description"
                className="flex-1 w-full h-full border-0 shadow-none bg-transparent resize-none font-dm-sans font-normal text-base text-[#0F0C1B] placeholder:text-[rgba(15,12,27,0.4)] leading-6 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
              />

              {/* Resize Handle */}
              <div className="absolute bottom-2.5 right-2.5">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-60"
                >
                  <path
                    d="M6.41762 8.18291L8.41981 5.7098M3.80703 8.45761L8.14511 3.09922"
                    stroke="#0F0C1B"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
