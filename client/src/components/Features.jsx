import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Award, Globe2, Users } from 'lucide-react';

const features = [
  {
    icon: Factory,
    title: 'High-Volume Capacity',
    description: 'State-of-the-art facilities producing millions of custom units monthly.',
  },
  {
    icon: Award,
    title: 'ISO & FSC Certified',
    description: 'Uncompromising quality control and sustainable material sourcing.',
  },
  {
    icon: Globe2,
    title: 'Global Logistics',
    description: 'Optimized supply chain solutions shipping to 40+ countries worldwide.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Managers',
    description: 'Expert structural engineers and procurement specialists at your service.',
  },
];

const Features = () => {
  return (
    <section className="py-24 relative bg-primary-950">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Global Brands Choose ecotellus</h2>
          <div className="w-24 h-1 bg-accent-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-900 border border-primary-800 p-8 text-center group transition-all hover:bg-primary-800"
            >
              <div className="w-16 h-16 rounded bg-primary-950 border border-primary-800 flex items-center justify-center mx-auto mb-6 group-hover:border-accent-500 transition-colors">
                <feature.icon size={28} className="text-accent-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-sm text-primary-300 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
