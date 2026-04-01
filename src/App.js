import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Chat from "./components/Chat";
import AllInteractions from "./components/AllInteractions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Home page (your original layout)
function Home() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Segoe UI, Arial",
        background: "#eef1f5",
      }}
    >
      {/* LEFT FORM */}
      <div
        style={{
          width: "70%",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <Form />
      </div>

      {/* RIGHT CHAT */}
      <div
        style={{
          width: "30%",
          minWidth: "320px",
          borderLeft: "1px solid #ddd",
          boxShadow: "-2px 0 5px rgba(0,0,0,0.05)",
        }}
      >
        <Chat />
      </div>
    </div>
  );
}

// ✅ Router setup
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interactions" element={<AllInteractions />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
