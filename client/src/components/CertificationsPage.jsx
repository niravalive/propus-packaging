import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    company: 'ISO',
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    description: 'Certified quality management systems ensuring consistent, zero-defect output for all enterprise accounts. Our QMS framework covers every stage from raw material intake to finished goods dispatch.',
    color: '#01a2d3',
    certNumber: 'QMS-2024-ECO-0891',
    issueDate: 'January 15, 2024',
    expiryDate: 'January 14, 2027',
    scope: 'Design, manufacturing, and supply of corrugated and rigid packaging solutions for industrial and retail applications.',
    certBody: 'Bureau Veritas Certification',
  },
  {
    id: 2,
    company: 'FSC',
    title: 'FSC Certified',
    subtitle: 'Forest Stewardship Council',
    description: 'Committed to sustainable forestry. We source raw materials ethically from responsibly managed forests to help shrink corporate carbon footprints across global supply chains.',
    color: '#4ade80',
    certNumber: 'FSC-C158923',
    issueDate: 'March 22, 2023',
    expiryDate: 'March 21, 2028',
    scope: 'Chain of Custody certification for procurement, processing, and distribution of FSC-certified paper and board products.',
    certBody: 'Rainforest Alliance',
  },
  {
    id: 3,
    company: 'FDA',
    title: 'Food Safety Compliant',
    subtitle: 'FDA & EU Standards',
    description: 'Utilizing FDA/EU approved inks and adhesives for all indirect and direct food-contact packaging, ensuring the highest consumer safety standards are met.',
    color: '#f59e0b',
    certNumber: 'FC-FDA-2024-4421',
    issueDate: 'June 01, 2024',
    expiryDate: 'May 31, 2026',
    scope: 'Production of food-grade packaging materials using approved inks, coatings, and adhesives per 21 CFR and EU Regulation 1935/2004.',
    certBody: 'SGS SA',
  },
  {
    id: 4,
    company: 'ISO',
    title: 'ISO 14001:2015',
    subtitle: 'Environmental Management',
    description: 'Our environmental management system ensures that our manufacturing processes minimize ecological impact through waste reduction, energy efficiency, and sustainable material sourcing.',
    color: '#22c55e',
    certNumber: 'EMS-2023-ECO-0342',
    issueDate: 'September 10, 2023',
    expiryDate: 'September 09, 2026',
    scope: 'Environmental management of packaging manufacturing operations including waste handling, emissions control, and resource optimization.',
    certBody: 'TÜV SÜD',
  },
  {
    id: 5,
    company: 'SEDEX',
    title: 'SEDEX / SMETA Audit',
    subtitle: 'Ethical Trade Compliance',
    description: 'Successfully audited under SMETA 4 Pillar standards, covering Labour Standards, Health & Safety, Environmental management, and Business Ethics across all facilities.',
    color: '#8b5cf6',
    certNumber: 'SMETA-ZS-2024-1187',
    issueDate: 'February 08, 2024',
    expiryDate: 'February 07, 2025',
    scope: 'Ethical compliance across all manufacturing sites including labour practices, health & safety protocols, and environmental responsibility.',
    certBody: 'Intertek',
  },
  {
    id: 6,
    company: 'BRC',
    title: 'BRC Packaging Grade AA',
    subtitle: 'Global Standard for Packaging',
    description: 'Achieving the highest AA grade under BRC Global Standard for Packaging & Packaging Materials, demonstrating our commitment to product safety and quality.',
    color: '#ef4444',
    certNumber: 'BRC-PKG-2024-AA-0094',
    issueDate: 'April 18, 2024',
    expiryDate: 'April 17, 2025',
    scope: 'Manufacture of primary and secondary packaging for food, pharmaceutical, and consumer goods industries.',
    certBody: 'LRQA (Lloyd\'s Register)',
  },
];

