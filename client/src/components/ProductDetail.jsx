import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Package, Truck, Shield } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/categories')
      .then(res => {
        const found = res.data.find(cat => cat.slug === slug);
        setCategory(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/" className="text-primary-500 hover:text-primary-600">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pb-16 mt-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                {category.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover our premium {category.name.toLowerCase()} collection. 
                High-quality, sustainable packaging solutions for your business.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <Package size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{category.count}+ Items</div>
                    <div className="text-sm text-gray-500">Available</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <Truck size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Fast Delivery</div>
                    <div className="text-sm text-gray-500">UK Wide</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <Shield size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Quality</div>
                    <div className="text-sm text-gray-500">Guaranteed</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                Browse {category.name}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Back Button */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            <ArrowLeft size={20} />
            Back to Categories
          </Link>
        </div>
      </section>

      {/* Explore More Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore More Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This would show other categories, but for now just a placeholder */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">More Coming Soon</h3>
              <p className="text-gray-600">Additional product categories will be available here.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ProductDetail;