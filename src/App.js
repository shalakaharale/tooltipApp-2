import "./App.css";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip position="right">
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
}

export default App;
