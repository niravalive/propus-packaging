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
];

const colorPalette = [
  '#01a2d3', '#22c55e', '#8b5cf6', '#f59e0b', '#ef4444',
  '#ec4899', '#06b6d4', '#f97316', '#6366f1',
];

const ReviewCard = ({ review, index }) => {
  const accentColor = colorPalette[index % colorPalette.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-transparent hover:shadow-xl transition-all duration-500 relative"
      style={{ aspectRatio: '2 / 1' }}
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
          <p className="text-gray-700 text-[14px] sm:text-[15px] font-light leading-relaxed line-clamp-4">
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
    axios.get('/api/reviews')
      .then(res => {
        if (res.data && res.data.length > 0) {
          setReviews(res.data);
        }
      })
      .catch(() => {});
  }, []);

  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="pt-0 bg-white">
      {/* Hero */}
      <section className="bg-primary-950 py-32 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-primary-950/70"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, white 60px, white 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, white 60px, white 61px)',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-accent-600/20 text-accent-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-6 rounded-full border border-accent-600/30">
              Client Testimonials
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight">
              What Our <span className="text-accent-400">Clients</span> Say
            </h1>
            <p className="text-xl text-primary-200 font-light leading-relaxed max-w-2xl mx-auto">
              Hear from procurement leaders, operations managers, and brand directors who trust ecotellus for their global packaging needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Star size={20} className="text-amber-400 fill-amber-400" />
                <span className="text-3xl font-black text-primary-900">{avgRating}</span>
              </div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <MessageSquare size={20} className="text-accent-600" />
                <span className="text-3xl font-black text-primary-900">{reviews.length}</span>
              </div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Total Reviews</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <ThumbsUp size={20} className="text-accent-600" />
                <span className="text-3xl font-black text-primary-900">100%</span>
              </div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Recommend Us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
