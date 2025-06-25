import React from "react";
import { RadioButton } from "../ui/RadioButton";
import { useWebsiteStore } from "../../store/websiteStore";

export const ArticleSpecificationForm: React.FC = () => {
  const { formData, updateFormData } = useWebsiteStore();

  return (
    <div className="flex flex-col items-start gap-5 w-full">
      <div className="text-[#0F0C1B] text-2xl max-sm:text-xl max-sm:leading-7 font-semibold leading-10">
        Article specification
      </div>

      <div className="flex p-6 flex-col items-start gap-12 rounded-lg shadow-sm w-full bg-white">
        <div className="flex flex-col items-start gap-10 w-full">
          {/* Row 1: Writing included & Tagging policy */}
          <div className="flex items-start gap-8 w-full max-lg:flex-col max-lg:gap-6">
            {/* Writing included */}
            <div className="flex flex-col items-start gap-5 flex-1">
              <div className="text-[#0F0C1B] text-sm font-medium leading-5">
                Is writing of an article included in the offer?
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <RadioButton
                  value="yes"
                  selectedValue={formData.writingIncluded}
                  onChange={(value) =>
                    updateFormData({ writingIncluded: value as "yes" | "no" })
                  }
                  label="Yes"
                />
                <RadioButton
                  value="no"
                  selectedValue={formData.writingIncluded}
                  onChange={(value) =>
                    updateFormData({ writingIncluded: value as "yes" | "no" })
                  }
                  label="No, the advertiser (client) needs to provide the content"
                />
              </div>
            </div>

            {/* Tagging policy */}
            <div className="flex flex-col items-start gap-5 flex-1">
              <div className="text-[#0F0C1B] text-sm font-medium leading-5">
                Tagging articles policy
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <RadioButton
                  value="no-tag"
                  selectedValue={formData.taggingPolicy}
                  onChange={(value) =>
                    updateFormData({ taggingPolicy: value as any })
                  }
                  label="We do not tag paid articles"
                />
                <RadioButton
                  value="on-request"
                  selectedValue={formData.taggingPolicy}
                  onChange={(value) =>
                    updateFormData({ taggingPolicy: value as any })
                  }
                  label="Articles are tagged only at the advertiser's request"
                />
                <RadioButton
                  value="always-sponsored"
                  selectedValue={formData.taggingPolicy}
                  onChange={(value) =>
                    updateFormData({ taggingPolicy: value as any })
                  }
                  label='We always tag articles: "Sponsored article"'
                />
                <RadioButton
                  value="always-all"
                  selectedValue={formData.taggingPolicy}
                  onChange={(value) =>
                    updateFormData({ taggingPolicy: value as any })
                  }
                  label="All links, including exact match anchors"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Word count & Links to advertiser */}
          <div className="flex items-start gap-8 w-full max-lg:flex-col max-lg:gap-6">
            {/* Word count */}
            <div className="flex flex-col items-start gap-5 flex-1">
              <div className="text-[#0F0C1B] text-sm font-medium leading-5">
                Number of words in the article
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <RadioButton
                  value="unlimited"
                  selectedValue={formData.wordCountPolicy}
                  onChange={(value) =>
                    updateFormData({
                      wordCountPolicy: value as "unlimited" | "limited",
                    })
                  }
                  label="Length of the article is not limited"
                />
                <RadioButton
                  value="limited"
                  selectedValue={formData.wordCountPolicy}
                  onChange={(value) =>
                    updateFormData({
                      wordCountPolicy: value as "unlimited" | "limited",
                    })
                  }
                  label="No, the advertiser (client) needs to provide the content"
                />

                {/* Min/Max inputs */}
                <div className="flex items-center gap-4 mt-3 max-sm:flex-col max-sm:gap-3">
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-[#0F0C1B] text-xs font-medium leading-4">
                      Min
                    </div>
                    <input
                      type="number"
                      value={formData.minWords}
                      onChange={(e) =>
                        updateFormData({
                          minWords: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-20 max-sm:w-full h-8 px-2 py-1.5 rounded border border-[#EAEAEA] text-[rgba(15,12,27,0.40)] text-sm font-normal leading-5 bg-white outline-none"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-[#0F0C1B] text-xs font-medium leading-4">
                      Max
                    </div>
                    <input
                      type="number"
                      value={formData.maxWords}
                      onChange={(e) =>
                        updateFormData({
                          maxWords: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-20 max-sm:w-full h-8 px-2 py-1.5 rounded border border-[#EAEAEA] text-[rgba(15,12,27,0.40)] text-sm font-normal leading-5 bg-white outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Links to advertiser */}
            <div className="flex flex-col items-start gap-5 flex-1">
              <div className="text-[#0F0C1B] text-sm font-medium leading-5">
                A number of links to the advertiser in the article:
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <RadioButton
                  value="unlimited"
                  selectedValue={formData.linksToAdvertiser}
                  onChange={(value) =>
                    updateFormData({
                      linksToAdvertiser: value as "unlimited" | "limited",
                    })
                  }
                  label="We do not tag paid articles"
                />

                <div className="flex flex-col items-start gap-2 mt-3 w-full">
                  <div className="text-[rgba(15,12,27,0.60)] text-sm font-normal leading-5">
                    A maximum number of links to the advertiser:
                  </div>
                  <div className="flex items-center gap-4 max-sm:flex-col max-sm:gap-3">
                    <div className="flex flex-col items-start gap-1">
                      <div className="text-[rgba(15,12,27,0.60)] text-sm font-normal leading-5">
                        Min
                      </div>
                      <input
                        type="number"
                        value={formData.minLinksToAdvertiser}
                        onChange={(e) =>
                          updateFormData({
                            minLinksToAdvertiser: parseInt(e.target.value) || 0,
                          })
                        }
                        className="w-20 max-sm:w-full h-8 px-2 py-1.5 rounded border border-[#EAEAEA] text-[rgba(15,12,27,0.40)] text-sm font-normal leading-5 bg-white outline-none"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <div className="text-[rgba(15,12,27,0.60)] text-sm font-normal leading-5">
                        Max
                      </div>
                      <input
                        type="number"
                        value={formData.maxLinksToAdvertiser}
                        onChange={(e) =>
                          updateFormData({
                            maxLinksToAdvertiser: parseInt(e.target.value) || 0,
                          })
                        }
                        className="w-20 max-sm:w-full h-8 px-2 py-1.5 rounded border border-[#EAEAEA] text-[rgba(15,12,27,0.40)] text-sm font-normal leading-5 bg-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Dofollow & Other links */}
          <div className="flex items-start gap-8 w-full max-lg:flex-col max-lg:gap-6">
            {/* Dofollow */}
            <div className="flex flex-col items-start gap-5 flex-1">
              <div className="text-[#0F0C1B] text-sm font-medium leading-5">
                I allow DOFOLLOW links in the article
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <RadioButton
                  value="true"
                  selectedValue={formData.allowDofollow.toString()}
                  onChange={(value) =>
                    updateFormData({ allowDofollow: value === "true" })
                  }
                  label="Yes"
                />
              </div>
            </div>

            {/* Other links */}
            <div className="flex flex-col items-start gap-5 flex-1">
              <div className="text-[#0F0C1B] text-sm font-medium leading-5">
                Other links in the article:
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <RadioButton
                  value="true"
                  selectedValue={formData.allowOtherLinks.toString()}
                  onChange={(value) =>
                    updateFormData({ allowOtherLinks: value === "true" })
                  }
                  label="We allow links to other websites in the content of the article"
                />
                <RadioButton
                  value="false"
                  selectedValue={formData.allowOtherLinks.toString()}
                  onChange={(value) =>
                    updateFormData({ allowOtherLinks: value === "true" })
                  }
                  label="We DO NOT allow links to other websites in the content of the article"
                />
              </div>
            </div>
          </div>

          {/* Row 4: Link types & Content rules */}
          <div className="flex items-start gap-8 w-full max-lg:flex-col max-lg:gap-6">
            {/* Link types */}
            <div className="flex flex-col items-start gap-5 flex-1">
              <div className="text-[#0F0C1B] text-sm font-medium leading-5">
                Type of links allowed:
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <RadioButton
                  value="brand-only"
                  selectedValue={formData.linkTypes}
                  onChange={(value) =>
                    updateFormData({ linkTypes: value as any })
                  }
                  label="Only brand links, URL, navigational, graphic links"
                />
                <RadioButton
                  value="brand-generic"
                  selectedValue={formData.linkTypes}
                  onChange={(value) =>
                    updateFormData({ linkTypes: value as any })
                  }
                  label="Only branded and generic links"
                />
                <RadioButton
                  value="mixed"
                  selectedValue={formData.linkTypes}
                  onChange={(value) =>
                    updateFormData({ linkTypes: value as any })
                  }
                  label="Also mixed links (partly exact match anchors)"
                />
                <RadioButton
                  value="all"
                  selectedValue={formData.linkTypes}
                  onChange={(value) =>
                    updateFormData({ linkTypes: value as any })
                  }
                  label="All links, including exact match anchors"
                />
              </div>
            </div>

            {/* Content rules */}
            <div className="flex flex-col items-start gap-5 flex-1">
              <div className="text-[#0F0C1B] text-sm font-medium leading-5">
                Other content rules/specifications:
              </div>
              <textarea
                value={formData.otherContentRules}
                onChange={(e) =>
                  updateFormData({ otherContentRules: e.target.value })
                }
                placeholder="Description"
                className="text-[rgba(15,12,27,0.40)] text-sm font-medium leading-5 h-20 p-2.5 gap-2.5 w-full rounded-md border border-[#EAEAEA] shadow-sm bg-white resize-none outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
