import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Categories from './components/Categories';
import CompanyStats from './components/CompanyStats';
import Features from './components/Features';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';

import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import QuotePage from './components/QuotePage';
import BackToTop from './components/BackToTop';
import CertificationsPage from './components/CertificationsPage';
import ManufacturingProcessPage from './components/ManufacturingProcessPage';
import ReviewsPage from './components/ReviewsPage';
import PoliciesPage from './components/PoliciesPage';
import CustomPrintingPage from './components/CustomPrintingPage';
import BlogsPage from './components/BlogsPage';
import BlogSection from './components/BlogSection';
import BlogPostDetail from './components/BlogPostDetail';
import PageTransition from './components/PageTransition';
import Lenis from 'lenis';

function App() {
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4ba9
      lerp: 0.05, // Smoother interpolation (default is 0.1)
      wheelMultiplier: 1,
      infinite: false,
      smoothWheel: true,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      window.lenis = null;
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-50 flex flex-col">
        {/* Background mesh gradient orbs */}
        <div className="bg-mesh">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <ScrollToTop />
          <BackToTop />
          <Navbar />
          <main className="flex-grow pt-20"> {/* PT-20 for fixed navbar */}
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Hero />
            <Categories />
            <CompanyStats />
            <Features />
            <Process />
            <TrustBar />
            <Reviews />
            <BlogSection />
          </PageTransition>
        } />
        <Route path="/product/:slug" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Categories /><Features /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/quote" element={<PageTransition><QuotePage /></PageTransition>} />
        <Route path="/certifications" element={<PageTransition><CertificationsPage /></PageTransition>} />
        <Route path="/manufacturing-process" element={<PageTransition><ManufacturingProcessPage /></PageTransition>} />
        <Route path="/reviews" element={<PageTransition><ReviewsPage /></PageTransition>} />
        <Route path="/policies" element={<PageTransition><PoliciesPage /></PageTransition>} />
        <Route path="/custom-printing" element={<PageTransition><CustomPrintingPage /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><BlogsPage /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPostDetail /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
