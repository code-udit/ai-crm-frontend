import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setInteraction } from "../redux/interactionSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Form() {
  const data = useSelector((state) => state.interaction.data) || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  };

  const labelStyle = {
    fontWeight: "600",
    marginBottom: "6px",
    display: "block",
    fontSize: "14px",
  };

  const handleChange = (field, value) => {
    dispatch(setInteraction({ ...data, [field]: value }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    console.log("SUBMIT CALLED");

    try {
      const res = await axios.post(`${API_URL}/interactions`, data);
      toast.success("Saved successfully! ID: " + res.data.id);
      dispatch(setInteraction({}));
    } catch (err) {
      console.error(err);
      toast.error("Save failed");
    }
  };

  const handleClear = () => {
    dispatch(setInteraction({}));
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#f4f6f9",
        minHeight: "100vh",
        fontFamily: "Segoe UI, Arial",
      }}
    >
      <h2 style={{ marginBottom: "6px", fontWeight: "600" }}>
        📋 Log HCP Interaction
      </h2>

      <p
        style={{
          marginBottom: "20px",
          color: "#6c757d",
          fontSize: "14px",
          maxWidth: "600px",
          lineHeight: "1.5",
        }}
      >
        A system that uses AI to convert natural language into structured
        healthcare interaction data for efficient tracking and management.
      </p>

      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <label style={labelStyle}>HCP Name</label>
        <input
          style={inputStyle}
          value={data.hcp_name || ""}
          onChange={(e) => handleChange("hcp_name", e.target.value)}
        />

        <label style={labelStyle}>Interaction Type</label>
        <input
          style={inputStyle}
          value={data.interaction_type || ""}
          onChange={(e) => handleChange("interaction_type", e.target.value)}
        />

        <label style={labelStyle}>Date</label>
        <input
          type="date"
          style={inputStyle}
          value={data.date || ""}
          onChange={(e) => handleChange("date", e.target.value)}
        />

        <label style={labelStyle}>Topics Discussed</label>
        <textarea
          style={inputStyle}
          value={data.topics_discussed || ""}
          onChange={(e) => handleChange("topics_discussed", e.target.value)}
        />

        <label style={labelStyle}>Sentiment</label>
        <input
          style={inputStyle}
          value={data.sentiment || ""}
          onChange={(e) => handleChange("sentiment", e.target.value)}
        />

        <label style={labelStyle}>Outcomes</label>
        <textarea
          style={inputStyle}
          value={data.outcomes || ""}
          onChange={(e) => handleChange("outcomes", e.target.value)}
        />

        <label style={labelStyle}>Follow-up Actions</label>
        <textarea
          style={inputStyle}
          value={data.follow_up_actions || ""}
          onChange={(e) => handleChange("follow_up_actions", e.target.value)}
        />

        {data.follow_up_suggestions && (
          <div
            style={{
              marginTop: "10px",
              padding: "12px",
              background: "#f8f9fa",
              borderRadius: "10px",
              border: "1px solid #e0e0e0",
            }}
          >
            <label style={labelStyle}>AI Suggested Follow-ups</label>
            <textarea
              style={{
                ...inputStyle,
                background: "#f1f3f5",
              }}
              value={data.follow_up_suggestions}
              readOnly
            />
          </div>
        )}

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              flex: "1 1 100%",
              padding: "12px",
              background: "linear-gradient(90deg, #007bff, #0056b3)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            🚀 Submit
          </button>

          <button
            onClick={handleClear}
            style={{
              flex: "1 1 48%",
              padding: "12px",
              background: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            🧹 Clear
          </button>

          <button
            onClick={() => navigate("/interactions")}
            style={{
              flex: "1 1 48%",
              padding: "12px",
              background: "#198754",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            📂 View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
