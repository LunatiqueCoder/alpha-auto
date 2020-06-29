import React, { useState } from "react";
import ContactForm from "../CommentForm";
import "./style.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import AnchorLink from "react-anchor-link-smooth-scroll";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const Contactpage = () => {
  const center = {
    lat: 44.3353,
    lng: 23.83384,
  }

  return (
    <div id="contact" className="contact-page-area section-padding">
      <div className="col-12">
        <div className="section-title-s2 text-center">
          <span>Alpha Auto</span>
          <h2>Contactați-ne</h2>
        </div>
      </div>
      <div className="hx-contact-grid-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="hx-contact-gd-wrap phone-tile">
                <div className="hx-contact-gd-icon">
                  <i className="fi flaticon-call" />
                </div>
                <div className="hx-contact-gd-text">
                  <h4 className="no-margin">Telefon</h4>
                  <a href="tel:+40722 968 318">
                    <span className="phone-number">0722 968 318</span>
                  </a>
                  <br />
                  <a href="tel:+40746 132 939">
                    <span className="phone-number">0746 132 939</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-12">
              <AnchorLink offset="10" href="#appointment">
                <div className="hx-contact-gd-wrap">
                  <div className="hx-contact-gd-icon">
                    <i className="fi flaticon-message" />
                  </div>
                  <div className="hx-contact-gd-text">
                    <h4>Email</h4>
                    <span>contact@alpha-auto-craiova.ro</span>
                  </div>
                </div>
              </AnchorLink>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <AnchorLink offset="90" href="#map">
                <div className="hx-contact-gd-wrap">
                  <div className="hx-contact-gd-icon">
                    <i className="fi flaticon-placeholder" />
                  </div>
                  <div id="pre-map" className="hx-contact-gd-text">
                    <h4>Localizare</h4>
                    <span>Str. Teilor nr. 115</span>
                  </div>
                </div>
              </AnchorLink>
            </div>
          </div>
          <div className="row">
            <div className="col col-xs-12">
              <div className="contact-map">
                <LoadScript googleMapsApiKey="AIzaSyC5tinHO-IhtGkHdXMYUufLOa-5ICmgjE8">
                  <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={13}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="appointment" className="hx-contact-area-s2 section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="hx-contact-content">
                <h2>Programări online</h2>
                <div className="hx-contact-form">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
