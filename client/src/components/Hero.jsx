import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">

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
          <div className="flex-1 w-full max-w-xl relative mx-auto lg:ml-auto lg:mr-0 mt-16 md:mt-24 lg:mt-0 flex gap-4 sm:gap-6 min-h-[500px]">

            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-6 pt-12 sm:pt-20">
              {/* Top Left: Small Product */}
              <motion.div
                className="w-10/12 ml-auto aspect-[4/3] rounded-3xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/assets/Ecotellus Web Images/Products/Burger Box/1.png"
                  alt="Premium Product Sample"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Bottom Left: Big Factory Image */}
              <motion.div
                className="w-full aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="/assets/Ecotellus Web Images/Factory /factory 2.webp"
                  alt="Factory Process"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-6 pb-12 sm:pb-20">
              {/* Top Right: Custom Image */}
              <motion.div
                className="w-full aspect-[3/4] sm:aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img
                  src="/assets/WhatsApp Image 2026-04-03 at 18.07.26.jpeg"
                  alt="Quality Packaging Production"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Bottom Right: Small Product */}
              <motion.div
                className="w-10/12 mr-auto aspect-square rounded-3xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img
                  src="/assets/Ecotellus Web Images/Products/Popcorm Tub - red/2.png"
                  alt="Product Image"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
