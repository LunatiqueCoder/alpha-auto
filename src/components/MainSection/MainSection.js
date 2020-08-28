import React from "react";
import Hero from "../Hero"
import Navbar from '../Navbar/'

import "./style.css";

const MainSection = () => {
  return (
    <div className="main-section-container">
      <Navbar />
      <Hero />
    </div>
  );
};

export default MainSection;
