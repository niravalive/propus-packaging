import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Package, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, X, ZoomIn, ZoomOut, ArrowLeft } from 'lucide-react';
import { productsData } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail = () => {
  const { slug } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState(1);
  const pauseTimeoutRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

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

  const toggleModal = () => {
    const newState = !isModalOpen;
    setIsModalOpen(newState);
    setZoomLevel(1);
    
    if (newState) {
      document.body.style.overflow = 'hidden';
      setIsPaused(true);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    } else {
      document.body.style.overflow = 'unset';
      // Reset pause timeout to resume later
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 4000);
    }
  };

  const handleZoom = (type) => {
    setZoomLevel(prev => {
      if (type === 'in') return Math.min(prev + 0.5, 4);
      if (type === 'out') return Math.max(prev - 0.5, 1);
      return 1;
    });
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
      {/* Back Button */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          to="/products"
          className="inline-flex items-center gap-2 px-4 py-2 text-primary-600 hover:text-accent-600 font-bold transition-all group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>
      </div>

      <section className="pt-8 pb-16">
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
              <div
                onClick={toggleModal}
                className="flex-1 rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center p-8 lg:p-12 relative group min-h-[18.75rem] md:min-h-0 bg-[#ffffff] cursor-zoom-in"
                style={{ backgroundColor: '#ffffff' }}
              >
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleArrowNav('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-accent-600 transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleArrowNav('next');
                  }}
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
                    <button
                      key={index}
                      onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                      className={`flex items-center gap-2 border rounded-full px-4 py-2 transition-all ${
                        selectedSize === size
                          ? 'bg-accent-600 border-accent-600 text-white shadow-md'
                          : 'bg-gray-50 border-gray-200 hover:border-accent-400 text-gray-700'
                      }`}
                    >
                      <Package size={16} className={selectedSize === size ? 'text-white' : 'text-accent-600'} />
                      <span className="font-semibold">{size}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Printing Awareness (Popcorn Tub Only) */}
              {product.slug === 'popcorn-tub' && (
                <div className="mb-8">
                  <Link 
                    to="/custom-printing"
                    className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 border border-accent-200 px-4 py-2 rounded-full text-sm font-bold hover:bg-accent-100 transition-colors group"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                    </span>
                    Custom Printing Available
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}

              {/* CTA */}
              <Link
                to="/contact"
                state={{ product: product.name, size: selectedSize }}
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

        {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-6 right-6 z-[110] p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X size={32} />
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-4 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20">
              <button
                onClick={() => handleZoom('out')}
                className="text-white hover:text-accent-400 transition-colors"
                disabled={zoomLevel <= 1}
              >
                <ZoomOut size={24} />
              </button>
              <span className="text-white font-mono min-w-[3rem] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => handleZoom('in')}
                className="text-white hover:text-accent-400 transition-colors"
                disabled={zoomLevel >= 4}
              >
                <ZoomIn size={24} />
              </button>
            </div>

            {/* Modal Image Container */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt={product.name}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: zoomLevel, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="max-w-full max-h-full object-contain cursor-grab active:cursor-grabbing"
                drag={zoomLevel > 1}
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            gap: 0.5rem;
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