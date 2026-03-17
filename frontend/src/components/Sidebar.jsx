import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        backgroundColor: "#fff",
        minHeight: "100vh",
        padding: "1rem",
        boxShadow: "2px 0 6px rgba(0,0,0,0.05)"
      }}
    >
      <h3>Menu</h3>

      <div style={{ marginTop: "1rem" }}>
        <Link to="/">Dashboard</Link>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Link to="/project">Projects</Link>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Link to="/issue">Issue</Link>
      </div>
    </div>
  );
}

export default Sidebar;