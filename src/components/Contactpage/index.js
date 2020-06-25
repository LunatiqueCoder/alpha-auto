import React, { useState } from "react";
import ContactForm from "../CommentForm";
import "./style.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import AnchorLink from 'react-anchor-link-smooth-scroll';


const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const Contactpage = () => {
  const [instance, setInstance] = React.useState(null);

  // Strada Teilor 115, Craiova
  const [center, setCenter] = useState({
    lat: 44.3353,
    lng: 23.83384,
  });

  const onLoad = React.useCallback(
    function onLoad(map) {
      console.log("instance: ", map.getCenter());
      setInstance(map);
    },
    [setInstance]
  );

  const onCenterChanged = React.useCallback(
    function onCenterChanged() {
      console.log("INSTANCE:", instance);

      if (instance) {
        const newCenter = instance.getCenter();
        console.log(newCenter);
        const lat = newCenter.lat();
        const lng = newCenter.lng();
        console.log("lat: ", lat);
        console.log("lng: ", lng);
      }
    },
    [instance]
  );

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
              <a href="tel:+40722 968 318">
                <div className="hx-contact-gd-wrap">
                  <div className="hx-contact-gd-icon">
                    <i className="fi flaticon-call" />
                  </div>
                  <div className="hx-contact-gd-text">
                    <h4>Telefon</h4>
                    <span>0722 968 318</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-12">
              <AnchorLink offset='75' href='#appointment'>
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
              <AnchorLink offset='110' href='#map'>
                <div className="hx-contact-gd-wrap">
                  <div className="hx-contact-gd-icon">
                    <i className="fi flaticon-placeholder" />
                  </div>
                  <div id="pre-map" className="hx-contact-gd-text">
                    <h4>Localizare</h4>
                    <span>Str. Teilor 115, Craiova</span>
                  </div>
                </div>
              </AnchorLink>
            </div>
          </div>
          <div className="row">
            <div className="col col-xs-12">
              <div className="contact-map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                  allowfullscreen
                ></iframe> */}
                <LoadScript googleMapsApiKey="AIzaSyC5tinHO-IhtGkHdXMYUufLOa-5ICmgjE8">
                  <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={18}
                    onLoad={onLoad}
                    // onUnmount={onUnmount}
                    onCenterChanged={onCenterChanged}
                  >
                    <Marker position={center} />
                    <></>
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
