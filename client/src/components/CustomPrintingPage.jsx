import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CustomPrintingPage = () => {
  const floatingImages = [
    '/assets/Ecotellus Web Images/Custom Packaging/1.png',
    '/assets/Ecotellus Web Images/Custom Packaging/2.png',
    '/assets/Ecotellus Web Images/Custom Packaging/5.png',
    '/assets/Ecotellus Web Images/Custom Packaging/Ecotellus Products (1).png',
    '/assets/Ecotellus Web Images/Custom Packaging/Ecotellus Products (10).png',
    '/assets/Ecotellus Web Images/Custom Packaging/Ecotellus Products (12).png',
    '/assets/Ecotellus Web Images/Custom Packaging/Ecotellus Products (2).png',
    '/assets/Ecotellus Web Images/Custom Packaging/Ecotellus Products (8).png',
  ];

  // Positions and animation variants for floating images
  const positions = [
    { top: '15%', left: '10%', delay: 0 },
    { top: '20%', left: '80%', delay: 1 },
    { top: '75%', left: '15%', delay: 2 },
    { top: '80%', left: '75%', delay: 0.5 },
    { top: '40%', left: '5%', delay: 1.5 },
    { top: '35%', left: '85%', delay: 2.5 },
    { top: '10%', left: '45%', delay: 3 },
    { top: '65%', left: '50%', delay: 1.2 },
  ];

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black">
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col pointer-events-none opacity-40">
        <div className="h-1/2 w-full">
          <img
            src="/assets/Ecotellus Web Images/Custom Packaging/bg2.webp"
            alt="Custom Packaging Upper Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-1/2 w-full">
          <img
            src="/assets/Ecotellus Web Images/Custom Packaging/bg1.webp"
            alt="Custom Packaging Lower Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Floating PNG Images */}
      {floatingImages.map((src, index) => (
        <motion.div
          key={index}
          className="absolute z-20 w-16 h-16 sm:w-24 sm:h-24 md:w-48 md:h-48 pointer-events-none opacity-60 md:opacity-100"
          style={{
            top: positions[index].top,
            left: positions[index].left
          }}
          initial={{ y: 0 }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: positions[index].delay
          }}
        >
          <img
            src={src}
            alt={`Product ${index + 1}`}
            className="w-full h-full object-contain filter drop-shadow-2xl"
          />
        </motion.div>
      ))}

      {/* Centered "Get A Quote" Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-[#01a2f3] mb-6 md:mb-10 drop-shadow-lg uppercase tracking-wider">
            Custom Printing
          </h1>
          <Link
            to="/quote"
            className="group relative inline-flex items-center justify-center gap-3 sm:gap-4 bg-accent-600 hover:bg-accent-700 text-white px-6 py-4 sm:px-10 sm:py-5 md:px-14 md:py-7 rounded-full font-black text-lg sm:text-xl md:text-3xl shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:shadow-accent-500/40 transition-all duration-300 w-[18rem] sm:w-auto"
          >
            <span>Get A Quote</span>
            <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Overlay to darken slightly if needed for text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-10"></div>
    </div>
  );
};

export default CustomPrintingPage;
