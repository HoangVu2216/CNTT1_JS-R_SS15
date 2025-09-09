import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);      // giá trị slider
  const [submitted, setSubmitted] = useState(false); // check khi submit

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Tiến độ hoàn thành:{" "}
          {submitted ? `${progress} %` : "%"}
        </label>
        <br />
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
