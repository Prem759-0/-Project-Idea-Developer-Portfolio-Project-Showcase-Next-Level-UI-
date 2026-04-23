import { useState } from "react";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">
      
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>⚡ SaaS</h2>
        <p onClick={() => setPage("dashboard")}>Dashboard</p>
        <p onClick={() => setPage("analytics")}>Analytics</p>
        <p onClick={() => setPage("profile")}>Profile</p>
      </div>

      {/* MAIN */}
      <div className="main">

        {page === "dashboard" && (
          <div>
            <h2>Dashboard</h2>
            <div className="card">Users: 1200</div>
            <div className="card">Revenue: $8450</div>
          </div>
        )}

        {page === "analytics" && (
          <div>
            <h2>Analytics</h2>
            <p>Chart coming here</p>
          </div>
        )}

        {page === "profile" && (
          <div>
            <h2>Profile</h2>
            <input placeholder="Name" />
            <input placeholder="Email" />
          </div>
        )}

      </div>

    </div>
  );
}
