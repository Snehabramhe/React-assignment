import React from "react";

interface CategorySelectorProps {
  selectedCategories: string[];
  onChange: (categories: string[]) => void;
}

const categories = [
  // Column 1
  [
    "Animals / Pets",
    "Art",
    "Auto",
    "Beauty",
    "Blogging",
    "Business / Entrepreneur",
    "Auto",
    "Directory",
  ],
  // Column 2
  [
    "Education",
    "Energy & Solar Energy",
    "Entertainment & Music",
    "Environment",
    "Events",
    "Family / Parenting",
    "Fashion",
    "Finance",
  ],
  // Column 3
  [
    "Food",
    "Gambling",
    "Gaming",
    "General",
    "Health & Fitness",
    "Home & Garden",
    "Italian Sites",
    "Legal",
  ],
  // Column 4
  [
    "LifestyleLifestyle",
    "Marijuana / Vaporizers",
    "Marketing",
    "Medical",
    "News",
    "Other",
    "Outdoors",
    "Photography",
  ],
  // Column 5
  [
    "Politics",
    "Real Estate",
    "Entertainment & Music",
    "EnvironmentSafety",
    "SEO",
    "Sex & Adult",
    "Shopping",
    "Finance",
  ],
];

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategories,
  onChange,
}) => {
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onChange(selectedCategories.filter((c) => c !== category));
    } else {
      onChange([...selectedCategories, category]);
    }
  };

  return (
    <div className="flex w-full max-lg:flex-wrap max-lg:gap-4 max-sm:flex-col">
      {categories.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="flex flex-col items-start flex-1 max-lg:flex-1 max-lg:min-w-[200px] max-sm:w-full"
        >
          {column.map((category, index) => {
            const isSelected = selectedCategories.includes(category);

            return (
              <div
                key={index}
                className="flex w-[218px] max-sm:w-full p-2 justify-start items-center gap-2 bg-white cursor-pointer"
                onClick={() => handleCategoryToggle(category)}
              >
                <div
                  className={`flex w-5.5 h-5.5 justify-center items-center rounded-md border ${
                    isSelected
                      ? "bg-[#613FDD] border-[#613FDD]"
                      : "border-[#EAEAEA] bg-white"
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="w-3.5 h-2.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1 text-[rgba(15,12,27,0.60)] text-sm font-medium leading-5">
                  {category}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
