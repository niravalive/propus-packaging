import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp, MessageSquare } from 'lucide-react';
import axios from 'axios';

const fallbackReviews = [
  {
    id: 1,
    name: 'James Wilson',
    role: 'Procurement Director',
    company: 'Sterling Brands Ltd.',
    rating: 5,
    text: 'ecotellus completely streamlined our packaging supply chain. The quality is flawless and lead times are deeply respected by their dedicated team. We reduced our packaging costs by 22% while upgrading to premium materials.',
    date: 'March 2026',
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    role: 'Operations Manager',
    company: 'NovaPack Europe',
    rating: 5,
    text: 'We switched our entire EMEA packaging volume to ecotellus. Their structural engineering team helped us save 15% on dimensional shipping costs. The transition was seamless and professionally managed.',
    date: 'February 2026',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Supply Chain VP',
    company: 'GreenLeaf Foods Inc.',
    rating: 5,
    text: 'Reliable high-volume production. Their FSC-certified options helped us meet our corporate sustainability goals well ahead of schedule. The food-grade quality is impeccable and consistent batch after batch.',
    date: 'January 2026',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Packaging Head',
    company: 'Apex Consumer Goods',
    rating: 5,
    text: 'The attention to detail in every single box is remarkable. We\'ve been working with ecotellus for three years now, and they consistently exceed expectations. Their prototyping speed is the best in the industry.',
    date: 'December 2025',
  },
  {
    id: 5,
    name: 'David Mueller',
    role: 'CEO',
    company: 'EuroPack Solutions',
    rating: 5,
    text: 'As a European distributor, I need packaging partners who understand compliance at every level. ecotellus delivers BRC-certified packaging with full traceability. An absolute game-changer for our operations.',
    date: 'November 2025',
  },
  {
    id: 6,
    name: 'Lisa Nakamura',
    role: 'Brand Manager',
    company: 'Zenith Retail Group',
    rating: 4,
    text: 'The print quality on our retail packaging has never been better. The Pantone color matching is spot-on, and the structural integrity survived all our shipping tests. Highly recommended for premium brands.',
    date: 'October 2025',
  },
  {
    id: 7,
    name: 'Robert Klien',
    role: 'Logistics Director',
    company: 'TransGlobal Shipping',
    rating: 5,
    text: 'What impressed me most is their logistics integration. They don\'t just manufacture — they manage the entire supply chain from factory to our warehouses across four continents. Truly end-to-end.',
    date: 'September 2025',
  },
  {
    id: 8,
    name: 'Ananya Patel',
    role: 'Quality Assurance Lead',
    company: 'MedPharma Holdings',
    rating: 5,
    text: 'For pharmaceutical packaging, there\'s zero room for error. ecotellus meets every FDA and EU regulation flawlessly. Their QA documentation is thorough and always audit-ready. Five stars without hesitation.',
    date: 'August 2025',
  },
  {
    id: 9,
    name: 'Thomas Berg',
    role: 'Procurement Manager',
    company: 'Nordic Organics AB',
    rating: 5,
    text: 'Switching to ecotellus was the best decision our procurement team made this year. Their sustainable packaging options align perfectly with our brand values and the cost-per-unit is extremely competitive.',
    date: 'July 2025',
  },
  {
    id: 10,
    name: 'Elena Rossi',
    role: 'Creative Director',
    company: 'Bella Boutique',
    rating: 5,
    text: 'The luxury finish on our rigid boxes is spectacular. ecotellus delivered a custom texture that reflects our high-end brand identity perfectly. Their craftmanship is unmatched in the industry.',
    date: 'June 2025',
  },
  {
    id: 11,
    name: 'Klaus Schmidt',
    role: 'Inventory Planner',
    company: 'AutoTechnic AG',
    rating: 5,
    text: 'Precision is key for automotive parts. The custom inserts ecotellus designed for us reduced transit damage to practically zero. Robust, reliable, and highly professional service.',
    date: 'May 2025',
  },
  {
    id: 12,
    name: 'Sophie Dubois',
    role: 'Marketing Head',
    company: 'Luxe Cosmetics',
    rating: 5,
    text: 'Their rapid prototyping allowed us to launch our seasonal collection two weeks ahead of schedule. The foil stamping turned out even better than the digital renders. Truly a world-class partner.',
    date: 'April 2025',
  },
];

const colorPalette = [
  '#01a2d3', '#22c55e', '#8b5cf6', '#f59e0b', '#ef4444',
  '#ec4899', '#06b6d4', '#f97316', '#6366f1',
];

const ReviewCard = ({ review, index }) => {
  const accentColor = colorPalette[index % colorPalette.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-transparent hover:shadow-xl transition-all duration-500 relative"
      style={{ aspectRatio: '3 / 2' }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ backgroundColor: accentColor }}
      />

      <div className="p-6 sm:p-8 h-full flex flex-col justify-between relative">
        {/* Quote icon */}
        <Quote size={50} className="absolute top-6 right-6 text-gray-100 group-hover:text-gray-200 transition-colors" />

        <div className="relative z-10">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}
              />
            ))}
            <span className="text-xs text-gray-400 ml-2 font-medium">{review.date}</span>
          </div>

          {/* Review text */}
          <p className="text-gray-700 text-[0.875rem] sm:text-[0.9375rem] font-light leading-relaxed line-clamp-5 italic">
            "{review.text}"
          </p>
        </div>

        {/* Reviewer */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md"
            style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
          >
            {review.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-gray-900 truncate">{review.name}</div>
            <div className="text-xs text-gray-500 truncate">{review.role} · {review.company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewsPage = () => {
  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="bg-white">
      {/* Full Screen Hero (Strict 100vh) */}
      <section className="bg-primary-950 min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/60 to-primary-950/90"></div>
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-0 mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
            <span className="inline-block px-5 py-2 bg-accent-600/20 text-accent-400 text-[0.6875rem] font-black tracking-[0.4em] uppercase mb-8 rounded-full border border-accent-600/40 backdrop-blur-sm">
              Impact Verified · Quality Assured
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Client <span className="text-accent-400">Voices</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 font-light leading-relaxed max-w-3xl mx-auto opacity-90">
              Trusted by industry-leading procurement teams and global brands to deliver packaging excellence at scale.
            </p>
          </motion.div>
        </div>

        {/* Massive Stats Bar Integrated at bottom of Hero */}
        <div className="relative z-20 px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 py-10 md:py-16 px-8 sm:px-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-gray-100">
              <div className="text-center md:px-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Star size={30} className="text-amber-400 fill-amber-400" />
                  <span className="text-5xl md:text-6xl font-black text-primary-950 tracking-tighter">{avgRating}</span>
                </div>
                <p className="text-[0.625rem] text-gray-400 font-black uppercase tracking-[0.2em]">Industry-Leading Rating</p>
              </div>

              <div className="text-center md:px-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <MessageSquare size={30} className="text-accent-600" />
                  <span className="text-5xl md:text-6xl font-black text-primary-950 tracking-tighter">{reviews.length}</span>
                </div>
                <p className="text-[0.625rem] text-gray-400 font-black uppercase tracking-[0.2em]">Corporate Partners</p>
              </div>

              <div className="text-center md:px-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <ThumbsUp size={30} className="text-accent-600" />
                  <span className="text-5xl md:text-6xl font-black text-primary-950 tracking-tighter">100%</span>
                </div>
                <p className="text-[0.625rem] text-gray-400 font-black uppercase tracking-[0.2em]">Recommendation Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
