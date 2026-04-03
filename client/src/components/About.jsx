import React from 'react';
import { ShieldCheck, Crosshair, Factory, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-0 bg-white">
      {/* Hero */}
      <section className="bg-primary-950 py-32 text-center px-4 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Industrial Excellence in <span className="text-accent-500">Packaging</span></h1>
          <p className="text-xl text-primary-200 font-light leading-relaxed">
            Engineering sustainable, high-volume packaging solutions for global enterprises,
            backed by world-class infrastructure and stringent quality controls.
          </p>
        </div>
      </section>

      {/* What We Deliver ? Section */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden shadow-2xl relative group">
            <img
              src="/assets/WhatsApp Image 2026-04-03 at 18.07.26.jpeg"
              alt="Quality Packaging Delivery"
              className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-black text-primary-900 mb-6">
              What We Deliver ?
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-left font-light">
              <p>
                For your customer now its our duty to fulfill your requirement by delivering dust free, bio-degradable, compostable Food &Beverage disposable products. Keeping in mind the health of our end consumer, We prioritise and are focused at maintaining hygiene in our plant area from machineries to co-workers cleanliness and sanitisation, we are highly concerned for taking care of our end consumers as per BRCGS Packaging Standards. With artistic and ecstatic designs & colors,
              </p>
              <p>
                We help brands and brand owners to create a way to communicate by customizing our product with your customer. Design that taps into emotional triggers such as nostalgia, joy, or belonging can evoke robust responses, driving purchase intent and brand affinity. In an era characterized by heightened consumer consciousness, authenticity and transparency are paramount. Packaging that communicates the brand's values, sustainability efforts fosters trust and loyalty.
              </p>
              <p>
                Understanding the emotional landscape of the target audience enables the creation of packaging that fosters authentic connections and cultivates brand loyalty. With our designing team it will be quick and easy for your brand to better align with consumer preferences and market trends.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Founders Section */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 mb-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-black text-primary-900 mb-8 relative inline-block">
              Our Founders
              <div className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-accent-500 rounded-full"></div>
            </h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed font-light">
              <p>
                Founded on the principles of industrial excellence and sustainable innovation, our visionary leadership established Ecotellus to set new global benchmarks in the packaging industry.
              </p>
              <p>
                With a focus on precision manufacturing and hygiene standards, our founders continue to lead with a commitment to environmental stewardship and client-centric solutions, ensuring that every product we deliver supports the growth and integrity of your brand.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:rotate-1">
              <img 
                src="/assets/ceo image.webp" 
                alt="Our CEO" 
                className="w-full aspect-[4/3] object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-24 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden order-1">
            <img src="/assets/Rollar/lower/rolling image (24).webp" alt="Factory Floor" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
          </div>
          <div className="order-2">
            <span className="inline-block px-3 py-1 bg-gray-100 text-primary-900 font-bold text-xs uppercase tracking-widest mb-6">Our Infrastructure</span>
            <h2 className="text-4xl font-black text-primary-900 mb-6">State-of-the-Art Manufacturing.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
              Ecotellus operates multiple highly automated facilities capable of producing millions of custom packaging units every month.
              Our lines utilize precise Heidelberg offset printers and Bobst die-cutters to ensure millimeter-perfect accuracy across all runs.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Factory size={20} className="text-accent-600" />
                <span className="text-gray-700 font-medium">17,000 Sq.Mtrs. Production Space</span>
              </li>
              <li className="flex items-center gap-3">
                <Crosshair size={20} className="text-accent-600" />
                <span className="text-gray-700 font-medium">Fully Automated Inline Printing & Glueing</span>
              </li>
            </ul>
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
