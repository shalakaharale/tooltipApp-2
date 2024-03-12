import { useState } from "react";
import "./App.css";
import Tooltip from "./Tooltip";

function App() {
  const [position, setPosition] = useState("");
  const handleChange = (e) => {
    setPosition(e.target.value);
  };
  console.log("position", position);
  return (
    <>
      <div className="dropdown">
        <select name="position" onChange={(e) => handleChange(e)}>
          <option value="right">Right</option>
          <option value="left">Left</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>
      <div className="App">
        <Tooltip position={position}>
          <button>Hover over me</button>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
