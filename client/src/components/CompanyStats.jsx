import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animated counter component
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const stats = [
  {
    value: 200,
    label: 'Number of',
    sublabel: 'Employees',
  },
  {
    value: 15000,
    label: 'Tonnes Conversion',
    sublabel: 'of Paper',
  },
  {
    value: 20,
    label: 'Million USD',
    sublabel: '(Projected for 2025)',
  },
  {
    value: 17000,
    label: 'Sq.Mtrs of',
    sublabel: 'Factory Area',
  },
];

const CompanyStats = () => {
  return (
    <section id="company-stats" className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('/assets/hero-doodle-bg.png')] bg-repeat bg-[length:37.5rem_37.5rem]"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-primary-950 leading-tight">
            Built for <span className="text-accent-600">Scale</span>
          </h2>
          <p className="text-primary-500 max-w-2xl mx-auto text-lg font-light">
            Decades of expertise in paper packaging, powered by world-class infrastructure and a dedicated workforce.
          </p>
        </motion.div>

        {/* Full-width rectangle: image fading to white + stats with "+" divider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-xl overflow-hidden border border-gray-200"
          style={{ minHeight: '26.25rem' }}
        >
          {/* Full background image */}
          <img
            src="/assets/Ecotellus Web Images/Factory /factory 2.webp"
            alt="Ecotellus packaging factory interior"
            className="absolute inset-0 w-full h-full object-cover -translate-x-80"
          />

          {/* Fade gradient: image fades from visible (left) to white (right) */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, transparent 10%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.92) 55%, #ffffff 65%)',
            }}
          ></div>

          {/* Content layer */}
          <div className="relative z-10 flex items-stretch w-full h-full" style={{ minHeight: '26.25rem' }}>
            {/* Left side: empty (image shows through) */}
            <div className="hidden lg:block lg:w-[40%]"></div>

            {/* Right side: Stats with "+" crosshair divider */}
            <div className="w-full lg:w-[60%] flex items-center justify-center py-12 px-6 sm:px-10">
              <div className="relative w-full max-w-[32.5rem]">
                {/* The "+" cross divider */}
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent-600/40 to-transparent -translate-x-1/2 z-20"></div>
                {/* Horizontal line */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-600/40 to-transparent -translate-y-1/2 z-20"></div>



                {/* 2x2 Stats Grid */}
                <div className="grid grid-cols-2 grid-rows-2">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.12 }}
                      className={`
                        flex flex-col items-center justify-center text-center
                        py-10 sm:py-14 px-4
                        group cursor-default
                      `}
                    >
                      {/* Big number */}
                      <span className="block text-4xl sm:text-5xl md:text-[3.5rem] font-black text-primary-900 leading-none mb-2 group-hover:text-accent-600 transition-colors duration-300">
                        <AnimatedCounter target={stat.value} />
                      </span>
                      {/* Label */}
                      <p className="text-sm sm:text-base font-semibold text-primary-700 leading-snug">
                        {stat.label}
                      </p>
                      {/* Sublabel */}
                      {stat.sublabel && (
                        <p className="text-xs sm:text-sm text-primary-400 mt-0.5 font-medium">
                          {stat.sublabel}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStats;
