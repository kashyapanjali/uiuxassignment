/** @format */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./component/Auth";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route for Login/Signup */}
        <Route path="/" element={<Auth />} />

        {/* Protected Route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
