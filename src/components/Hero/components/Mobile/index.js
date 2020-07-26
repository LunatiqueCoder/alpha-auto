import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeroMobile = () => {
  return (
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
  )
}

export default HeroMobile;