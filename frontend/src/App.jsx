import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProjectPage from "./pages/ProjectPage";
import IssuePage from "./pages/IssuePage";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/issue" element={<IssuePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;