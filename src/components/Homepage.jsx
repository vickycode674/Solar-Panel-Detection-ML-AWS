import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Solar Panel Checker</h1>
      <div className="options-container">
        <div className="option-box" onClick={() => navigate("/upload-csv")}>
          📂 Upload Data (CSV)
        </div>
        <div className="option-box disabled">
          🖼 Upload Image (Coming Soon)
        </div>
      </div>
    </div>
  );
};

export default HomePage;
