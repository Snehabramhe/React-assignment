import { create } from "zustand";
import { mockWebsites } from "../data/mockData";
import type { Website } from "../types";

interface NichePricing {
  guestPosting: string;
  linkInsertion: string;
}

interface GreyNichePricingData {
  samePrice: boolean;
  unifiedPrice: string;
  niches: {
    gambling: NichePricing;
    crypto: NichePricing;
    adult: NichePricing;
  };
}

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

  // Homepage Link
  homepageLinkPrice: number;
  offerGuidelines: string;

  // Grey Niche Pricing
  greyNichePricing: GreyNichePricingData;

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

export interface WebsiteFilters {
  category: string;
  greyNiches: string;
}

interface WebsiteStore {
  // Form data for website creation
  formData: WebsiteFormData;
  updateFormData: (data: Partial<WebsiteFormData>) => void;
  resetForm: () => void;

  // Website listing and management
  websites: Website[];
  filteredWebsites: Website[];
  filters: WebsiteFilters;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;

  // Actions
  setFilters: (filters: Partial<WebsiteFilters>) => void;
  setCurrentPage: (page: number) => void;
  applyFilters: () => void;
  addWebsite: (website: Website) => void;
  removeWebsite: (id: string) => void;
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
  homepageLinkPrice: 54,
  offerGuidelines: "",
  greyNichePricing: {
    samePrice: false,
    unifiedPrice: "54",
    niches: {
      gambling: { guestPosting: "54", linkInsertion: "54" },
      crypto: { guestPosting: "54", linkInsertion: "" },
      adult: { guestPosting: "54", linkInsertion: "" },
    },
  },
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

const initialFilters: WebsiteFilters = {
  category: "all",
  greyNiches: "all",
};

export const useWebsiteStore = create<WebsiteStore>((set, get) => ({
  formData: initialFormData,
  websites: mockWebsites,
  filteredWebsites: mockWebsites,
  filters: initialFilters,
  currentPage: 1,
  totalPages: Math.ceil(mockWebsites.length / 10),
  itemsPerPage: 10,

  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  resetForm: () => set({ formData: initialFormData }),

  setFilters: (newFilters) =>
    set((state) => {
      const updatedFilters = { ...state.filters, ...newFilters };
      return { filters: updatedFilters };
    }),

  setCurrentPage: (page) => set({ currentPage: page }),

  applyFilters: () => {
    const { websites, filters, itemsPerPage } = get();
    let filtered = [...websites];

    if (filters.category !== "all") {
      filtered = filtered.filter((website) =>
        website.category.toLowerCase().includes(filters.category.toLowerCase()),
      );
    }

    if (filters.greyNiches !== "all") {
      // Filter based on grey niches - this would need more specific logic
      // based on how grey niches are structured in your data
    }

    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    set({
      filteredWebsites: filtered,
      totalPages,
      currentPage: 1, // Reset to first page when filters change
    });
  },

  addWebsite: (website) =>
    set((state) => {
      const newWebsites = [...state.websites, website];
      const totalPages = Math.ceil(newWebsites.length / state.itemsPerPage);
      return {
        websites: newWebsites,
        filteredWebsites: newWebsites,
        totalPages,
      };
    }),

  removeWebsite: (id) =>
    set((state) => {
      const newWebsites = state.websites.filter((w) => w.id !== id);
      const totalPages = Math.ceil(newWebsites.length / state.itemsPerPage);
      return {
        websites: newWebsites,
        filteredWebsites: newWebsites,
        totalPages,
      };
    }),
}));
