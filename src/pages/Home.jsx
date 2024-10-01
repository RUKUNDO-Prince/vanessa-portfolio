import React from "react";
import {
  About,
  Clients,
  Contact,
  Hero,
  Projects,
  Services,
  Skills,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Clients />
      <Contact />
    </div>
  );
};

export default Home;
