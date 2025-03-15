import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse"; // For CSV generation
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import "../styles/ManulaEntry.css"; // Custom styles

const ManualEntry = () => {
  const [formData, setFormData] = useState({
    Panel_ID: "",
    Temperature: "",
    Voltage: "",
    Current: "",
    Irradiance: "",
  });

  const [panelData, setPanelData] = useState([]); // Stores all entries
  const navigate = useNavigate(); // For redirection

  // AWS S3 Client Configuration
  const s3Client = new S3Client({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add data to panelData array
  const handleAdd = () => {
    if (!formData.Panel_ID || !formData.Temperature || !formData.Voltage || !formData.Current || !formData.Irradiance) {
      alert("Please fill in all fields!");
      return;
    }

    setPanelData([...panelData, formData]); // Add new entry
    setFormData({ Panel_ID: "", Temperature: "", Voltage: "", Current: "", Irradiance: "" }); // Reset form
  };

  // Convert Data to CSV and Upload to S3
  const handleSubmit = async () => {
    if (panelData.length === 0) {
      alert("No data to upload!");
      return;
    }

    // Convert JSON to CSV
    const csv = Papa.unparse(panelData);
    const blob = new Blob([csv], { type: "text/csv" });
    const fileName = `manual_panel_data_${Date.now()}.csv`;

    try {
      const fileBuffer = await blob.arrayBuffer(); // Convert Blob to ArrayBuffer

      const params = {
        Bucket: "solar-panel-csv-data",
        Key: `uploads/${fileName}`,
        Body: fileBuffer,
        ContentType: "text/csv",
      };

      await s3Client.send(new PutObjectCommand(params));

      alert("✅ Data successfully uploaded to S3!");

      // Redirect to result page after successful upload
      navigate("/image-results");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("❌ File upload failed.");
    }
  };

  return (
    <div className="manual-entry-container">
      <h2>Manually Add Panel Data</h2>
      <div className="form-table-wrapper">
        {/* Left Side - Form */}
        <div className="form-container">
          <div className="form-group">
            <label>Panel ID:</label>
            <input type="text" name="Panel_ID" value={formData.Panel_ID} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Temperature (°C):</label>
            <input type="number" name="Temperature" value={formData.Temperature} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Voltage (V):</label>
            <input type="number" name="Voltage" value={formData.Voltage} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Current (A):</label>
            <input type="number" name="Current" value={formData.Current} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Irradiance (W/m²):</label>
            <input type="number" name="Irradiance" value={formData.Irradiance} onChange={handleChange} required />
          </div>

          <button onClick={handleAdd}>➕ Add Data</button>
          <button onClick={handleSubmit} disabled={panelData.length === 0}>📤 Upload Data</button>
        </div>

        {/* Right Side - Table */}
        {panelData.length > 0 && (
          <div className="table-container">
            <h3>Data Preview</h3>
            <table>
              <thead>
                <tr>
                  <th>Panel_ID</th>
                  <th>Temperature (°C)</th>
                  <th>Voltage (V)</th>
                  <th>Current (A)</th>
                  <th>Irradiance (W/m²)</th>
                </tr>
              </thead>
              <tbody>
                {panelData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Panel_ID}</td>
                    <td>{item.Temperature}</td>
                    <td>{item.Voltage}</td>
                    <td>{item.Current}</td>
                    <td>{item.Irradiance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManualEntry;