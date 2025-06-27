import React from "react";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { CategorySelector } from "../ui/CategorySelector";
import { Checkbox } from "../ui/Checkbox";
import { useWebsiteStore } from "../../store/websiteStore";

export const languageOptions = [
  { value: "English", label: "English", flag: "🇺🇸" },
  { value: "Spanish", label: "Spanish", flag: "🇪🇸" },
  { value: "French", label: "French", flag: "🇫🇷" },
  { value: "German", label: "German", flag: "🇩🇪" },
  { value: "Hindi", label: "Hindi", flag: "🇮🇳" },
  { value: "Chinese", label: "Chinese", flag: "🇨🇳" },
  { value: "Arabic", label: "Arabic", flag: "🇸🇦" },
];

export const countryOptions = [
  { value: "United States", label: "United States", flag: "🇺🇸" },
  { value: "Canada", label: "Canada", flag: "🇨🇦" },
  { value: "United Kingdom", label: "United Kingdom", flag: "🇬🇧" },
  { value: "Australia", label: "Australia", flag: "🇦🇺" },
  { value: "India", label: "India", flag: "🇮🇳" },
  { value: "Germany", label: "Germany", flag: "🇩🇪" },
  { value: "Spain", label: "Spain", flag: "🇪🇸" },
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
            <div className="flex flex-col items-start gap-2 w-[264px] max-lg:w-full">
              <Label htmlFor="website-url">Enter website</Label>
              <Input
                id="website-url"
                type="url"
                placeholder="Website URL"
                value={formData.websiteUrl}
                onChange={(e) => updateFormData({ websiteUrl: e.target.value })}
                className="w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2 w-[264px] max-lg:w-full">
              <Label htmlFor="primary-language">
                Website's Primary language
              </Label>
              <Select
                value={formData.primaryLanguage}
                onValueChange={(value) =>
                  updateFormData({ primaryLanguage: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Select language"
                    defaultValue={formData.primaryLanguage}
                  >
                    {
                      languageOptions.find(
                        (lang) => lang.value === formData.primaryLanguage
                      )?.flag
                    }{" "}
                    {formData.primaryLanguage}
                  </SelectValue>
                </SelectTrigger>

                <SelectContent>
                  {languageOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <span className="flex items-center gap-2">
                        <span>{option.flag}</span>
                        <span>{option.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Traffic Country */}
            <div className="flex flex-col items-start gap-2 w-[264px] max-lg:w-full">
              <Label htmlFor="traffic-country">
                Your Majority of traffic comes from
              </Label>
              <Select
                value={formData.majorityTrafficCountry}
                onValueChange={(value) =>
                  updateFormData({ majorityTrafficCountry: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Select country"
                    defaultValue={formData.majorityTrafficCountry}
                  >
                    {
                      countryOptions.find(
                        (c) => c.value === formData.majorityTrafficCountry
                      )?.flag
                    }{" "}
                    {formData.majorityTrafficCountry}
                  </SelectValue>
                </SelectTrigger>

                <SelectContent>
                  {countryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <span className="flex items-center gap-2">
                        <span>{option.flag}</span>
                        <span>{option.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
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
          <div className="flex w-[856px] max-sm:w-full flex-col items-start gap-2">
            <Label htmlFor="description">Description of Website</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => updateFormData({ description: e.target.value })}
              placeholder="Description"
              className="min-h-[98px] resize-none"
            />
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
