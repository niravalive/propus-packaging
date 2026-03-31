import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'Ordering & MOQ',
    items: [
      { q: 'What is the Minimum Order Quantity (MOQ) for custom boxes?', a: 'Our standard MOQ for custom manufacturing starts at 1,000 units. For specialized rigid setups or highly complex die-cuts, the MOQ may vary. Please submit an inquiry for precise details.' },
      { q: 'Do you offer volume discounts?', a: 'Yes. Pricing adheres to a sliding scale where unit cost decreases significantly at higher volumes (e.g., 10k, 50k, 100k units).' }
    ]
  },
  {
    category: 'Custom Branding',
    items: [
      { q: 'Do you provide design support for brand logos?', a: 'While we require you to supply your core brand assets (logo, fonts), our in-house structural engineers and pre-press team will assist with dieline creation, artwork placement, and 3D prototyping.' },
      { q: 'What printing technologies do you use?', a: 'We utilize state-of-the-art offset lithography for premium finishes, flexographic printing for high-volume standard corrugated, and digital printing for rapid prototyping.' }
    ]
  },
  {
    category: 'Shipping & Lead Times',
    items: [
      { q: 'What are the typical lead times for bulk industrial orders?', a: 'Standard production takes 10-14 business days after final artwork approval. Shipping transits depend on your global location, typically 3-5 days via air freight or 15-30 days via ocean freight.' },
      { q: 'Do you offer warehouse staging?', a: 'Yes, for enterprise contracts we offer scheduled release shipments and warehouse staging to optimize your inventory flow.' }
    ]
  },
  {
    category: 'Sustainability',
    items: [
      { q: 'Are your materials FSC-certified or eco-friendly?', a: 'Absolutely. We offer fully FSC-certified paperboards, recycled kraft liners, and soy-based inks to ensure compliance with strict environmental standards.' }
    ]
  }
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  const currentCategoryData = activeTab === 'All' 
    ? { items: faqs.flatMap(f => f.items.map(i => ({ ...i, originalCategory: f.category }))) }
    : faqs.find(f => f.category === activeTab);

  return (
    <div className="pt-0 bg-gray-50 min-h-screen pb-24">
      {/* Hero */}
      <div className="bg-primary-950 py-24 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-primary-300 max-w-2xl mx-auto font-light mb-8">
          Answers to typical procurement and manufacturing queries.
        </p>
      </div>

      <div className="max-w-[56.25rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-lg shadow-md border border-gray-200">
          <button
            onClick={() => setActiveTab('All')}
            className={`flex-1 py-3 px-4 rounded text-sm font-bold transition-all ${
              activeTab === 'All' ? 'bg-primary-900 text-white shadow' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          {faqs.map(tab => (
            <button
              key={tab.category}
              onClick={() => setActiveTab(tab.category)}
              className={`flex-1 py-3 px-4 rounded text-sm font-bold transition-all ${
                activeTab === tab.category ? 'bg-primary-900 text-white shadow' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab.category}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden mb-16">
          {currentCategoryData.items.map((item, index) => {
            const itemKey = activeTab === 'All' ? `${item.originalCategory}-${index}` : `${activeTab}-${index}`;
            const isOpen = openItems[itemKey];
            return (
              <div key={itemKey} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => toggleItem(activeTab === 'All' ? item.originalCategory : activeTab, index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none group"
                >
                  <span className="text-lg font-bold text-primary-900 pr-8 group-hover:text-accent-600 transition-colors">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-accent-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-accent-100 group-hover:text-accent-600'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <p className="p-6 pt-0 text-gray-600 leading-relaxed font-light">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Secondary CTA */}
        <div className="text-center bg-white p-12 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">Our procurement specialists are ready to discuss your unique packaging requirements.</p>
          <Link to="/contact" className="inline-block bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded font-bold transition-colors shadow-sm">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
