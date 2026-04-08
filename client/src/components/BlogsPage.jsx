import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogsPage = () => {
  return (
    <div className="pt-0 bg-gray-50 min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="bg-primary-950 py-24 pt-10 text-center px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 border border-accent-500/20 text-accent-400 text-[0.625rem] font-bold tracking-[0.2em] uppercase mb-4">
              INSIGHTS & NEWS
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Our <span className="text-accent-500">Blog</span>
            </h1>
            <p className="text-xl text-primary-300 max-w-2xl mx-auto font-light">
              Industry insights, packaging innovations, and expert tips from the Ecotellus team.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-xl hover:border-accent-400 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[2/1] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent-500/10 text-accent-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors line-clamp-2">
                   <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                  <Link to={`/blog/${post.slug}`} className="text-accent-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Full Story <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 py-12"
        >
          <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent-100">
            <BookOpen size={28} className="text-accent-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">More Articles Coming Soon</h3>
          <p className="text-gray-500 max-w-md mx-auto text-sm font-light">
            We're working on more insights about food packaging, sustainability, and industry trends. Stay tuned!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogsPage;
