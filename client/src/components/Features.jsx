import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Award, Globe2, Users } from 'lucide-react';

const features = [
  {
    icon: Factory,
    title: 'High-Volume Capacity',
    description: 'State-of-the-art facilities producing millions of custom units monthly.',
    image: 'https://plus.unsplash.com/premium_photo-1682146490755-c33a53c4502d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcmUlMjByb29tfGVufDB8fDB8fHww',
  },
  {
    icon: Award,
    title: 'ISO & FSC Certified',
    description: 'Uncompromising quality control and sustainable material sourcing.',
    image: 'https://media.istockphoto.com/id/2070493975/photo/quality-standard-certificate-with-check-list-data-feedback-for-quality-warranty.webp?a=1&b=1&s=612x612&w=0&k=20&c=XWxcEMgwg38hhrizG6PZ9DmPV5XRbGg4_f0VkooNMxM=',
  },
  {
    icon: Globe2,
    title: 'Global Logistics',
    description: 'Optimized supply chain solutions shipping to 40+ countries worldwide.',
    image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cmllc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    icon: Users,
    title: 'Dedicated Account Managers',
    description: 'Expert structural engineers and procurement specialists at your service.',
    image: 'https://plus.unsplash.com/premium_photo-1661559063958-968c8f1928e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNlb3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

const Features = () => {
  return (
    <section className="py-24 relative bg-primary-950">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Global Brands Choose Ecotellus</h2>
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
              className="group relative overflow-hidden bg-primary-900 border border-primary-800 p-8 text-center transition-all hover:bg-primary-800"
            >
              {/* Background Image Container */}
              {feature.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={feature.image}
                    alt=""
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-500 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-primary-950/80 group-hover:bg-primary-950/70 transition-colors duration-500"></div>
                </div>
              )}

              {/* Content Container */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded bg-primary-950 border border-primary-800 flex items-center justify-center mx-auto mb-6 group-hover:border-accent-500 transition-colors">
                  <feature.icon size={28} className="text-accent-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-sm text-primary-300 font-light leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
