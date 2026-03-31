import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Box, Truck, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: PenTool,
      title: 'Design & Prototyping',
      description: 'Our in-house structural engineers map out your requirements to create an exact structural prototype.'
    },
    {
      icon: CheckCircle,
      title: 'Testing & Approval',
      description: 'We run crush/drop tests and finalize artwork before entering the mass-manufacturing pipeline.'
    },
    {
      icon: Box,
      title: 'High-Volume Production',
      description: 'Operating at massive scale with precision offset/flexo printing and automated die-cutting.'
    },
    {
      icon: Truck,
      title: 'Global Logistics',
      description: 'Staged shipments and global fulfillment to ensure your packaging arrives exactly when needed.'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">From Concept to Delivery</h2>
          <p className="text-xl text-gray-600 font-light">
            A streamlined manufacturing process designed to eliminate bottlenecks and optimize supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group lg:px-4"
            >
              {/* Connector Line (hidden on mobile, visible on lg) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-[2rem] left-[50%] w-full h-[0.1875rem] bg-gray-100/50 overflow-hidden -z-0">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: (index * 0.5) + 0.3, 
                      duration: 0.8, 
                      ease: "easeInOut" 
                    }}
                    className="h-full bg-gradient-to-r from-accent-500 to-accent-300 shadow-[0_0_10px_rgba(22,163,74,0.3)]"
                  />
                </div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-accent-600 mb-6 group-hover:bg-accent-600 group-hover:text-white group-hover:border-accent-600 transition-all z-10 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
