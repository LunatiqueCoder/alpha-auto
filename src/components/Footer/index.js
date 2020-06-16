import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
import post1 from '../../images/footer/img-1.jpg'
import post2 from '../../images/footer/img-2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './style.css'

const FooterSection = () => {

    const ClickHandler = () =>{
        window.scrollTo(500, 0);
     }


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
                                        <li><a href="https://www.facebook.com/alphaautocraiova/"><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</a></li>
                                        {
                                          // <li><Link onClick={ClickHandler} to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                          // <li><Link onClick={ClickHandler} to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                          // <li><Link onClick={ClickHandler} to="/"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                        }
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
                                        <li><span>Email: </span> alphaauto20@gmail.com</li>
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
