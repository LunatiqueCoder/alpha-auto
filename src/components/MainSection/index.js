import React from 'react';
import { Hero, Navbar } from '@components';

import './style.css';

const MainSection = () => {
  return (
    <div className="main-section-container">
      <Navbar/>
      <Hero/>
    </div>
  )
};

export default MainSection;