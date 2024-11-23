import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";

const App = () => {
  const [resultText, setResultText] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setResultText={setResultText} />} />
        <Route path="/result" element={<Result resultText={resultText} />} />
      </Routes>
    </Router>
  );
};

export default App;
