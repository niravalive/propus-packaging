import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gray-50">

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-600 text-sm font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              ISO 9001 &amp; FSC Certified
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Custom Packaging Solutions for{' '}
              <span className="text-accent-500">Global Brands</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
              Engineered for scale, speed, and sustainability. We manufacture and supply industrial-grade packaging that protects your product and elevates your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-accent-600/20"
              >
                Request a Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="bg-gray-200/50 hover:bg-gray-200 border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded font-bold text-lg transition-all flex items-center justify-center backdrop-blur-sm"
              >
                Explore Product Range
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Package size={20} className="text-accent-500" />
                <span className="font-medium">Lower MOQ</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-accent-500" />
                <span className="font-medium">100% Quality Guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Composite Hero Images ── */}
          <div className="flex-1 w-full max-w-xl relative mx-auto lg:ml-auto lg:mr-0 mt-16 lg:mt-0 pb-16 lg:pb-0">
            {/* Main larger image */}
            <motion.div
              className="w-4/5 aspect-square ml-auto relative z-0 bg-gray-200 overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Blue Overlay - hex code #01a2d3 at 50% opacity */}
              <div
                className="absolute inset-0 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"
                style={{ backgroundColor: '#01a2d380' }}
              ></div>
              <img
                src="/assets/Rollar/lower/rolling image (1).webp"
                alt="Factory Process"
                style={{ filter: 'grayscale(30%)' }}
                className="w-full h-full object-cover hover:scale-105 group-hover:!grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Floating smaller image */}
            <motion.div
              className="absolute left-0 -bottom-10 lg:-bottom-16 w-[45%] max-w-[18.75rem] z-20 bg-white p-4 shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:shadow-2xl flex items-center justify-center overflow-hidden group/small transition-all duration-500"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Green Overlay - hex code #bcd700 at 50% opacity */}
              <div
                className="absolute inset-0 z-10 pointer-events-none group-hover/small:opacity-0 transition-opacity duration-500"
                style={{ backgroundColor: '#21c55e80' }}
              ></div>
              <img
                src="/assets/Ecotellus Web Images/Products/Popcorm Tub - red/2.png"
                alt="Product Sample"
                style={{ filter: 'grayscale(30%)' }}
                className="w-full h-auto object-contain hover:scale-105 group-hover/small:!grayscale-0 transition-all duration-500 relative"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
