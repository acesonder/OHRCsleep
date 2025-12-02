import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ShareStory from './pages/ShareStory';
import StoryGallery from './pages/StoryGallery';
import Surveys from './pages/Surveys';
import DataDashboard from './pages/DataDashboard';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <div className="app-container">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/share" element={<ShareStory />} />
            <Route path="/stories" element={<StoryGallery />} />
            <Route path="/surveys" element={<Surveys />} />
            <Route path="/data" element={<DataDashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
