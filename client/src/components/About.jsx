import React from 'react';
import { ShieldCheck, Crosshair, Factory, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-0 bg-white">
      {/* Hero */}
      <section className="bg-primary-950 py-32 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/Ecotellus%20Web%20Images/General/MIT09419.JPG')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 bg-primary-950/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight">Industrial Excellence in <span className="text-accent-500">Packaging</span></h1>
          <p className="text-xl text-primary-200 font-light leading-relaxed">
            Engineering sustainable, high-volume packaging solutions for global enterprises,
            backed by world-class infrastructure and stringent quality controls.
          </p>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-24 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-gray-100 text-primary-900 font-bold text-xs uppercase tracking-widest mb-6">Our Infrastructure</span>
            <h2 className="text-4xl font-black text-primary-900 mb-6">State-of-the-Art Manufacturing.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
              Ecotellus operates multiple highly automated facilities capable of producing millions of custom packaging units every month.
              Our lines utilize precise Heidelberg offset printers and Bobst die-cutters to ensure millimeter-perfect accuracy across all runs.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Factory size={20} className="text-accent-600" />
                <span className="text-gray-700 font-medium">100,000+ Sq.Ft. Production Space</span>
              </li>
              <li className="flex items-center gap-3">
                <Crosshair size={20} className="text-accent-600" />
                <span className="text-gray-700 font-medium">Fully Automated Inline Printing & Glueing</span>
              </li>
            </ul>
          </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
              <img src="/assets/Rollar/lower/rolling image (24).webp" alt="Factory Floor" className="w-full h-full object-cover transition-all duration-700" />
            </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section id="quality" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-primary-900 mb-16">Global Quality Standards</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 border border-gray-200 shadow-sm rounded hover:border-accent-400 transition-colors">
              <ShieldCheck size={40} className="text-accent-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary-900 mb-4">ISO 9001:2015</h3>
              <p className="text-gray-600 text-sm font-light">Certified quality management systems ensuring consistent, zero-defect output for all enterprise accounts.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 border border-gray-200 shadow-sm rounded hover:border-accent-400 transition-colors">
              <ShieldCheck size={40} className="text-accent-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary-900 mb-4">FSC Certified</h3>
              <p className="text-gray-600 text-sm font-light">Committed to sustainable forestry. We source raw materials ethically to shrink corporate carbon footprints.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 border border-gray-200 shadow-sm rounded hover:border-accent-400 transition-colors">
              <ShieldCheck size={40} className="text-accent-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary-900 mb-4">Food Safety Compliant</h3>
              <p className="text-gray-600 text-sm font-light">Utilizing FDA/EU approved inks and adhesives for all indirect and direct food-contact packaging.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
