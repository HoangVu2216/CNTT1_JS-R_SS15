import { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState<string>("");
  const [submittedDob, setSubmittedDob] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedDob(dob);
  };

  return (
    <div className="App">
      <h2>Ngày sinh: {submittedDob}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ngày sinh:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
