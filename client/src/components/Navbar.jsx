import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showVat, setShowVat] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md bg-white/40 mx-4 mt-4 rounded-xl shadow-lg w-[calc(100%-2rem)] max-w-6xl left-1/2 -translate-x-1/2' : ''
    }`}>
      {/* Top Bar (Teal) - Hidden when scrolled */}
      {!isScrolled && (
        <div className="bg-primary-500 text-white text-[11px] font-medium py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="flex text-yellow-400">★★★★★</span>
              <a href="#" className="hover:underline">5.0/5 based on 46 reviews</a>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="flex items-center gap-1 uppercase tracking-wider hover:text-white/80">
              <span className="h-4 w-4 bg-white text-primary-500 flex items-center justify-center rounded-sm">🏠</span> HOME
            </a>
            <div className="relative group cursor-pointer flex items-center gap-1 uppercase tracking-wider hover:text-white/80">
              <ShoppingCart size={14} className="fill-white" /> SHOP ONLINE <ChevronDown size={14} />
            </div>
            <a href="#custom" className="uppercase tracking-wider hover:text-white/80">CUSTOM BRANDING</a>
            <a href="#contact" className="uppercase tracking-wider hover:text-white/80">CONTACT US</a>
            <a href="#faqs" className="uppercase tracking-wider hover:text-white/80">FAQS</a>
          </div>

          <div className="hidden lg:flex items-center gap-2 uppercase tracking-wider">
            <span>SHOW PRICES</span>
            <div className="flex items-center gap-1">
              <span className={!showVat ? 'text-white' : 'text-white/50'}>EX. VAT</span>
              <button 
                onClick={() => setShowVat(!showVat)}
                className="w-8 h-4 bg-white/20 rounded-full relative p-0.5 transition-colors"
              >
                <div className={`w-3 h-3 bg-white rounded-full transition-transform ${showVat ? 'translate-x-4' : 'translate-x-0'}`} />
              </button>
              <span className={showVat ? 'text-white' : 'text-white/50'}>INC. VAT</span>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Main Header (White) */}
      <div className={`py-4 shadow-sm ${isScrolled ? 'bg-white/20 border-b border-white/10 rounded-b-xl' : 'bg-white border-b border-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button - Left */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-primary-500"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo - Center */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center text-primary-500 border-2 border-primary-500 rounded-full font-bold text-xl">
                P
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-widest text-primary-500 uppercase leading-none">PROPUS</span>
                <span className="text-[10px] tracking-[0.4em] text-primary-500 uppercase font-medium">PACKAGING</span>
              </div>
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
