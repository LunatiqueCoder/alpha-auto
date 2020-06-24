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
                          <h2>Vă asigurăm o călătorie sigură și fericită!</h2>
                      </div>
                      <div className="slide-subtitle">
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered </p>
                      </div>
                      <div className="large-screen-only btns">
                        <AnchorLink offset='27' href='#contact' className="theme-btn-s2">Contactează-ne</AnchorLink>
                      </div>
                    <div className="row col-12">
                      <div className="mobile-only col-md-6">
                        <AnchorLink offset='110' href='#pre-map' className="theme-btn-s2">Localizare</AnchorLink>
                      </div>
                      <div className="mobile-only col-md-6">
                        <a href="tel:+40722 968 318" className="theme-btn-s2">Apelează-ne</a>
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
