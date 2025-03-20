import { EStoreCategory, ECommunityPrice, ECommunityType } from "@/enums/enums";

export const storeCategories = [
  { value: EStoreCategory.ELECTRONICS, label: "Electronics" },
  { value: EStoreCategory.FASHION, label: "Fashion & Clothing" },
  { value: EStoreCategory.HOME_APPLIANCES, label: "Home & Appliances" },
  { value: EStoreCategory.HEALTH_BEAUTY, label: "Health & Beauty" },
  { value: EStoreCategory.BOOKS, label: "Books & Stationery" },
  { value: EStoreCategory.BABY_PRODUCTS, label: "Baby Products" },
  { value: EStoreCategory.SPORTS_OUTDOORS, label: "Sports & Outdoors" },
  { value: EStoreCategory.FOOD_GROCERY, label: "Food & Grocery" },
  { value: EStoreCategory.TOYS_GAMES, label: "Toys & Games" },
  { value: EStoreCategory.FURNITURE, label: "Furniture" },
  { value: EStoreCategory.CARS_AUTOMOTIVE, label: "Cars & Automotive" },
  { value: EStoreCategory.PETS, label: "Pet Supplies" },
  { value: EStoreCategory.ARTS_CRAFTS, label: "Arts & Crafts" },
  { value: EStoreCategory.JEWELRY_ACCESSORIES, label: "Jewelry & Accessories" },
  { value: EStoreCategory.REAL_ESTATE, label: "Real Estate" },
  { value: EStoreCategory.DIGITAL_SERVICES, label: "Digital Services" },
  { value: EStoreCategory.MUSIC_INSTRUMENTS, label: "Musical Instruments" },
  { value: EStoreCategory.PHOTO_VIDEO, label: "Photography & Videography" },
  { value: EStoreCategory.HANDMADE, label: "Handmade & Unique Items" },
  { value: EStoreCategory.INDUSTRIAL_SUPPLIES, label: "Industrial Supplies" },
];

export const communityTypes = [
  { value: ECommunityType.PUBLIC, label: "Public" },
  { value: ECommunityType.PRIVATE, label: "Private" },
];

export const communityPrices = [
  { value: ECommunityPrice.FREE, label: "Free" },
  { value: ECommunityPrice.PAID, label: "Paid (Comming soon)" },
];
