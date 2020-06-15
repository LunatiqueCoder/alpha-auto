import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,} from 'reactstrap';
import classnames from 'classnames';
import pr1 from '../../images/pricing/img-1.png'
import {Link} from 'react-router-dom'
import './style.css'

const Pricing = (props) => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="pricing-section">
        <div className="container">
            <div className="col-12">
                <div className="section-title-s2 text-center">
                    <span>Best Pricing Plan</span>
                    <h2>Services Packages</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="tabs-site-button">
                    <Nav tabs>
                        <NavItem className="pricing-content-1">
                            <NavLink
                                className={ classnames({  active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                <i className="fi flaticon-turbo"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem className="pricing-content-2">
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                <i className="fi flaticon-tyre"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem className="pricing-content-3">
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                            >
                                <i className="fi flaticon-car-1"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem className="pricing-content-4">
                            <NavLink
                                className={classnames({ active: activeTab === '4' })}
                                onClick={() => { toggle('4'); }}
                            >
                                <i className="fi flaticon-car-repair"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem className="pricing-content-5">
                            <NavLink
                                className={classnames({ active: activeTab === '5' })}
                                onClick={() => { toggle('5'); }}
                            >
                                <i className="fi flaticon-battery"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem className="pricing-content-6">
                            <NavLink
                                className={classnames({ active: activeTab === '6' })}
                                onClick={() => { toggle('6'); }}
                            >
                                <i className="fi flaticon-electricity"></i>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="pricing-wrap">
                                        <div className="pricing-single">
                                            <div className="pricing-img">
                                                <div className="pricing-text">
                                                    <span><small>$</small>25</span>
                                                    <h4><Link to="/">Engine Repair</Link></h4>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                                </div>
                                                <img src={pr1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="pricing-wrap">
                                        <div className="pricing-single">
                                            <div className="pricing-img-2">
                                                <div className="pricing-text-1">
                                                    <span><small>$</small>35</span>
                                                    <h4><Link to="/">Tires Replacement</Link></h4>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                                </div>
                                                <img src={pr1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="pricing-wrap">
                                    <div className="pricing-single">
                                        <div className="pricing-img-3">
                                            <div className="pricing-text-2">
                                                <span><small>$</small>45</span>
                                                <h4><Link to="/">Transmission</Link></h4>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                            </div>
                                            <img src={pr1} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </TabPane>
                        <TabPane tabId="4">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="pricing-wrap">
                                        <div className="pricing-single">
                                            <div className="pricing-img-4">
                                                <div className="pricing-text-3">
                                                    <span><small>$</small>65</span>
                                                    <h4><Link to="/">Diagnostic</Link></h4>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                                </div>
                                                <img src={pr1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="5">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="pricing-wrap">
                                        <div className="pricing-single">
                                            <div className="pricing-img-5">
                                                <div className="pricing-text-4">
                                                    <span><small>$</small>50</span>
                                                    <h4><Link to="/">Batteries</Link></h4>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                                </div>
                                                <img src={pr1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="pricing-wrap">
                                        <div className="pricing-single">
                                            <div className="pricing-img-6">
                                                <div className="pricing-text-5">
                                                    <span><small>$</small>25</span>
                                                    <h4><Link to="/">Breaks repair</Link></h4>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                                </div>
                                                <img src={pr1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Pricing;