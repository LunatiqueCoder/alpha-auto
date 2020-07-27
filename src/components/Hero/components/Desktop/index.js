import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeroDesktop = () => {
  return (
    <div className="row hero-container large-screen-only">
      <div className="col col-lg-9 col-md-7 slide-caption large-screen-only">
        <div className="slide-title large-screen-only">
          <h1 className="h1-heading">Alpha Auto</h1>
          <h3>
            Indiferent de călătorie, mașina ta a fost mereu alături de tine.
          </h3>
          <h3>
            Respect-o și pregătește-o pentru noi aventuri la{" "}
            <span className="hashtag-alpha-auto">#AlphaAuto</span>
          </h3>
        </div>
      </div>
      <div className="col col-lg-12 col-md-12">
        <div className="desktop-buttons-container">
          <div className="large-screen-only desktop-button btns">
            <AnchorLink offset="27" href="#contact">
              <button
                type="button"
                className="btn btn-primary btn-lg contact-btn"
              >
                Contact
              </button>
            </AnchorLink>
          </div>
          <div className="large-screen-only desktop-button btns">
            <AnchorLink offset="27" href="#appointment">
              <button
                type="button"
                className="btn btn-light btn-lg programari-btn"
              >
                Programări
              </button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesktop;
