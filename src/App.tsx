import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import WindowScr from "./pages/WindowScr";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <Routes>
          <Route path = "/" element={<WelcomePage />} />
          <Route path="/windowscr" element={<WindowScr />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
