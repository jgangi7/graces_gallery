import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import Works from './Works';
import Shop from './Shop';
import Information from './Information';

const Home = () => (
  <main className="main-content">
    <div className="hero">
      <div className="hero-title-outline">GRACES GALLERY</div>
      <div className="hero-title">LIVE LOUD / STYLED AND RILED</div>
      <Link to="/works" className="hero-btn">VIEW WORK</Link>
    </div>
  </main>
);

function App() {
  return (
    <>
      <header className="header">
        <nav>
          <Link to="/works" className="nav-link left">Works</Link>
          <Link to="/" className="nav-link center">Graces Gallery</Link>
          <span className="nav-link right">
            <Link to="/information">Information</Link> / <Link to="/shop">Shop</Link>
          </span>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/information" element={<Information />} />
      </Routes>
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-link" onClick={() => window.open('mailto:gracesgallery@gmail.com', '_blank')}>Email</div> / <div className="footer-link" onClick={() => window.open('https://www.instagram.com/graciepaintz', '_blank')}>Instagram</div>
        </div>
        <div>
          Copyright 2025. All Rights Reserved. <span className="footer-desc"></span>
        </div>
      </footer>
    </>
  );
}

export default App;
