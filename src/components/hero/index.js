import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './style.css';


class SimpleSlider extends Component {
  render() {
    return (
      <section id="hero" className="hero hero-static-image">
          <div className="container">
              <div className="row">
                  <div className="col col-lg-6 col-md-7 slide-caption">
                    <div className="slide-title">
                        <h2>Nu contează ce este în spatele tău!</h2>
                    </div>
                    <div className="slide-subtitle">
                        <h3 className="quote-by">- Enzo Ferrari</h3>
                    </div>
                    <div className="large-screen-only btns">
                      <AnchorLink offset='27' href='#contact' className="theme-btn-s2">Contactează-ne</AnchorLink>
                    </div>
                    <div className="mobile-buttons-container">
                      <div className="mobile-only localisation-button">
                        <AnchorLink offset='110' href='#pre-map' className="theme-btn-s2">Contact</AnchorLink>
                      </div>
                      <div className="mobile-only call-now-button">
                        <a href="tel:+40722 968 318" className="theme-btn-s2">Programări</a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

export default SimpleSlider;
