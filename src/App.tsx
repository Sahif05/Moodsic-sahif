import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import WelcomeNew from "./pages/WelcomeNew";
import WindowScr from "./pages/WindowScr";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<WelcomeNew />} />
          <Route path="/old" element={<WelcomePage />} />
          <Route path="/windowscr" element={<WindowScr />} />
          <Route path="/profile" element={<Navigate to="/windowscr" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
