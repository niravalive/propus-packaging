import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, ArrowRight, 
  Facebook, Instagram, Twitter, Linkedin,
  CreditCard, Truck, Shield
} from 'lucide-react';

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

  const infoLinks = [
    { name: 'Delivery Information', href: '#' },
    { name: 'Returns & Refunds', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ];

  const navLinks = [
    { name: 'Home Page', href: '#' },
    { name: 'Online Shop', href: '#categories' },
    { name: 'Custom Branding', href: '#custom' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <footer id="contact" className="relative pt-24 pb-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-white border border-gray-200 p-8 sm:p-12 mb-16 rounded-2xl shadow-sm relative overflow-hidden">
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">
                Subscribe to Our <span className="text-primary-500">Newsletter</span>
              </h3>
              <p className="text-gray-500">
                Get exclusive deals, new product alerts, and industry tips delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary-500 transition-colors"
                required
              />
              <button type="submit" className="glass-button-solid flex items-center gap-2 whitespace-nowrap px-6">
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center text-primary-500 border-2 border-primary-500 rounded-full font-bold text-xl">
                P
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-widest text-primary-500 uppercase leading-none">PROPUS</span>
                <span className="text-[9px] tracking-[0.4em] text-primary-500 uppercase font-medium">PACKAGING</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Importers & wholesalers of low cost takeaway packaging & disposables. Quality products at unbeatable prices.
            </p>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-500 transition-colors">
                <MapPin size={14} className="text-primary-500 flex-shrink-0" />
                Unit 2 Puddock Farm, Fairfield, Brookland, Kent TN29 9SA
              </a>
              <a href="tel:+441233234558" className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-500 transition-colors">
                <Phone size={14} className="text-primary-500 flex-shrink-0" />
                +44 1233 234 558
              </a>
              <a href="mailto:info@propus-packaging.co.uk" className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-500 transition-colors">
                <Mail size={14} className="text-primary-500 flex-shrink-0" />
                info@propus-packaging.co.uk
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-6">Information</h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-primary-500 transition-all inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-primary-500 transition-all inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours & Socials */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-6">Opening Hours</h4>
            <div className="space-y-2 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Monday - Friday</span>
                <span className="text-gray-900 font-medium">9AM - 5PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Saturday</span>
                <span className="text-gray-900 font-medium">Closed</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Sunday</span>
                <span className="text-gray-900 font-medium">Closed</span>
              </div>
            </div>

            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 hover:border-primary-500 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-gray-400">
              Exonian Ltd T/A Propus Packaging - Co Reg No. 06509353 (Copyright© 2026)
            </p>
            <div className="flex items-center gap-4 text-gray-300">
              <CreditCard size={24} />
              <Shield size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
