import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './style.css';


class SimpleSlider extends Component {
  render() {
    return (
      <section id="hero" className="hero hero-static-image">
          <div className="container">
              <div className="row">
                  <div className="col col-lg-9 col-md-7 slide-caption large-screen-only">
                    <div className="slide-title">
                        <h3>Indiferent de calatorie, masina a fost mereu alaturi de tine.</h3>
                      <h3>Respect-o si pregateste-o pentru noi aventuri la <span className="hashtag-alpha-auto">#AlphaAuto</span></h3>
                    </div>
                  </div>
                <div className="col col-lg-12 col-md-12">
                  <div className="desktop-buttons-container">
                    <div className="large-screen-only desktop-button btns">
                      <AnchorLink offset='27' href='#contact' className="theme-btn-s2">Contactează-ne</AnchorLink>
                    </div>
                    <div className="large-screen-only desktop-button btns">
                      <AnchorLink offset='27' href='#appointment' className="theme-btn-s2">Programări</AnchorLink>
                    </div>
                  </div>
                  <div className="mobile-buttons-container">
                    <div className="mobile-only localisation-button">
                      <AnchorLink offset='20' href='#contact' className="theme-btn-s2">Contact</AnchorLink>
                    </div>
                    <div className="mobile-only call-now-button">
                      <AnchorLink offset='10' href='#appointment' className="theme-btn-s2">Programări</AnchorLink>
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
