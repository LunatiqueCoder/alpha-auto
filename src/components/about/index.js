import React from 'react';
import abimg2 from '../../images/about/about-pic.png'
import {Link} from 'react-router-dom'
import './style.css'

const AboutSection = () => {

    const ClickHandler = () =>{
        window.scrollTo(500, 0);
     }
    return(
        <section className="about-section">
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
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn-s2">Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default AboutSection;
