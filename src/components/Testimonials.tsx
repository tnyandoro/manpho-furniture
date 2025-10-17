import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Mrs. Chirambira',
    role: 'Harare',
    rating: 5,
    text: 'Outstanding quality and craftsmanship! The bedroom suite I ordered exceeded my expectations. The attention to detail and professional service from Manpho Investments is unmatched.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Mr. Edward',
    role: 'Harare',
    rating: 5,
    text: 'The custom wardrobe we ordered was delivered on time and installed perfectly. The team was professional and the quality is exceptional. Highly recommend Manpho for anyone looking for quality furniture.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Patricia Jacky',
    role: 'Harare',
    rating: 5,
    text: 'Absolutely love my new dining suite! The chairs are comfortable and the table is stunning. The free delivery was a bonus. Will definitely be ordering more furniture from Manpho.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'Mrs. Dongo',
    role: 'Harare',
    rating: 5,
    text: 'From ordering to delivery, the experience was seamless. The layby option made it easy to get the furniture I wanted. The quality is superb and they honored their one-year guarantee when I had a minor issue.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 5,
    name: 'Mrs. Mutopa',
    role: 'Harare',
    rating: 5,
    text: 'Best furniture manufacturer in Zimbabwe! The office furniture we ordered for our business is top quality. Professional service from start to finish. Thank you Manpho team!',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 6,
    name: 'Mr. Chivhanga',
    role: 'Harare',
    rating: 5,
    text: 'Great value for money! The craftsmanship is excellent and the prices are reasonable. The team was patient with my custom requirements and delivered exactly what I wanted.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsPerView + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [itemsPerView]);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-manpho-blue via-manpho-green to-manpho-blue">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Zimbabwe
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-xl"
                style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
              >
                <Quote className="text-manpho-green mb-4" size={40} />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: testimonials.length - itemsPerView + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-white w-8 h-3'
                  : 'bg-white/50 hover:bg-white/80 w-3 h-3'
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
