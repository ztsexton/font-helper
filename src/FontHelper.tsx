import { useState } from "react";
import "./FontHelper.css";

function FontHelper() {
  const [input, setInput] = useState("");
  const [fontFamily, setFontFamily] = useState("Consolas");
  
  const fonts = [
    "Consolas", 
    "Courier New", 
    "Source Code Pro", 
    "Fira Code", 
    "Menlo", 
    "Monaco", 
    "JetBrains Mono", 
    "IBM Plex Mono", 
    "Ubuntu Mono"
  ];

  return (
    <div className="font-helper-container">
      <div className="input-container">
        <label htmlFor="text-input" className="input-label">
          Enter Text
        </label>
        <input
          id="text-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something here to test (e.g. Il1O0)"
          className="text-input"
        />
      </div>
      
      <div className="font-selector-container">
        <label htmlFor="font-selector" className="input-label">
          Select Font
        </label>
        <select
          id="font-selector"
          className="font-selector"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      
      <p className="component-description">
        This tool helps you easily distinguish between similar-looking characters like:
        <br />
        capital I, lowercase l, and the number 1, or O and 0
      </p>
      
      <div className="output-container">
        <div className="output-header">
          <span className="output-label">Output:</span>
          <span className="font-label">{fontFamily}</span>
        </div>
        <div 
          className="output-box" 
          style={{ fontFamily: fontFamily }}
        >
          {input || "Sample text will appear here"}
        </div>
        
        <div className="sample-characters">
          <div className="character-set">
            <span className="char-label">I</span>
            <span className="char-label">l</span>
            <span className="char-label">1</span>
            <span className="char-spacer">|</span>
            <span className="char-label">O</span>
            <span className="char-label">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FontHelper;
