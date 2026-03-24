import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/ecotellus-logo.png';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logoImage} alt="ecotellus Packaging Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-primary-900 hover:text-accent-600 font-semibold text-sm uppercase tracking-wider transition-colors">Home</Link>
            <Link to="/products" className="text-primary-900 hover:text-accent-600 font-semibold text-sm uppercase tracking-wider transition-colors">Products</Link>
            <Link to="/about" className="text-primary-900 hover:text-accent-600 font-semibold text-sm uppercase tracking-wider transition-colors">About Us</Link>
            <Link to="/contact" className="text-primary-900 hover:text-accent-600 font-semibold text-sm uppercase tracking-wider transition-colors">Contact</Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/quote" className="hidden md:flex bg-accent-600 hover:bg-accent-700 text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-colors shadow-sm">
              Request a Quote
            </Link>
            
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-primary-900 hover:text-accent-600 transition-colors"
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-[500px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 flex flex-col gap-2">
            <Link to="/" className="px-4 py-3 text-primary-900 hover:bg-gray-50 hover:text-accent-600 font-bold uppercase tracking-wide rounded">Home</Link>
            <Link to="/products" className="px-4 py-3 text-primary-900 hover:bg-gray-50 hover:text-accent-600 font-bold uppercase tracking-wide rounded">Products</Link>
            <Link to="/about" className="px-4 py-3 text-primary-900 hover:bg-gray-50 hover:text-accent-600 font-bold uppercase tracking-wide rounded">About Us</Link>
            <Link to="/contact" className="px-4 py-3 text-primary-900 hover:bg-gray-50 hover:text-accent-600 font-bold uppercase tracking-wide rounded">Contact</Link>
            <Link to="/quote" className="mt-4 mx-4 bg-accent-600 text-white px-4 py-3 rounded text-center font-bold uppercase tracking-wider hover:bg-accent-700 transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

