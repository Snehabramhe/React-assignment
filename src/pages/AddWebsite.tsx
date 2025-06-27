import React from "react";
import { TutorialSection } from "../components/sections/TutorialSection";
import { PreconditionsSection } from "../components/sections/PreconditionsSection";
import { WebsiteDetailsForm } from "../components/sections/WebsiteDetailsForm";
import { CreateOfferForm } from "../components/sections/CreateOfferForm";
import { ArticleSpecificationForm } from "../components/sections/ArticleSpecificationForm";
import { Navbar } from "../components/layout";

export const AddWebsite: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Navbar activeTab="My websites" />

      <div className="mx-auto w-full m-0 pt-[82px] max-lg:pt-[60px] font-['DM_Sans']">
        {/* Header */}
        {/* <div className="text-[#0F0C1B] text-[32px] max-sm:text-[28px] max-sm:leading-9 font-semibold leading-[44px] tracking-[-0.25px] mb-[106px] max-sm:mb-[60px]">
          Add a wesbite
        </div> */}

        {/* Main Content */}
        <div className="flex flex-col items-center gap-16 w-full mx-auto">
          {/* Tutorial Section */}
          <TutorialSection />

          {/* Content Sections */}
          <div className="flex flex-col items-center gap-[73px] w-full">
            <PreconditionsSection /> {/*// COMPLETE */}
            <WebsiteDetailsForm />
            <CreateOfferForm />
            <ArticleSpecificationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWebsite;
