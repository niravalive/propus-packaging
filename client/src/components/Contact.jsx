import React, { useState } from 'react';
import { Send, Building, PackageSearch } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-0 bg-gray-50 min-h-screen pb-24">
        <div className="bg-primary-950 py-24 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Bulk Order Inquiry</h1>
          <p className="text-xl text-primary-300 max-w-2xl mx-auto font-light">
            Partner with ecotellus for high-volume, precision packaging.
          </p>
        </div>
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-xl shadow-xl border border-gray-200 p-12 text-center">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-accent-600 border border-green-100">
              <Send size={40} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Inquiry Received</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
              Thank you for your interest in ecotellus Packaging. An account manager will review your technical requirements and contact you within 24 hours.
            </p>
            <button onClick={() => setSubmitted(false)} className="text-accent-600 font-bold hover:underline">
              Submit another inquiry
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-0 bg-gray-50 min-h-screen pb-24">
      <div className="bg-primary-950 py-24 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Bulk Order Inquiry</h1>
        <p className="text-xl text-primary-300 max-w-2xl mx-auto font-light">
          Partner with ecotellus for high-volume, precision packaging. Fill out the form below to connect with an account manager.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl border border-gray-200 p-8 sm:p-12">

          {/* Company Details */}
          <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <Building size={22} className="text-accent-600" /> Company Details
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Company Name *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded p-4 focus:outline-none focus:border-accent-500 transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Contact Name *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded p-4 focus:outline-none focus:border-accent-500 transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Work Email *</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded p-4 focus:outline-none focus:border-accent-500 transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded p-4 focus:outline-none focus:border-accent-500 transition-colors" />
            </div>
          </div>

          {/* Production Requirements */}
          <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <PackageSearch size={22} className="text-accent-600" /> Production Requirements
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Product Category</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded p-4 focus:outline-none focus:border-accent-500 transition-colors appearance-none">
                <option>Select Category </option>
                <option>Corrugated Boxes</option>
                <option>Rigid Setup Boxes</option>
                <option>Eco-Friendly Mailers</option>
                <option>Custom Inserts</option>
                <option>Other / Custom Project</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Project Details & Timeline</label>
              <textarea rows="5" className="w-full bg-gray-50 border border-gray-200 rounded p-4 focus:outline-none focus:border-accent-500 transition-colors" placeholder="Please describe your packaging requirements, dimensions, and expected delivery timeline..."></textarea>
            </div>
          </div>

          <button type="submit" className="w-full bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded font-bold transition-colors flex items-center justify-center gap-2 shadow-sm uppercase tracking-wider">
            Submit Inquiry <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
