import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import axios from 'axios';

const fallbackReviews = [
  { id: 1, name: 'James Wilson', rating: 5, text: 'Excellent quality packaging at unbeatable prices. Delivery was fast and the customer service team was incredibly helpful.', date: '2026-02-15' },
  { id: 2, name: 'Sarah Thompson', rating: 5, text: 'We switched to Propus for all our takeaway packaging needs. The quality is fantastic and the prices are the best we have found.', date: '2026-01-28' },
  { id: 3, name: 'Michael Chen', rating: 4, text: 'Great range of eco-friendly options. Our customers love the new biodegradable containers. Will definitely order again.', date: '2026-03-02' },
  { id: 4, name: 'Emma Roberts', rating: 5, text: 'The custom branding service transformed our business. Professional results and the team guided us through every step.', date: '2026-02-20' },
  { id: 5, name: 'David Patel', rating: 5, text: 'Been ordering for over 2 years now. Consistently great products, competitive pricing, and reliable next-day delivery.', date: '2026-01-10' },
  { id: 6, name: 'Lisa Morgan', rating: 4, text: 'Fantastic variety of products. Found everything we needed for our new restaurant. The website is easy to navigate too.', date: '2026-03-08' },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(fallbackReviews);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('/api/reviews')
      .then(res => setReviews(res.data))
      .catch(() => setReviews(fallbackReviews));
  }, []);

  const visibleReviews = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return result;
  };

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 relative bg-gray-50/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-md bg-primary-500 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900 leading-tight">
            Customer <span className="text-primary-500">Reviews</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            See what our customers have to say about our premium products and expert service.
          </p>
        </motion.div>

        {/* Reviews carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleReviews().map((review, index) => (
              <motion.div
                key={`${review.id}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 relative rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < review.rating ? 'text-accent-500 fill-accent-500' : 'text-gray-100 fill-gray-100'}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-600 text-[15px] font-medium leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 font-black text-sm border-2 border-white shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{review.name}</div>
                    <div className="text-[11px] font-bold text-primary-500/60 uppercase tracking-widest">
                      {new Date(review.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all text-gray-400 shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === currentIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-gray-200 w-2 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all text-gray-400 shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
