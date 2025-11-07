import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

// Pages
import Home from './pages/Home.tsx';
import Overview from './pages/Overview.tsx';

function App() {
  return (
    <Router basename="/dcs-app-suite-website">
      <div className="App min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;