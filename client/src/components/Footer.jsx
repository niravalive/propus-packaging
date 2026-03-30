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
    <footer className="relative min-h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* CTA Section */}
      <section className="flex-1 flex items-center justify-center bg-primary-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-600 rounded-full blur-[7.5rem] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to scale your packaging?
            </h2>
            <p className="text-xl text-primary-200 mb-10 leading-relaxed font-light">
              Partner with Ecotellus for industrial-grade quality and precision engineering tailored for global brands.
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
                className="bg-primary-900 border border-primary-700 hover:bg-primary-800 hover:border-primary-500 text-white px-8 py-4 rounded font-semibold text-lg transition-all flex items-center justify-center text-center"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="shrink-0 pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src={logoImage} alt="ecotellus Logo" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-light">
                Engineering quality and reliability into every box.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">Plot No.A 1-A 10, Silk Heritage Industrial Society, NH-53, Unn, Surat-394230</span>
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
              <h4 className="text-sm font-black text-primary-950 uppercase tracking-widest mb-6 border-l-4 border-accent-600 pl-3">Explore</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-gray-600 hover:text-accent-600 transition-colors flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-accent-600 transition-colors"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-sm font-black text-primary-950 uppercase tracking-widest mb-6 border-l-4 border-accent-600 pl-3">Quick Links</h4>
              <ul className="space-y-2">
                {infoLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-gray-600 hover:text-accent-600 transition-colors flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-accent-600 transition-colors"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-black text-primary-950 uppercase tracking-widest mb-6 border-l-4 border-accent-600 pl-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work Email"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-primary-950 placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                  required
                />
                <button type="submit" className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 px-4 rounded text-xs transition-all uppercase tracking-widest shadow-sm active:scale-95">
                  {subscribed ? 'Subscribed ✓' : 'Subscribe Now'}
                </button>
              </form>

              <div className="flex gap-4 mt-8">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-600 hover:border-accent-600 transition-all shadow-sm"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[0.625rem] text-gray-400 font-bold uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Ecotellus Packaging. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield size={14} />
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider">Secure Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={14} />
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider">Global Shipping</span>
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
