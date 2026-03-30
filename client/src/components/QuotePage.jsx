import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuotePage = () => {
  return (
    <div className="pt-0 bg-gray-50 min-h-screen pb-24">
      <div className="bg-primary-950 py-24 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Request a Quote</h1>
        <p className="text-xl text-primary-300 max-w-2xl mx-auto font-light">
          Get in touch with our team directly for a fast, personalized quote.
        </p>
      </div>

      <div className="max-w-[37.5rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 flex flex-col gap-6"
        >
          {/* Phone */}
          <a
            href="tel:+441233234558"
            className="flex items-center gap-5 p-6 rounded-xl border border-gray-200 hover:border-accent-500 hover:shadow-lg transition-all group bg-gray-50 hover:bg-accent-50"
          >
            <div className="w-14 h-14 rounded-full bg-accent-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Phone size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Call Us</p>
              <p className="text-xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors">+44 1233 234 558</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:ecotellus9@gmail.com"
            className="flex items-center gap-5 p-6 rounded-xl border border-gray-200 hover:border-accent-500 hover:shadow-lg transition-all group bg-gray-50 hover:bg-accent-50"
          >
            <div className="w-14 h-14 rounded-full bg-accent-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Mail size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email Us</p>
              <p className="text-xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors">ecotellus9@gmail.com</p>
            </div>
          </a>

          {/* Back link */}
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-accent-600 transition-colors mt-4 justify-center">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default QuotePage;
