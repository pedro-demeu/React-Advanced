import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import SuspensePage from "./pages/SuspensePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" Component={() => <App />} />
        <Route path="/demo/suspense" Component={() => <SuspensePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
