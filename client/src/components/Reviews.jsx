import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import axios from 'axios';

const fallbackReviews = [
  { id: 1, name: 'James Wilson', role: 'Procurement Director', rating: 5, text: 'Ecotellus completely streamlined our packaging supply chain. The quality is flawless and lead times are deeply respected by their dedicated team.' },
  { id: 2, name: 'Sarah Thompson', role: 'Operations Manager', rating: 5, text: 'We switched our entire EMEA packaging volume to Ecotellus. Their structural engineering team helped us save 15% on dimensional shipping costs.' },
  { id: 3, name: 'Michael Chen', role: 'Supply Chain VP', rating: 5, text: 'Reliable high-volume production. Their FSC-certified options helped us meet our corporate sustainability goals well ahead of schedule.' },
];

const ReviewCard = ({ review }) => (
  // 400px width + 2rem (32px) mx-4 margins = 432px total footprint
  <div className="flex-shrink-0 w-[400px] bg-white p-8 relative border border-gray-200 shadow-sm hover:border-accent-400 hover:shadow-lg transition-all duration-300 mx-4 rounded-2xl whitespace-normal select-none">
    <Quote size={40} className="absolute top-6 right-6 text-gray-100" />
    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < review.rating ? 'text-accent-500 fill-accent-500' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
    <p className="text-gray-700 text-[0.9375rem] font-light leading-relaxed mb-8 min-h-[6.25rem]">
      "{review.text}"
    </p>
    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
      <div className="w-12 h-12 bg-primary-900 flex items-center justify-center text-white font-bold text-sm tracking-wider rounded-lg">
        {review.name.charAt(0)}
      </div>
      <div>
        <div className="text-sm font-bold text-gray-900">{review.name}</div>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    axios.get('/api/reviews')
      .then(res => setReviews(res.data))
      .catch(() => setReviews(fallbackReviews));
  }, []);

  // Triple it to ensure we always have enough content to fill any screen and loop seamlessly
  const scrolledReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 relative bg-gray-50 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-900 text-white text-[0.625rem] font-bold tracking-[0.2em] uppercase mb-4">
            CLIENT SUCCESS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900 leading-tight">
            Trusted by <span className="text-accent-600">Procurement</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Hear from operations leaders who rely on Ecotellus for their global packaging needs.
          </p>
        </motion.div>
      </div>

      {/* Track Wrapper */}
      <div className="relative w-full group overflow-hidden">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* The Track (Pure CSS Animation for better hover reliability) */}
        <div
          className="flex w-max marquee-track will-change-transform"
          style={{
            // Slower speed: reviews.length * 10 seconds.
            animation: `marquee-reviews ${reviews.length * 10}s linear infinite`,
          }}
        >
          {scrolledReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-reviews {
          0% { transform: translateX(0); }
          /* Move by exactly 1/3 of the track because we tripled the reviews list */
          100% { transform: translateX(calc(-100% / 3)); }
        }
        
        .marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
