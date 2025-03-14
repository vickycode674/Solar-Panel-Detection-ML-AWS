import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/styles.css"; // Import global styles
import Header from "./components/Header";

// ✅ Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Header />
    <App />
  </BrowserRouter>
);
