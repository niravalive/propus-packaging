import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import logoImage from '../assets/ecotellus-logo.png';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showVat, setShowVat] = useState(false);

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 backdrop-blur-md bg-white/40 mt-4 rounded-xl shadow-lg w-[95%] max-w-[1440px]">
      {/* Main Header (White) */}
      <div className="py-4 shadow-sm bg-white/20 border-b border-white/10 rounded-xl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button - Left */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-primary-500"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo - Center */}
            <a href="#" className="flex items-center">
              <img src={logoImage} alt="Ecotellus Logo" className="h-10 w-auto" />
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 uppercase tracking-wider text-sm font-semibold">
              <a href="#" className="hover:text-primary-500">Shop Online</a>
              <a href="#custom" className="hover:text-primary-500">Custom Branding</a>
              <a href="#contact" className="hover:text-primary-500">Contact Us</a>
              <a href="#faqs" className="hover:text-primary-500">FAQ</a>
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMobileOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 bg-white animate-slide-up">
              <div className="flex flex-col gap-1">
                <a href="#" className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium">Home</a>
                <a href="#" className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium">Shop Online</a>
                <a href="#custom" className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium">Custom Branding</a>
                <a href="#contact" className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium">Contact Us</a>
                <a href="#faqs" className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium">FAQs</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
