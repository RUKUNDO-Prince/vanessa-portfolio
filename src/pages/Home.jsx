import React from "react";
import {
  About,
  Clients,
  Contact,
  Hero,
  Projects,
  Services,
  Skills,
  Gallery,  // Import the new Gallery component
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Gallery />  {/* Add Gallery section here */}
      <Clients />
      <Contact />
    </div>
  );
};

export default Home;
