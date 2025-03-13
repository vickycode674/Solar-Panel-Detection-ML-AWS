import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto"; // Required for Chart.js v3+
import "../styles/Result.css"; // Import CSS

const ResultsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://0fda44r90f.execute-api.ap-south-1.amazonaws.com/prod/solar-data")
      .then((response) => response.json()) // Convert response to JSON
      .then((jsonData) => {
        const parsedData = JSON.parse(jsonData.body); // Convert `body` string to JSON array
        setData(parsedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log("Here is the data:", data);

  // ✅ Return Loader if Data is Not Fetched Yet
  if (loading) return <h2 className="loading">Loading data...</h2>;

  // ✅ Process data for charts
  const panelStatusCounts = data.reduce((acc, panel) => {
    acc[panel.Predicted_Status] = (acc[panel.Predicted_Status] || 0) + 1;
    return acc;
  }, {});

  const barChartData = {
    labels: Object.keys(panelStatusCounts),
    datasets: [
      {
        label: "Panel Status Count",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        data: Object.values(panelStatusCounts),
      },
    ],
  };

  const pieChartData = {
    labels: Object.keys(panelStatusCounts),
    datasets: [
      {
        data: Object.values(panelStatusCounts),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="results-container">
      <h2>Solar Panel Data Analysis</h2>

      <div className="charts">
        <div className="chart">
          <h3>Bar Chart</h3>
          <Bar data={barChartData} />
        </div>
        <div className="chart">
          <h3>Pie Chart</h3>
          <Pie data={pieChartData} />
        </div>
      </div>

      <h3>Panel Status Table</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Panel ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((panel) => (
              <tr key={panel.solar_panel_id}>
                <td>{panel.solar_panel_id}</td>
                <td className={panel.Predicted_Status.toLowerCase()}>{panel.Predicted_Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsPage;
