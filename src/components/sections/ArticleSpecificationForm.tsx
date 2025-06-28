import React from "react";
import { useNavigate } from "react-router-dom";
import { useWebsiteStore } from "../../store/websiteStore";
import type { Website } from "../../types";

interface RadioProps {
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}

const Radio: React.FC<RadioProps> = ({
  value,
  selectedValue,
  onChange,
  label,
  className = "",
}) => {
  const isSelected = selectedValue === value;

  return (
    <div
      className={`flex items-center gap-2 self-stretch relative ${className}`}
    >
      <div
        className="w-4 h-4 relative cursor-pointer"
        onClick={() => onChange(value)}
      >
        <div className="w-4 h-4 flex-shrink-0 rounded-full border border-[#EAEAEA] absolute left-0 top-0" />
        {isSelected && (
          <div className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-[#613FDD] absolute left-[3px] top-[3px]" />
        )}
      </div>
      <div
        className="text-[rgba(15,12,27,0.60)] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative cursor-pointer text-left"
        onClick={() => onChange(value)}
      >
        {label}
      </div>
    </div>
  );
};

interface RangeInputsProps {
  minValue: number;
  maxValue: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
  resetKey?: number;
}

const RangeInputs: React.FC<RangeInputsProps> = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  resetKey,
}) => {
  const [minInput, setMinInput] = React.useState("");
  const [maxInput, setMaxInput] = React.useState("");

  // Reset local state when resetKey changes
  React.useEffect(() => {
    setMinInput("");
    setMaxInput("");
  }, [resetKey]);

  return (
    <div className="flex pl-6 flex-col items-start gap-2.5 relative">
      <div className="flex w-[237px] h-10 justify-between items-center relative">
        <div className="flex w-[95px] h-10 px-3 py-2 flex-col justify-center items-start gap-2.5 flex-shrink-0 rounded-md border border-[#EAEAEA] relative bg-white">
          <input
            type="number"
            value={minInput}
            onChange={(e) => {
              const value = e.target.value;
              setMinInput(value);
              const numValue = parseInt(value) || 0;
              onMinChange(numValue);
              console.log("Min value updated:", numValue);
            }}
            placeholder="Min"
            className="w-full h-auto p-0 border-0 text-[rgba(15,12,27,0.40)] font-inter text-sm font-normal leading-5 tracking-[0.25px] bg-transparent focus:ring-0 focus:outline-none text-left"
          />
        </div>
        <div className="w-2 h-px flex-shrink-0 rounded-sm bg-[#EAEAEA] relative" />
        <div className="flex w-[95px] h-10 px-3 py-2 flex-col justify-center items-start gap-2.5 flex-shrink-0 rounded-md border border-[#EAEAEA] relative bg-white">
          <input
            type="number"
            value={maxInput}
            onChange={(e) => {
              const value = e.target.value;
              setMaxInput(value);
              const numValue = parseInt(value) || 0;
              onMaxChange(numValue);
              console.log("Max value updated:", numValue);
            }}
            placeholder="Max"
            className="w-full h-auto p-0 border-0 text-[rgba(15,12,27,0.40)] font-inter text-sm font-normal leading-5 tracking-[0.25px] bg-transparent focus:ring-0 focus:outline-none text-left"
          />
        </div>
      </div>
    </div>
  );
};

interface ArticleSpecificationFormProps {
  onReset?: () => void;
}

export const ArticleSpecificationForm: React.FC<
  ArticleSpecificationFormProps
