export interface Website {
  id: string;
  domain: string;
  country: {
    name: string;
    flagUrl: string;
  };
  language: string;
  category: string;
  otherCategories: string;
  greyNiches: string[];
}

export interface NavItem {
  id: string;
  label: string;
  isActive?: boolean;
}

export interface FilterOption {
  value: string;
  label: string;
}

import React from "react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  render?: (value: any, item: T) => React.ReactNode;
  className?: string;
}
