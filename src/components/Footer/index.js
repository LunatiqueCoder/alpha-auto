import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
import post1 from '../../images/footer/img-1.jpg'
import post2 from '../../images/footer/img-2.jpg'

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
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                <div className="social">
                                    <ul className="d-flex">
                                        <li><Link onClick={ClickHandler} to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-t">
                            <div className="hx-site-footer-link">
                                <h3>Recent post</h3>
                                <div className="hx-latest-section">
                                    <div className="posts">
                                        <div className="post">
                                            <div className="img-holder">
                                               <img src={post1} alt=""/>
                                            </div>
                                            <div className="details">
                                                <p><Link onClick={ClickHandler} to="/blog-details">Most Importent Issue For your car.</Link> </p>
                                                <span>18 Feb 2019</span>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <div className="img-holder">
                                                <img src={post2} alt=""/>
                                            </div>
                                            <div className="details">
                                                <p><Link onClick={ClickHandler} to="/blog-details"> Most Importent Issue For your car.</Link></p>
                                                <span>18 Feb 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-t">
                            <div className="hx-site-footer-adress">
                                <h3>Address</h3>
                                <div className="adress-section">
                                    <ul>
                                        <li>Head Office Address</li>
                                        <li>121 King Street, Melbourne West, </li>
                                        <li>Australia</li>
                                    </ul>
                                    <ul className="ad">
                                        <li><span>Phone:</span> 888 123-4587</li>
                                        <li><span>Email:</span> info@example.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 footer-t">
                            <div className="hx-site-footer-service">
                                <h3>Services</h3>
                                <div className="service-section">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} to="/services">Service</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service-details">Service single</Link></li>
                                        <li><Link onClick={ClickHandler} to="/Pricing">Pricing</Link></li>
                                        <li><Link onClick={ClickHandler} to="/testimonials">Testimonials</Link></li>
                                        <li><Link onClick={ClickHandler} to="/blog-grid">Blog List</Link></li>
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
                                <span>Privacy Policy | © 2020 <Link to="/">Motonic</Link> All rights reserved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default FooterSection;
