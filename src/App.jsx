import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import UploadCSV from "./components/UploadCsv";
import ResultsPage from "./components/ResultPage";
import UploadImage from "./components/UploadImage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload-csv" element={<UploadCSV />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/upload-image" element={<UploadImage />} />
    </Routes>
  );
}

export default App;
