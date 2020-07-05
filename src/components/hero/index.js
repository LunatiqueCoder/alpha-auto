import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './style.css';


class SimpleSlider extends Component {
  render() {
    return (
      <section id="hero" className="hero hero-static-image">
          <div className="container">
            <div className="row hero-container large-screen-only">
                <div className="col col-lg-9 col-md-7 slide-caption large-screen-only">
                  <div className="slide-title large-screen-only">
                    <h1 className="h1-heading">Alpha Auto</h1>
                    <h3>Indiferent de călătorie, mașina ta a fost mereu alături de tine.</h3>
                    <h3>Respect-o și pregătește-o pentru noi aventuri la <span className="hashtag-alpha-auto">#AlphaAuto</span></h3>
                  </div>
                </div>
                <div className="col col-lg-12 col-md-12">
                  <div className="desktop-buttons-container">
                    <div className="large-screen-only desktop-button btns">
                      <AnchorLink offset='27' href='#contact'>
                        <button type="button" className="btn btn-primary btn-lg contact-btn">Contact</button>
                      </AnchorLink>
                    </div>
                    <div className="large-screen-only desktop-button btns">
                      <AnchorLink offset='27' href='#appointment'>
                        <button type="button" className="btn btn-outline-primary btn-lg programari-btn">Programări</button>
                      </AnchorLink>
                    </div>
                  </div>
                </div>
              </div>

            <div className="row hero-container mobile-only">
              <div className="col col-lg-9 col-md-7 slide-caption mobile-only">
                <div className="slide-title mobile-only">
                  <h5 className="header-first-half">Indiferent de călătorie, mașina ta a fost mereu alături de tine.</h5>
                  <h5>Respect-o și pregătește-o pentru noi aventuri la <span className="hashtag-alpha-auto">#AlphaAuto</span></h5>
                </div>
                <div className="mobile-buttons-container">
                  <div className="mobile-only localisation-button">
                    <AnchorLink offset='20' href='#contact'>
                      <button type="button" className="btn btn-primary btn-lg contact-btn">Contact</button>
                    </AnchorLink>
                  </div>
                  <div className="mobile-only call-now-button">
                    <AnchorLink offset='10' href='#appointment'>
                      <button type="button" className="btn btn-primary btn-lg programari-btn">Programări</button>
                    </AnchorLink>
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
