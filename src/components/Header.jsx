import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo"> ☀️ Solar Panel Checking</h1>
      <nav className="nav-links">
        <Link to="/">HomePage</Link>
        <Link to="/about">About Us</Link>
        <Link to="/methodology">Methodology</Link>
        <Link to="/services">Services</Link>
      </nav>
    </header>
  );
};

export default Header;
