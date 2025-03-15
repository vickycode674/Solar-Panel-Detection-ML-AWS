import React, { useState } from "react";
import "../styles/SolarPanelViewer.css";
// Import images from assets
import solar1 from "../assets/Clean.jpeg";
import solar2 from "../assets/damaged2.webp";
import solar3 from "../assets/degraded.jpg";
import solar4 from "../assets/Dust.jpg";

// JSON Data with Local Images
const solarPanels = [
  { id: "SP-001", imageUrl: solar1, status: "Good" },
  { id: "SP-002", imageUrl: solar2, status: "Bad" },
  { id: "SP-003", imageUrl: solar3, status: "Degraded" },
  { id: "SP-004", imageUrl: solar4, status: "Bad" },
];

const SolarPanelViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPanel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % solarPanels.length);
  };

  const prevPanel = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? solarPanels.length - 1 : prevIndex - 1
    );
  };

  const { id, imageUrl, status } = solarPanels[currentIndex];

  return (
    <div className="main-page">
    <div className="solar-container">
      <h1 className="solar-title">Solar Panel Monitoring</h1>

      <div className="solar-image-wrapper">
        {/* Left Arrow */}
        <button className="solar-arrow solar-left-arrow" onClick={prevPanel}>
          ⬅️
        </button>

        {/* Solar Panel Image */}
        <img src={imageUrl} alt={`Solar Panel ${id}`} className="solar-panel-image" />

        {/* Right Arrow */}
        <button className="solar-arrow solar-right-arrow" onClick={nextPanel}>
          ➡️
        </button>
      </div>

      {/* Panel Details */}
      <div className="solar-panel-info">
        <p className="solar-panel-id">Panel ID: {id}</p>
        <p className={`solar-panel-status ${status.toLowerCase()}`}>Status: {status}</p>
      </div>
    </div>
   </div>
  );
};

export default SolarPanelViewer;
