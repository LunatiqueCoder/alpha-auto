import React from 'react';

import './style.css'

const FunFact = (props) => {

    return(
        <section className="fun-fact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="fun-fact-content">
                            <h2>Here’s Our Achivement. Lets Check it Out</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. chunks as necessary,</p>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="fun-fact-grids clearfix">
                            <div className="grid">
                                <div>
                                    <h3><span className="odometer" data-count="300+">300</span>+</h3>
                                </div>
                                <p>Expert Technicians</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h3><span className="odometer" data-count="1026">1026</span></h3>
                                </div>
                                <p>Satisfied Client</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h3><span className="odometer" data-count="25+">25</span>+</h3>
                                </div>
                                <p>Years Experience</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h3><span className="odometer" data-count="3215">3215</span></h3>
                                </div>
                                <p>Compleate Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default FunFact;
