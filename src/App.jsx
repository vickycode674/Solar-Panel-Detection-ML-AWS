import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import UploadCSV from "./components/UploadCsv";
import ResultsPage from "./components/ResultPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload-csv" element={<UploadCSV />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
}

export default App;
