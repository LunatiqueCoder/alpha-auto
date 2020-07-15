import React, { Component } from 'react';
import Slider from "react-slick";
import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testimonialImg_1 from '../../images/testimonial/2.jpg';

class Testimonial extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1200,
            slidesToShow: 1,
            arrows: false,
            margin:50,
            autoplay:true,
            slidesToScroll: 1,
            centerPadding: 30,
            focusOnSelect: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };
        return (
            <div className="hx-testimonial-area">
                <div className="container">
                    <div className="hx-testimonial-active owl-carousel">
                        <Slider {...settings}>
                            <div className="hx-testimonial-wrap">
                                <div className="hx-testimonial-item">
                                    <div className="hx-testimonial-icon">
                                        <i className="fi flaticon-writer"></i>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.</p>
                                    </div>
                                    <div className="hx-testimonial-img">
                                        <img src={testimonialImg_1} alt=""/>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <h4>Jimmy Alex</h4>
                                        <span>SEO of Northy</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hx-testimonial-wrap">
                                <div className="hx-testimonial-item">
                                    <div className="hx-testimonial-icon">
                                        <i className="fi flaticon-writer"></i>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.</p>
                                    </div>
                                    <div className="hx-testimonial-img">
                                        <img src={testimonialImg_1} alt=""/>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <h4>Jimmy Alex</h4>
                                        <span>SEO of Northy</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hx-testimonial-wrap">
                                <div className="hx-testimonial-item">
                                    <div className="hx-testimonial-icon">
                                        <i className="fi flaticon-writer"></i>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.</p>
                                    </div>
                                    <div className="hx-testimonial-img">
                                        <img src={testimonialImg_1} alt=""/>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <h4>Jimmy Alex</h4>
                                        <span>SEO of Northy</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;            