import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyWebsites from "./pages/MyWebsites";
import AddWebsite from "./pages/AddWebsite";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<MyWebsites />} />
          <Route path="/add-website" element={<AddWebsite />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
