import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import Varieties from './pages/Varieties';
import ChilliDetail from './pages/ChilliDetail';
import ChilliPowder from './pages/ChilliPowder';
import AboutCompany from './pages/AboutCompany';
import QualityAssurance from './pages/QualityAssurance';
import Facility from './pages/Facility';
import Certifications from './pages/Certifications';
import Home from './pages/Home';
import WhatsAppFAB from './components/common/WhatsAppFAB';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-surface font-body text-text-dark flex flex-col justify-between w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/varieties" element={<Varieties />} />
            <Route path="/varieties/:id" element={<ChilliDetail />} />
            <Route path="/powder" element={<ChilliPowder />} />
            <Route path="/about" element={<AboutCompany />} />
            <Route path="/quality" element={<QualityAssurance />} />
            <Route path="/facility" element={<Facility />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppFAB />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
