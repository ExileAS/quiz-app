import "./App.css";
import LandingPage from "./app/LandingPage";
import NavBar from "./app/Navbar";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<RequireAuth />} />
      </Routes>
    </div>
  );
}

export default App;
