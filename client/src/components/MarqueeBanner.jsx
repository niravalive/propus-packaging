import React from 'react';
import { Truck, Headphones, Clock, Tag, Star } from 'lucide-react';

const items = [
  { icon: Truck, text: 'FAST UK DELIVERY' },
  { icon: Star, text: 'EXPERT SUPPORT' },
  { icon: Clock, text: 'QUICK DISPATCH' },
  { icon: Tag, text: 'COMPETITIVE PRICING' },
  { icon: Truck, text: 'FAST UK DELIVERY' },
  { icon: Star, text: 'EXPERT SUPPORT' },
  { icon: Clock, text: 'QUICK DISPATCH' },
  { icon: Tag, text: 'COMPETITIVE PRICING' },
];

const MarqueeBanner = () => {
  return (
    <div className="relative py-4 overflow-hidden border-y border-gray-100 bg-gray-50/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-2 mx-8 text-gray-500">
            <item.icon size={16} className="text-primary-500" />
            <span className="text-xs font-bold tracking-widest uppercase">{item.text}</span>
            <span className="text-gray-300 mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
