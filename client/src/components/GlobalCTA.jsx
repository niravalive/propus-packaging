import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalCTA = () => {
  return (
    <section className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-600 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to scale your packaging operations?
          </h2>
          <p className="text-xl text-primary-200 mb-10 leading-relaxed font-light">
            Partner with ecotellus for industrial-grade quality, reliable lead times, and comprehensive B2B support tailored for global brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded font-semibold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-accent-600/20"
            >
              Request a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="bg-primary-900 border border-primary-700 hover:bg-primary-800 hover:border-primary-500 text-white px-8 py-4 rounded font-semibold text-lg transition-all flex items-center justify-center"
            >
              View Our Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCTA;
