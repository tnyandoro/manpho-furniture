// CategoriesData.ts
import { Bed, Utensils, Sofa, Warehouse } from "lucide-react";
import bedHeadSet from "@/assets/images/bed-head-set.png";
import bedroomSet from "@/assets/images/bedroom-set.png";
import kitchenCabinet from "@/assets/images/kitchen-cabinet.png";
import loungeStand from "@/assets/images/lounge_stand.png";
import otterman from "@/assets/images/otterman.png";
import wardrobe from "@/assets/images/wadrobe.png";
import wardrobe2 from "@/assets/images/wadrobe-2.png";
import wardrobe3 from "@/assets/images/wadrobe-3.png";
import wardrobe4 from "@/assets/images/wadrobe-4.png";

const categories = [
  {
    id: 1,
    name: "Bedroom Furniture",
    description: "Premium beds...",
    image: bedHeadSet,
    icon: Bed,
    slug: "bedroom",
  },
  {
    id: 2,
    name: "Bedroom Sets",
    description: "Coordinated sets...",
    image: bedroomSet,
    icon: Bed,
    slug: "bedroom-sets",
  },
  {
    id: 3,
    name: "Kitchen Furniture",
    description: "Modern kitchen...",
    image: kitchenCabinet,
    icon: Utensils,
    slug: "kitchen",
  },
  {
    id: 4,
    name: "Sitting Room Furniture",
    description: "Elegant sofas...",
    image: loungeStand,
    icon: Sofa,
    slug: "sitting-room",
  },
  {
    id: 5,
    name: "Ottomans",
    description: "Comfortable ottomans...",
    image: otterman,
    icon: Sofa,
    slug: "ottomans",
  },
  {
    id: 6,
    name: "Wardrobes",
    description: "Quality wardrobes...",
    image: wardrobe,
    icon: Warehouse,
    slug: "wardrobes",
  },
  {
    id: 7,
    name: "Wardrobe 2",
    description: "Additional options...",
    image: wardrobe2,
    icon: Warehouse,
    slug: "wardrobe-2",
  },
  {
    id: 8,
    name: "Wardrobe 3",
    description: "Stylish designs...",
    image: wardrobe3,
    icon: Warehouse,
    slug: "wardrobe-3",
  },
  {
    id: 9,
    name: "Wardrobe 4",
    description: "Spacious wardrobes...",
    image: wardrobe4,
    icon: Warehouse,
    slug: "wardrobe-4",
  },
];

export default categories;
