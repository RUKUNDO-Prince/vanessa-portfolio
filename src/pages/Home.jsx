import React from "react";
import {
  About,
  Clients,
  Contact,
  Hero,
  Projects,
  Services,
  Skills,
  Gallery,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Gallery />
      <Clients />
      <Contact />
    </div>
  );
};

export default Home;
