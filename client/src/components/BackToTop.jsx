import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const distanceFromBottom = scrollHeight - (scrolled + clientHeight);

      // Only show when near the bottom
      if (distanceFromBottom < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 50 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 pr-1 group h-12 bg-primary-950 text-white rounded-full shadow-2xl border border-primary-800 hover:scale-105 transition-all"
        >
          {/* Popped out minimal label - always visible */}
          <span className="pl-5 pr-2 py-2 text-[10px] font-black uppercase tracking-[0.2em]">
            Go On Top
          </span>
          
          {/* Icon in accent color */}
          <div className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center transition-colors">
            <ArrowUp size={20} strokeWidth={3} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
