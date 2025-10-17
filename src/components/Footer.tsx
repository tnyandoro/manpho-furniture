import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-manpho-green to-manpho-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h3 className="text-2xl font-bold">Manpho</h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Quality furniture manufacturing since 2021. Committed to excellence and customer satisfaction.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-manpho-green rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-manpho-green rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-manpho-green rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Collections', 'About Us', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-manpho-green transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {['Bedroom Furniture', 'Kitchen Furniture', 'Sitting Room Furniture', 'Wardrobes', 'Office Furniture', 'Dining Suites'].map((item) => (
                <li key={item}>
                  <a
                    href="#collections"
                    className="text-gray-400 hover:text-manpho-green transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-manpho-green flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  Stand No. 3864 61 Crescent<br />
                  Glen View 3, Harare, Zimbabwe
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-manpho-green flex-shrink-0" size={20} />
                <div className="text-gray-400">
                  <a href="tel:+263715353178" className="hover:text-manpho-green transition-colors">
                    +263 715 353 178
                  </a>
                  <br />
                  <a href="tel:+263775285626" className="hover:text-manpho-green transition-colors">
                    +263 775 285 626
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-manpho-green flex-shrink-0" size={20} />
                <a
                  href="mailto:manphoinvestmentco@gmail.com"
                  className="text-gray-400 hover:text-manpho-green transition-colors"
                >
                  manphoinvestmentco@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Manpho Investments (Pvt) Ltd. All rights reserved. Reg No: 18608/2021
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-manpho-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-manpho-green transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
