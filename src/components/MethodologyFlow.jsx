import React from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import "../styles/MethodologyFlow.css"; // Import the CSS file

const nodes = [
  { id: "1", data: { label: "User Enters Data" }, position: { x: 50, y: 250 } },
  { id: "2", data: { label: "Upload CSV to S3" }, position: { x: 250, y: 250 } },
  { id: "3", data: { label: "Trigger AWS Lambda" }, position: { x: 450, y: 250 } },
  { id: "4", data: { label: "Call SageMaker for Prediction" }, position: { x: 650, y: 250 } },
  { id: "5", data: { label: "Store in DynamoDB" }, position: { x: 850, y: 250 } },
  { id: "6", data: { label: "API Gateway Access" }, position: { x: 1050, y: 250 } },
  { id: "7", data: { label: "Frontend UI Display" }, position: { x: 1250, y: 250 } },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
  { id: "e5-6", source: "5", target: "6", animated: true },
  { id: "e6-7", source: "6", target: "7", animated: true },
];

const MethodologyFlow = () => {
  return (
    <div className="flow-container">
      <h2 className="title">AWS automated Machine Learning Pipeline Flow</h2>
      <ReactFlow nodes={nodes} edges={edges} fitView className="react-flow" >
        <Background variant="dots" gap={15} size={1} />
      </ReactFlow>
    </div>
  );
};

export default MethodologyFlow;
