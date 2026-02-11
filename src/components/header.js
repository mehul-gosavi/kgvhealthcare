import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src="/images/navbar1.jpg" alt="KGV Healthcare" />
        </Link>
      </div>


      {/* Hamburger Button */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navbar Links */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/our-team" onClick={() => setIsOpen(false)}>Our Team</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
