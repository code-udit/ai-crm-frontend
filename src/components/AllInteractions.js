import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllInteractions() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/interactions");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#eef1f5",
        minHeight: "100vh",
        fontFamily: "Segoe UI, Arial",
      }}
    >
      {/* ✅ BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "15px",
          padding: "8px 16px",
          background: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h2 style={{ marginBottom: "20px" }}>All Interactions</h2>

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
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {/* HEADER */}
            <div style={{ marginBottom: "10px" }}>
              <h3 style={{ margin: 0 }}>{item.hcp_name}</h3>
            </div>

            {/* DETAILS */}
            <p><b>ID:</b> {item.id}</p>
            <p><b>Type:</b> {item.interaction_type}</p>
            <p><b>Date:</b> {item.date}</p>
            <p><b>Sentiment:</b> {item.sentiment}</p>

            <p>
              <b>Topics:</b><br />
              {item.topics_discussed}
            </p>

            <p>
              <b>Outcomes:</b><br />
              {item.outcomes}
            </p>

            <p>
              <b>Follow-up:</b><br />
              {item.follow_up_actions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllInteractions;