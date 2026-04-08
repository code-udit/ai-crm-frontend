import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllInteractions() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;
  console.log("API_URL:", API_URL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/interactions`);
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [API_URL]);

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        fontFamily: "Segoe UI, Arial",
        background: "linear-gradient(135deg, #0f172a, #1e293b)", // ✅ dark theme
        color: "#fff",
      }}
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "20px",
          padding: "10px 18px",
          background: "linear-gradient(90deg, #6366f1, #4f46e5)", // ✅ premium button
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        ← Back
      </button>

      <h2 style={{ marginBottom: "20px", fontWeight: "600" }}>
        All Interactions
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              background: "rgba(255,255,255,0.08)", // ✅ glass effect
              padding: "20px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            {/* HEADER */}
            <div style={{ marginBottom: "10px" }}>
              <h3 style={{ margin: 0, color: "#fff" }}>
                {item.hcp_name}
              </h3>
            </div>

            {/* DETAILS */}
            <p><b>ID:</b> {item.id}</p>
            <p><b>Type:</b> {item.interaction_type}</p>
            <p><b>Date:</b> {item.date}</p>
            <p><b>Sentiment:</b> {item.sentiment}</p>

            <p>
              <b>Topics:</b>
              <br />
              {item.topics_discussed}
            </p>

            <p>
              <b>Outcomes:</b>
              <br />
              {item.outcomes}
            </p>

            <p>
              <b>Follow-up:</b>
              <br />
              {item.follow_up_actions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllInteractions;