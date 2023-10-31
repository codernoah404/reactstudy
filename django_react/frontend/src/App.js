import React from "react";
import "./App.css";

// import { useRef, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./screens/Main";
import RoomDetail from "./screens/RoomDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/:roomId" element={<RoomDetail />} />
        <Route exact path="/" element={<Main />} />

        {/* <Route exact path="/" element={<Main />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
