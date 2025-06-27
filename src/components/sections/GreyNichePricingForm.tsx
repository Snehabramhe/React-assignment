import React from "react";
import { PriceInput } from "../ui/PriceInput";
import { Label } from "../ui/Label";
import { useWebsiteStore } from "../../store/websiteStore";

interface NichePricing {
  guestPosting: string;
  linkInsertion: string;
}

const RadioButtonIcon: React.FC<{ checked: boolean }> = ({ checked }) => (
  <div className="w-5 h-5 relative">
    {checked ? (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
          fill="#613FDD"
        />
        <path
          d="M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z"
          fill="#613FDD"
        />
      </svg>
    ) : (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
          fill="#EAEAEA"
        />
      </svg>
    )}
  </div>
);

const UnifiedPricingUI: React.FC = () => {
  const { formData, updateFormData } = useWebsiteStore();
  const pricingData = formData.greyNichePricing;

  const handleUnifiedPriceChange = (value: string) => {
    updateFormData({
      greyNichePricing: {
        ...pricingData,
        unifiedPrice: value,
      },
    });
  };

  const handleSamePriceChange = (checked: boolean) => {
    updateFormData({
      greyNichePricing: {
        ...pricingData,
        samePrice: checked,
      },
    });
  };

  const nicheNames = [
    { key: "gambling" as const, label: "Gambling" },
    { key: "crypto" as const, label: "Crypto" },
    { key: "adult" as const, label: "Adult" },
  ];

  return (
    <div className="flex flex-col items-start gap-10 w-full max-w-[826px]">
      {/* Radio button */}
      <div
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => handleSamePriceChange(false)}
      >
        <RadioButtonIcon checked={true} />
        <span className="text-[rgba(15,12,27,0.60)] font-dm-sans text-sm font-medium leading-5">
          I offer same price for all grey niches
        </span>
      </div>

      {/* Price input section */}
      <div className="flex flex-col items-start gap-2 w-full">
        <Label className="w-full text-left text-[#0F0C1B] font-dm-sans text-sm font-medium leading-5">
          Enter Price
        </Label>
        <div className="flex flex-col items-start gap-2.5 rounded-md border border-[#EAEAEA]">
          <div className="flex items-center w-full">
            <div className="w-10 h-10 px-2.5 py-2.5 flex-shrink-0 rounded-l-md border border-r-[0.5px] border-[#EAEAEA] bg-[#FEFEFF] text-[#B3B3B3] text-center font-inter text-base font-normal leading-6 flex items-center justify-center">
              $
            </div>
            <input
              type="text"
              value={pricingData.unifiedPrice}
              onChange={(e) => handleUnifiedPriceChange(e.target.value)}
              className="w-[222px] h-10 px-2.5 py-2.5 flex-shrink-0 rounded-r-md border border-l-0 border-[#EAEAEA] bg-[#FEFEFF] text-[rgba(15,12,27,0.40)] font-dm-sans text-sm font-medium leading-5 focus:outline-none focus:border-[#613FDD]"
              placeholder="54"
            />
          </div>
        </div>
      </div>

      {/* Disabled niche sections */}
      <div className="flex flex-col items-start gap-5 w-full opacity-25">
        {/* First row */}
        <div className="flex items-start gap-5 w-full flex-wrap">
          {nicheNames.map(({ key, label }) => (
            <div
              key={key}
              className="flex flex-col items-start gap-4 w-full max-w-[262px]"
            >
              <div className="w-full text-[rgba(15,12,27,0.60)] font-dm-sans text-base font-semibold leading-6 tracking-[-0.25px]">
                {label}
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                {/* Guest Posting Price */}
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="w-full text-[#0F0C1B] font-dm-sans text-sm font-medium leading-5">
                    Price for Guest Posting
                  </div>
                  <div className="flex flex-col items-start gap-2.5 w-full rounded-md border border-[#EAEAEA]">
                    <div className="flex items-center w-full max-w-[262px]">
                      <div className="w-10 h-10 px-2.5 py-2.5 flex-shrink-0 rounded-l-md border border-r-[0.5px] border-[#EAEAEA] bg-[#FEFEFF] text-[#B3B3B3] text-center font-inter text-base font-normal leading-6 flex items-center justify-center">
                        $
                      </div>
                      <div className="w-[222px] h-10 px-2.5 py-2.5 flex-shrink-0 rounded-r-md border border-l-0 border-[#EAEAEA] bg-[#FEFEFF] text-[rgba(15,12,27,0.40)] font-dm-sans text-sm font-medium leading-5 flex items-center">
                        54
                      </div>
                    </div>
                  </div>
                </div>

                {/* Link Insertion Price */}
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="w-full text-[#0F0C1B] font-dm-sans text-sm font-medium leading-5">
                    Price for Link Insertion
                  </div>
                  <div className="flex flex-col items-start gap-2.5 w-full rounded-md border border-[#EAEAEA]">
                    <div className="flex items-center w-full max-w-[262px]">
                      <div className="w-10 h-10 px-2.5 py-2.5 flex-shrink-0 rounded-l-md border border-r-[0.5px] border-[#EAEAEA] bg-[#FEFEFF] text-[#B3B3B3] text-center font-inter text-base font-normal leading-6 flex items-center justify-center">
                        $
                      </div>
                      <div className="w-[222px] h-10 px-2.5 py-2.5 flex-shrink-0 rounded-r-md border border-l-0 border-[#EAEAEA] bg-[#FEFEFF] text-[rgba(15,12,27,0.40)] font-dm-sans text-sm font-medium leading-5 flex items-center">
                        {key === "crypto" || key === "adult" ? "|" : "54"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="flex items-start gap-5 w-full flex-wrap">
          {nicheNames.map(({ key, label }) => (
            <div
              key={`${key}-2`}
              className="flex flex-col items-start gap-4 w-full max-w-[262px]"
            >
              <div className="w-full text-[rgba(15,12,27,0.60)] font-dm-sans text-base font-semibold leading-6 tracking-[-0.25px]">
                {label}
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                {/* Guest Posting Price */}
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="w-full text-[#0F0C1B] font-dm-sans text-sm font-medium leading-5">
                    Price for Guest Posting
                  </div>
                  <div className="flex flex-col items-start gap-2.5 w-full rounded-md border border-[#EAEAEA]">
                    <div className="flex items-center w-full max-w-[262px]">
                      <div className="w-10 h-10 px-2.5 py-2.5 flex-shrink-0 rounded-l-md border border-r-[0.5px] border-[#EAEAEA] bg-[#FEFEFF] text-[#B3B3B3] text-center font-inter text-base font-normal leading-6 flex items-center justify-center">
                        $
                      </div>
                      <div className="w-[222px] h-10 px-2.5 py-2.5 flex-shrink-0 rounded-r-md border border-l-0 border-[#EAEAEA] bg-[#FEFEFF] text-[rgba(15,12,27,0.40)] font-dm-sans text-sm font-medium leading-5 flex items-center">
                        54
                      </div>
                    </div>
                  </div>
                </div>

                {/* Link Insertion Price */}
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="w-full text-[#0F0C1B] font-dm-sans text-sm font-medium leading-5">
                    Price for Link Insertion
                  </div>
                  <div className="flex flex-col items-start gap-2.5 w-full rounded-md border border-[#EAEAEA]">
                    <div className="flex items-center w-full max-w-[262px]">
                      <div className="w-10 h-10 px-2.5 py-2.5 flex-shrink-0 rounded-l-md border border-r-[0.5px] border-[#EAEAEA] bg-[#FEFEFF] text-[#B3B3B3] text-center font-inter text-base font-normal leading-6 flex items-center justify-center">
                        $
                      </div>
                      <div className="w-[222px] h-10 px-2.5 py-2.5 flex-shrink-0 rounded-r-md border border-l-0 border-[#EAEAEA] bg-[#FEFEFF] text-[rgba(15,12,27,0.40)] font-dm-sans text-sm font-medium leading-5 flex items-center">
                        |
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const GreyNichePricingForm: React.FC = () => {
  const { formData, updateFormData } = useWebsiteStore();
  const pricingData = formData.greyNichePricing;

  const handleSamePriceChange = (checked: boolean) => {
    updateFormData({
      greyNichePricing: {
        ...pricingData,
        samePrice: checked,
      },
    });
  };

  const handleNichePriceChange = (
    niche: keyof typeof pricingData.niches,
    field: keyof NichePricing,
    value: string,
  ) => {
    updateFormData({
      greyNichePricing: {
        ...pricingData,
        niches: {
          ...pricingData.niches,
          [niche]: {
            ...pricingData.niches[niche],
            [field]: value,
          },
        },
      },
    });
  };

  const nicheNames = [
    { key: "gambling" as const, label: "Gambling" },
    { key: "crypto" as const, label: "Crypto" },
    { key: "adult" as const, label: "Adult" },
  ];

  // Conditional rendering based on samePrice checkbox
  if (pricingData.samePrice) {
    return (
      <div className="flex flex-col items-start gap-12 max-w-[1060px] rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-white">
        <UnifiedPricingUI />
      </div>
    );
  }

  // Original UI when checkbox is not checked
  return (
    <div className="flex flex-col items-start gap-12 w-full max-w-[826px]">
      {/* Same price radio button */}
      <div
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => handleSamePriceChange(true)}
      >
        <RadioButtonIcon checked={false} />
        <span className="text-[rgba(15,12,27,0.60)] font-dm-sans text-sm font-medium leading-5">
          I offer same price for all grey niches
        </span>
      </div>

      {/* Niche pricing grid */}
      <div className="flex flex-col gap-5 w-full">
        {/* First row */}
        <div className="flex items-center gap-5 justify-start flex-wrap w-full">
          {nicheNames.map(({ key, label }) => (
            <div key={key} className="flex-1 min-w-[240px]">
              <div className="text-[#0f0c1b] font-dm-sans text-base font-semibold leading-none tracking-[-0.25px] mb-4">
                {label}
              </div>
              <div className="flex flex-col gap-3 w-full">
                {/* Guest Posting Price */}
                <div className="w-full">
                  <Label className="text-[#0F0C1B] font-dm-sans text-sm font-medium leading-none mb-2 block">
                    Price for Guest Posting
                  </Label>
                  <PriceInput
                    value={pricingData.niches[key].guestPosting}
                    onChange={(value) =>
                      handleNichePriceChange(key, "guestPosting", value)
                    }
                    className="w-full"
                  />
                </div>

                {/* Link Insertion Price */}
                <div className="w-full">
                  <Label className="text-[#0F0C1B] font-dm-sans text-sm font-medium leading-none mb-2 block">
                    Price for Link Insertion
                  </Label>
                  <PriceInput
                    value={pricingData.niches[key].linkInsertion}
                    onChange={(value) =>
                      handleNichePriceChange(key, "linkInsertion", value)
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - duplicate of first row as shown in design */}
        <div className="flex items-center gap-5 justify-start flex-wrap w-full">
          {nicheNames.map(({ key, label }) => (
            <div key={`${key}-2`} className="flex-1 min-w-[240px]">
              <div className="text-[#0f0c1b] font-dm-sans text-base font-semibold leading-none tracking-[-0.25px] mb-4">
                {label}
              </div>
              <div className="flex flex-col gap-3 w-full">
                {/* Guest Posting Price */}
                <div className="w-full">
                  <Label className="text-[#0F0C1B] font-dm-sans text-sm font-medium leading-none mb-2 block">
                    Price for Guest Posting
                  </Label>
                  <PriceInput
                    value={pricingData.niches[key].guestPosting}
                    onChange={(value) =>
                      handleNichePriceChange(key, "guestPosting", value)
                    }
                    className="w-full"
                  />
                </div>

                {/* Link Insertion Price */}
                <div className="w-full">
                  <Label className="text-[#0F0C1B] font-dm-sans text-sm font-medium leading-none mb-2 block">
                    Price for Link Insertion
                  </Label>
                  <PriceInput
                    value={pricingData.niches[key].linkInsertion}
                    onChange={(value) =>
                      handleNichePriceChange(key, "linkInsertion", value)
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
