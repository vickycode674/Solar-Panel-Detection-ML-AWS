import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/styles.css"; // Import global styles

// ✅ Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
