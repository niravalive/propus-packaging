import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../assets/ecotellus-logo.png';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logoImage} alt="ecotellus Packaging Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative py-1 text-sm font-bold uppercase tracking-widest transition-all duration-300 group ${
                    isActive ? 'text-accent-600' : 'text-primary-900 hover:text-accent-600'
                  }`}
                  style={isActive ? { textShadow: '0 0 15px rgba(188, 215, 0, 0.3)' } : {}}
                >
                  {item.name}
                  {/* Hover Underline: Subtle and Soft */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-500/30 transition-all duration-500 ease-out group-hover:w-full" />
                  )}
                  {/* Active Underline: Solid and Animated */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="/assets/Catalouge.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:flex bg-accent-600 hover:bg-accent-700 text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Catalogue
            </a>
            
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-primary-900 hover:text-accent-600 transition-colors"
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-[31.25rem] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 font-bold uppercase tracking-wide rounded transition-colors ${
                    isActive ? 'bg-accent-50 text-accent-600' : 'text-primary-900 hover:bg-gray-50 hover:text-accent-600'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a 
              href="/assets/Catalouge.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 mx-4 bg-accent-600 text-white px-4 py-3 rounded text-center font-bold uppercase tracking-wider hover:bg-accent-700 transition-colors"
            >
              Catalogue
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

