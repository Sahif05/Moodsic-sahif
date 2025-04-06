import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
