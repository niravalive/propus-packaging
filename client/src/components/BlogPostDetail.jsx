import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8 font-light">The article you're looking for doesn't exist.</p>
          <Link to="/blogs" className="bg-accent-600 text-white px-8 py-3 rounded font-bold hover:bg-accent-700 transition-colors">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Simple Markdown-style parser for basic elements
  const renderContent = (content) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('# ')) {
        return <h1 key={i} className="text-3xl md:text-5xl font-black text-gray-900 mb-8 mt-12 leading-tight">{block.replace('# ', '')}</h1>;
      }
      if (block.startsWith('## ')) {
        return <h2 key={i} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-10">{block.replace('## ', '')}</h2>;
      }
      if (block.startsWith('### ')) {
        return <h3 key={i} className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">{block.replace('### ', '')}</h3>;
      }
      if (block.startsWith('- ')) {
        return (
          <ul key={i} className="list-disc pl-6 mb-6 space-y-3">
            {block.split('\n').map((item, idx) => (
              <li key={idx} className="text-lg text-gray-700 font-light leading-relaxed">{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      if (block.startsWith('1. ') || block.startsWith('2. ') || block.startsWith('3. ')) {
        return (
          <ol key={i} className="list-decimal pl-6 mb-6 space-y-3">
             {block.split('\n').map((item, idx) => (
              <li key={idx} className="text-lg text-gray-700 font-light leading-relaxed">{item.replace(/^[0-9]\. /, '')}</li>
            ))}
          </ol>
        );
      }
      if (block.startsWith('**') && block.endsWith('**')) {
        return <p key={i} className="text-lg font-bold text-gray-900 mb-6 leading-relaxed">{block.replace(/\*\*/g, '')}</p>;
      }
      if (block.startsWith('---')) {
        return <hr key={i} className="my-12 border-gray-200" />;
      }
       if (block.startsWith('*') && block.endsWith('*')) {
        return <p key={i} className="text-base italic text-gray-500 mb-6">{block.replace(/\*/g, '')}</p>;
      }
      return <p key={i} className="text-lg text-gray-700 font-light leading-relaxed mb-6">{block}</p>;
    });
  };

  return (
    <div className="bg-white min-h-screen pt-10">
      {/* Header Section */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-bold text-accent-600 hover:text-accent-700 mb-8 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blogs
          </Link>
          
          <div className="max-w-4xl">
             <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                  <span className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full">{post.category}</span>
                  <div className="flex items-center gap-1.5 whitespace-nowrap">
                    <Calendar size={14} className="text-accent-600" /> {post.date}
                  </div>
                  <div className="flex items-center gap-1.5 whitespace-nowrap">
                    <Clock size={14} className="text-accent-600" /> {post.readTime}
                  </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Content Column */}
          <motion.div 
            className="flex-1 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <article className="prose prose-lg max-w-none prose-accent">
              {renderContent(post.content)}
            </article>

            {/* Social Share Section */}
            <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                 <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Share this article:</span>
                 <div className="flex gap-3">
                   {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                     <button key={i} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-600 hover:border-accent-600 transition-all">
                       <Icon size={18} />
                     </button>
                   ))}
                   <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-600 hover:border-accent-600 transition-all">
                      <Share2 size={18} />
                   </button>
                 </div>
               </div>
               <Link to="/contact" className="bg-accent-600 text-white px-8 py-3 rounded-full font-bold hover:bg-accent-700 transition-all shadow-lg shadow-accent-600/20 active:scale-95">
                  Discuss Sustainable Solutions
               </Link>
            </div>
          </motion.div>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0 space-y-12">
            {/* CTA Box */}
            <div className="bg-primary-950 rounded-3xl p-8 text-white relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
               <div className="relative z-10">
                 <h4 className="text-xl font-bold mb-4">Request a Wholesale Quote</h4>
                 <p className="text-primary-300 text-sm font-light mb-8 leading-relaxed">
                   Need custom sustainable packaging for your cinema, stadium, or global brand?
                 </p>
                 <Link to="/contact" className="w-full bg-accent-600 hover:bg-accent-700 text-white py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                   Get Started <ArrowRight size={16} />
                 </Link>
               </div>
            </div>

            {/* Related Posts */}
            <div>
              <h4 className="text-sm font-black text-primary-950 uppercase tracking-widest mb-6 border-l-4 border-accent-600 pl-3">Related Reading</h4>
              <div className="space-y-6">
                {blogPosts.filter(p => p.slug !== slug).map(related => (
                  <Link key={related.id} to={`/blog/${related.slug}`} className="group flex flex-col gap-3">
                    <div className="aspect-[16/9] rounded-xl overflow-hidden">
                      <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h5 className="text-sm font-bold text-gray-900 group-hover:text-accent-600 transition-colors line-clamp-2">
                       {related.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
