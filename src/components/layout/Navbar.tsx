import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  activeTab?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab based on current route if not explicitly provided
  const currentActiveTab =
    activeTab ||
    (location.pathname === "/add-website" ? "My websites" : "My websites");

  const navItems = [
    { label: "Marketpalce", path: "" },
    { label: "My websites", path: "/" },
    { label: "My Orders", path: "" },
    { label: "My projects", path: "" },
    { label: "Recieved orders", path: "" },
  ];

  return (
    <div className="flex items-start border-b border-[#EAEAEA] min-h-[58px] w-full px-10 max-lg:px-5 justify-start flex-wrap bg-[#FEFEFF]">
      <div className="flex min-w-[240px] min-h-[58px] items-start gap-[100px] text-[#0F0C1B] justify-start flex-wrap max-lg:max-w-full">
        {/* Logo */}
        <div className="flex min-h-[58px] px-2.5 py-3 flex-col items-center font-['Manrope'] text-[22px] font-semibold whitespace-nowrap leading-tight justify-center max-lg:whitespace-normal">
          <div className="flex items-center gap-1.5 justify-start max-lg:whitespace-normal">
            <div className="text-[#0F0C1B] self-stretch w-[91px] my-auto gap-2.5">
              Kraken
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex min-w-[240px] items-center gap-2.5 font-['DM_Sans'] text-base font-medium tracking-[-0.25px] justify-start flex-wrap max-lg:max-w-full">
          {navItems.map((item, index) => {
            const isActive = item.label === currentActiveTab;

            if (isActive) {
              return (
                <div
                  key={index}
                  className="self-stretch flex my-auto items-start justify-start"
                >
                  <div
                    className="text-[#613FDD] self-stretch border-b-2 border-[#613FDD] min-h-[58px] px-2.5 py-[17px] gap-2.5 bg-[rgba(97,63,221,0.07)] cursor-pointer"
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="text-[#0F0C1B] self-stretch border-b border-[#EAEAEA] my-auto min-h-[58px] px-2.5 py-[17px] gap-2.5 bg-[#FEFEFF] cursor-pointer hover:bg-gray-50"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex min-h-[58px] items-center gap-5 justify-center flex-grow flex-shrink basis-0 w-[149px]">
        <div className="self-stretch flex my-auto items-center gap-3 justify-start">
          <div className="rounded-xl self-stretch flex my-auto px-2.5 py-2.5 items-center gap-2.5 justify-start w-11">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21383e6f6e380e552c06abd8158fd2f1067b1630?placeholderIfAbsent=true"
              className="aspect-square object-contain object-center w-6 self-stretch my-auto"
              alt=""
            />
          </div>
          <div className="rounded-xl self-stretch flex my-auto px-2.5 py-2.5 items-center gap-2.5 justify-start w-11">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe9c7fe814557038f249a3430ffd32442de9f70?placeholderIfAbsent=true"
              className="aspect-square object-contain object-center w-6 self-stretch my-auto"
              alt=""
            />
          </div>
          <div className="rounded-xl self-stretch flex my-auto px-2.5 py-2.5 items-center gap-2.5 justify-start w-11">
            <div className="self-stretch flex my-auto w-6 items-center gap-2.5 justify-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13db2afce1c7aaeb678d0201435a967cb3f75078?placeholderIfAbsent=true"
                className="aspect-square object-contain object-center w-6 self-stretch my-auto"
                alt=""
              />
            </div>
          </div>
          <div className="rounded-xl self-stretch flex my-auto px-2.5 py-2.5 items-center gap-2.5 justify-start w-11">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a34c0177534a0997130df490fe96faaddd30ad8?placeholderIfAbsent=true"
              className="aspect-square object-contain object-center w-6 self-stretch my-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
