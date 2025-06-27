import type { FilterOption, NavItem, Website } from "../types";

export const navigationItems: NavItem[] = [
  { id: "marketplace", label: "Marketpalce", isActive: false },
  { id: "my-websites", label: "My websites", isActive: true },
  { id: "my-orders", label: "My Orders", isActive: false },
  { id: "my-projects", label: "My projects", isActive: false },
  { id: "received-orders", label: "Recieved orders", isActive: false },
];

export const categoryOptions: FilterOption[] = [
  { value: "all", label: "Category" },
  { value: "electronics", label: "Computer & Electronics" },
  { value: "entertainment", label: "Entertainment" },
  { value: "business", label: "Business" },
];

export const greyNichesOptions: FilterOption[] = [
  { value: "all", label: "Grey niches" },
  { value: "adult", label: "Adult" },
  { value: "gambling", label: "Gambling" },
  { value: "crypto", label: "Crypto" },
];

export const mockWebsites: Website[] = [
  {
    id: "1",
    domain: "example.com",
    country: {
      name: "United states",
      flag:"🇺🇸",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/36deee2070e39f486f835591b7c0cb8b25d206cd?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/955167939b698a3a4bf25addb8e8548e67467e7d?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/da4fd0fa59a401fd221301f290d8f9aec9f94f91?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/276377205453bf585a93eff4205ad5d9fecadbb8?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d77a02bc3c4c40629ccb66f68aa0949ef1da8831?placeholderIfAbsent=true",
    ],
  },
  {
    id: "2",
    domain: "example.com",
    country: {
      name: "Germany",
      flag:"🇩🇪",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8cdbe0bc0093d872436404f519051e2c63056619?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8ca5d408f86e5a225e4bede04326c1a5acd62877?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4d66ab89540c31173958f40037f64bf290355ea8?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f8c5f5673a42973cca3b2aaba292a763663953b8?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/251a7a70f31ab333faa172c618eeb00e5e37b065?placeholderIfAbsent=true",
    ],
  },
  {
    id: "3",
    domain: "example.com",
    country: {
      name: "United states",
      flag: "🇺🇸",
      },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5eb7123414921e93ecbd51c6c86feabef0eb84db?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d149624727e2f0866759b320f2a0c6ff008e57a9?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/93bec79af9d8bbaedc7061bcc7ddc8d86befb5c2?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b65928d02591c364577a6e0c27e20bc6c5357bb3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b9fdaab2672ee70ec925431fabe684d25c436279?placeholderIfAbsent=true",
    ],
  },
  {
    id: "4",
    domain: "example.com",
    country: {
      name: "Germany",
      flag:"🇩🇪",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8efcc16718f672c76f30b64db7a9cf1cd542f0c6?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/733d6c404c34e824cd800103631632f385e967ad?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0dbd8f2ccf8ff7d174fb6b5738d3e99edf926ff2?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f937d3f2372ba4db712e4f40c80b240c1a6d887d?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/deb23bd6f459df9e1d0511513c0c4048eebf792a?placeholderIfAbsent=true",
    ],
  },
  {
    id: "5",
    domain: "example.com",
    country: {
      name: "United states",
      flag: "🇺🇸",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9bea18f2f79fadddc10e885dd9115b4d1e447f35?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cbdcac2c6eeb17bd76497c41a04ba65cccf4e457?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1f092ceeec1e3aadd056bf41b1c3c54f39d25c03?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/002b4a35456dc79cfa5faa4c4c4459c4a50de54e?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/355a6fd42f55b79b717d91d6769708f876c99543?placeholderIfAbsent=true",
    ],
  },
  {
    id: "6",
    domain: "example.com",
    country: {
      name: "Germany",
      flag:"🇩🇪",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7c17f5f0446dd05213b832bcb2d8dd440a73566a?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c47407fb80e460ae39b977970613ad195d4711e2?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aac5e5c51961e31ed5794491de1f6b9a8eb2efff?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5921597ccc40048328f1f219709b4ac12c7a449c?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/651cefa7de3a6c95a2eb2b21c3365003499f85e3?placeholderIfAbsent=true",
    ],
  },
  {
    id: "7",
    domain: "example.com",
    country: {
      name: "United states",
      flag:
      "🇺🇸",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f08ce32eff5ca9b681a826dcff7c085b5cceccf4?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f109cabf7def19f1139c4380ead0f5b180f23688?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/84806b48a71426755200494aa405fc7c57848719?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bd7d994ddeb34f64ffd3311752e6a1675903b05b?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be0ba3e1fc848642a117bd3626debd915d8c5114?placeholderIfAbsent=true",
    ],
  },
  {
    id: "8",
    domain: "example.com",
    country: {
      name: "Germany",
      flag:"🇩🇪",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a6b326eb12015f1a537037d6bcf4b6ba14c6a9c6?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d2d0a9d405216fd2216640438964a8129944d9f3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/18e590206d352233feef2b9e928a71301ddf3326?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb472890bd59f9fba9871e71afde5e65bda593e1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/51ad4289e4de0cf4964c2c3b5c6edb954a12be69?placeholderIfAbsent=true",
    ],
  },
  {
    id: "9",
    domain: "example.com",
    country: {
      name: "United states",
      flag:
      "🇺🇸",    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/16afe9c87bd3d8d8a72d5c175518acc962343118?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5e17502ab311416a35d6cd27a99ac9e41f6cfdc0?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bd60bea7647a3e864181c1e9be8487f49e660ce1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1e54ed396e498947947e6533c1a0eb1e6c58f462?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/442ed3c32eeede0fdac587072218fc4c5a5dc04e?placeholderIfAbsent=true",
    ],
  },
  {
    id: "10",
    domain: "example.com",
    country: {
      name: "Germany",
      flag:"🇩🇪",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fba5bc5a92ed4078f0ca698d650d32ee9b57f2de?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/27f42fdee95f1e12e65226e07a133b4726731e83?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7186171a935ec5445de9e0010e64d86f51587ade?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9ccefed67bb23df63bbe8c125a6a8aee7b5fedee?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d39521fcf58ccad84d1eb3ff42c808ee530248aa?placeholderIfAbsent=true",
    ],
  },
  {
    id: "11",
    domain: "example.com",
    country: {
      name: "United states",
      flag:
      "🇺🇸",  },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e717bf81c0cbe55ef260834a3b35374d37f8cc32?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fc019673df7f8c876f930fc04001ab1af1a5d7ee?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6e9940bfa64dca519bb1977c1fc4b78a84de7dd2?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/796b1b55c44031b862aa7e4b04eb4b8c4fc7388f?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e3dd64ebea21c44bbf6f8f02f733a8d7f5b99278?placeholderIfAbsent=true",
    ],
  },





  {
    id: "12",
    domain: "example.com",
    country: {
      name: "United states",
      flag:
      "🇺🇸",   },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/36deee2070e39f486f835591b7c0cb8b25d206cd?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/955167939b698a3a4bf25addb8e8548e67467e7d?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/da4fd0fa59a401fd221301f290d8f9aec9f94f91?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/276377205453bf585a93eff4205ad5d9fecadbb8?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d77a02bc3c4c40629ccb66f68aa0949ef1da8831?placeholderIfAbsent=true",
    ],
  },
  {
    id: "13",
    domain: "example.com",
    country: {
      name: "Germany",
      flag:"🇩🇪",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8cdbe0bc0093d872436404f519051e2c63056619?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8ca5d408f86e5a225e4bede04326c1a5acd62877?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4d66ab89540c31173958f40037f64bf290355ea8?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f8c5f5673a42973cca3b2aaba292a763663953b8?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/251a7a70f31ab333faa172c618eeb00e5e37b065?placeholderIfAbsent=true",
    ],
  },
  {
    id: "14",
    domain: "example.com",
    country: {
      name: "United states",
      flag:
      "🇺🇸", },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5eb7123414921e93ecbd51c6c86feabef0eb84db?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d149624727e2f0866759b320f2a0c6ff008e57a9?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/93bec79af9d8bbaedc7061bcc7ddc8d86befb5c2?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b65928d02591c364577a6e0c27e20bc6c5357bb3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b9fdaab2672ee70ec925431fabe684d25c436279?placeholderIfAbsent=true",
    ],
  },
  {
    id: "15",
    domain: "example.com",
    country: {
      name: "Germany",
      flag:"🇩🇪",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8efcc16718f672c76f30b64db7a9cf1cd542f0c6?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/733d6c404c34e824cd800103631632f385e967ad?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0dbd8f2ccf8ff7d174fb6b5738d3e99edf926ff2?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f937d3f2372ba4db712e4f40c80b240c1a6d887d?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/deb23bd6f459df9e1d0511513c0c4048eebf792a?placeholderIfAbsent=true",
    ],
  },
  {
    id: "16",
    domain: "example.com",
    country: {
      name: "United states",
      flag:
      "🇺🇸", },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65740ec271dd5b8345c32e4b574820220c225ef3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9bea18f2f79fadddc10e885dd9115b4d1e447f35?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cbdcac2c6eeb17bd76497c41a04ba65cccf4e457?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1f092ceeec1e3aadd056bf41b1c3c54f39d25c03?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/002b4a35456dc79cfa5faa4c4c4459c4a50de54e?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/355a6fd42f55b79b717d91d6769708f876c99543?placeholderIfAbsent=true",
    ],
  },
  {
    id: "17",
    domain: "example.com",
    country: {
      name: "Germany",
      flag:"🇩🇪",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7c17f5f0446dd05213b832bcb2d8dd440a73566a?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c47407fb80e460ae39b977970613ad195d4711e2?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aac5e5c51961e31ed5794491de1f6b9a8eb2efff?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5921597ccc40048328f1f219709b4ac12c7a449c?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/651cefa7de3a6c95a2eb2b21c3365003499f85e3?placeholderIfAbsent=true",
    ],
  },
  {
    id: "18",
    domain: "example.com",
    country: {
      name: "United states",
      flag:
      "🇺🇸",   },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f08ce32eff5ca9b681a826dcff7c085b5cceccf4?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f109cabf7def19f1139c4380ead0f5b180f23688?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/84806b48a71426755200494aa405fc7c57848719?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bd7d994ddeb34f64ffd3311752e6a1675903b05b?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be0ba3e1fc848642a117bd3626debd915d8c5114?placeholderIfAbsent=true",
    ],
  },
  {
    id: "19",
    domain: "example.com",
    country: {
      name: "Germany",
      flag:"🇩🇪",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a6b326eb12015f1a537037d6bcf4b6ba14c6a9c6?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d2d0a9d405216fd2216640438964a8129944d9f3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/18e590206d352233feef2b9e928a71301ddf3326?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb472890bd59f9fba9871e71afde5e65bda593e1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/51ad4289e4de0cf4964c2c3b5c6edb954a12be69?placeholderIfAbsent=true",
    ],
  },
  {
    id: "20",
    domain: "example.com",
    country: {
      name: "United states",
      flag:
      "🇺🇸", },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/16afe9c87bd3d8d8a72d5c175518acc962343118?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5e17502ab311416a35d6cd27a99ac9e41f6cfdc0?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bd60bea7647a3e864181c1e9be8487f49e660ce1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1e54ed396e498947947e6533c1a0eb1e6c58f462?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/442ed3c32eeede0fdac587072218fc4c5a5dc04e?placeholderIfAbsent=true",
    ],
  },
  {
    id: "21",
    domain: "example.com",
    country: {
      name: "Germany",
      flag:"🇩🇪",
    },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fba5bc5a92ed4078f0ca698d650d32ee9b57f2de?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/27f42fdee95f1e12e65226e07a133b4726731e83?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7186171a935ec5445de9e0010e64d86f51587ade?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9ccefed67bb23df63bbe8c125a6a8aee7b5fedee?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d39521fcf58ccad84d1eb3ff42c808ee530248aa?placeholderIfAbsent=true",
    ],
  },
  {
    id: "22",
    domain: "example.com",
    country: {
      name: "United states",
      flag:
      "🇺🇸", },
    language: "United states",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9f91f6caea96ff75a3c2796a208be96a320443f1?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e717bf81c0cbe55ef260834a3b35374d37f8cc32?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fc019673df7f8c876f930fc04001ab1af1a5d7ee?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6e9940bfa64dca519bb1977c1fc4b78a84de7dd2?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/796b1b55c44031b862aa7e4b04eb4b8c4fc7388f?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e3dd64ebea21c44bbf6f8f02f733a8d7f5b99278?placeholderIfAbsent=true",
    ],
  },
];
