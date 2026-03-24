import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Package } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // Instant reset on load
    axios.get('/api/products')
      .then(res => {
        const found = res.data.find(p => p.slug === slug);
        setProduct(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-100 flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
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
    </div>
  );
};

export default ProductDetail;