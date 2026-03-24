import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, ArrowRight, 
  Facebook, Instagram, Twitter, Linkedin,
  CreditCard, Truck, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/ecotellus-logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const infoLinks = [
    { name: 'Bulk Orders', href: '/contact' },
    { name: 'Quality Standards', href: '/about#quality' },
    { name: 'Shipping & Delivery', href: '/faq#shipping' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ];

  return (
    <footer className="relative pt-20 pb-8 bg-primary-950 border-t border-primary-900">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 bg-white py-2 px-4 rounded inline-block">
              <img src={logoImage} alt="ecotellus Logo" className="h-10 w-auto filter grayscale opacity-90" />
            </div>
            <p className="text-sm text-primary-300 leading-relaxed mb-6 font-light">
              Premium custom packaging solutions for global B2B operations. Engineering quality and reliability into every box.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-primary-200">
                <MapPin size={16} className="text-accent-500 flex-shrink-0 mt-0.5" />
                <span>Plot No.A 1-A 10, Silk Heritage Industrial Society, NH-53, Unn, Surat 394230</span>
              </div>
              <a href="tel:+441233234558" className="flex items-center gap-3 text-sm text-primary-200 hover:text-accent-400 transition-colors">
                <Phone size={16} className="text-accent-500 flex-shrink-0" />
                +44 1233 234 558
              </a>
              <a href="mailto:ecotellus9@gmail.com" className="flex items-center gap-3 text-sm text-primary-200 hover:text-accent-400 transition-colors">
                <Mail size={16} className="text-accent-500 flex-shrink-0" />
                ecotellus9@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-300 hover:text-accent-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-300 hover:text-accent-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Stay Updated</h4>
            <p className="text-sm text-primary-300 mb-4 font-light">
              Get industry reports and pricing updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work Email Address"
                className="w-full px-4 py-3 bg-primary-900 border border-primary-800 rounded text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                required
              />
              <button type="submit" className="bg-accent-600 hover:bg-accent-700 text-white font-semibold py-3 px-4 rounded text-sm transition-colors flex items-center justify-center gap-2 w-full">
                {subscribed ? 'Subscribed ✓' : 'Subscribe Now'}
              </button>
            </form>
            
            <div className="flex gap-4 mt-8">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded border border-primary-800 flex items-center justify-center text-primary-500 hover:text-white hover:bg-primary-800 hover:border-primary-700 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-400 font-light">
              &copy; {new Date().getFullYear()} ecotellus Packaging. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-primary-500">
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span className="text-xs">Secure Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} />
                <span className="text-xs">Global Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
