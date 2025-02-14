import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DishDelights from './pages/DishDelights';
import PersonalFavorites from './pages/PersonalFavorite';
import About from './pages/About';
import Contact from './pages/Contact'; // Import the Contact component

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <header>
        <h1>DishDelights.</h1>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        <nav className={isMenuOpen ? 'nav-open' : ''}>
          <ul>
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/dishdelights" className="nav-link">Recipes</a></li>
            <li><a href="/personalfavorites" className="nav-link">Personal Favorites</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/contact" className="nav-link">Contacts</a></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishdelights" element={<DishDelights />} />
        <Route path="/personalfavorites" element={<PersonalFavorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
      </Routes>
      <footer className="main-footer">
        <p>
          <span className="footer-brand">DishDelights</span>
          <span className="footer-separator">&copy;</span>
          <span>{currentYear}</span>
        </p>
      </footer>
    </Router>
  );
}