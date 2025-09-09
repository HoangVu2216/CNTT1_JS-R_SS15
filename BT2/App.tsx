import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState<string>("#000000");
  const [submittedColor, setSubmittedColor] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedColor(color);
  };

  return (
    <div className="App">
      <h2>Color: {submittedColor}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Màu sắc
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