> = ({ onReset }) => {
  const { formData, updateFormData, resetForm, addWebsite } = useWebsiteStore();
  const [resetKey, setResetKey] = React.useState(0);
  const navigate = useNavigate();

  const handleSave = () => {
    // Save the current form data (it's already in the store via updateFormData calls)
    console.log("=== SENDING DATA TO STORE ===");
    console.log("Complete Form Data:", formData);
    console.log("User Input Details:", {
      websiteUrl: formData.websiteUrl,
      primaryLanguage: formData.primaryLanguage,
      majorityTrafficCountry: formData.majorityTrafficCountry,
      categories: formData.categories,
      description: formData.description,
      writingIncluded: formData.writingIncluded,
      wordCountPolicy: formData.wordCountPolicy,
      minWords: formData.minWords,
      maxWords: formData.maxWords,
      allowDofollow: formData.allowDofollow,
      linkTypes: formData.linkTypes,
      taggingPolicy: formData.taggingPolicy,
      linksToAdvertiser: formData.linksToAdvertiser,
      minLinksToAdvertiser: formData.minLinksToAdvertiser,
      maxLinksToAdvertiser: formData.maxLinksToAdvertiser,
      allowOtherLinks: formData.allowOtherLinks,
      otherContentRules: formData.otherContentRules,
      preconditionsAccepted: formData.preconditionsAccepted,
      guestPostingPrice: formData.guestPostingPrice,
      linkInsertionPrice: formData.linkInsertionPrice,
      homepageLinkPrice: formData.homepageLinkPrice,
    });

    // Create website entry for the table (only 6 columns: website url, country, language, category, other categories, grey niches)
    const newWebsite: Website = {
      id: Date.now().toString(), // Simple ID generation
      domain: formData.websiteUrl || "example.com",
      country: {
        name: formData.majorityTrafficCountry || "United States",
        flag:
          formData.majorityTrafficCountry === "Germany"
            ? "🇩🇪"
            : formData.majorityTrafficCountry === "United States"
              ? "🇺🇸"
              : "🇺🇸",
      },
      language: formData.primaryLanguage || "English",
      category:
        formData.categories.length > 0
          ? formData.categories[0]
          : "Not specified",
      otherCategories:
        formData.categories.length > 1
          ? formData.categories.slice(1).join(", ")
          : "None",
      greyNiches: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/36deee2070e39f486f835591b7c0cb8b25d206cd?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/955167939b698a3a4bf25addb8e8548e67467e7d?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/da4fd0fa59a401fd221301f290d8f9aec9f94f91?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/276377205453bf585a93eff4205ad5d9fecadbb8?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d77a02bc3c4c40629ccb66f68aa0949ef1da8831?placeholderIfAbsent=true",
      ],
    };

    console.log("=== CREATING WEBSITE ENTRY FOR TABLE ===");
    console.log("Website URL:", formData.websiteUrl);
    console.log("Country:", formData.majorityTrafficCountry);
    console.log("Language:", formData.primaryLanguage);
    console.log("Categories:", formData.categories);
    console.log(
      "Primary Category:",
      formData.categories.length > 0 ? formData.categories[0] : "Not specified",
    );
    console.log(
      "Other Categories:",
      formData.categories.length > 1
        ? formData.categories.slice(1).join(", ")
        : "None",
    );
    console.log("Final Website Object for Table:", newWebsite);

    // Add website to store
    addWebsite(newWebsite);
    console.log("Website added to store successfully!");
    console.log("Check store state after adding website...");

    alert("Website data saved successfully and added to your websites list!");

    // Reset the entire form after saving
    resetForm();
    setResetKey((prev) => prev + 1); // Trigger RangeInputs reset
    onReset?.(); // Trigger accordion reset
    console.log("Form has been reset to initial values");

    // Navigate to MyWebsites page to show the new entry
    navigate("/");
  };

  return (
    <div className="flex w-full max-w-[1283px] flex-col items-start gap-5 relative mx-auto p-5 box-border">
      <div className="self-stretch text-[#0F0C1B] font-dm-sans text-2xl font-bold leading-10 relative text-left">
        Article specification
      </div>

      <div className="flex w-full max-w-[1024px] p-6 flex-col justify-center items-center gap-2.5 rounded-lg relative box-border bg-white">
        <div className="flex items-start gap-20 self-stretch relative flex-wrap">
          {/* Left Column */}
          <div className="flex w-[400px] flex-col items-start gap-10 relative min-w-[300px] flex-1">
            {/* Is writing of an article included in the offer? */}
            <div className="flex flex-col items-start gap-6 self-stretch relative">
              <div className="self-stretch text-[#0F0C1B] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative text-left">
                Is writing of an article included in the offer?
              </div>
              <div className="flex flex-col items-start gap-3 self-stretch relative">
                <Radio
                  value="yes"
                  selectedValue={formData.writingIncluded}
                  onChange={(value) =>
                    updateFormData({ writingIncluded: value as "yes" | "no" })
                  }
                  label="Yes"
                />
                <Radio
                  value="no"
                  selectedValue={formData.writingIncluded}
                  onChange={(value) =>
                    updateFormData({ writingIncluded: value as "yes" | "no" })
                  }
                  label="No, the advertiser (client) needs to provide the content"
                />
              </div>
            </div>

            {/* Number of words in the article */}
            <div className="flex flex-col items-start gap-2.5 self-stretch relative">
              <div className="flex flex-col items-start gap-6 self-stretch relative">
                <div className="self-stretch text-[#0F0C1B] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative text-left">
                  Number of words in the article
                </div>
                <div className="flex flex-col items-start gap-3 self-stretch relative">
                  <Radio
                    value="unlimited"
                    selectedValue={formData.wordCountPolicy}
                    onChange={(value) =>
                      updateFormData({
                        wordCountPolicy: value as "unlimited" | "limited",
                      })
                    }
                    label="Length of the article is not limited."
                  />
                  <Radio
                    value="limited"
                    selectedValue={formData.wordCountPolicy}
                    onChange={(value) =>
                      updateFormData({
                        wordCountPolicy: value as "unlimited" | "limited",
                      })
                    }
                    label="No, the advertiser (client) needs to provide the content"
                  />
                </div>
              </div>
              <RangeInputs
                minValue={formData.minWords}
                maxValue={formData.maxWords}
                onMinChange={(value) => updateFormData({ minWords: value })}
                onMaxChange={(value) => updateFormData({ maxWords: value })}
                resetKey={resetKey}
              />
            </div>

            {/* I allow DOFOLLOW links in the article */}
            <div className="flex flex-col items-start gap-6 self-stretch relative">
              <div className="self-stretch text-[#0F0C1B] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative text-left">
                I allow DOFOLLOW links in the article
              </div>
              <div className="flex flex-col items-start gap-3 self-stretch relative">
                <Radio
                  value="true"
                  selectedValue={formData.allowDofollow.toString()}
                  onChange={(value) =>
                    updateFormData({ allowDofollow: value === "true" })
                  }
                  label="Yes"
                />
                <Radio
                  value="false"
                  selectedValue={formData.allowDofollow.toString()}
                  onChange={(value) =>
                    updateFormData({ allowDofollow: value === "true" })
                  }
                  label="No"
                />
              </div>
            </div>

            {/* Type of links allowed */}
            <div className="flex flex-col items-start gap-6 self-stretch relative">
              <div className="self-stretch text-[#0F0C1B] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative text-left">
                Type of links allowed:
              </div>
              <div className="flex flex-col items-start gap-3 self-stretch relative">
                <Radio
                  value="brand-only"
                  selectedValue={formData.linkTypes}
                  onChange={(value) =>
                    updateFormData({ linkTypes: value as any })
                  }
                  label="Only brand links, URL, navigational, graphic links."
                />
                <Radio
                  value="brand-generic"
                  selectedValue={formData.linkTypes}
                  onChange={(value) =>
                    updateFormData({ linkTypes: value as any })
                  }
                  label="Only branded and generic links."
                />
                <Radio
                  value="mixed"
                  selectedValue={formData.linkTypes}
                  onChange={(value) =>
                    updateFormData({ linkTypes: value as any })
                  }
                  label="Also mixed links (partly exact match anchors)."
                />
                <Radio
                  value="all"
                  selectedValue={formData.linkTypes}
                  onChange={(value) =>
                    updateFormData({ linkTypes: value as any })
                  }
                  label="All links, including exact match anchors."
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-[471px] flex-col items-start gap-10 relative min-w-[300px] flex-1">
            {/* Tagging articles policy */}
            <div className="flex w-[400px] flex-col items-start gap-6 relative">
              <div className="self-stretch text-[#0F0C1B] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative text-left">
                Tagging articles policy:
              </div>
              <div className="flex flex-col items-start gap-3 self-stretch relative">
                <Radio
                  value="no-tag"
                  selectedValue={formData.taggingPolicy}
                  onChange={(value) =>
                    updateFormData({ taggingPolicy: value as any })
                  }
                  label="We do not tag paid articles."
                />
                <Radio
                  value="on-request"
                  selectedValue={formData.taggingPolicy}
                  onChange={(value) =>
                    updateFormData({ taggingPolicy: value as any })
                  }
                  label="Articles are tagged only at the advertiser's request."
                />
                <Radio
                  value="always-sponsored"
                  selectedValue={formData.taggingPolicy}
                  onChange={(value) =>
                    updateFormData({ taggingPolicy: value as any })
                  }
                  label='We always tag articles: "Sponsored article".'
                />
                <Radio
                  value="always-all"
                  selectedValue={formData.taggingPolicy}
                  onChange={(value) =>
                    updateFormData({ taggingPolicy: value as any })
                  }
                  label="All links, including exact match anchors."
                />
              </div>
            </div>

            {/* A number of links to the advertiser in the article */}
            <div className="flex w-[400px] flex-col items-start gap-2.5 relative">
              <div className="flex flex-col items-start gap-6 self-stretch relative">
                <div className="self-stretch text-[#0F0C1B] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative text-left">
                  A number of links to the advertiser in the article:
                </div>
                <div className="flex flex-col items-start gap-3 self-stretch relative">
                  <Radio
                    value="unlimited"
                    selectedValue={formData.linksToAdvertiser}
                    onChange={(value) =>
                      updateFormData({
                        linksToAdvertiser: value as "unlimited" | "limited",
                      })
                    }
                    label="We do not tag paid articles."
                  />
                  <Radio
                    value="limited"
                    selectedValue={formData.linksToAdvertiser}
                    onChange={(value) =>
                      updateFormData({
                        linksToAdvertiser: value as "unlimited" | "limited",
                      })
                    }
                    label="A maximum number of links to the advertiser:"
                  />
                </div>
              </div>
              <RangeInputs
                minValue={formData.minLinksToAdvertiser}
                maxValue={formData.maxLinksToAdvertiser}
                onMinChange={(value) =>
                  updateFormData({ minLinksToAdvertiser: value })
                }
                onMaxChange={(value) =>
                  updateFormData({ maxLinksToAdvertiser: value })
                }
                resetKey={resetKey}
              />
            </div>

            {/* Other links in the article */}
            <div className="flex w-[400px] flex-col items-start gap-6 relative">
              <div className="self-stretch text-[#0F0C1B] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative text-left">
                Other links in the article:
              </div>
              <div className="flex flex-col items-start gap-3 self-stretch relative">
                <div className="flex items-center gap-2 self-stretch relative">
                  <div
                    className="w-4 h-4 relative cursor-pointer"
                    onClick={() => updateFormData({ allowOtherLinks: true })}
                  >
                    <div className="w-4 h-4 flex-shrink-0 rounded-full border border-[#EAEAEA] absolute left-0 top-0" />
                    {formData.allowOtherLinks && (
                      <div className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-[#613FDD] absolute left-[3px] top-[3px]" />
                    )}
                  </div>
                  <div
                    className="text-[rgba(15,12,27,0.60)] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative cursor-pointer text-left whitespace-nowrap ml-4"
                    onClick={() => updateFormData({ allowOtherLinks: true })}
                  >
                    We allow links to other websites in the content of the
                    article.
                  </div>
                </div>
                <div className="flex items-center gap-2 self-stretch relative">
                  <div
                    className="w-4 h-4 relative cursor-pointer"
                    onClick={() => updateFormData({ allowOtherLinks: false })}
                  >
                    <div className="w-4 h-4 flex-shrink-0 rounded-full border border-[#EAEAEA] absolute left-0 top-0" />
                    {!formData.allowOtherLinks && (
                      <div className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-[#613FDD] absolute left-[3px] top-[3px]" />
                    )}
                  </div>
                  <div
                    className="text-[rgba(15,12,27,0.60)] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative cursor-pointer text-left whitespace-nowrap ml-4"
                    onClick={() => updateFormData({ allowOtherLinks: false })}
                  >
                    We DO NOT allow links to other websites in the content of
                    the article.
                  </div>
                </div>
              </div>
            </div>

            {/* Other content rules/specifications */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <div className="self-stretch text-[#0F0C1B] font-inter text-sm font-normal leading-5 tracking-[0.25px] relative text-left">
                Other content rules/specifications:
              </div>
              <div className="flex h-[145px] p-2.5 flex-col items-start gap-2.5 self-stretch rounded-md border border-[#EAEAEA] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] relative bg-white">
                <textarea
                  value={formData.otherContentRules}
                  onChange={(e) =>
                    updateFormData({ otherContentRules: e.target.value })
                  }
                  placeholder="Description"
                  className="w-full h-full border-0 p-0 resize-none text-[rgba(15,12,27,0.40)] font-dm-sans text-sm font-normal leading-5 bg-transparent focus:ring-0 focus:outline-none text-left"
                />
                <div className="absolute bottom-2 right-2">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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

      {/* Action Buttons */}
      <div className="flex items-center gap-4 relative">
        <button
          onClick={handleSave}
          className="flex h-8 px-3 py-1 justify-center items-center gap-2 rounded-md bg-[#613FDD] text-white font-inter text-sm font-medium leading-5 cursor-pointer hover:bg-[#5235c7] transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
};
