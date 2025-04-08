import React from "react";
import MethodologyFlow from "./MethodologyFlow"; // Your awesome flow component

const Methodology = () => {
  const containerStyle = {
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(to right, #1e1e2f, #2d2d44)",
    color: "#ffffff",
    padding: "60px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  const titleStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#00ffe7",
    textShadow: "0 0 4px #00ffe7",
    marginBottom: "20px",
    textAlign: "center",
    animation: "fadeIn 1.5s ease-in-out",
  };

  // const descriptionStyle = {
  //   fontSize: "1.2rem",
  //   color: "#dddddd",
  //   marginBottom: "40px",
  //   textAlign: "center",
  //   maxWidth: "800px",
  // };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}> Methodology</h1>
      {/* <p style={descriptionStyle}>
        This is how our AWS Machine Learning Pipeline works to detect and monitor solar panel degradation with intelligent automation!
      </p> */}
      <MethodologyFlow />
    </div>
  );
};

export default Methodology;
