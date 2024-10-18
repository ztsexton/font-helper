import { useState } from "react";
import "./FontHelper.css";

function FontHelper() {
  const [input, setInput] = useState("");
  return (
    <div className="font-helper-container">
      <div className="input-container">
        <label htmlFor="text-input" className="input-label">
          Enter Text
        </label>
        <input
          id="text-input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something here..."
          className="text-input"
        />
      </div>

      <div className="output-container">
        <span className="output-label">Output:</span>
        <div className="output-box">{input}</div>
      </div>
    </div>
  );
}

export default FontHelper;
