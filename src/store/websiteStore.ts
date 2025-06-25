import { create } from "zustand";

export interface WebsiteFormData {
  // Website Details
  websiteUrl: string;
  primaryLanguage: string;
  majorityTrafficCountry: string;
  categories: string[];
  description: string;
  isOwner: boolean;

  // Create Offer
  guestPostingPrice: number;
  linkInsertionPrice: number;

  // Article Specifications
  writingIncluded: "yes" | "no";
  taggingPolicy: "no-tag" | "on-request" | "always-sponsored" | "always-all";
  wordCountPolicy: "unlimited" | "limited";
  minWords: number;
  maxWords: number;
  linksToAdvertiser: "unlimited" | "limited";
  minLinksToAdvertiser: number;
  maxLinksToAdvertiser: number;
  allowDofollow: boolean;
  allowOtherLinks: boolean;
  linkTypes: "brand-only" | "brand-generic" | "mixed" | "all";
  otherContentRules: string;

  // Preconditions
  preconditionsAccepted: boolean;
}

interface WebsiteStore {
  formData: WebsiteFormData;
  updateFormData: (data: Partial<WebsiteFormData>) => void;
  resetForm: () => void;
}

const initialFormData: WebsiteFormData = {
  websiteUrl: "",
  primaryLanguage: "English",
  majorityTrafficCountry: "United States",
  categories: [],
  description: "",
  isOwner: false,
  guestPostingPrice: 54,
  linkInsertionPrice: 34,
  writingIncluded: "yes",
  taggingPolicy: "no-tag",
  wordCountPolicy: "unlimited",
  minWords: 500,
  maxWords: 1000,
  linksToAdvertiser: "unlimited",
  minLinksToAdvertiser: 1,
  maxLinksToAdvertiser: 3,
  allowDofollow: true,
  allowOtherLinks: true,
  linkTypes: "brand-only",
  otherContentRules: "",
  preconditionsAccepted: true,
};

export const useWebsiteStore = create<WebsiteStore>((set) => ({
  formData: initialFormData,
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetForm: () => set({ formData: initialFormData }),
}));
