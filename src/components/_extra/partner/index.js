
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../../images/gift/3.png'
import pimg2 from '../../../images/gift/2.png'
import pimg3 from '../../../images/gift/3.png'
import pimg4 from '../../../images/gift/4.png'
import pimg5 from '../../../images/gift/5.png'

import './style.css'

class PartnerSlider extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            margin: 10,
            loop: true,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className="hx-client-area">
                <div className="container">
                    <div className="hx-client-item">
                            <Slider {...settings}>
                                <div className="partner-col">
                                    <img src={pimg1} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg2} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg3} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg4} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg5} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg1} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg2} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg3} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg4} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg5} alt=""/>
                                </div>
                            </Slider>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default PartnerSlider;
          
          
          
          
