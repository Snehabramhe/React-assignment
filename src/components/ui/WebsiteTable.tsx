// import React from "react";
// import type { Website } from "../../types";

// interface WebsiteTableProps {
//   websites: Website[];
//   currentPage: number;
//   itemsPerPage: number;
// }

// export const WebsiteTable: React.FC<WebsiteTableProps> = ({
//   websites,
//   currentPage,
//   itemsPerPage,
// }) => {
//   // Calculate items to display for current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentWebsites = websites.slice(startIndex, endIndex);

//   const renderGreyNichesIcons = (greyNiches: string[]) => {
//     return (
//       <div className="flex my-auto w-[143px] items-center gap-1.5 justify-start">
//         {greyNiches.map((iconUrl, index) => (
//           <img
//             key={index}
//             src={iconUrl}
//             className="aspect-[0.95] object-contain object-center w-[19px] my-auto flex-shrink-0"
//             alt=""
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="w-full">
//       {/* Table Header */}
//       <div className="flex w-full items-center font-['DM_Sans'] text-xs text-[#0f0c1b] font-semibold leading-none justify-start flex-wrap">
//         <div className="flex-1 min-w-[240px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 whitespace-nowrap bg-[rgba(97,63,221,0.02)]">
//           Website
//         </div>
//         <div className="flex-1 w-[146px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 whitespace-nowrap bg-[rgba(97,63,221,0.02)]">
//           Country
//         </div>
//         <div className="flex-1 w-[140px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 whitespace-nowrap bg-[rgba(97,63,221,0.02)]">
//           Language
//         </div>
//         <div className="flex-1 min-w-[240px] w-[280px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 whitespace-nowrap bg-[rgba(97,63,221,0.02)]">
//           Category
//         </div>
//         <div className="flex-1 min-w-[240px] w-[280px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 bg-[rgba(97,63,221,0.02)]">
//           Other categories
//         </div>
//         <div className="flex-1 min-w-[240px] w-[280px] min-h-11 px-3 pr-2.5 py-3.5 gap-2.5 bg-[rgba(97,63,221,0.02)]">
//           Grey niches
//         </div>
//       </div>

//       {/* Table Rows */}
//       {currentWebsites.map((website, index) => {
//         const isAlternate = index % 2 === 1;
//         const rowBg = isAlternate
//           ? "bg-[rgba(97,63,221,0.02)]"
//           : "bg-[#FEFEFF]";

//         return (
//           <div
//             key={website.id}
//             className="flex items-center justify-start flex-wrap"
//           >
//             {/* Website Column */}
//             <div
//               className={`text-[#0F0C1B] flex-1 min-w-[240px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none ${rowBg}`}
//             >
//               {website.domain}
//             </div>

//             {/* Country Column */}
//             <div
//               className={`items-center flex flex-1 min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm text-[#0F0C1B] font-normal tracking-[0.25px] leading-none justify-start w-[146px] ${rowBg}`}
//             >
//               <div className="flex my-auto items-center gap-2 justify-start">
//                 <img
//                   src={website.country.flag}
//                   className="aspect-[1.5] object-contain object-center w-[21px] my-auto flex-shrink-0"
//                   alt={`${website.country.name} flag`}
//                 />
// {/* 
// <span className="text-lg">{website.country.flag}</span> */}

//                 <div className="text-[#0F0C1B] my-auto">
//                   {website.country.name}
//                 </div>
//               </div>
//             </div>

//             {/* Language Column */}
//             <div
//               className={`text-[#0F0C1B] flex-1 w-[140px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none ${rowBg}`}
//             >
//               {website.language}
//             </div>

//             {/* Category Column */}
//             <div
//               className={`text-[#0F0C1B] flex-1 min-w-[240px] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal tracking-[0.25px] leading-none ${rowBg}`}
//             >
//               {website.category}
//             </div>

//             {/* Other Categories Column */}
//             <div
//               className={`text-[#0F0C1B] flex-1 min-w-[240px] w-[280px] min-h-14 px-3 pr-2.5 py-[19px] gap-2.5 font-['Inter'] text-sm font-normal whitespace-nowrap tracking-[0.25px] leading-none ${rowBg}`}
//             >
//               {website.otherCategories}
//             </div>

//             {/* Grey Niches Column */}
//             <div
//               className={`items-center flex flex-1 min-w-[240px] w-[280px] min-h-14 px-3 pr-2.5 py-[18px] gap-2.5 justify-start ${rowBg}`}
//             >
//               {renderGreyNichesIcons(website.greyNiches)}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
