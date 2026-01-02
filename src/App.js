import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import PreviewPage from "./PreviewPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
