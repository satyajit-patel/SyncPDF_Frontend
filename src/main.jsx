import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import AdminPage from "./pages/AdminPage";
import ViewerPage from "./pages/ViewerPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/viewer" element={<ViewerPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
