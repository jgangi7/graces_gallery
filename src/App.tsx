import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => (
  <main className="main-content">
    <div className="hero">
      <div className="hero-title-outline">GRACES GALLERY</div>
      <div className="hero-title">- - - - CATCH PHRASE - - - -</div>
      <Link to="/works" className="hero-btn">VIEW WORK</Link>
    </div>
  </main>
);

const Works = () => <main className="main-content"><h2>Works</h2></main>;
const Shop = () => <main className="main-content"><h2>Shop</h2></main>;
const Information = () => <main className="main-content"><h2>Information</h2></main>;

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
        <div>
          Copyright 2025. All Rights Reserved. <span className="footer-desc"></span>
        </div>
        <div className="footer-links">
          Email / Instagram
        </div>
      </footer>
    </>
  );
}

export default App;
