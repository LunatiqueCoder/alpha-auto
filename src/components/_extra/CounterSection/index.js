import React from 'react';
import {Link} from 'react-router-dom'

import './style.css'


const CounterSection = (props) => {

    return(
        <div className={`wpo-counter-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <div className="wpo-counter-content">
                            <h2>Our Some Important Things That will Satisfite You...</h2>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Many desktop publishing packages and web page editors now</p>
                            <div className="btns">
                                <div className="btn-style btn-style-3"><Link to="/">Learn More About Us...</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="wpo-counter-grids">
                            <div className="grid">
                                <div>
                                    <h2><span>4,012</span></h2>
                                </div>
                                <p>Delivered Packages</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>605</span></h2>
                                </div>
                                <p>Countries Covered</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>920</span></h2>
                                </div>
                                <p>Satisfied Clients</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>3,592</span></h2>
                                </div>
                                <p>Tons of Goods</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default CounterSection;
