import React, { useState } from "react";
import ContactForm from "../CommentForm";
import ct1 from "../../images/contact/img-1.png";
import "./style.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// const center = {
//   lat: 44.33497,
//   lng: 23.83385,
// };

const Contactpage = () => {
  const [map, setMap] = useState(null);

  const [center, setCenter] = useState({
    lat: 44.33497,
    lng: 23.83385,
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

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
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="hx-contact-gd-wrap">
                <div className="hx-contact-gd-icon">
                  <i className="fi flaticon-call"></i>
                </div>
                <div className="hx-contact-gd-text">
                  <h4>Telefon</h4>
                  <span>0722 968 318</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="hx-contact-gd-wrap">
                <div className="hx-contact-gd-icon">
                  <i className="fi flaticon-message"></i>
                </div>
                <div className="hx-contact-gd-text">
                  <h4>Email</h4>
                  <span>alphaauto20@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="hx-contact-gd-wrap">
                <div className="hx-contact-gd-icon">
                  <i className="fi flaticon-placeholder"></i>
                </div>
                <div className="hx-contact-gd-text">
                  <h4>Localizare</h4>
                  <span>Str. Teilor 115, Craiova</span>
                </div>
              </div>
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
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={200}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
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
      <div className="hx-contact-area-s2 section-padding">
        <div className="container">
          <div className="row">
            {
              // <div className="col-lg-5 col-md-12">
              //     <div className="hx-contact-img">
              //         <img src={ct1} alt=""/>
              //     </div>
              // </div>
            }
            <div className="col col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="hx-contact-content">
                <h2>Lăsați-ne un mesaj</h2>
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
