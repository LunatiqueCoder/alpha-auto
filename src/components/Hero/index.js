import React from "react";
import HeroDesktop from './components/Desktop';
import HeroMobile from './components/Mobile';

import './style.css';

const Hero = () => {
  return (
    <section id="hero" className="hero hero-static-image">
      <div className="background-image">
        <div className="container">
          <HeroDesktop />
          <HeroMobile />
        </div>
      </div>
    </section>
  );
}

export default Hero;