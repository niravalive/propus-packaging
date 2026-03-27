import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <CompanyStats />
                  <Categories />
                  <Features />
                  <Process />
                  <TrustBar />
                  <Reviews />
                </>
              } />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/products" element={<><Categories /><Features /></>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/manufacturing-process" element={<ManufacturingProcessPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
