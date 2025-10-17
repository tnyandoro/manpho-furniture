import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const categoryData = {
  bedroom: {
    name: 'Bedroom Furniture',
    description: 'Transform your bedroom into a sanctuary of comfort and style with our premium bedroom furniture collection.',
    products: [
      {
        id: 1,
        name: 'Luxury Bed Set',
        price: 450,
        image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Premium quality bed with elegant design and comfortable mattress'
      },
      {
        id: 2,
        name: 'Modern Wardrobe',
        price: 380,
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Spacious wardrobe with sliding doors and ample storage'
      },
      {
        id: 3,
        name: 'Dressing Table',
        price: 220,
        image: 'https://images.pexels.com/photos/6707630/pexels-photo-6707630.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Elegant dressing table with mirror and storage drawers'
      },
      {
        id: 4,
        name: 'Bedside Tables',
        price: 120,
        image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Set of 2 matching bedside tables with drawers'
      },
      {
        id: 5,
        name: 'Bedroom Suite',
        price: 850,
        image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Complete bedroom suite with bed, wardrobes, and dressing table'
      },
      {
        id: 6,
        name: 'Chest of Drawers',
        price: 180,
        image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Multi-drawer chest for organized storage'
      }
    ]
  },
  kitchen: {
    name: 'Kitchen Furniture',
    description: 'Create the perfect dining experience with our stylish and functional kitchen furniture collection.',
    products: [
      {
        id: 7,
        name: 'Dining Table Set',
        price: 520,
        image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: '6-seater dining table with elegant chairs'
      },
      {
        id: 8,
        name: 'Kitchen Chairs',
        price: 45,
        image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Comfortable kitchen chairs with modern design'
      },
      {
        id: 9,
        name: 'Kitchen Island',
        price: 380,
        image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Multi-functional kitchen island with storage'
      },
      {
        id: 10,
        name: 'Bar Stools',
        price: 65,
        image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Modern bar stools for kitchen counter'
      },
      {
        id: 11,
        name: 'Dining Suite',
        price: 680,
        image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Complete dining suite with table and 8 chairs'
      },
      {
        id: 12,
        name: 'Kitchen Cabinet',
        price: 290,
        image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Wall-mounted kitchen cabinet with glass doors'
      }
    ]
  },
  'sitting-room': {
    name: 'Sitting Room Furniture',
    description: 'Design your perfect living space with our comfortable and stylish sitting room furniture.',
    products: [
      {
        id: 13,
        name: 'L-Shape Sofa',
        price: 780,
        image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Spacious L-shaped sofa with premium upholstery'
      },
      {
        id: 14,
        name: '3-Seater Sofa',
        price: 420,
        image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Comfortable 3-seater sofa for family gatherings'
      },
      {
        id: 15,
        name: 'Coffee Table',
        price: 150,
        image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Modern coffee table with glass top'
      },
      {
        id: 16,
        name: 'TV Stand',
        price: 220,
        image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Entertainment unit with shelves and drawers'
      },
      {
        id: 17,
        name: 'Recliner Chair',
        price: 280,
        image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Luxurious recliner with footrest'
      },
      {
        id: 18,
        name: 'Living Room Set',
        price: 1200,
        image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Complete living room set with sofas and tables'
      }
    ]
  },
  wardrobes: {
    name: 'Wardrobes',
    description: 'Maximize your storage with our range of high-quality wardrobes designed for modern living.',
    products: [
      {
        id: 19,
        name: 'Sliding Door Wardrobe',
        price: 450,
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Space-saving wardrobe with smooth sliding doors'
      },
      {
        id: 20,
        name: 'Mirror Wardrobe',
        price: 520,
        image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Wardrobe with full-length mirror doors'
      },
      {
        id: 21,
        name: 'Walk-in Closet',
        price: 980,
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Custom walk-in closet system with drawers'
      },
      {
        id: 22,
        name: 'Corner Wardrobe',
        price: 420,
        image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Space-efficient corner wardrobe design'
      },
      {
        id: 23,
        name: 'Kids Wardrobe',
        price: 280,
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Colorful wardrobe perfect for children'
      },
      {
        id: 24,
        name: 'Fitted Wardrobe',
        price: 850,
        image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Custom-fitted wardrobe system for maximum storage'
      }
    ]
  }
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const data = category ? categoryData[category as keyof typeof categoryData] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link
            to="/"
            className="text-manpho-blue hover:text-manpho-green transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-manpho-blue hover:text-manpho-green transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data.name}
          </h1>
          <p className="text-xl text-gray-600">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-manpho-green">
                    ${product.price}
                  </span>
                  <button className="bg-manpho-blue hover:bg-manpho-green text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
