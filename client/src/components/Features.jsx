import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Headphones, Clock, Tag } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Fast UK Delivery',
    description: 'Next working day on stock items',
    gradient: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-blue-500/20',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Mon-Fri 9am - 5pm',
    gradient: 'from-purple-500 to-pink-400',
    shadow: 'shadow-purple-500/20',
  },
  {
    icon: Clock,
    title: 'Quick Dispatch',
    description: 'Same day on orders before 2PM',
    gradient: 'from-amber-500 to-orange-400',
    shadow: 'shadow-amber-500/20',
  },
  {
    icon: Tag,
    title: 'Competitive Pricing',
    description: 'No minimum order value',
    gradient: 'from-emerald-500 to-teal-400',
    shadow: 'shadow-emerald-500/20',
  },
];

const Features = () => {
  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 p-8 text-center group rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} className="text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
