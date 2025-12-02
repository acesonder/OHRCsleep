import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MunicipalComparison from './pages/MunicipalComparison';
import DelegationTools from './pages/DelegationTools';
import SpecificAsks from './pages/SpecificAsks';
import ImplementationRoadmap from './pages/ImplementationRoadmap';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <div className="app-container">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compare" element={<MunicipalComparison />} />
            <Route path="/delegation" element={<DelegationTools />} />
            <Route path="/asks" element={<SpecificAsks />} />
            <Route path="/roadmap" element={<ImplementationRoadmap />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
