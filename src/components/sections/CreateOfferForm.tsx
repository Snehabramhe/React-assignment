import React, { useState } from "react";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { useWebsiteStore } from "../../store/websiteStore";
import { GreyNichePricingForm } from "./GreyNichePricingForm";
import { HomepageLinkForm } from "./HomepageLinkForm";

export const CreateOfferForm: React.FC = () => {
  const { formData, updateFormData } = useWebsiteStore();
  const [activeTab, setActiveTab] = useState("normal");

  const tabs = [
    { id: "normal", label: "Normal offer", active: true },
    { id: "grey", label: "Grey Niche offer", active: false },
    { id: "homepage", label: "Homepage link", active: false },
  ];

  return (
    <div className="flex flex-col items-start gap-5 w-full">
      <div className="text-[#0F0C1B] text-2xl max-sm:text-xl max-sm:leading-7 font-semibold leading-10">
        Create offer
      </div>

      <div className="flex p-6 flex-col items-start gap-12 rounded-lg shadow-sm w-full bg-white">
        {/* Tabs */}
        <div className="w-full h-12 relative">
          {/* Tab underline */}
          <div className="absolute left-0 top-[47px] w-full h-0 border-b border-[#EAEAEA]"></div>

          {/* Tab buttons */}
          <div className="flex items-center gap-12 max-lg:gap-6 max-sm:flex-col max-sm:gap-4 max-sm:h-auto absolute left-0 top-0 w-[536px] max-lg:w-full h-12">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`cursor-pointer p-2.5 gap-2.5 max-sm:w-full ${
                  activeTab === tab.id
                    ? "text-[#0F0C1B] border-b-2 border-[#613FDD]"
                    : "text-[rgba(15,12,27,0.40)]"
                } text-lg font-semibold leading-7`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-10 w-full">
          {activeTab === "normal" && (
            <div className="flex items-start gap-8 w-full max-lg:flex-col max-lg:gap-5">
              {/* Guest posting */}
              <div className="flex flex-col items-start gap-5">
                <Label htmlFor="guest-posting">Guest posting</Label>
                <div className="flex items-center">
                  <div className="flex">
                    <div className="w-10 h-10 px-3 py-2 rounded-l-md border border-r-0 border-[#EAEAEA] text-[#B3B3B3] text-center font-inter text-base font-normal leading-6 bg-[#FEFEFF] flex items-center justify-center">
                      $
                    </div>
                    <Input
                      id="guest-posting"
                      type="number"
                      value={formData.guestPostingPrice.toString()}
                      onChange={(e) =>
                        updateFormData({
                          guestPostingPrice: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-[222px] rounded-l-none border-l-0"
                    />
                  </div>
                </div>
              </div>

              {/* Link insertion */}
              <div className="flex flex-col items-start gap-5">
                <Label htmlFor="link-insertion">Link insertion</Label>
                <div className="flex items-center">
                  <div className="flex">
                    <div className="w-10 h-10 px-3 py-2 rounded-l-md border border-r-0 border-[#EAEAEA] text-[#B3B3B3] text-center font-inter text-base font-normal leading-6 bg-[#FEFEFF] flex items-center justify-center">
                      $
                    </div>
                    <Input
                      id="link-insertion"
                      type="number"
                      value={formData.linkInsertionPrice.toString()}
                      onChange={(e) =>
                        updateFormData({
                          linkInsertionPrice: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-[222px] rounded-l-none border-l-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "grey" && <GreyNichePricingForm />}

          {activeTab === "homepage" && <HomepageLinkForm />}
        </div>
      </div>
    </div>
  );
};
