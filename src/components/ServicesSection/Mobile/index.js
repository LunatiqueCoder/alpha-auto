import React, { useState, useEffect, useRef } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import classnames from "classnames";

import "./style.css";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
}

const ServicesSectionMobile = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [isRunning, setIsRunning] = useState(true);
  const [transitionIndex, setTransitionIndex] = useState(2);

  useInterval(
    () => {
      if (transitionIndex <= 6) {
        setActiveTab(transitionIndex.toString());
        setTransitionIndex(transitionIndex + 1);
      } else {
        setActiveTab("1");
        setTransitionIndex(2);
      }
    },
    isRunning ? 2000 : null
  );

  const toggle = (tab) => {
    setIsRunning(false);

    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div id="services-mobile" className="mobile-only pricing-section">
      <div className="container">
        <div className="col-12">
          <div className="section-title-s2 text-center">
            <span>Alpha Auto</span>
            <h2>Servicii</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tabs-site-button">
              <Nav tabs>
                <NavItem className="pricing-content-1">
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    <BeenhereIcon style={{ fontSize: 40 }} />
                  </NavLink>
                </NavItem>
                <NavItem className="pricing-content-2">
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    <i className="fi flaticon-system"></i>
                  </NavLink>
                </NavItem>
                <NavItem className="pricing-content-3">
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    <i className="fi flaticon-brake"></i>
                  </NavLink>
                </NavItem>
                <NavItem className="pricing-content-4">
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    <i className="fi flaticon-check"></i>
                  </NavLink>
                </NavItem>
                <NavItem className="pricing-content-5">
                  <NavLink
                    className={classnames({ active: activeTab === "5" })}
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    <i className="fi flaticon-battery"></i>
                  </NavLink>
                </NavItem>
                <NavItem className="pricing-content-6">
                  <NavLink
                    className={classnames({ active: activeTab === "6" })}
                    onClick={() => {
                      toggle("6");
                    }}
                  >
                    <i className="fi flaticon-spray-gun"></i>
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
                              {/*<span><small>$</small>25</span>*/}
                              <h4>Revizie</h4>
                              <p>
                                Verificarea și reglarea pieselor și
                                aparatajelor, înlăturarea jocurilor survenite
                                prin uzură, etc
                              </p>
                            </div>
                            {/*<img src={pr1} alt=""/>*/}
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
                              {/*<span><small>$</small>35</span>*/}
                              <h4>Mecanică</h4>
                              <p>
                                Exploatarea și repararea autovehiculelor, astfel
                                încât acestea să-și mențină parametrii
                                constructivi și funcționali și să se încadreze
                                în normele tehnice.
                              </p>
                            </div>
                            {/*<img src={pr1} alt=""/>*/}
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
                              {/*<span><small>$</small>45</span>*/}
                              <h4>Direcția și frânarea</h4>
                              <p>
                                Direcția și frânarea sunt doua sisteme ale unui
                                autoturism ce trebuie sa funcționeze
                                ireproșabil.
                              </p>
                            </div>
                            {/*<img src={pr1} alt=""/>*/}
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
                              {/*<span><small>$</small>65</span>*/}
                              <h4>Diagnoză computerizată</h4>
                              <p>
                                Verificarea condițiilor tehnice generale ale
                                mașinii, inclusiv verificarea parametrilor reali
                                cu cei teoretici și identificarea cauzelor și
                                localizării oricărei defecțiuni, pentru a le
                                elimina rapid.
                              </p>
                            </div>
                            {/*<img src={pr1} alt=""/>*/}
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
                              {/*<span><small>$</small>50</span>*/}
                              <h4>Electrică</h4>
                              <p>
                                Instalatiile electrice ale autovehiculelor sunt
                                complexe si sustin multe dintre sistemele vitale
                                pentru functionarea normala a masinii. De la
                                pornire si franare pana la deschiderea unui
                                geam, sistemul electric este utilizat continuu
                                in timpul mersului si in timpul stationarii.
                              </p>
                            </div>
                            {/*<img src={pr1} alt=""/>*/}
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
                              {/*<span><small>$</small>25</span>*/}
                              <h4>Vopsitorie & tinichigerie</h4>
                              <p>
                                Cabina de vopsit este profesională și de ultimă
                                generație, asigurându-ne specialistii ca vor
                                obține exact rezultatul dorit, iar atelierul de
                                tinichigerie dispune de toate mijloacele tehnice
                                necesare indreptarii elementelor de caroserie si
                                interventiei pe structura de rezistenta,
                                realizandu-se intr-un spatiu adecvat si cu o
                                dotare corespunzatoare.
                              </p>
                            </div>
                            {/*<img src={pr1} alt=""/>*/}
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
};

export default ServicesSectionMobile;
