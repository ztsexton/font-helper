import "./App.css";
import FontHelper from "./FontHelper";

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <header>
          <h1>Font Helper</h1>
          <p className="subtitle">Easily distinguish between I, l, and 1</p>
        </header>

        <div className="card">
          <FontHelper />
        </div>

        <footer>
          <a href="https://github.com/ztsexton/font-helper" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
