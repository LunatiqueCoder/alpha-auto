import React from "react";

import im1 from "../../../images/service-details/img-3.jpg";
import im2 from "../../../images/service-details/img-1.jpg";
import { Link } from "react-router-dom";
import "./style.css";

const ServicesSingle = (props) => {
  return (
    <div className="hx-service-dt-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="hx-service-dt-left">
              <div className="widget category-widget">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <Link to="/service-details">Engine Repair</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Tires Replacement</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Transmission</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Diagnostic</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Bateries Replacement</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Break Repair</Link>
                  </li>
                </ul>
              </div>
              <div className="hx-field-section">
                <div className="hx-field-img">
                  <img src={im1} alt="" />
                </div>
                <div className="hx-field-content">
                  <h3>
                    Get<span>25%</span>Off
                  </h3>
                  <h2>ALL ORDER</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="hx-service-dt-right">
              <div className="hx-service-dt-img">
                <img src={im2} alt="" />
              </div>
              <h3>Why the right engine oil is important</h3>
              <p>
                An important thing to know about car maintenance reminder
                systems, especially those that track vehicle-operating
                conditions, is that their accuracy depends on using engine oil
                that meets the automaker’s specifications. If you use a lesser
                product – for example, conventional oil in an engine that
                requires full synthetic oil – no way to know.
              </p>
              <p>
                Thus, the oil could break down, resulting in accelerated engine
                wear or even failure before the reminder system displays a
                service alert. Most vehicle manufacturers, however, say to
                change the oil every 12 months the reminder system has
              </p>
              <h3>How We Work</h3>
              <p>
                An important thing to know about car maintenance reminder
                systems, especially those that track vehicle-operating
                conditions, is that their accuracy depends.
              </p>
              <div className="service-style-1 service-details-what-we-do">
                <div className="row no-gutters">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-wrap">
                      <div className="service-icon">
                        <i className="fi flaticon-turbo"></i>
                      </div>
                      <div className="service-text">
                        <h2>Choose Your Service</h2>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4  col-sm-6">
                    <div className="service-wrap">
                      <div className="service-icon-2">
                        <i className="fi flaticon-tyre"></i>
                      </div>
                      <div className="service-text">
                        <h2>Make An Appointment</h2>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4  col-sm-6">
                    <div className="service-wrap">
                      <div className="service-icon-3">
                        <i className="fi flaticon-car-1"></i>
                      </div>
                      <div className="service-text">
                        <h2>Confrim Your Request</h2>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prv-nx">
              <div className="pre-btn">
                <Link to="/service-details">Previous</Link>
              </div>
              <div className="nex-btn">
                <Link to="/service-details">Next</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSingle;
