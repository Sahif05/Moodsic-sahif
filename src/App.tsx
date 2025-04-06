import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import NextPage from "./pages/NextPage";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<NextPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
