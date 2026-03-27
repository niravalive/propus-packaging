import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const infoLinks = [
    { name: 'Certifications', href: '/certifications' },
    { name: 'Manufacturing Process', href: '/manufacturing-process' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Policies', href: '/policies' },
  ];

  return (
    <footer className="relative">
      {/* CTA Section */}
      <section className="py-24 bg-primary-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-600 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to scale your packaging operations?
            </h2>
            <p className="text-xl text-primary-200 mb-10 leading-relaxed font-light">
              Partner with ecotellus for industrial-grade quality, reliable lead times, and comprehensive B2B support tailored for global brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded font-semibold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-accent-600/20"
              >
                Request a Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="bg-primary-900 border border-primary-700 hover:bg-primary-800 hover:border-primary-500 text-white px-8 py-4 rounded font-semibold text-lg transition-all flex items-center justify-center"
              >
                View Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="pt-20 pb-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImage} alt="ecotellus Logo" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 font-light">
              Premium custom packaging solutions for global B2B operations. Engineering quality and reliability into every box.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                <span>Plot No.A 1-A 10, Silk Heritage Industrial Society, NH-53, Unn, Surat 394230</span>
              </div>
              <a href="tel:+441233234558" className="flex items-center gap-3 text-sm text-gray-600 hover:text-accent-600 transition-colors">
                <Phone size={16} className="text-accent-600 flex-shrink-0" />
                +44 1233 234 558
              </a>
              <a href="mailto:ecotellus9@gmail.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-accent-600 transition-colors">
                <Mail size={16} className="text-accent-600 flex-shrink-0" />
                ecotellus9@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-primary-950 uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-gray-600 hover:text-accent-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm font-bold text-primary-950 uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-gray-600 hover:text-accent-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-primary-950 uppercase tracking-wider mb-6">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-4 font-light">
              Get industry reports and pricing updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work Email Address"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-primary-950 placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                required
              />
              <button type="submit" className="bg-accent-600 hover:bg-accent-700 text-white font-semibold py-3 px-4 rounded text-sm transition-colors flex items-center justify-center gap-2 w-full shadow-sm">
                {subscribed ? 'Subscribed ✓' : 'Subscribe Now'}
              </button>
            </form>
            
            <div className="flex gap-4 mt-8">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-400 hover:text-accent-600 hover:bg-gray-100 hover:border-gray-300 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 font-light">
              &copy; {new Date().getFullYear()} ecotellus Packaging. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-400">
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
      </div>
    </footer>
  );
};

export default Footer;
