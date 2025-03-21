import { EStoreCategory } from "@/enums/enums";

type TFilterList = {
  id: number;
  name: string;
  icon?: string;
  query: EStoreCategory;
};

type TFilterTypesAndPrice = {
  id: number;
  name: string;
};

const discoveryFiltersData: TFilterList[] = [
  {
    id: 1,
    name: "Electronics",
    icon: "🔌",
    query: EStoreCategory.ELECTRONICS,
  },
  {
    id: 2,
    name: "Fashion & Clothing",
    icon: "👗",
    query: EStoreCategory.FASHION,
  },
  {
    id: 3,
    name: "Home & Appliances",
    icon: "🏠",
    query: EStoreCategory.HOME_APPLIANCES,
  },
  {
    id: 4,
    name: "Health & Beauty",
    icon: "💄",
    query: EStoreCategory.HEALTH_BEAUTY,
  },
  {
    id: 5,
    name: "Books & Stationery",
    icon: "📚",
    query: EStoreCategory.BOOKS,
  },
  {
    id: 6,
    name: "Baby Products",
    icon: "🍼",
    query: EStoreCategory.BABY_PRODUCTS,
  },
  {
    id: 7,
    name: "Sports & Outdoors",
    icon: "⚽",
    query: EStoreCategory.SPORTS_OUTDOORS,
  },
  {
    id: 8,
    name: "Food & Grocery",
    icon: "🛒",
    query: EStoreCategory.FOOD_GROCERY,
  },
  {
    id: 9,
    name: "Toys & Games",
    icon: "🎮",
    query: EStoreCategory.TOYS_GAMES,
  },
  {
    id: 10,
    name: "Furniture",
    icon: "🛋️",
    query: EStoreCategory.FURNITURE,
  },
  {
    id: 11,
    name: "Cars & Automotive",
    icon: "🚗",
    query: EStoreCategory.CARS_AUTOMOTIVE,
  },
  {
    id: 12,
    name: "Pet Supplies",
    icon: "🐶",
    query: EStoreCategory.PETS,
  },
  {
    id: 13,
    name: "Arts & Crafts",
    icon: "🎨",
    query: EStoreCategory.ARTS_CRAFTS,
  },
  {
    id: 14,
    name: "Jewelry & Accessories",
    icon: "💍",
    query: EStoreCategory.JEWELRY_ACCESSORIES,
  },
  {
    id: 15,
    name: "Real Estate",
    icon: "🏡",
    query: EStoreCategory.REAL_ESTATE,
  },
  {
    id: 16,
    name: "Digital Services",
    icon: "💻",
    query: EStoreCategory.DIGITAL_SERVICES,
  },
  {
    id: 17,
    name: "Musical Instruments",
    icon: "🎸",
    query: EStoreCategory.MUSIC_INSTRUMENTS,
  },
  {
    id: 18,
    name: "Photography & Videography",
    icon: "📷",
    query: EStoreCategory.PHOTO_VIDEO,
  },
  {
    id: 19,
    name: "Handmade & Unique Items",
    icon: "🧵",
    query: EStoreCategory.HANDMADE,
  },
  {
    id: 20,
    name: "Industrial Supplies",
    icon: "🏭",
    query: EStoreCategory.INDUSTRIAL_SUPPLIES,
  },
];

const discoveryFiltersTypes: TFilterTypesAndPrice[] = [
  {
    id: 1,
    name: "public",
  },
];

const discoveryFiltersPrice: TFilterTypesAndPrice[] = [
  {
    id: 1,
    name: "free",
  },
];

export { discoveryFiltersData, discoveryFiltersTypes, discoveryFiltersPrice };
