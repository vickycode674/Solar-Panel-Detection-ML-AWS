import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Our Project</h1>

        <section className="section">
          <h2>🌞 Vision</h2>
          <p>
            Our project aims to intelligently monitor and detect solar panel
            degradation and damage using Machine Learning models deployed on
            the cloud. We aim to minimize energy loss, reduce manual
            inspection, and ensure optimal energy generation.
          </p>
        </section>

        <section className="section">
          <h2>Team member 1:👨‍💻 Lead Developer</h2>
          <p>
            <strong>Chengalapattu Vivek Sai</strong><br />
            Final Year CSE | SRM IST Ramapuram<br />
            IIT PALS Student Leader<br />
            Passionate about Cloud ☁️ + AI 🤖 + Real-world Innovation 🌍
          </p>
        </section>

        <section className="section">
          <h2>Team Member 2: 👨‍💻Developer</h2>
          <p>
            <strong>Jayakumar</strong><br />
            Final Year CSE | SRM IST Ramapuram<br />
            Passionate about Cloud ☁️ + AI 🤖 + Real-world Innovation 🌍
          </p>
        </section>

        <section className="section">
          <h2>Team member 3:👨‍💻 Developer</h2>
          <p>
            <strong>Aditya</strong><br />
            Final Year CSE | SRM IST Ramapuram<br />
            Passionate about Cloud ☁️ + AI 🤖 + Real-world Innovation 🌍
          </p>
        </section>

        <section className="section">
          <h2>🚀 Features</h2>
          <ul>
            <li>📂 Upload and analyze CSV-based sensor data</li>
            <li>🖼 Upload images for ML-powered damage detection</li>
            <li>☁️ AWS-integrated: S3, Lambda, SageMaker</li>
            <li>📈 Visual analytics for panel health</li>
            <li>🔐 Secure and scalable cloud architecture</li>
          </ul>
        </section>

        <section className="section">
          <h2>🧰 Tech Stack</h2>
          <p>
            <strong>Frontend:</strong> React.js, TailwindCSS (optionally)<br />
            <strong>Backend:</strong> AWS Lambda, Python Flask<br />
            <strong>ML:</strong> Scikit-learn, Amazon SageMaker<br />
            <strong>Storage:</strong> Amazon S3<br />
            <strong>Deployment:</strong> Vercel, GitHub
          </p>
        </section>

        <section className="section">
          <h2>🔭 What's Next?</h2>
          <ul>
            <li>🚁 Drone image input support</li>
            <li>🔔 Real-time notifications</li>
            <li>📱 Mobile app integration</li>
            <li>🛰 Satellite panel diagnostics (R&D)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
