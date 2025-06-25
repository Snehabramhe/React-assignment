import React from "react";
import type { NavItem } from "../../types";


interface NavigationProps {
  items: NavItem[];
  onItemClick?: (itemId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ items, onItemClick }) => {
  return (
    <nav className="flex items-start border-b border-[#EAEAEA] min-h-[58px] w-full px-10 max-lg:px-7 justify-start flex-wrap bg-[#FEFEFF]">
      <div className="flex min-w-[240px] min-h-[58px] items-start gap-20 max-lg:gap-25 text-[#0F0C1B] justify-start flex-wrap">
        {/* Logo */}
        <div className="flex min-h-[58px] px-2.5 py-3 flex-col items-center font-['Manrope'] text-[22px] font-semibold leading-tight justify-center">
          <div className="flex items-center gap-1.5 justify-start">
            <div className="text-[#0F0C1B] self-stretch w-[91px]">Kraken</div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex min-w-[240px] items-center gap-2.5 font-['DM_Sans'] text-base font-medium tracking-tight justify-start flex-wrap">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick?.(item.id)}
              className={`
                self-stretch min-h-[58px] px-2.5 py-4 gap-2.5 transition-colors duration-200
                ${
                  item.isActive
                    ? "text-[#613FDD] border-b-2 border-[#613FDD] bg-[rgba(97,63,221,0.07)]"
                    : "text-[#0F0C1B] border-b border-[#EAEAEA] bg-[#FEFEFF] hover:bg-gray-50"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex min-h-[58px] items-center gap-5 justify-center flex-grow">
        <div className="self-stretch flex items-center gap-3 justify-start">
          {[
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e84bc08c?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/1fb725ea?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/0fe42b03?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/4f4a30b2?placeholderIfAbsent=true",
          ].map((src, index) => (
            <div
              key={index}
              className="rounded-xl self-stretch flex p-2.5 items-center gap-2.5 justify-start w-11"
            >
              <img
                src={src}
                alt={`Action ${index + 1}`}
                className="aspect-square object-contain object-center w-6 self-stretch"
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
