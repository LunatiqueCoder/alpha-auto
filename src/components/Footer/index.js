import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './style.css'

const FooterSection = () => {
    return(
        <div className="hx-site-footer-area">
            <div className="hx-site-footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-t">
                            <div className="hx-site-footer-text">
                                <div className="hx-site-logo">
                                    <img src={logo} alt=""/>
                                </div>
                                <p>Alpha Auto, cel mai profesionist service din Bariera Vâlcii. Ne puteti gasii si pe Facebook.</p>
                                <div className="social">
                                    <ul className="d-flex">
                                      <li><a href="https://www.facebook.com/alphaautocraiova/"><i className="fa fa-facebook" aria-hidden="true" />Facebook</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 footer-t">
                            <div className="hx-site-footer-adress">
                                <h3>Adresă</h3>
                                <div className="adress-section">
                                    <ul>
                                        <li>str. Teilor 115</li>
                                        <li>Craiova</li>
                                    </ul>
                                    <ul className="ad">
                                        <li><span>Telefon: </span> 0722 968 318</li>
                                        <li><span>Email: </span> contact@alpha-auto-craiova.ro</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 footer-t">
                            <div className="hx-site-footer-service">
                                <h3>Pagini</h3>
                                <div className="service-section">
                                  <ul>
                                      <li className="active">
                                        <AnchorLink href='#hero'>Acasă</AnchorLink>
                                      </li>
                                      <li>
                                        <AnchorLink offset='100' href='#services'>Servicii</AnchorLink>
                                      </li>
                                      <li>
                                        <AnchorLink offset='27' href='#packages'>Pachete</AnchorLink>
                                      </li>
                                      <li>
                                        <AnchorLink offset='10' href='#contact'>Contact</AnchorLink>
                                      </li>
                                      <li>
                                        <AnchorLink offset='10' href='#team'>Despre</AnchorLink>
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
                            <div className="col-12">
                                <span>Privacy Policy | © 2020 <Link to="/">Alpha Auto</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )

}

export default FooterSection;
