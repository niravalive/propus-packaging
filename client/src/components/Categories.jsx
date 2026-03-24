import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const fallbackProducts = [
  { id: 1, name: 'Popcorn Tube', slug: 'popcorn-tube', image: '/assets/products/popcorn-tube.png', sizes: ['32 oz', '46 oz', '50 oz', '75 oz', '130 oz', '170 oz'] },
  { id: 2, name: 'Single Wall Hot Cup', slug: 'single-wall-hot-cup', image: '/assets/products/single-wall-hot-cup.png', sizes: ['150 ml', '200 ml', '250 ml', '6 oz', '8 oz', '10 oz', '12 oz'] },
  { id: 3, name: 'Cold Cup', slug: 'cold-cup', image: '/assets/products/cold-cup.png', sizes: ['330 ml', '450 ml', '550 ml', '650 ml', '900 ml'] },
  { id: 4, name: 'Double Wall Cup', slug: 'double-wall-cup', image: '/assets/products/double-wall-cup.png', sizes: ['8 oz', '10 oz', '12 oz', '16 oz'] },
];

const Categories = () => {
  const [products, setProducts] = useState(fallbackProducts);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(() => setProducts(fallbackProducts));
  }, []);

  return (
    <section id="categories" className="py-24 relative bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            INDUSTRIAL CATALOG
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900 leading-tight">
            Engineered <span className="text-accent-600">Packaging</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
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
              className="bg-white border border-gray-200 overflow-hidden group cursor-pointer hover:border-accent-500 hover:shadow-lg transition-all duration-300 rounded-2xl"
            >
              <Link to={`/product/${product.slug}`} className="block">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center p-6 border-b border-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover overlay hint */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-bold tracking-wider">VIEW SPECIFICATIONS</span>
                    <ExternalLink size={14} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-2 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-primary-900 group-hover:text-accent-600 transition-colors uppercase tracking-tight">
                      {product.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-accent-50 group-hover:text-accent-600 transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-1">{product.sizes.length} Base Specifications</p>
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
