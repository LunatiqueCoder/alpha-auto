import React from 'react';
import ContactForm from '../../CommentFormSection'
import ct1 from '../../../images/contact/img-1.png'
import './style.css'



const ContactSection = () => {

    return(
        <div className="hx-contact-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-12 col-sm-12 col-12">
                        <div className="hx-contact-content">
                            <h2>Book An Appointment</h2>
                            <div className="hx-contact-form">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 ">
                        <div className="hx-contact-img">
                            <img src={ct1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default ContactSection;
