import React from "react";
import { FormInput } from "../ui/FormInput";
import { FormSelect } from "../ui/FormSelect";
import { CategorySelector } from "../ui/CategorySelector";
import { Checkbox } from "../ui/Checkbox";
import { useWebsiteStore } from "../../store/websiteStore";

const languageOptions = [
  { value: "English", label: "English", flag: "us" },
  { value: "Spanish", label: "Spanish", flag: "es" },
  { value: "French", label: "French", flag: "fr" },
  { value: "German", label: "German", flag: "de" },
];

const countryOptions = [
  { value: "United States", label: "United states", flag: "us" },
  { value: "Canada", label: "Canada", flag: "ca" },
  { value: "United Kingdom", label: "United Kingdom", flag: "gb" },
  { value: "Australia", label: "Australia", flag: "au" },
];

export const WebsiteDetailsForm: React.FC = () => {
  const { formData, updateFormData } = useWebsiteStore();

  return (
    <div className="flex flex-col items-start gap-5 w-full shadow-sm">
      <div className="text-[#0F0C1B] text-2xl max-sm:text-xl max-sm:leading-7 font-semibold leading-10">
        Website detail
      </div>

      <div className="flex p-6 flex-col justify-center items-center gap-2.5 w-full rounded-md bg-white">
        <div className="flex w-full max-w-[1235px] flex-col items-start gap-[31px]">
          {/* Website URL and Language Row */}
          <div className="flex items-center gap-8 w-full max-lg:flex-col max-lg:gap-5">
            <FormInput
              label="Enter website"
              placeholder="Website URL"
              value={formData.websiteUrl}
              onChange={(value) => updateFormData({ websiteUrl: value })}
              type="url"
              className="w-[264px] max-lg:w-full"
            />

            <FormSelect
              label="Website's Primary language"
              value={formData.primaryLanguage}
              onChange={(value) => updateFormData({ primaryLanguage: value })}
              options={languageOptions}
              className="w-[264px] max-lg:w-full"
              showFlag
            />
          </div>

          {/* Traffic Country */}
          <div className="flex flex-col items-start gap-2 w-[264px] max-lg:w-full">
            <FormSelect
              label="Your Majority of traffic comes from"
              value={formData.majorityTrafficCountry}
              onChange={(value) =>
                updateFormData({ majorityTrafficCountry: value })
              }
              options={countryOptions}
              className="w-[264px] max-lg:w-full"
              showFlag
            />
          </div>

          {/* Categories */}
          <div className="flex w-full flex-col items-start gap-2">
            <div className="text-[#0F0C1B] text-sm font-medium leading-5 mb-[29px]">
              Main Category
            </div>

            <CategorySelector
              selectedCategories={formData.categories}
              onChange={(categories) => updateFormData({ categories })}
            />
          </div>

          {/* Description */}
          <div className="flex w-[856px] max-sm:w-full h-[126px] flex-col items-start gap-2">
            <div className="text-[#0F0C1B] text-sm font-medium leading-5">
              Description of Website
            </div>
            <div className="flex h-[98px] p-2.5 flex-col items-start gap-2.5 w-full rounded-md border border-[#EAEAEA] shadow-sm relative bg-white">
              <textarea
                value={formData.description}
                onChange={(e) =>
                  updateFormData({ description: e.target.value })
                }
                placeholder="Description"
                className="text-[rgba(15,12,27,0.40)] text-sm font-medium leading-5 w-full h-full resize-none border-none outline-none bg-transparent"
              />

              {/* Resize handle */}
              <div className="absolute right-2.5 bottom-2.5 w-[4.875px] h-[4.875px] transform rotate-[-83.993deg]">
                <svg
                  width="6"
                  height="7"
                  viewBox="0 0 6 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.12075 6.08525L5.12293 3.61215M0.510159 6.35995L4.84823 1.00156"
                    stroke="#0F0C1B"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Owner Checkbox */}
          <Checkbox
            checked={formData.isOwner}
            onChange={(checked) => updateFormData({ isOwner: checked })}
            label="I am the owner of the website"
          />
        </div>
      </div>
    </div>
  );
};
