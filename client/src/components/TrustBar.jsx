import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
  // Using premium b2b placeholder names
  const clients = [
    { name: 'Global Logistics Corp' },
    { name: 'Prime Retail Group' },
    { name: 'Apex Manufacturing' },
    { name: 'Zenith Pharma' },
    { name: 'Vertex Foods' },
    { name: 'Lumina Tech' },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Trusted by Industry Leaders Worldwide
        </p>
        
        {/* Infinite Scroll Logo Strip */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-32">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center min-w-[150px]"
              >
                <div className="text-xl md:text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors cursor-default whitespace-nowrap">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
