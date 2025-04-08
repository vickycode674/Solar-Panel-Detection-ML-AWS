import React, { useState } from "react";
import Modal from "react-modal";

// Importing BTS images
import apiGateway from "../assets/bts/apiGatewat.png";
import awsLambda from "../assets/bts/awsLambda.png";
import awsS3 from "../assets/bts/awsS3.png";
import bts1 from "../assets/bts/bts1.png";
import dynamoDb from "../assets/bts/dynamoDb.png";
import IAM from "../assets/bts/IAM.png";
import sageMaker from "../assets/bts/sageMaker.png";

const images = [
  { src: apiGateway, caption: "Late-night debugging squad 💻☕" },
  { src: awsLambda, caption: "That one mystery bug 😵" },
  { src: awsS3, caption: "S3 bucket overflow panic 😬📦" },
  { src: dynamoDb, caption: "Trying to explain NoSQL like 😅📊" },
  { src: IAM, caption: "When permissions finally work 🔐🙌" },
  { src: sageMaker, caption: "Training the model... again and again 🤯🤖" },
  { src: bts1, caption: "Legendary commit message: 'final_final_realfinal_v2.js' 💀" },
];

const BehindTheScenes = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const openModal = (img) => {
    setCurrentImg(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right,rgb(7, 53, 118),rgb(46, 19, 19))",
    color: "#fff",
    padding: "60px 20px",
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#00ffe7",
  };

  const subtitleStyle = {
    fontSize: "1.1rem",
    color: "#bbbbbb",
    marginBottom: "40px",
  };
  const galleryStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // more room
    gap: "24px",
    padding: "0 10px",
    maxWidth: "1200px",
    margin: "0 auto",
  };
  
  const cardStyle = {
    background: "#1c1c1e",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0, 255, 231, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };
  
  const imgStyle = {
    width: "100%",
    height: "180px", // bigger height for image
    objectFit: "cover",
    display: "block",
  };
  
  const captionStyle = {
    padding: "10px",
    fontSize: "0.95rem",
    color: "#dddddd",
  };

  const modalImgStyle = {
    maxWidth: "90vw",
    maxHeight: "80vh",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0, 255, 231, 0.5)",
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#1c1c1e",
      border: "none",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
    },
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🎬 Behind the Scenes</h1>
      <p style={subtitleStyle}>
        From coffee spills ☕ to hilarious bugs 🐛 – here’s how the magic really happened!
      </p>
      <div style={galleryStyle}>
        {images.map((img, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={() => openModal(img)}
          >
            <img src={img.src} alt={`bts-${index}`} style={imgStyle} />
            <div style={captionStyle}>{img.caption}</div>
          </div>
        ))}
      </div>
      {modalIsOpen && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle}>
          <img src={currentImg.src} alt="Preview" style={modalImgStyle} />
          <p style={{ color: "#00ffe7", marginTop: "10px" }}>{currentImg.caption}</p>
          <button onClick={closeModal} style={{ marginTop: "15px", padding: "8px 16px", background: "#00ffe7", border: "none", borderRadius: "5px", color: "#000", cursor: "pointer" }}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default BehindTheScenes;