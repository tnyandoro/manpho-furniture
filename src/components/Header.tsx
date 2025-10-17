import { Menu, ShoppingCart, Search, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = !isHomePage || isScrolled ? 'bg-white shadow-lg' : 'bg-transparent';
  const textColor = !isHomePage || isScrolled ? 'text-gray-700' : 'text-white';
  const logoColor = !isHomePage || isScrolled ? 'text-gray-900' : 'text-white';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg} py-4`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-manpho-green to-manpho-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h1
                className={`text-2xl font-bold transition-colors duration-300 ${logoColor}`}
              >
                Manpho
              </h1>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-all duration-300 hover:text-manpho-green ${textColor}`}
              >
                Home
              </Link>
              <a
                href="/#collections"
                className={`font-medium transition-all duration-300 hover:text-manpho-green ${textColor}`}
              >
                Collections
              </a>
              <a
                href="/#about"
                className={`font-medium transition-all duration-300 hover:text-manpho-green ${textColor}`}
              >
                About
              </a>
              <Link
                to="/contact"
                className={`font-medium transition-all duration-300 hover:text-manpho-green ${textColor}`}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <button
              className={`transition-colors duration-300 hover:text-manpho-green ${textColor}`}
              aria-label="Search"
            >
              <Search size={22} />
            </button>
            <button
              className={`transition-colors duration-300 hover:text-manpho-green ${textColor}`}
              aria-label="User account"
            >
              <User size={22} />
            </button>
            <button
              className={`transition-colors duration-300 hover:text-manpho-green relative ${textColor}`}
              aria-label="Shopping cart"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-manpho-green text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className={`lg:hidden transition-colors duration-300 ${textColor}`}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
