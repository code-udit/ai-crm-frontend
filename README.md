🎨 AI CRM Frontend (React + Redux)

📌 Overview

This is the frontend for the AI-powered CRM system.
It provides a clean UI where users can log, edit, and manage healthcare interactions using natural language via an AI assistant.

---

🚀 Features

- ✅ Chat-based AI interaction input
- ✅ Auto-fill form using AI
- ✅ Manual form editing support
- ✅ Submit interaction to backend
- ✅ View all saved interactions
- ✅ Redux state management
- ✅ Clean responsive UI

---

🛠️ Tech Stack

- Frontend: React
- State Management: Redux Toolkit
- Routing: React Router
- HTTP Client: Axios
- Styling: Inline CSS

---

⚙️ Setup Instructions

1️⃣ Clone repository

git clone <your-repo-link>
cd ai-crm-frontend

2️⃣ Install dependencies

npm install

3️⃣ Start frontend

npm start

👉 App runs at:

http://localhost:3000

---

🔗 Backend Connection

Make sure backend is running at:

http://127.0.0.1:8000

---

🧠 Key Components

🔹 Chat Component

- Sends user input to backend AI
- Receives structured data
- Updates Redux store

---

🔹 Form Component

- Displays interaction data
- Supports manual editing
- Submit + Clear functionality
- Navigate to all interactions page

---

🔹 AllInteractions Page

- Fetches all saved interactions
- Displays in card/grid layout
- Includes ID, details, and navigation

---

🔄 Application Flow

1. User types message in chat
2. AI processes via backend
3. Redux updates form data
4. User edits (optional)
5. Submit → data saved in DB
6. View all interactions

---

🧪 Example Usage

🔹 Input (Chat)

Met Dr Sharma yesterday, discussed diabetes drug, he was interested

🔹 Result

- Form auto-filled
- User can edit manually
- Click Submit → saved with ID

---

📁 Folder Structure

src/
 ├── components/
 │    ├── Chat.js
 │    ├── Form.js
 │    ├── AllInteractions.js
 │
 ├── redux/
 │    └── interactionSlice.js
 │
 ├── App.js
 └── index.js

---

📌 Notes

- Backend must be running for AI features
- Redux handles shared state between Chat & Form
- React Router handles navigation

---

⭐ Future Improvements

- Add UI framework (Material UI / Tailwind)
- Add loading indicators
- Add validation & error handling
- Improve UI responsiveness
- Add authentication

---