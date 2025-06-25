import React from "react";

export const TutorialSection: React.FC = () => {
  return (
    <div className="flex w-full p-6 items-center gap-48 max-lg:gap-8 max-lg:flex-col max-lg:text-center max-sm:p-4 rounded-md bg-white">
      <div className="flex w-[406px] max-lg:w-full max-lg:items-center flex-col items-start gap-[17px] flex-shrink-0">
        <div className="text-[#0F0C1B] text-2xl max-sm:text-xl max-sm:leading-7 font-semibold leading-10">
          Learn how to get best out of linksera
        </div>
        <div className="flex w-[357px] max-lg:w-full flex-col items-start gap-2">
          <div className="text-[rgba(15,12,27,0.60)] font-['Inter'] text-sm font-normal leading-5 tracking-[0.25px]">
            How to add your website to the marketplace
          </div>
          <div className="text-[rgba(15,12,27,0.60)] font-['Inter'] text-sm font-normal leading-5 tracking-[0.25px]">
            Setting pricing and niche/category filters
          </div>
          <div className="text-[rgba(15,12,27,0.60)] font-['Inter'] text-sm font-normal leading-5 tracking-[0.25px]">
            Uploading sample articles or guidelines
          </div>
          <div className="text-[rgba(15,12,27,0.60)] font-['Inter'] text-sm font-normal leading-5 tracking-[0.25px]">
            Editing or updating your website listing anytime
          </div>
          <div className="text-[rgba(15,12,27,0.60)] font-['Inter'] text-sm font-normal leading-5 tracking-[0.25px]">
            Tips to make your listing stand out to buyers
          </div>
        </div>
      </div>

      <div className="w-[628px] max-lg:w-full max-lg:max-w-[500px] max-sm:h-[200px] h-[321px] max-lg:h-[280px] flex-shrink-0 rounded-md relative overflow-hidden bg-[#0F0C1B]">
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=628&h=445&fit=crop"
          alt="Business professional working at desk"
          className="w-[667px] h-[445px] absolute left-[-17px] top-[-56px] object-cover"
        />

        {/* Overlay content */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
          {/* Logo */}
          <div className="absolute left-[23px] top-[21px] w-[97px] h-[22px]">
            <div className="flex items-center gap-[7.249px]">
              <div className="w-[21.575px] h-[21.575px]">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4841 4.39368V15.1811C12.4841 15.7144 12.6423 16.2358 12.9386 16.6793C13.235 17.1228 13.6562 17.4685 14.149 17.6726C14.6417 17.8767 15.184 17.9301 15.7071 17.8261C16.2303 17.722 16.7108 17.4652 17.0879 17.088C17.4651 16.7108 17.722 16.2303 17.826 15.7072C17.9301 15.184 17.8767 14.6418 17.6726 14.149C17.4684 13.6562 17.1228 13.235 16.6793 12.9387C16.2358 12.6424 15.7144 12.4842 15.181 12.4842H4.39362C3.86024 12.4842 3.33883 12.6424 2.89534 12.9387C2.45184 13.235 2.10618 13.6562 1.90206 14.149C1.69795 14.6418 1.64454 15.184 1.7486 15.7072C1.85266 16.2303 2.10951 16.7108 2.48667 17.088C2.86383 17.4652 3.34436 17.722 3.86749 17.8261C4.39063 17.9301 4.93287 17.8767 5.42566 17.6726C5.91844 17.4685 6.33963 17.1228 6.63596 16.6793C6.9323 16.2358 7.09046 15.7144 7.09046 15.1811V4.39368C7.09046 3.8603 6.9323 3.33889 6.63596 2.8954C6.33963 2.4519 5.91844 2.10624 5.42566 1.90212C4.93287 1.69801 4.39063 1.6446 3.86749 1.74866C3.34436 1.85272 2.86383 2.10957 2.48667 2.48673C2.10951 2.86389 1.85266 3.34442 1.7486 3.86755C1.64454 4.39069 1.69795 4.93294 1.90206 5.42572C2.10618 5.9185 2.45184 6.33969 2.89534 6.63602C3.33883 6.93236 3.86024 7.09052 4.39362 7.09052H15.181C15.7144 7.09052 16.2358 6.93236 16.6793 6.63602C17.1228 6.33969 17.4684 5.9185 17.6726 5.42572C17.8767 4.93294 17.9301 4.39069 17.826 3.86755C17.722 3.34442 17.4651 2.86389 17.0879 2.48673C16.7108 2.10957 16.2303 1.85272 15.7071 1.74866C15.184 1.6446 14.6417 1.69801 14.149 1.90212C13.6562 2.10624 13.235 2.4519 12.9386 2.8954C12.6423 3.33889 12.4841 3.8603 12.4841 4.39368Z"
                    stroke="white"
                    strokeWidth="1.86538"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-white font-['Manrope'] text-base font-semibold leading-[18px]">
                Linksera
              </div>
            </div>
          </div>

          {/* Play button */}
          <div className="absolute left-[273px] top-[129px] w-[55px] h-[55px] cursor-pointer">
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="55" height="55" rx="27.5" fill="white" />
              <path
                d="M36 27.5L23.25 34.8612L23.25 20.1388L36 27.5Z"
                fill="#613FDD"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
