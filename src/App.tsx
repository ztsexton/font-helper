import "./App.css";
import FontHelper from "./FontHelper";
import carlosHead from "/carlos-head.jpg";

function App() {
  return (
    <>
      <div className="app-container">
        {/* Fixed sidebar images */}
        <div className="sidebar left"></div>
        <div className="sidebar right"></div>

        <div className="content">
          <img id="carlos-head" src={carlosHead} alt="Carlos head" />
          <h1>Font Helper</h1>
          <div className="card">
            <FontHelper />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
