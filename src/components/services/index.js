import React from 'react';

import './style.css'
import BeenhereIcon from '@material-ui/icons/Beenhere';

const Services = (props) => {

    return(
        <div id="services" className="large-screen-only service-style-1 section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title-s2 text-center">
                        <span>Alpha Auto</span>
                        <h2>Servicii</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-wrap">
                            <div className="service-icon">
                              <BeenhereIcon style={{ fontSize: 40 }}/>
                            </div>
                            <div className="service-text">
                                <h2>Revizie</h2>
                                {/*<p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="service-wrap">
                            <div className="service-icon-2">
                              <i className="fi flaticon-system"></i>
                            </div>
                            <div className="service-text">
                                <h2>Mecanică</h2>
                                {/*<p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="service-wrap">
                            <div className="service-icon-3">
                               <i className="fi flaticon-brake"></i>
                            </div>
                            <div className="service-text">
                                <h2>Frânare</h2>
                                {/*<p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="service-wrap">
                            <div className="service-icon-4">
                              <i className="fi flaticon-check"></i>
                            </div>
                            <div className="service-text">
                                <h2 className="service-small-font">Diagnoză computerizată</h2>
                                {/*<p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="service-wrap">
                            <div className="service-icon-5">
                                <i className="fi flaticon-battery"></i>
                            </div>
                            <div className="service-text">
                                <h2>Electrică</h2>
                                {/*<p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="service-wrap">
                            <div className="service-icon-6">
                              <i className="fi flaticon-spray-gun"></i>
                            </div>
                            <div className="service-text">
                                <h2>Vopsitorie & tinichigerie</h2>
                                {/*<p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )

}

export default Services;
