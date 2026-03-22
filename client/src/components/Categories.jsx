import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const fallbackCategories = [
  { id: 1, name: 'Takeaway Food Boxes', slug: 'takeaway-food-boxes', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop', count: 45 },
  { id: 2, name: 'Takeaway Food Trays', slug: 'food-trays', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', count: 32 },
  { id: 3, name: 'Burger & Clamshell Boxes', slug: 'clamshell-takeaway-boxes', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', count: 28 },
  { id: 4, name: 'Disposable Tableware', slug: 'disposable-tableware', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop', count: 56 },
  { id: 5, name: 'Round Bowls & Lids', slug: 'round-bowls-lids', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop', count: 22 },
  { id: 6, name: 'Soup Containers', slug: 'soup-containers', image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=300&fit=crop', count: 18 },
  { id: 7, name: 'Ice Cream Tubs', slug: 'ice-cream-tubs', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop', count: 15 },
  { id: 8, name: 'Noodle Boxes', slug: 'noodle-boxes', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', count: 12 },
  { id: 9, name: 'Plates & Bowls', slug: 'plates-bowls', image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=300&fit=crop', count: 38 },
  { id: 10, name: 'Hot Drink Cups', slug: 'hot-drink-cups', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop', count: 25 },
  { id: 11, name: 'Paper Carrier Bags', slug: 'bags-carriers', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop', count: 20 },
  { id: 12, name: 'Cutlery & Napkins', slug: 'cutlery-napkins', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', count: 30 },
];

const Categories = () => {
  const [categories, setCategories] = useState(fallbackCategories);

  useEffect(() => {
    axios.get('/api/categories')
      .then(res => setCategories(res.data))
      .catch(() => setCategories(fallbackCategories));
  }, []);

  return (
    <section id="categories" className="py-24 relative bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-md bg-primary-500 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
            BROWSE COLLECTION
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900 leading-tight">
            Shop by <span className="text-primary-500">Category</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Explore our extensive range of takeaway packaging and disposables, all at unbeatable prices.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Link to={`/category/${category.slug}`} className="block">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

                  {/* Product count badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-white text-primary-500 text-[10px] font-bold shadow-sm">
                    {category.count} ITEMS
                  </div>

                  {/* Hover overlay hint */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-bold tracking-wider">VIEW RANGE</span>
                    <ExternalLink size={14} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-primary-500 transition-colors uppercase tracking-tight">
                    {category.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-500 transition-all">
                    <ArrowRight size={16} />
                  </div>
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
