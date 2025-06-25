import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/layout";

const MyWebsites: React.FC = () => {
  const navigate = useNavigate();

  const handleAddWebsite = () => {
    navigate("/add-website");
  };

  return (
    <div className="min-h-screen w-full bg-[rgba(242,244,250,1)] overflow-hidden">
      <Navbar activeTab="My websites" />

      {/* Main Content */}
      <div className="flex flex-col items-stretch w-full px-6 py-6 pb-[38px] overflow-hidden max-lg:max-w-full max-lg:px-5 bg-[#FDFCFF]">
        {/* Title */}
        <div className="text-[#0F0C1B] font-['DM_Sans'] text-2xl font-semibold leading-[2] self-start">
          All websites
        </div>

        {/* Controls Section */}
        <div className="mt-[74px] w-full max-lg:max-w-full max-lg:mt-10">
          <div className="flex w-full items-start justify-start flex-wrap max-lg:max-w-full">
            {/* Add Website Button */}
            <div
              className="justify-center items-stretch rounded-lg bg-[#613FDD] flex min-h-9 px-2.5 py-2 flex-col font-['DM_Sans'] text-xs text-[#FEFEFF] font-medium leading-[2] w-[228px] cursor-pointer hover:bg-[#5336c7] transition-colors"
              onClick={handleAddWebsite}
            >
              <div className="flex w-full items-center gap-3 justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aa35cc1ac8afe5297b91027d5d499250f006f96?placeholderIfAbsent=true"
                  className="aspect-square object-contain object-center w-4 self-stretch my-auto flex-shrink-0"
                  alt=""
                />
                <div className="text-[#FEFEFF] self-stretch my-auto">
                  Add website
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="mt-4 w-full max-lg:max-w-full">
            <div className="w-full max-lg:max-w-full">
              {/* Table Header */}
              <div className="flex w-full items-center font-['DM_Sans'] text-xs text-[#0f0c1b] font-semibold leading-none justify-start">
                <div className="flex-1 min-w-[266px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 whitespace-nowrap bg-[rgba(97,63,221,0.02)]">
                  Website
                </div>
                <div className="w-[146px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 whitespace-nowrap bg-[rgba(97,63,221,0.02)]">
                  Country
                </div>
                <div className="w-[140px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 whitespace-nowrap bg-[rgba(97,63,221,0.02)]">
                  Language
                </div>
                <div className="w-[280px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 whitespace-nowrap bg-[rgba(97,63,221,0.02)]">
                  Category
                </div>
                <div className="w-[280px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 bg-[rgba(97,63,221,0.02)]">
                  Other categories
                </div>
                <div className="w-[280px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 bg-[rgba(97,63,221,0.02)]">
                  Grey niches
                </div>
              </div>

              {/* Table Row 1 */}
              <div className="flex items-center justify-start">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal tracking-[0.25px] leading-none justify-start w-[146px] bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1bd04563954f87fee2bc446a98d34e057dfd07c?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto">
                      United states
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/36deee2070e39f486f835591b7c0cb8b25d206cd?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/955167939b698a3a4bf25addb8e8548e67467e7d?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4fd0fa59a401fd221301f290d8f9aec9f94f91?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/276377205453bf585a93eff4205ad5d9fecadbb8?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d77a02bc3c4c40629ccb66f68aa0949ef1da8831?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Table Row 2 */}
              <div className="flex items-center justify-start">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal whitespace-nowrap tracking-[0.25px] leading-none justify-start w-[146px] max-lg:whitespace-normal bg-[rgba(97,63,221,0.02)]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start max-lg:whitespace-normal">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dde10d571259ab82fb644c35682aba01af8c857f?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto w-[76px]">
                      Germany
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[rgba(97,63,221,0.02)]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cdbe0bc0093d872436404f519051e2c63056619?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca5d408f86e5a225e4bede04326c1a5acd62877?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d66ab89540c31173958f40037f64bf290355ea8?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8c5f5673a42973cca3b2aaba292a763663953b8?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/251a7a70f31ab333faa172c618eeb00e5e37b065?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Table Row 3 */}
              <div className="flex items-center justify-start max-lg:max-w-full">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal tracking-[0.25px] leading-none justify-start w-[146px] bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/35f3d862ff65a91dae8d1a03ddd76f34b5eb4e19?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto">
                      United states
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eb7123414921e93ecbd51c6c86feabef0eb84db?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d149624727e2f0866759b320f2a0c6ff008e57a9?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/93bec79af9d8bbaedc7061bcc7ddc8d86befb5c2?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b65928d02591c364577a6e0c27e20bc6c5357bb3?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9fdaab2672ee70ec925431fabe684d25c436279?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Table Row 4 */}
              <div className="flex items-center justify-start max-lg:max-w-full">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal whitespace-nowrap tracking-[0.25px] leading-none justify-start w-[146px] max-lg:whitespace-normal bg-[rgba(97,63,221,0.02)]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start max-lg:whitespace-normal">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5ac5276d6498787e07b57bbc01fa7a45ec5856f?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto w-[76px]">
                      Germany
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[rgba(97,63,221,0.02)]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8efcc16718f672c76f30b64db7a9cf1cd542f0c6?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/733d6c404c34e824cd800103631632f385e967ad?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dbd8f2ccf8ff7d174fb6b5738d3e99edf926ff2?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f937d3f2372ba4db712e4f40c80b240c1a6d887d?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/deb23bd6f459df9e1d0511513c0c4048eebf792a?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Table Row 5 */}
              <div className="flex items-center justify-start max-lg:max-w-full">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal tracking-[0.25px] leading-none justify-start w-[146px] bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a1df344a78e42427fdd946666cc61a139bf960?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto">
                      United states
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bea18f2f79fadddc10e885dd9115b4d1e447f35?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbdcac2c6eeb17bd76497c41a04ba65cccf4e457?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f092ceeec1e3aadd056bf41b1c3c54f39d25c03?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/002b4a35456dc79cfa5faa4c4c4459c4a50de54e?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/355a6fd42f55b79b717d91d6769708f876c99543?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Table Row 6 */}
              <div className="flex items-center justify-start max-lg:max-w-full">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal whitespace-nowrap tracking-[0.25px] leading-none justify-start w-[146px] max-lg:whitespace-normal bg-[rgba(97,63,221,0.02)]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start max-lg:whitespace-normal">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ef9e6c6092ba4086f3eadd12b32b7c511d2fb72?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto w-[76px]">
                      Germany
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[rgba(97,63,221,0.02)]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c17f5f0446dd05213b832bcb2d8dd440a73566a?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c47407fb80e460ae39b977970613ad195d4711e2?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/aac5e5c51961e31ed5794491de1f6b9a8eb2efff?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5921597ccc40048328f1f219709b4ac12c7a449c?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/651cefa7de3a6c95a2eb2b21c3365003499f85e3?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Table Row 7 */}
              <div className="flex items-center justify-start max-lg:max-w-full">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal tracking-[0.25px] leading-none justify-start w-[146px] bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c2297c8400a47e4faace3d4d100f5ec57f2a8b?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto">
                      United states
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f08ce32eff5ca9b681a826dcff7c085b5cceccf4?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f109cabf7def19f1139c4380ead0f5b180f23688?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/84806b48a71426755200494aa405fc7c57848719?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd7d994ddeb34f64ffd3311752e6a1675903b05b?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/be0ba3e1fc848642a117bd3626debd915d8c5114?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Table Row 8 */}
              <div className="flex items-center justify-start max-lg:max-w-full">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal whitespace-nowrap tracking-[0.25px] leading-none justify-start w-[146px] max-lg:whitespace-normal bg-[rgba(97,63,221,0.02)]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start max-lg:whitespace-normal">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/63fa5a6d39b802d84f3dd5728167a16bb11f7782?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto w-[76px]">
                      Germany
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[rgba(97,63,221,0.02)]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6b326eb12015f1a537037d6bcf4b6ba14c6a9c6?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2d0a9d405216fd2216640438964a8129944d9f3?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/18e590206d352233feef2b9e928a71301ddf3326?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb472890bd59f9fba9871e71afde5e65bda593e1?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/51ad4289e4de0cf4964c2c3b5c6edb954a12be69?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Table Row 9 */}
              <div className="flex items-center justify-start max-lg:max-w-full">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal tracking-[0.25px] leading-none justify-start w-[146px] bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cadc41995bc950ab22800a7a0f68d83bb56937b1?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto">
                      United states
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/16afe9c87bd3d8d8a72d5c175518acc962343118?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e17502ab311416a35d6cd27a99ac9e41f6cfdc0?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd60bea7647a3e864181c1e9be8487f49e660ce1?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e54ed396e498947947e6533c1a0eb1e6c58f462?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/442ed3c32eeede0fdac587072218fc4c5a5dc04e?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Table Row 10 */}
              <div className="flex items-center justify-start max-lg:max-w-full">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal whitespace-nowrap tracking-[0.25px] leading-none justify-start w-[146px] max-lg:whitespace-normal bg-[rgba(97,63,221,0.02)]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start max-lg:whitespace-normal">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/93f3d5fe1ef2dcc274b145bd57ecb8d467b96322?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto w-[76px]">
                      Germany
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[rgba(97,63,221,0.02)]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[rgba(97,63,221,0.02)]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fba5bc5a92ed4078f0ca698d650d32ee9b57f2de?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/27f42fdee95f1e12e65226e07a133b4726731e83?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7186171a935ec5445de9e0010e64d86f51587ade?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ccefed67bb23df63bbe8c125a6a8aee7b5fedee?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d39521fcf58ccad84d1eb3ff42c808ee530248aa?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Table Row 11 */}
              <div className="flex items-center justify-start max-lg:max-w-full">
                <div className="text-[#0F0C1B] flex-1 min-w-[266px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  example.com
                </div>
                <div className="items-center flex min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal tracking-[0.25px] leading-none justify-start w-[146px] bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto items-center gap-2 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ff805f9e17e6001f1908769f6c8205d529df2e8?placeholderIfAbsent=true"
                      className="aspect-[1.5] object-contain object-center w-[21px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <div className="text-[#0F0C1B] self-stretch my-auto">
                      United states
                    </div>
                  </div>
                </div>
                <div className="text-[#0F0C1B] w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  United states
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Computer & Electronics
                </div>
                <div className="text-[#0F0C1B] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none bg-[#FEFEFF]">
                  Entertainment
                </div>
                <div className="items-center flex w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start bg-[#FEFEFF]">
                  <div className="self-stretch flex my-auto w-[143px] items-center gap-1.5 justify-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e717bf81c0cbe55ef260834a3b35374d37f8cc32?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc019673df7f8c876f930fc04001ab1af1a5d7ee?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e9940bfa64dca519bb1977c1fc4b78a84de7dd2?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/796b1b55c44031b862aa7e4b04eb4b8c4fc7388f?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain object-center w-[19px] self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3dd64ebea21c44bbf6f8f02f733a8d7f5b99278?placeholderIfAbsent=true"
                      className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="w-full font-['DM_Sans'] text-sm text-[#0F0C1B] font-medium whitespace-nowrap leading-none max-lg:max-w-full max-lg:whitespace-normal">
              <div className="w-full max-lg:max-w-full max-lg:whitespace-normal">
                <div className="flex w-full px-6 py-2 items-center justify-center max-lg:max-w-full max-lg:px-5 max-lg:whitespace-normal">
                  <div className="items-start shadow-sm self-stretch flex min-w-[240px] my-auto justify-start flex-wrap max-lg:max-w-full max-lg:whitespace-normal">
                    <div className="justify-center items-center rounded-l-lg border border-[#EAEAEA] flex px-4 py-2.5 gap-2 overflow-hidden max-lg:whitespace-normal bg-[#FEFEFF]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f45e304a98e3653818318e4086e0a161acfabf?placeholderIfAbsent=true"
                        className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                        alt=""
                      />
                      <div className="text-[#0F0C1B] self-stretch my-auto">
                        Previous
                      </div>
                    </div>
                    <div className="justify-center items-stretch flex flex-col w-10 h-10 max-lg:whitespace-normal bg-[#EAEAEA]">
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                      <div className="text-[#0F0C1B] self-center max-lg:whitespace-normal px-2 py-2.5 gap-2.5">
                        1
                      </div>
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                    </div>
                    <div className="bg-[rgba(234,234,234,1)] flex w-px flex-shrink-0 h-10 fill-[#EAEAEA]" />
                    <div className="justify-center items-stretch flex flex-col w-10 h-10 max-lg:whitespace-normal bg-[#FEFEFF]">
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                      <div className="text-[#0F0C1B] self-center max-lg:whitespace-normal px-2 py-2.5 gap-2.5">
                        2
                      </div>
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                    </div>
                    <div className="bg-[rgba(234,234,234,1)] flex w-px flex-shrink-0 h-10 fill-[#EAEAEA]" />
                    <div className="justify-center items-stretch flex flex-col w-10 h-10 max-lg:whitespace-normal bg-[#FEFEFF]">
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                      <div className="text-[#0F0C1B] self-center max-lg:whitespace-normal px-2 py-2.5 gap-2.5">
                        3
                      </div>
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                    </div>
                    <div className="bg-[rgba(234,234,234,1)] flex w-px flex-shrink-0 h-10 fill-[#EAEAEA]" />
                    <div className="justify-center items-stretch flex flex-col font-['Inter'] w-10 h-10 max-lg:whitespace-normal bg-[#FEFEFF]">
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                      <div className="text-[#0F0C1B] self-center max-lg:whitespace-normal px-2 py-2.5 gap-2.5">
                        ...
                      </div>
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                    </div>
                    <div className="bg-[rgba(234,234,234,1)] flex w-px flex-shrink-0 h-10 fill-[#EAEAEA]" />
                    <div className="justify-center items-stretch flex flex-col w-10 h-10 max-lg:whitespace-normal bg-[#FEFEFF]">
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                      <div className="text-[#0F0C1B] self-center max-lg:whitespace-normal px-2 py-2.5 gap-2.5">
                        8
                      </div>
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                    </div>
                    <div className="bg-[rgba(234,234,234,1)] flex w-px flex-shrink-0 h-10 fill-[#EAEAEA]" />
                    <div className="justify-center items-stretch flex flex-col w-10 h-10 max-lg:whitespace-normal bg-[#FEFEFF]">
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                      <div className="text-[#0F0C1B] self-center max-lg:whitespace-normal px-2 py-2.5 gap-2.5">
                        9
                      </div>
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                    </div>
                    <div className="bg-[rgba(234,234,234,1)] flex w-px flex-shrink-0 h-10 fill-[#EAEAEA]" />
                    <div className="justify-center items-stretch flex flex-col w-10 h-10 max-lg:whitespace-normal bg-[#FEFEFF]">
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                      <div className="text-[#0F0C1B] self-center max-lg:whitespace-normal px-2 py-2.5 gap-2.5">
                        10
                      </div>
                      <div className="flex min-h-px w-full bg-[#EAEAEA]" />
                    </div>
                    <div className="justify-center items-center rounded-r-lg border border-[#EAEAEA] flex px-4 py-2.5 gap-2 overflow-hidden max-lg:whitespace-normal bg-[#FEFEFF]">
                      <div className="text-[#0F0C1B] self-stretch my-auto">
                        Next
                      </div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd12710606b11f406700471c40e4b7f14e1d66a?placeholderIfAbsent=true"
                        className="aspect-square object-contain object-center w-5 self-stretch my-auto flex-shrink-0"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWebsites;
