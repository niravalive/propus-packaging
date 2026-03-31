import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Building, PackageSearch, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

import { productsData } from '../data/products';

const Contact = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (location.state) {
      if (location.state.product) {
        setSelectedProduct(location.state.product);
        const product = productsData.find(p => p.name === location.state.product);
        setAvailableSizes(product ? product.sizes : []);
      }
      if (location.state.size) {
        setSelectedSize(location.state.size);
      }
    }
  }, [location.state]);

  const handleProductChange = (e) => {
    const productName = e.target.value;
    setSelectedProduct(productName);
    setSelectedSize(''); // Reset size when product changes
    const product = productsData.find(p => p.name === productName);
    setAvailableSizes(product ? product.sizes : []);
  };

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
            Partner with Ecotellus for high-volume, precision packaging.
          </p>
        </div>
        <div className="max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-xl shadow-xl border border-gray-200 p-12 text-center">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-accent-600 border border-green-100">
              <Send size={40} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Inquiry Received</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
              Thank you for your interest in Ecotellus Packaging. An account manager will review your technical requirements and contact you within 24 hours.
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
        <div className="max-w-[87.5rem] mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Contact Us</h1>
          <p className="text-xl text-primary-300 max-w-2xl mx-auto font-light">
            Partner with Ecotellus for high-volume, precision packaging. Fill out the form below to connect with an account manager.
          </p>
        </div>
      </div>

      <div className="max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="grid lg:grid-cols-3">

            {/* Left Column: Contact Info */}
            <div className="lg:col-span-1 p-8 sm:p-10 bg-gray-50/50 border-b lg:border-b-0 lg:border-r border-gray-100">
              <h2 className="text-2xl font-bold text-primary-900 mb-8 border-b border-gray-100 pb-4">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center text-accent-600 shrink-0 border border-accent-100 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Phone Number</h3>
                    <p className="text-md font-bold text-primary-950">+44 1233 234 558</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center text-accent-600 shrink-0 border border-accent-100 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email Address</h3>
                    <p className="text-md font-bold text-primary-950">ecotellus9@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center text-accent-600 shrink-0 border border-accent-100 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Our Office</h3>
                    <p className="text-md font-bold text-primary-950 leading-snug">
                      Plot No.A 1-A 10, Silk Heritage Industrial Society, NH-53, Unn, Surat 394230
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-primary-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-primary-900">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-500 font-bold uppercase">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-2 p-8 sm:p-10">
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-primary-900 mb-8 border-b border-gray-100 pb-4">
                  Send us a Message
                </h2>

                {/* Company Details */}
                <h3 className="text-sm font-bold text-primary-900 mb-4 flex items-center gap-3">
                  <Building size={18} className="text-accent-600" /> Company Details
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Company Name *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-accent-500 transition-colors shadow-sm text-sm" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Contact Name *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-accent-500 transition-colors shadow-sm text-sm" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Work Email *</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-accent-500 transition-colors shadow-sm text-sm" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-accent-500 transition-colors shadow-sm text-sm" />
                  </div>
                </div>

                {/* Production Requirements */}
                <h3 className="text-sm font-bold text-primary-900 mb-4 flex items-center gap-3">
                  <PackageSearch size={18} className="text-accent-600" /> Production Requirements
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Select Product *</label>
                    <select 
                      value={selectedProduct}
                      onChange={handleProductChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-accent-500 transition-colors appearance-none shadow-sm text-sm"
                      required
                    >
                      <option value="">Choose a product...</option>
                      {productsData.map((product) => (
                        <option key={product.id} value={product.name}>{product.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Available Sizes *</label>
                    <select 
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      disabled={!selectedProduct}
                      className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-accent-500 transition-colors appearance-none shadow-sm text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    >
                      <option value="">{selectedProduct ? 'Select Size' : 'Select a product first'}</option>
                      {availableSizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Project Details & Timeline</label>
                    <textarea rows="3" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-accent-500 transition-colors shadow-sm text-sm" placeholder="Briefly describe your requirements..."></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full bg-accent-600 hover:bg-accent-700 text-white px-8 py-3.5 rounded font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent-600/20 uppercase tracking-widest active:scale-[0.98] text-sm">
                  Submit Inquiry <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

