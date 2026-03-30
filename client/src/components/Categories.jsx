import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { productsData } from '../data/products';

const Categories = () => {
  const [products, setProducts] = useState(productsData);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(() => setProducts(productsData));
  }, []);

  return (
    <section id="categories" className="py-24 relative overflow-hidden bg-primary-950">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/hero-doodle-bg.png')] bg-repeat bg-[length:62.5rem_62.5rem] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 via-transparent to-transparent"></div>
      </div>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-500/10 border border-accent-500/20 text-accent-400 text-[0.625rem] font-bold tracking-[0.2em] uppercase mb-4">
            INDUSTRIAL CATALOG
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white leading-tight">
            Engineered <span className="text-accent-600">Packaging</span>
          </h2>
          <p className="text-primary-200 max-w-2xl mx-auto text-lg font-light">
            High-performance packaging classifications designed for scale, durability, and brand impact.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-primary-900/50 border border-primary-700 overflow-hidden group cursor-pointer hover:border-accent-500 hover:shadow-lg transition-all duration-300 rounded-2xl backdrop-blur-sm"
            >
              <Link to={`/product/${product.slug}`} className="block">
                {/* Image */}
                <div className={`relative h-64 overflow-hidden flex items-center justify-center border-b border-primary-700/50 bg-[#ffffff] ${product.slug === 'popcorn-tub-long' ? 'p-0' : 'p-0'}`} style={{ backgroundColor: '#ffffff' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`transition-transform duration-700 group-hover:scale-110 ${product.slug === 'popcorn-tub-long' ? 'w-auto h-full object-contain scale-99' : 'w-full h-full object-cover'}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover overlay hint */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-bold tracking-wider">VIEW DETAILS</span>
                    <ExternalLink size={14} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white group-hover:text-accent-400 transition-colors uppercase tracking-tight">
                      {product.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-primary-300 group-hover:bg-accent-500/20 group-hover:text-accent-400 transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                  <p className="text-xs text-primary-300 font-medium mt-1">{product.sizes.length} Sizes Available</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
