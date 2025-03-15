import React, { useState } from "react";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { useNavigate } from "react-router-dom";
import "../styles/Upload.css"; // Import styles

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [panelId, setPanelId] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  // 🔹 Initialize AWS S3 Client
  const s3Client = new S3Client({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
  });

  // 🔹 Handle File Selection & Preview
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); // Generate preview URL
    }
  };

  // 📌 Upload Image + Metadata to S3
  const handleUpload = async () => {
    if (!file || !panelId.trim()) {
      alert("Please select an image and enter a valid Panel ID!");
      return;
    }

    setUploading(true);
    setMessage("Uploading... Please wait ⏳");

    try {
      // 🔹 Convert image file to buffer
      const fileBuffer = await file.arrayBuffer();

      // 🔹 Generate unique filename for S3
      const fileExtension = file.name.split(".").pop(); // Get file extension
      const imageKey = `uploads/${panelId}_image.${fileExtension}`; // Example: uploads/1234_image.jpg

      // 🔹 Upload Image to S3
      const imageParams = {
        Bucket: "solar-panel-image-data",
        Key: imageKey,
        Body: fileBuffer,
        ContentType: file.type,
        Metadata: { panelId: panelId }, // Store panel ID as metadata
      };

      await s3Client.send(new PutObjectCommand(imageParams));

      // 🔹 Upload Metadata JSON to S3
      const metadata = {
        panelId: panelId,
        imageUrl: `https://solar-panel-image-data.s3.amazonaws.com/${imageKey}`, // Public URL
        uploadedAt: new Date().toISOString(),
      };

      const metadataKey = `metadata/${panelId}.json`; // Example: metadata/1234.json

      const metadataParams = {
        Bucket: "solar-panel-image-data",
        Key: metadataKey,
        Body: JSON.stringify(metadata),
        ContentType: "application/json",
      };

      await s3Client.send(new PutObjectCommand(metadataParams));

      setMessage("✅ Upload successful!");
      
      // 🔹 Redirect after a short delay
      setTimeout(() => navigate("/results"), 2000);

    } catch (error) {
      console.error("❌ Upload Error:", error);
      setMessage("❌ Upload failed. Please try again.");
    }

    setUploading(false);
  };

  return (
    <div className="upload-container">
      <h2>Upload Solar Panel Image</h2>

      {/* 📌 Image Preview */}
      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Preview" />
        </div>
      )}

      {/* 📌 File Input */}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      
      {/* 📌 Panel ID Input */}
      <input
        type="text"
        placeholder="Enter Panel ID"
        value={panelId}
        onChange={(e) => setPanelId(e.target.value)}
      />

      {/* 📌 Upload Button */}
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload to S3"}
      </button>

      {/* 📌 Upload Status Message */}
      {message && <p className="upload-message">{message}</p>}

      {/* 📌 View Results Button */}
      <button onClick={() => navigate("/image-results")} className="view-results-btn">
        View Results
      </button>
    </div>
  );
};

export default UploadImage;
