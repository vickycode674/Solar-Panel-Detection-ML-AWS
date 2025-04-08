import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";
import solarBg from "../assets/solar-panel-bg1.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="home-wrapper"
      style={{
        backgroundImage: `url(${solarBg})`,
      }}
    >
      <div className="overlay">
        <h1 className="hero-title">☀️ Smart Solar Panel Damage Detection</h1>
        <p className="hero-subtitle">
          Cloud + AI Powered Real-Time Detection
        </p>
        <div className="cta-buttons">
          <button className="upload-btn" onClick={() => navigate("/upload-csv")}>
            📂 Upload CSV Data
          </button>
          <button className="upload-btn" onClick={() => navigate("/upload-image")}>
            🖼 Upload Panel Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
