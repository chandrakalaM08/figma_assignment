import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <h1>Figma App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
