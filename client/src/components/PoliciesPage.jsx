import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Scale, Eye, Lock, Trash2, AlertTriangle, Globe, CreditCard, RefreshCw, Gavel, Users } from 'lucide-react';

const PoliciesPage = () => {
  return (
    <div className="pt-0 bg-white">

      {/* Content */}
      <div className="max-w-[56.25rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* ========== PRIVACY & POLICIES ========== */}
        <section id="privacy" className="mb-24 scroll-mt-36">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-accent-600/10 flex items-center justify-center">
                <Shield size={28} className="text-accent-600" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-primary-900">Privacy & Policies</h2>
                <p className="text-sm text-gray-500 mt-1">Last updated: March 2026</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12 text-gray-700">

            {/* Introduction */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-lg leading-relaxed font-light border-l-4 border-accent-500 pl-6 py-2 bg-accent-50/50 rounded-r-lg">
                Ecotellus Packaging Pvt. Ltd. ("ecotellus", "we", "our", or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
              </p>
            </motion.div>

            {/* 1. Information We Collect */}
            <PolicySection
              icon={<Eye size={22} className="text-accent-600" />}
              title="1. Information We Collect"
              content={
                <>
                  <p className="mb-4">We may collect the following types of information:</p>
                  <ul className="space-y-3 ml-1">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span><strong>Personal Identification Information:</strong> Name, email address, phone number, company name, job title, and mailing address when you fill out contact forms, request quotes, or subscribe to newsletters.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span><strong>Business Information:</strong> Company details, procurement requirements, order history, and communication preferences relevant to B2B transactions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, pages visited, and time spent on our website through cookies and analytics tools.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span><strong>Communication Records:</strong> Records of correspondence, phone calls, and emails exchanged between you and our team.</span>
                    </li>
                  </ul>
                </>
              }
            />

            {/* 2. How We Use Your Information */}
            <PolicySection
              icon={<Lock size={22} className="text-accent-600" />}
              title="2. How We Use Your Information"
              content={
                <>
                  <p className="mb-4">Your information is used for the following purposes:</p>
                  <ul className="space-y-3 ml-1">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span>To respond to inquiries, process quote requests, and fulfill orders.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span>To communicate about products, services, promotions, and industry updates.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span>To improve our website functionality, content, and user experience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span>To comply with legal obligations and enforce our agreements.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span>To analyze trends, administer the site, and gather demographic information for internal research.</span>
                    </li>
                  </ul>
                </>
              }
            />

            {/* 3. Data Sharing */}
            <PolicySection
              icon={<Users size={22} className="text-accent-600" />}
              title="3. Data Sharing & Disclosure"
              content={
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted third-party service providers (e.g., hosting, analytics, and email delivery services) who assist us in operating our website and conducting our business, provided that those parties agree to keep this information confidential. We may also disclose personal data when required by law, to enforce our site policies, or to protect our or others' rights, property, or safety.
                </p>
              }
            />

            {/* 4. Cookies */}
            <PolicySection
              icon={<Globe size={22} className="text-accent-600" />}
              title="4. Cookies & Tracking Technologies"
              content={
                <p className="leading-relaxed">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can choose to accept or decline cookies through your browser settings. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. Declining cookies may prevent you from taking full advantage of the website.
                </p>
              }
            />

            {/* 5. Data Security */}
            <PolicySection
              icon={<Shield size={22} className="text-accent-600" />}
              title="5. Data Security"
              content={
                <p className="leading-relaxed">
                  We implement a variety of security measures to maintain the safety of your personal information. Access to personal data is restricted to authorized personnel only. We use SSL encryption for data transmission, secure servers, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              }
            />

            {/* 6. Data Retention */}
            <PolicySection
              icon={<Trash2 size={22} className="text-accent-600" />}
              title="6. Data Retention"
              content={
                <p className="leading-relaxed">
                  We retain your personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements. For B2B clients, transactional data is retained for a minimum of 7 years in compliance with tax and trade regulations. You may request deletion of your personal data at any time by contacting us at <a href="mailto:info@ecotellus.com" className="text-accent-600 hover:underline font-medium">info@ecotellus.com</a>.
                </p>
              }
            />

            {/* 7. Your Rights */}
            <PolicySection
              icon={<Scale size={22} className="text-accent-600" />}
              title="7. Your Rights"
              content={
                <>
                  <p className="mb-4">Depending on your jurisdiction, you may have the following rights:</p>
                  <ul className="space-y-3 ml-1">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span><strong>Right to Access:</strong> Request copies of your personal data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span><strong>Right to Rectification:</strong> Request correction of any inaccurate data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span><strong>Right to Erasure:</strong> Request deletion of your personal data under certain conditions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span><strong>Right to Restrict Processing:</strong> Request restriction of processing of your data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span><strong>Right to Data Portability:</strong> Request transfer of your data to another organization.</span>
                    </li>
                  </ul>
                  <p className="mt-4">To exercise any of these rights, please contact us at <a href="mailto:info@ecotellus.com" className="text-accent-600 hover:underline font-medium">info@ecotellus.com</a>.</p>
                </>
              }
            />
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-6 my-16">
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="w-3 h-3 rounded-full bg-accent-500"></div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* ========== TERMS & CONDITIONS ========== */}
        <section id="terms" className="mb-16 scroll-mt-36">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary-900/10 flex items-center justify-center">
                <FileText size={28} className="text-primary-900" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-primary-900">Terms & Conditions</h2>
                <p className="text-sm text-gray-500 mt-1">Last updated: March 2026</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12 text-gray-700">

            {/* Introduction */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-lg leading-relaxed font-light border-l-4 border-primary-800 pl-6 py-2 bg-primary-50/50 rounded-r-lg">
                Welcome to Ecotellus. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our website, placing orders, or engaging our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you should not use our website or services.
              </p>
            </motion.div>

            {/* 1. Acceptance */}
            <PolicySection
              icon={<Gavel size={22} className="text-primary-800" />}
              title="1. Acceptance of Terms"
              variant="dark"
              content={
                <p className="leading-relaxed">
                  By accessing this website, you warrant that you are at least 18 years old and have the legal capacity to enter into binding contracts. If you are accessing the website on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.
                </p>
              }
            />

            {/* 2. Services */}
            <PolicySection
              icon={<CreditCard size={22} className="text-primary-800" />}
              title="2. Products & Services"
              variant="dark"
              content={
                <>
                  <p className="mb-4">Ecotellus provides custom packaging design, manufacturing, and logistics services. The following terms apply:</p>
                  <ul className="space-y-3 ml-1">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-800 mt-2 flex-shrink-0" />
                      <span>All product images and descriptions on the website are for illustrative purposes. Actual products may vary slightly in color and finish.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-800 mt-2 flex-shrink-0" />
                      <span>Pricing is subject to change based on raw material costs, order volume, and specifications. Final pricing will be confirmed in the formal quote.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-800 mt-2 flex-shrink-0" />
                      <span>Minimum order quantities (MOQs) apply and vary by product type. MOQ details are provided during the quotation process.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-800 mt-2 flex-shrink-0" />
                      <span>Lead times are estimates and may be affected by factors beyond our control, including supply chain disruptions and force majeure events.</span>
                    </li>
                  </ul>
                </>
              }
            />

            {/* 3. Orders & Payment */}
            <PolicySection
              icon={<CreditCard size={22} className="text-primary-800" />}
              title="3. Orders & Payment Terms"
              variant="dark"
              content={
                <p className="leading-relaxed">
                  All orders are confirmed via a signed Purchase Order (PO) or electronic acceptance of a formal quotation. Standard payment terms are 50% advance and 50% before dispatch, unless otherwise agreed in a written credit agreement. All payments must be made via bank wire transfer. Late payments may attract interest at 1.5% per month. Orders are not scheduled for production until the advance payment is received and cleared.
                </p>
              }
            />

            {/* 4. Intellectual Property */}
            <PolicySection
              icon={<Lock size={22} className="text-primary-800" />}
              title="4. Intellectual Property"
              variant="dark"
              content={
                <p className="leading-relaxed">
                  All content on this website—including text, graphics, logos, images, designs, and software—is the property of Ecotellus Packaging Pvt. Ltd. or its content suppliers and is protected by international copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any material on this website without our prior written consent. Custom designs created for clients remain the intellectual property of the client, while structural engineering and die designs used in production remain with Ecotellus.
                </p>
              }
            />

            {/* 5. Limitation of Liability */}
            <PolicySection
              icon={<AlertTriangle size={22} className="text-primary-800" />}
              title="5. Limitation of Liability"
              variant="dark"
              content={
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, Ecotellus shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our website or services. Our total liability shall not exceed the value of the specific order in question. We are not responsible for delays or failures in performance resulting from circumstances beyond our reasonable control, including natural disasters, pandemics, government actions, or supply chain disruptions.
                </p>
              }
            />

            {/* 6. Returns & Claims */}
            <PolicySection
              icon={<RefreshCw size={22} className="text-primary-800" />}
              title="6. Returns, Claims & Disputes"
              variant="dark"
              content={
                <p className="leading-relaxed">
                  Quality claims must be raised within 7 business days of receiving shipment, accompanied by photographic evidence and a detailed description of the defect. Returns are accepted only for manufacturing defects that deviate from the approved sample. Claims for damage during transit should be filed with the designated shipping carrier. Any disputes arising from or related to these Terms shall be governed by the laws of India and subject to the exclusive jurisdiction of courts in Surat, Gujarat.
                </p>
              }
            />

            {/* 7. Modifications */}
            <PolicySection
              icon={<FileText size={22} className="text-primary-800" />}
              title="7. Modifications to Terms"
              variant="dark"
              content={
                <p className="leading-relaxed">
                  Ecotellus reserves the right to update or modify these Terms at any time without prior notice. Changes become effective immediately upon posting to this page. Your continued use of the website following any changes constitutes your acceptance of the revised Terms. We recommend reviewing this page periodically for any updates.
                </p>
              }
            />

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-primary-900 mb-3">Questions About Our Policies?</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                If you have any questions about our Privacy Policy or Terms & Conditions, please don't hesitate to reach out.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:info@ecotellus.com"
                  className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold py-3 px-6 rounded-xl transition-all text-sm shadow-sm hover:shadow">
                  Email Us
                </a>
                <a href="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary-900 font-semibold py-3 px-6 rounded-xl border border-gray-200 transition-all text-sm">
                  Contact Page
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Reusable policy section component
const PolicySection = ({ icon, title, content, variant = 'light' }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
        ${variant === 'dark' ? 'bg-primary-900/8' : 'bg-accent-600/8'}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary-900">{title}</h3>
    </div>
    <div className="ml-[3.25rem] text-[0.9375rem] font-light">
      {content}
    </div>
  </motion.div>
);

export default PoliciesPage;
