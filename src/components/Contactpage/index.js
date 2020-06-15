import React from 'react';
import ContactForm from '../CommentForm'
import ct1 from '../../images/contact/img-1.png'
import './style.css'

const Contactpage = () => {
    return(
        <div className="contact-page-area">
            <div className="hx-contact-area-s2 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="hx-contact-img">
                                <img src={ct1} alt=""/>
                            </div>
                        </div>
                        <div className="col col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="hx-contact-content">
                                <h2>Get In Touch</h2>
                                <div className="hx-contact-form">
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hx-contact-grid-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="hx-contact-gd-wrap">
                                <div className="hx-contact-gd-icon">
                                    <i className="fi flaticon-call"></i>
                                </div>
                                <div className="hx-contact-gd-text">
                                    <h4>Call Us Now</h4>
                                    <span>+(008) 001-234-567 </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="hx-contact-gd-wrap">
                                <div className="hx-contact-gd-icon">
                                    <i className="fi flaticon-message"></i>
                                </div>
                                <div className="hx-contact-gd-text">
                                    <h4>Mail Us Today</h4>
                                    <span>youremail@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="hx-contact-gd-wrap">
                                <div className="hx-contact-gd-icon">
                                    <i className="fi flaticon-placeholder"></i>
                                </div>
                                <div className="hx-contact-gd-text">
                                    <h4>Our Location</h4>
                                    <span>150 Street, London, USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )

}

export default Contactpage;
