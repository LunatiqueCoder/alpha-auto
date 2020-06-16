import React, { Component } from "react";
import {Link} from 'react-router-dom';
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
                          <h2>We Ensure Your Safe<span>& Happy Journey</span></h2>
                      </div>
                      <div className="slide-subtitle">
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered </p>
                      </div>
                      <div className="btns">
                        <AnchorLink offset='27' href='#contact' className="theme-btn-s2">Contactează-ne</AnchorLink>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

export default SimpleSlider;
