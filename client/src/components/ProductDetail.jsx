import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Package, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { productsData } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState(1);
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    // Instant reset on load
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
    axios.get('/api/products')
      .then(res => {
        const found = res.data.find(p => p.slug === slug);
        setProduct(found);
        setActiveIndex(0);
        setLoading(false);
      })
      .catch(() => {
        const found = productsData.find(p => p.slug === slug);
        setProduct(found);
        setActiveIndex(0);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (!product || !product.images || product.images.length <= 1) return;
    if (isPaused) return;

    const interval = setInterval(() => {
      setSlideDirection(1);
      setActiveIndex((prev) => (prev + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [product, isPaused]);

  const handleThumbnailClick = (index) => {
    setSlideDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  const handleArrowNav = (direction) => {
    if (!product?.images) return;
    setSlideDirection(direction === 'next' ? 1 : -1);
    setActiveIndex((prev) => {
      if (direction === 'next') return (prev + 1) % product.images.length;
      return (prev - 1 + product.images.length) % product.images.length;
    });
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  const activeImage = product?.images?.[activeIndex] || product?.image;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-900 mb-4">Product Not Found</h1>
          <Link to="/" className="text-accent-600 hover:text-accent-700 font-semibold">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-24 pb-16">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 lg:h-[37.5rem]">

              {/* Thumbnails Sidebar */}
              <div className="flex md:flex-col gap-2 shrink-0 relative items-center">

                {/* Thumbnails track */}
                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto w-full md:w-20 lg:w-24 no-scrollbar py-1 px-1">

                  {product.images?.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={`w-16 h-16 md:w-full md:aspect-square shrink-0 rounded-lg overflow-hidden p-2 flex items-center justify-center transition-all bg-[#ffffff] ${activeIndex === index ? 'border-2 border-accent-600 shadow-sm opacity-100' : 'border border-gray-200 hover:border-accent-400 opacity-70 hover:opacity-100'}`}
                      style={{ backgroundColor: '#ffffff' }}
                    >
                      <img src={img} alt={`${product.name} Thumbnail ${index + 1}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>


              </div>

              {/* Main Image */}
              <div className="flex-1 rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center p-8 lg:p-12 relative group min-h-[300px] md:min-h-0 bg-[#ffffff]" style={{ backgroundColor: '#ffffff' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ x: slideDirection === 1 ? "100%" : "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: slideDirection === 1 ? "-100%" : "100%" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0 p-8 lg:p-12"
                  >
                    <img
                      src={activeImage}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-center"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow */}
                <button
                  onClick={() => handleArrowNav('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-accent-600 transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => handleArrowNav('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-accent-600 transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover our premium {product.name.toLowerCase()} collection.
                High-quality, sustainable packaging solutions for your business.
              </p>

              {/* Available Sizes */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Available Sizes</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
                      <Package size={16} className="text-accent-600" />
                      <span className="font-semibold text-gray-700">{size}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="inline-block bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-md hover:shadow-lg"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Rolling Images Section */}
      <section className="w-full overflow-hidden mt-16 md:mt-24 relative flex flex-col leading-none text-[0]">
        {/* Upper Row - Right to Left */}
        <div className="w-full overflow-hidden flex border-b-4 border-white">
          <div className="roller-track-rtl">
            <div className="roller-set">
              {upperImages.map((img, i) => (
                <img key={`ua-${i}`} src={img} alt={`Rolling ${i + 1}`} className="h-28 md:h-44 w-auto object-cover flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 block" />
              ))}
            </div>
            <div className="roller-set">
              {upperImages.map((img, i) => (
                <img key={`ub-${i}`} src={img} alt={`Rolling ${i + 1}`} className="h-28 md:h-44 w-auto object-cover flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 block" />
              ))}
            </div>
          </div>
        </div>

        {/* Centered Button between rows */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Link
            to="/manufacturing-process"
            className="bg-accent-600 hover:bg-accent-700 text-white px-10 py-5 md:px-14 md:py-7 rounded-full font-black text-lg md:text-2xl shadow-2xl hover:shadow-accent-500/20 transition-all duration-300 whitespace-nowrap flex items-center gap-4 group/btn border-4 border-white"
          >
            <span>View Manufacturing Process</span>
            <ArrowRight size={28} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Lower Row - Left to Right */}
        <div className="w-full overflow-hidden flex border-t-4 border-b-8 border-white">
          <div className="roller-track-ltr">
            <div className="roller-set">
              {lowerImages.map((img, i) => (
                <img key={`la-${i}`} src={img} alt={`Rolling ${i + 1}`} className="h-28 md:h-44 w-auto object-cover flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 block" />
              ))}
            </div>
            <div className="roller-set">
              {lowerImages.map((img, i) => (
                <img key={`lb-${i}`} src={img} alt={`Rolling ${i + 1}`} className="h-28 md:h-44 w-auto object-cover flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 block" />
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .roller-track-rtl,
          .roller-track-ltr {
            display: inline-flex;
            width: max-content;
            will-change: transform;
          }
          .roller-set {
            display: flex;
            flex-shrink: 0;
            gap: 8px;
          }
          .roller-track-rtl {
            animation: roller-rtl 30s linear infinite;
          }
          .roller-track-ltr {
            animation: roller-ltr 30s linear infinite;
          }
          @keyframes roller-rtl {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes roller-ltr {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </section>
    </div>
  );
};

const upperImages = [
  '/assets/Rollar/upper/rolling image (12).webp',
  '/assets/Rollar/upper/rolling image (13).webp',
  '/assets/Rollar/upper/rolling image (14).webp',
  '/assets/Rollar/upper/rolling image (15).webp',
  '/assets/Rollar/upper/rolling image (16).webp',
  '/assets/Rollar/upper/rolling image (17).webp',
  '/assets/Rollar/upper/rolling image (20).webp',
  '/assets/Rollar/upper/rolling image (21).webp',
  '/assets/Rollar/upper/rolling image (22).webp',
  '/assets/Rollar/upper/rolling image (23).webp',
];

const lowerImages = [
  '/assets/Rollar/lower/rolling image.webp',
  '/assets/Rollar/lower/rolling image (1).webp',
  '/assets/Rollar/lower/rolling image (7).webp',
  '/assets/Rollar/lower/rolling image (8).webp',
  '/assets/Rollar/lower/rolling image (9).webp',
  '/assets/Rollar/lower/rolling image (10).webp',
  '/assets/Rollar/lower/rolling image (11).webp',
  '/assets/Rollar/lower/rolling image (18).webp',
  '/assets/Rollar/lower/rolling image (19).webp',
  '/assets/Rollar/lower/rolling image (24).webp',
];

export default ProductDetail;