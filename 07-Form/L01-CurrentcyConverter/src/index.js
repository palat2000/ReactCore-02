import "./index.css";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Converter() {
  const [convert, setConvert] = useState("0");
  const convertToBath = (e) => {
    setConvert((+e.target.value * 35.15).toLocaleString());
  };
  return (
    <div className="container__con">
      <label htmlFor="dollar">Enter Dollar: </label>
      <input onChange={convertToBath} type="number" id="dollar" />
      <p>
        Convert to Bath: <span className="text-red">{convert}</span> Bath
      </p>
    </div>
  );
}

// React
function App() {
  return (
    <div className="container">
      <Converter />
    </div>
  );
}

// ReactDOM
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
