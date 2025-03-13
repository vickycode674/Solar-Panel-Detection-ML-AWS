// You're facing issues because:

// aws-sdk is not meant for the frontend (it’s for Node.js).
// Environment variables (import.meta.env) don’t work directly inside AWS.config.update().
// dotenv doesn't work in a React frontend (it's for backend apps).
// AWS.config.update() should not be used in React. Use AWS SDK v3 instead.
import React, { useState } from "react";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { useNavigate } from "react-router-dom";
import "../styles/Upload.css"; // Import CSS


const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // For redirection after upload


  const s3Client = new S3Client({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
  });

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file first!");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      // Convert file into a Buffer (works in browsers)
      const fileBuffer = await file.arrayBuffer();

      const params = {
        Bucket: "solar-panel-csv-data",
        Key: `uploads/${file.name}`,
        Body: fileBuffer, // Fix: Use ArrayBuffer instead of ReadableStream
        ContentType: "text/csv",
      };

      await s3Client.send(new PutObjectCommand(params));

      setMessage("✅ File uploaded successfully to S3!");

       // ✅ Redirect to results page after upload
       setTimeout(() => {
        navigate("/results");
      }, 1500);

    } catch (error) {
      console.error("Upload Error:", error);
      setMessage("❌ File upload failed.");
    }

    setUploading(false);
  };

  return (
    <div className="upload-container">
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload to S3"}
      </button>
      {message && <p>{message}</p>}
      <button onClick={() => navigate("/results")} className="view-results-btn">
          View Results
        </button>
    </div>
  );
};

export default UploadCSV;

