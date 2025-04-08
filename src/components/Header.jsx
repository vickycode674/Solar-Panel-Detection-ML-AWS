import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
    <div className="logo-section">
      <h1 className="logo">☀️ Solar Panel Checking</h1>
      <p className="tagline">Your smart way to detect faulty solar panels with AI precision ⚡</p>
    </div>
    <nav className="nav-links">
      <Link to="/">HomePage</Link>
      <Link to="/about">About Us</Link>
      <Link to="/methodology">Methodology</Link>
      <Link to="/bts">Behind Working</Link>
    </nav>
  </header>
  
  );
};

export default Header;
