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
        padding: "20px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        color: "#fff",
      }}
    >
      {/* TOP SECTION */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        <h2 style={{ marginBottom: "15px", fontWeight: "600" }}>
          🤖 AI Assistant
        </h2>

        {/* SAMPLE BUTTON */}
        <button
          onClick={() => setShowSamples(!showSamples)}
          style={{
            padding: "8px 14px",
            marginBottom: "12px",
            background: "linear-gradient(90deg, #6366f1, #4f46e5)", // ✅ updated
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

        {/* DROPDOWN */}
        {showSamples && (
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              marginBottom: "12px",
              maxHeight: "220px",
              overflowY: "auto",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            {sampleChats.map((chat, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  borderRadius: "6px",
                  marginBottom: "6px",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ flex: 1, fontSize: "13px", color: "#fff" }}>
                  {chat}
                </span>

                <button
                  onClick={() => handleCopy(chat)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px 8px",
                    fontSize: "12px",
                    cursor: "pointer",
                    borderRadius: "6px",
                    border: "none",
                    background: "rgba(255,255,255,0.2)",
                    color: "#fff",
                  }}
                >
                  📋
                </button>
              </div>
            ))}
          </div>
        )}

        {/* INFO BOX */}
        <div
          style={{
            background: "rgba(255,255,255,0.1)", //
            color: "#fff",
            padding: "12px",
            borderRadius: "10px",
            fontSize: "13px",
            marginBottom: "10px",
            border: "1px solid rgba(255,255,255,0.1)", //
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            backdropFilter: "blur(10px)",
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
            height: "90px",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.2)", //
            fontSize: "14px",
            outline: "none",
            background: "rgba(255,255,255,0.1)", //
            color: "#fff",
          }}
        />

        <button
          onClick={handleSend}
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "12px",
            background: "linear-gradient(90deg, #6366f1, #4f46e5)", //
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
