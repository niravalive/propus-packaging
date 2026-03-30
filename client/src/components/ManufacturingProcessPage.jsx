import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList, Palette, FlaskConical, Cog, Layers,
  Printer, PackageCheck, Truck, ArrowDown
} from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Requirement Analysis',
    description: 'Our team works closely with your procurement and engineering departments to understand exact specifications—dimensions, weight capacity, material grade, print quality, and compliance standards.',
    details: ['Product dimensions & weight mapping', 'Material grade selection (E/B/BC flute)', 'Compliance requirements (FDA, FSC, BRC)', 'Volume & timeline planning'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60',
    color: '#01a2d3',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Structural Design & Artwork',
    description: 'Our in-house structural engineers create precise CAD designs and 3D prototypes. Simultaneously, our graphic team develops print-ready artwork aligned with your brand guidelines.',
    details: ['CAD structural engineering', '3D prototype visualization', 'Brand-aligned artwork development', 'Die-line & fold pattern creation'],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?w=800&auto=format&fit=crop&q=60',
    color: '#8b5cf6',
  },
  {
    icon: FlaskConical,
    number: '03',
    title: 'Testing & Prototyping',
    description: 'Physical prototypes undergo rigorous testing—edge crush tests, burst strength, stacking compression, and drop tests—to validate structural integrity before mass production.',
    details: ['Edge crush test (ECT)', 'Burst strength analysis', 'Stacking compression test', 'Drop & vibration simulation'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60',
    color: '#f59e0b',
  },
  {
    icon: Cog,
    number: '04',
    title: 'Die & Tooling Setup',
    description: 'Precision dies and tooling fixtures are manufactured using CNC machinery to ensure exact tolerances. Every die is calibrated for optimal cutting performance across production runs.',
    details: ['CNC die manufacturing', 'Tolerance calibration (±0.5mm)', 'Fixture alignment & testing', 'Quality gate approval'],
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&auto=format&fit=crop&q=60',
    color: '#ef4444',
  },
  {
    icon: Printer,
    number: '05',
    title: 'Printing & Coating',
    description: 'High-definition offset and flexographic printing using Heidelberg and Bobst presses. UV coating, aqueous coating, and lamination options available for premium finishes.',
    details: ['Heidelberg offset printing', 'Flexographic multi-color print', 'UV / aqueous coating options', 'Color matching (Pantone/CMYK)'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=60',
    color: '#22c55e',
  },
  {
    icon: Layers,
    number: '06',
    title: 'Die-Cutting & Folding',
    description: 'Automated die-cutting machines precisely cut and crease each unit. Robotic folding and glueing lines ensure consistent assembly at speeds exceeding 15,000 units per hour.',
    details: ['Automated die-cutting lines', 'Precision creasing & scoring', 'Robotic folding & glueing', '15,000+ units/hour capacity'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60',
    color: '#ec4899',
  },
  {
    icon: PackageCheck,
    number: '07',
    title: 'Quality Inspection',
    description: 'Every batch goes through a multi-stage quality inspection with inline scanners and manual sampling to catch defects before packaging. AQL 2.5 inspection level maintained.',
    details: ['Inline optical scanning', 'AQL 2.5 sampling inspection', 'Dimensional accuracy check', 'Print & color verification'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60',
    color: '#06b6d4',
  },
  {
    icon: Truck,
    number: '08',
    title: 'Packaging & Global Dispatch',
    description: 'Finished goods are palletized, stretch-wrapped, and containerized for global shipment. We manage end-to-end logistics including customs documentation and staged delivery.',
    details: ['Palletization & containerization', 'FCL/LCL ocean freight', 'Customs compliance & docs', 'Real-time shipment tracking'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60',
    color: '#f97316',
  },
];

const StepCard = ({ step, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Connector */}
      {!isLast && (
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -bottom-12 z-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ArrowDown size={24} className="text-gray-300" />
          </motion.div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
      >
        {/* Content */}
        <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}
            >
              <step.icon size={26} className="text-white" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: step.color }}>
                Step {step.number}
              </span>
              <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed font-light mb-6 text-[0.9375rem]">
            {step.description}
          </p>

          <div className="grid grid-cols-2 gap-3">
            {step.details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: step.color }} />
                <span className="text-sm text-gray-700 font-medium">{detail}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Step Badge on Image */}
            <div
              className="absolute -top-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg"
              style={{ backgroundColor: step.color }}
            >
              {step.number}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ManufacturingProcessPage = () => {
  return (
    <div className="pt-0 bg-white">
      {/* Hero */}
      <section className="bg-primary-950 py-32 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-primary-950/70"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, white 60px, white 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, white 60px, white 61px)',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-accent-600/20 text-accent-400 text-[0.625rem] font-bold tracking-[0.25em] uppercase mb-6 rounded-full border border-accent-600/30">
              How We Build
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Manufacturing <span className="text-accent-400">Process</span>
            </h1>
            <p className="text-xl text-primary-200 font-light leading-relaxed max-w-2xl mx-auto">
              A transparent, step-by-step look at how your packaging is engineered, produced, and delivered—from first sketch to final shipment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-primary-900 mb-4">8-Step Production Pipeline</h2>
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              Every box we produce passes through our rigorous 8-step pipeline to guarantee precision, quality, and on-time delivery.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} isLast={index === steps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-primary-900 mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 text-lg font-light mb-8 max-w-xl mx-auto">
              Let our engineering team walk you through the entire process and create a custom solution for your needs.
            </p>
            <a
              href="/quote"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm tracking-wide"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingProcessPage;
