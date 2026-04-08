import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Chat from "./components/Chat";
import AllInteractions from "./components/AllInteractions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* HEADER */
function Header() {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        background: "rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        fontWeight: "600",
      }}
    >
      <div>AI CRM</div>
      <div style={{ fontSize: "13px", opacity: 0.8 }}>
        Devloped BY Udit U Gunagi
      </div>
    </div>
  );
}

/*FOOTER */
function Footer() {
  return (
    <div
      style={{
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.05)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        color: "#aaa",
        fontSize: "12px",
      }}
    >
      © 2026 AI CRM • Built by Udit
    </div>
  );
}

/*MAIN HOME */
function Home() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <Form />
      </div>

      {/* RIGHT */}
      <div
        style={{
          width: "360px",
          flexShrink: 0,
          borderLeft: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Chat />
      </div>
    </div>
  );
}

/* APP */
function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interactions" element={<AllInteractions />} />
        </Routes>

        <Footer />

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;