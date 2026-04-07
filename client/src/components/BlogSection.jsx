import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogSection = () => {
  // Show first 3 for home page
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary-950 mb-4">
              Latest <span className="text-accent-600">Company Insights</span>
            </h2>
            <div className="w-20 h-1 bg-accent-600"></div>
          </div>
          <Link
            to="/blogs"
            className="text-accent-600 font-bold flex items-center gap-2 group hover:gap-3 transition-all"
          >
            Visit Blog <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-accent-400 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                  <span className="bg-accent-50 text-accent-700 px-2 py-1 rounded">{post.category}</span>
                  <div className="flex items-center gap-1.5 whitespace-nowrap">
                    <Clock size={14} /> {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-accent-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-accent-600 hover:text-accent-700 transition-colors"
                    >
                      Read Full Post <ArrowRight size={16} />
                    </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
