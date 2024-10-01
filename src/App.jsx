import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, ProjectsPage } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
};

export default App;
