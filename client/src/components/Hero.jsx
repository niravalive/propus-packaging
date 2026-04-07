import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-22 lg:pb-24 overflow-hidden">

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <motion.div
            className="flex-1 max-w-2xl lg:-mt-40"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Custom{' '}
              <span className="text-accent-500">Food Packaging</span>{' '}
              Solutions
            </h1>

            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
              We manufacture premium food packaging &amp; catering disposables that protects your product and elevates your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-lg shadow-accent-600/20"
              >
                Get a Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/assets/Catalouge.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200/50 hover:bg-gray-200 border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center backdrop-blur-sm"
              >
                Catalogue
              </a>
              <Link
                to="/blogs"
                className="bg-gray-200/50 hover:bg-gray-200 border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center backdrop-blur-sm"
              >
                Blogs
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Package size={20} className="text-accent-500" />
                <span className="font-medium">Low MOQ</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-accent-500" />
                <span className="font-medium">Premium Quality</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Composite Hero Images ── */}
          <div className="flex-1 w-full max-w-xl relative mx-auto lg:ml-auto lg:mr-0 mt-16 md:mt-24 lg:mt-0 flex gap-4 sm:gap-6 min-h-[500px]">

            {/* Left Column — Coffee Essentials */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-6 pt-12 sm:pt-20">
              {/* Top Left: Coffee Shop Lifestyle */}
              <Link to="/products?category=movie">
                <motion.div
                  className="w-full aspect-square rounded-3xl overflow-hidden shadow-lg cursor-pointer group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <img
                    src="/assets/generated/movie-popcorn-lifestyle.png"
                    alt="Movie Essentials — Premium Popcorn Tubs & Cinema Packaging"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-end p-4">
                    <span className="text-white text-xs font-bold tracking-wider uppercase">Movie Essentials →</span>
                  </div>
                </motion.div>
              </Link>


              {/* Bottom Left: Big Factory Image */}
              <motion.div
                className="w-[115%] -ml-[15%] sm:w-[130%] sm:-ml-[30%] lg:w-[160%] lg:-ml-[60%] aspect-[2/1] rounded-3xl overflow-hidden shadow-2xl relative z-20"
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

            {/* Right Column — Movie Essentials */}
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

              {/* Bottom Right: Movie Popcorn Lifestyle */}
              <Link to="/products?category=coffee">
                <motion.div
                  className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src="/assets/generated/coffee-shop-lifestyle.png"
                    alt="Coffee Shop Essentials — Paper Cups, Lids & Takeaway Packaging"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                </motion.div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