const CertificateModal = ({ cert, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
    onClick={onClose}
  >
    {/* Blurred background */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

    {/* Certificate */}
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.85, opacity: 0, y: 30 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={(e) => e.stopPropagation()}
      className="relative bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
    >
      {/* Certificate Header */}
      <div className="relative p-8 pb-6" style={{ background: `linear-gradient(135deg, ${cert.color}15, ${cert.color}08)` }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-500 hover:text-gray-800 transition-all shadow-sm hover:shadow"
        >
          <X size={20} />
        </button>

        {/* Decorative border pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, ${cert.color} 20px, ${cert.color} 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, ${cert.color} 20px, ${cert.color} 21px)`,
          }}
        />

        <div className="text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
            style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)` }}>
            <Award size={36} className="text-white" />
          </div>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2" style={{ color: cert.color }}>
            Certificate of Compliance
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-1">{cert.title}</h2>
          <p className="text-gray-500 text-sm font-medium">{cert.subtitle}</p>
        </div>
      </div>

      {/* Certificate Body */}
      <div className="px-8 pb-8">
        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <ShieldCheck size={18} style={{ color: cert.color }} />
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <p className="text-gray-600 text-center text-sm leading-relaxed mb-8 font-light">
          This is to certify that <strong className="text-gray-900">Ecotellus Packaging Pvt. Ltd.</strong> has been assessed
          and found to conform to the requirements of <strong className="text-gray-900">{cert.title}</strong>.
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-[0.625rem] font-bold uppercase tracking-wider text-gray-400 mb-1">Certificate No.</p>
            <p className="text-sm font-semibold text-gray-900">{cert.certNumber}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-[0.625rem] font-bold uppercase tracking-wider text-gray-400 mb-1">Certifying Body</p>
            <p className="text-sm font-semibold text-gray-900">{cert.certBody}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-[0.625rem] font-bold uppercase tracking-wider text-gray-400 mb-1">Issue Date</p>
            <p className="text-sm font-semibold text-gray-900">{cert.issueDate}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-[0.625rem] font-bold uppercase tracking-wider text-gray-400 mb-1">Expiry Date</p>
            <p className="text-sm font-semibold text-gray-900">{cert.expiryDate}</p>
          </div>
        </div>

        {/* Scope */}
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="text-[0.625rem] font-bold uppercase tracking-wider text-gray-400 mb-2">Scope of Certification</p>
          <p className="text-sm text-gray-700 leading-relaxed font-light">{cert.scope}</p>
        </div>

        {/* Stamp Area */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck size={14} />
            <span>Verified & Authenticated</span>
          </div>
          <div
            className="px-4 py-2 rounded-lg text-xs font-bold text-white"
            style={{ backgroundColor: cert.color }}
          >
            VALID ✓
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const CertCard = ({ cert, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
    className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-8 hover:border-transparent hover:shadow-xl transition-all duration-500 relative overflow-hidden"
  >
    {/* Hover gradient overlay */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      style={{ background: `linear-gradient(135deg, ${cert.color}08, ${cert.color}04)` }}
    />

    {/* Top accent bar */}
    <div
      className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      style={{ backgroundColor: cert.color }}
    />

    <div className="relative z-10">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${cert.color}15` }}
      >
        <ShieldCheck size={28} style={{ color: cert.color }} />
      </div>

      <div className="mb-4">
        <span className="text-[0.625rem] font-bold tracking-[0.2em] uppercase px-2 py-1 rounded-full" style={{ color: cert.color, backgroundColor: `${cert.color}12` }}>
          {cert.company}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-900 transition-colors">
        {cert.title}
      </h3>
      <p className="text-sm text-gray-500 font-medium mb-4">{cert.subtitle}</p>
      <p className="text-sm text-gray-600 leading-relaxed font-light mb-6 line-clamp-3">
        {cert.description}
      </p>

      <div className="flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: cert.color }}>
        <span>View Certificate</span>
        <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
);

const CertificationsPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="pt-0 bg-white">

      {/* Certifications Grid */}
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-primary-900 mb-4">Global Quality Standards</h2>
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              Click on any certification to view the full certificate details and scope of compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <CertCard key={cert.id} cert={cert} onClick={() => setSelectedCert(cert)} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificationsPage;
