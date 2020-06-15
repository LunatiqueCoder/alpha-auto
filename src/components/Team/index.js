import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import team_1 from '../../images/team/img-1.jpg';
import team_2 from '../../images/team/img-2.jpg';
import team_3 from '../../images/team/img-3.jpg';
import team_4 from '../../images/team/img-4.jpg';

class TeamSection extends Component {
    render() {
        const ClickHandler = () =>{
            window.scrollTo(500, 0);
         }
        return (
            <div className="hx-team-area section-padding">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title-s2 text-center">
                            <span>Meet Our Expertise</span>
                            <h2>Our Awesome Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12 col-g">
                            <div className="hx-team-single">
                                <div className="hx-team-img">
                                    <img src={team_1} alt=""/>
                                    <div className="SocialIcons">
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-facebook"></i></Link>
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-twitter"></i></Link>
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-google-plus"></i></Link>
                                    </div>
                                    <div className="profileInfo">
                                        <h3><Link onClick={ClickHandler} to="/team">Riccardo Cavallo</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 col-g">
                            <div className="hx-team-single">
                                <div className="hx-team-img">
                                    <img src={team_2} alt=""/>
                                    <div className="SocialIcons">
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-facebook"></i></Link>
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-twitter"></i></Link>
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-google-plus"></i></Link>
                                    </div>
                                    <div className="profileInfo">
                                        <h3><Link onClick={ClickHandler} to="/team">Calvy Jenefar</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 col-g">
                            <div className="hx-team-single">
                                <div className="hx-team-img">
                                    <img src={team_3} alt=""/>
                                    <div className="SocialIcons">
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-facebook"></i></Link>
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-twitter"></i></Link>
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-google-plus"></i></Link>
                                    </div>
                                    <div className="profileInfo">
                                        <h3><Link onClick={ClickHandler} to="/team">Alexsandar Nick</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 col-g">
                            <div className="hx-team-single">
                                <div className="hx-team-img">
                                    <img src={team_4} alt=""/>
                                    <div className="SocialIcons">
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-facebook"></i></Link>
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-twitter"></i></Link>
                                        <Link onClick={ClickHandler} to="/"><i className="fa fa-google-plus"></i></Link>
                                    </div>
                                    <div className="profileInfo">
                                        <h3><Link onClick={ClickHandler} to="/team">David Simon</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamSection;            