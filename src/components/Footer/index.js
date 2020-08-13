import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "@images/logo-black.png";
import { Link } from "react-router-dom";

import "./style.css";

const FooterSection = () => {
  return (
    <div className="hx-site-footer-area">
      <div className="hx-site-footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 footer-t footer-info-section">
              <div className="hx-site-footer-text">
                <div className="hx-site-logo">
                  <img src={logo} alt="" />
                </div>
                <p>Alpha Auto, Craiova. Ne puteti gasii si pe Facebook.</p>
                <div className="social">
                  <ul className="d-flex">
                    <li>
                      <a href="https://www.facebook.com/alphaautocraiova/">
                        <i className="fa fa-facebook" aria-hidden="true" />
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12 footer-t">
              <div className="hx-site-footer-adress">
                <h3>Adresă</h3>
                <div className="adress-section">
                  <ul>
                    <li>str. Teilor, nr. 115</li>
                    <li>Bariera Vâlcii, Craiova</li>
                  </ul>
                  <ul className="ad">
                    <li>
                      <span>Telefon: </span>{" "}
                      <a href="tel:+40722 968 318">0722 968 318</a> |{" "}
                      <a href="tel:+40746 132 939">0746 132 939</a>
                    </li>
                    <li>
                      <span>Email: </span> contact@alpha-auto-craiova.ro
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 footer-t">
              <div className="hx-site-footer-service">
                <h3>Pagini</h3>
                <div className="service-section">
                  <ul>
                    <li className="active">
                      <AnchorLink href="#hero">Acasă</AnchorLink>
                    </li>
                    <li className="large-screen-only">
                      <AnchorLink offset="10" href="#services">
                        Servicii
                      </AnchorLink>
                    </li>
                    <li className="mobile-only">
                      <AnchorLink offset="50" href="#services-mobile">
                        Servicii
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink offset="10" href="#contact">
                        Contact
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink offset="0" href="#appointment">
                        Programări
                      </AnchorLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hx-site-footer-bottom">
        <div className="container">
          <div className="hx-site-footer-bottom-content">
            <div className="row">
              <div className="col-12 large-screen-only">
                <span>
                  Privacy Policy | © 2020 <Link to="/">Alpha Auto</Link> | v2.0
                </span>
              </div>
              <div className="col-12 mobile-only">
                <span>
                  Privacy Policy | © 2020 <Link to="/">Alpha Auto</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
