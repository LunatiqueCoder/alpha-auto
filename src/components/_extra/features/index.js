import React from 'react';

import './style.css'

const Features = (props) => {

    return(
        <div className="features-style">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="features-wrap">
                            <div className="features-icon">
                                <i className="fi flaticon-turbo"></i>
                            </div>
                            <div className="features-text">
                                <h2>Engine Repair</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="features-wrap">
                            <div className="features-icon-2">
                                <i className="fi flaticon-tyre"></i>
                            </div>
                            <div className="features-text">
                                <h2>Tires Replacement</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="features-wrap">
                            <div className="features-icon-3">
                                <i className="fi flaticon-car-1"></i>
                            </div>
                            <div className="features-text">
                                <h2>Transmission</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default Features;
