import { Bed, Utensils, Sofa, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ Import local images using alias
import bedHeadSet from "@/assets/images/bed-head-set.png";
import bedroomSet from "@/assets/images/bedroom-set.png";
import kitchenCabinet from "@/assets/images/kitchen-cabinet.png";
import loungeStand from "@/assets/images/lounge_stand.png";
import otterman from "@/assets/images/otterman.png";
// import wardrobe from "@/assets/images/wardrobe.png";
import wardrobe from "@/assets/images/wadrobe.png";
import wardrobe2 from "@/assets/images/wadrobe-2.png";
import wardrobe3 from "@/assets/images/wadrobe-3.png";
import wardrobe4 from "@/assets/images/wadrobe-4.png";

// 🪑 Category data with local images
const categories = [
  {
    id: 1,
    name: "Bedroom Furniture",
    description:
      "Premium beds, wardrobes, and dressing tables crafted with precision",
    image: bedHeadSet,
    icon: Bed,
    slug: "bedroom",
  },
  {
    id: 2,
    name: "Bedroom Sets",
    description: "Coordinated bedroom furniture sets for style and comfort",
    image: bedroomSet,
    icon: Bed,
    slug: "bedroom-sets",
  },
  {
    id: 3,
    name: "Kitchen Furniture",
    description: "Modern kitchen chairs, dining suites, and fitted cupboards",
    image: kitchenCabinet,
    icon: Utensils,
    slug: "kitchen",
  },
  {
    id: 4,
    name: "Sitting Room Furniture",
    description:
      "Elegant sofas, TV stands, and coffee tables for your living space",
    image: loungeStand,
    icon: Sofa,
    slug: "sitting-room",
  },
  {
    id: 5,
    name: "Ottomans",
    description: "Comfortable and stylish ottomans for any room",
    image: otterman,
    icon: Sofa,
    slug: "ottomans",
  },
  {
    id: 6,
    name: "Wardrobes",
    description:
      "Quality wardrobes and fitted storage solutions for every room",
    image: wardrobe,
    icon: Warehouse,
    slug: "wardrobes",
  },
  {
    id: 7,
    name: "Wardrobe 2",
    description: "Additional wardrobe options for your home",
    image: wardrobe2,
    icon: Warehouse,
    slug: "wardrobe-2",
  },
  {
    id: 8,
    name: "Wardrobe 3",
    description: "Stylish wardrobe designs for modern homes",
    image: wardrobe3,
    icon: Warehouse,
    slug: "wardrobe-3",
  },
  {
    id: 9,
    name: "Wardrobe 4",
    description: "Spacious wardrobes for all your storage needs",
    image: wardrobe4,
    icon: Warehouse,
    slug: "wardrobe-4",
  },
];

export default function Categories() {
  return (
    <section
      id="collections"
      className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our extensive range of quality furniture designed to
            transform your home
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-12 h-12 bg-manpho-green rounded-full flex items-center justify-center mb-3">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-manpho-blue font-semibold hover:text-manpho-green transition-colors duration-300 flex items-center gap-2">
                    Explore Collection
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
