import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import Features from './components/Features';
import Reviews from './components/Reviews';
import CustomBranding from './components/CustomBranding';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Background mesh gradient orbs */}
        <div className="bg-mesh">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Categories />
                <Reviews />
                <CustomBranding />
              </>
            } />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
