import React from "react";
import "./App.css";

// import { useRef, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./screens/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
