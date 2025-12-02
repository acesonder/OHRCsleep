import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import KnowYourRights from './pages/KnowYourRights';
import ServicesMap from './pages/ServicesMap';
import Participation from './pages/Participation';
import Advocacy from './pages/Advocacy';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app-container">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rights" element={<KnowYourRights />} />
            <Route path="/services" element={<ServicesMap />} />
            <Route path="/participate" element={<Participation />} />
            <Route path="/advocacy" element={<Advocacy />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
