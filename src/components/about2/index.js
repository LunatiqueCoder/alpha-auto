import React from 'react';
import abimg2 from '../../images/about/about.jpg'
import {Link} from 'react-router-dom'
import './style.css'

const AboutSection2 = () => {
    
    const ClickHandler = () =>{
        window.scrollTo(500, 0);
     }
    return(
        <section className="about-section-2">
            <div className="content-area">
                <div className="left-content">
                    <img src={abimg2} alt=""/>
                </div>
                <div className="right-content">
                    <div className="about-content">
                        <div className="section-title">
                            <span>About Our Company</span>
                            <h2>How We Can Help you</h2>
                        </div>
                        <div className="details">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there.</p>
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary anything embarrassing hidden in the.</p>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn-s3">Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default AboutSection2;
