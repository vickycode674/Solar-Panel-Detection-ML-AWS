import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import UploadCSV from "./components/UploadCsv";
import ResultsPage from "./components/ResultPage";
import UploadImage from "./components/UploadImage";
import ResultImagePage from "./components/ResultImagePage";
import ManualEntry from "./components/ManualEntry";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload-csv" element={<UploadCSV />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/image-results" element={<ResultImagePage />} />
      <Route path="/upload-image" element={<UploadImage />} />
      <Route path="/manual-entry" element={<ManualEntry />} />

    </Routes>
  );
}

export default App;
