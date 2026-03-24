import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Categories from './components/Categories';
import Features from './components/Features';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import GlobalCTA from './components/GlobalCTA';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import QuotePage from './components/QuotePage';

function App() {
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
          <Navbar />
          <main className="flex-grow pt-20"> {/* PT-20 for fixed navbar */}
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <TrustBar />
                  <Categories />
                  <Features />
                  <Process />
                  <Reviews />
                </>
              } />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/products" element={<><Categories /><Features /></>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/quote" element={<QuotePage />} />
            </Routes>
          </main>
          <GlobalCTA />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
