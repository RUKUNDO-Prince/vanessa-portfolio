import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, ProjectsPage } from "./pages";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
