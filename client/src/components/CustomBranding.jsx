import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Custom printed packaging with your logo',
  'Eco-friendly & sustainable materials',
  'Low minimum order quantities',
  'Professional design assistance included',
  'Fast turnaround times',
];

const CustomBranding = () => {
  return (
    <section id="custom" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop"
                alt="Custom Branded Packaging"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-50/20 lg:block hidden"></div>

              {/* Floating badge */}
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-3 rounded-lg shadow-xl border border-white/50 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <span className="text-sm font-bold text-gray-900 tracking-tight">PREMIUM BRANDING</span>
              </motion.div>
            </div>

            {/* Content side */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <span className="inline-block w-fit px-4 py-1.5 rounded-md bg-primary-500 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
                CUSTOM SERVICES
              </span>

              <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900 leading-[1.1]">
                Need Custom or
                <br />
                <span className="text-primary-500">Branded Packaging?</span>
              </h2>

              <p className="text-gray-500 mb-10 text-lg font-medium leading-relaxed">
                We can help super-charge your takeaway business with custom branded fast food packaging. 
                Stand out from the competition with professional, branded packaging that your customers will love.
              </p>

              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 size={20} className="text-primary-500 flex-shrink-0" />
                    <span className="text-[15px] text-gray-700 font-semibold">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="glass-button-solid flex items-center gap-3 px-8 py-4">
                  Get a Free Quote
                  <ArrowRight size={20} />
                </a>
                <a href="#" className="bg-white border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-4 rounded-md font-bold transition-all">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBranding;
