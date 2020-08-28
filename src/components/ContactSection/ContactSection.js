import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./style.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PlaceIcon from "@material-ui/icons/Place";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const Contactpage = () => {
  const center = {
    lat: 44.3353,
    lng: 23.83384,
  };

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
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="hx-contact-gd-wrap phone-tile">
                <a href="tel:+40722 968 318">
                  <div className="hx-contact-gd-icon">
                    <PhoneIcon style={{ color: "white", fontSize: 40 }} />
                  </div>
                </a>
                <div className="hx-contact-gd-text">
                  <h4 className="no-margin">Telefon</h4>
                  <a
                    className="hoverable-link phone-number"
                    href="tel:+40722 968 318"
                  >
                    0722 968 318
                  </a>
                  <br />
                  <a
                    className="hoverable-link phone-number"
                    href="tel:+40746 132 939"
                  >
                    0746 132 939
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <AnchorLink offset="10" href="#appointment">
                <div className="hx-contact-gd-wrap email-tile">
                  <div className="hx-contact-gd-icon">
                    <EmailIcon style={{ color: "white", fontSize: 40 }} />
                  </div>
                  <div className="hx-contact-gd-text">
                    <h4>Email</h4>
                    <span>contact@alpha-auto-craiova.ro</span>
                  </div>
                </div>
              </AnchorLink>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <AnchorLink offset="110" href="#map">
                <div className="hx-contact-gd-wrap localisation-tile">
                  <div className="hx-contact-gd-icon">
                    <PlaceIcon style={{ color: "white", fontSize: 40 }} />
                  </div>
                  <div id="pre-map" className="hx-contact-gd-text">
                    <h4>Localizare</h4>
                    <span>Str. Teilor nr. 115</span>
                    <br />
                    <span>
                      Luni - Vineri: 09<sup>00</sup>-18<sup>00</sup>
                    </span>
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
