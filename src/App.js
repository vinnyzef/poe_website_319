import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Creators from "./Creators";
import "./App.css";
import PoeNav from "./Nav";
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <Router>
        <PoeNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creators" element={<Creators/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
