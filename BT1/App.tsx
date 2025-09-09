import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedEmail(email);
  };

  return (
    <div className="App">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email..."
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Hiển thị kết quả sau khi submit */}
      {submittedEmail && (
        <div style={{ marginTop: "10px" }}>
          <pre>{JSON.stringify({ email: submittedEmail }, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
