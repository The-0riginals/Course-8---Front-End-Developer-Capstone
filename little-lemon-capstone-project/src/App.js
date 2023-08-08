import React from "react";
import Navbar from "./components/Navbar-header/Navbar";
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav> */}
    </Router>
  );
}

export default App;