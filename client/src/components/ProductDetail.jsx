import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Package, Truck, Shield } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary-500 hover:text-primary-600">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pb-16 mt-44">
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

              {/* Features / Sizes */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Available Sizes</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
                      <Package size={16} className="text-primary-500" />
                      <span className="font-semibold text-gray-700">{size}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer shadow-md hover:shadow-lg">
                Order {product.name}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Back Button */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-center">
          <Link to="/" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm">
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Explore More Categories -> Explore More Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore More Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">More Coming Soon</h3>
              <p className="text-gray-600">Additional products will be available here.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ProductDetail;