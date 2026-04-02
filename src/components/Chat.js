import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setInteraction } from "../redux/interactionSlice";

function Chat() {
  const [message, setMessage] = useState("");
  const [showSamples, setShowSamples] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.interaction.data) || {};
  const API_URL = process.env.REACT_APP_API_URL;

  const sampleChats = [
    "Met Dr Sharma yesterday, discussed diabetes drug, he was interested",
    "Change sentiment to negative",
    "Doctor was very happy with the results",
    "Update date to 2026-04-01 and change topic to insulin therapy",
    "Suggest follow up actions",
    "Show interaction id 1",
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleSend = async () => {
    if (!message) return;

    try {
      const url = `${API_URL}/ai/agent`;

      const res = await axios.post(url, {
        message: message,
        data: data,
      });

      const newData = res.data.data || res.data;

      if (Object.keys(newData).length <= 2) {
        dispatch(setInteraction({ ...data, ...newData }));
      } else {
        dispatch(setInteraction(newData));
      }

      setMessage("");
    } catch (err) {
      console.error("Error:", err);
      alert("Backend error");
    }
  };

  return (
    <div
      style={{
        padding: "15px",
        height: "100%",
        minHeight: "100vh",
        background: "#f4f6f9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderLeft: "1px solid #ddd",
      }}
    >
      {/* TOP SECTION */}
      <div style={{ overflowY: "auto" }}>
        <h2 style={{ marginBottom: "15px", fontWeight: "600" }}>
          🤖 AI Assistant
        </h2>

        <button
          onClick={() => setShowSamples(!showSamples)}
          style={{
            padding: "8px 14px",
            marginBottom: "12px",
            background: "#343a40",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "500",
            width: "100%",
          }}
        >
          Sample Chats ▾
        </button>

        {showSamples && (
          <div
            style={{
              background: "#ffffff",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #e0e0e0",
              marginBottom: "12px",
              maxHeight: "180px",
              overflowY: "auto",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            {sampleChats.map((chat, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column", // ✅ mobile fix
                  gap: "6px",
                  padding: "8px",
                  borderRadius: "6px",
                  marginBottom: "6px",
                  background: "#f8f9fa",
                }}
              >
                <span style={{ fontSize: "13px" }}>{chat}</span>

                <button
                  onClick={() => handleCopy(chat)}
                  style={{
                    alignSelf: "flex-end",
                    padding: "5px 8px",
                    fontSize: "12px",
                    cursor: "pointer",
                    borderRadius: "6px",
                    border: "none",
                    background: "#dee2e6",
                  }}
                >
                  📋 Copy
                </button>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            background: "#ffffff",
            padding: "12px",
            borderRadius: "10px",
            fontSize: "13px",
            marginBottom: "10px",
            border: "1px solid #e0e0e0",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <b>Log interaction via chat</b>
          <br />
          Example: "Met Dr Sharma, discussed diabetes drug, positive response"
        </div>
      </div>

      {/* INPUT SECTION */}
      <div>
        <textarea
          placeholder="Type your interaction..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%",
            height: "80px",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "14px",
            outline: "none",
          }}
        />

        <button
          onClick={handleSend}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "12px",
            background: "linear-gradient(90deg, #007bff, #0056b3)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          🚀 Log Interaction
        </button>
      </div>
    </div>
  );
}

export default Chat;