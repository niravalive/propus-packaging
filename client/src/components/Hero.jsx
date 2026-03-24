import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary-950">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/hero-doodle-bg.png')] bg-repeat bg-[length:1000px_1000px] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              ISO 9001 & FSC Certified
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Custom Packaging Solutions for <span className="text-accent-500">Global Brands</span>
            </h1>
            <p className="text-xl text-primary-200 mb-10 font-light leading-relaxed max-w-2xl">
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
                className="bg-primary-800/50 hover:bg-primary-800 border border-primary-700 hover:border-primary-500 text-white px-8 py-4 rounded font-bold text-lg transition-all flex items-center justify-center backdrop-blur-sm"
              >
                Explore Product Range
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 text-sm text-primary-300">
              <div className="flex items-center gap-2">
                <Package size={20} className="text-accent-500" />
                <span className="font-medium">MOQ Starts at 1,000</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-accent-500" />
                <span className="font-medium">100% Quality Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
