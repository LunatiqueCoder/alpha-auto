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
                  <div className="pricing-text">
                    <h4>Revizie</h4>
                    <p>
                      Revizia auto este un serviciu obligatoriu, care trebuie
                      efectuat regulat, uneori chiar mai des decât este
                      specificat de către producător. Cand spunem revizie, ne
                      referim la verificarea, reglarea și/sau schimbarea
                      pieselor și aparatajelor acestea adesea constând în:
                      schimbarea filtrelor de ulei, aer, habitaclu, inspecția
                      nivelelor lichidelor, verificarea plăcuțelor de frână,
                      înlăturarea jocurilor survenite prin uzură, etc.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="pricing-text-1">
                    <h4>Mecanică</h4>
                    <p>
                      Mașina este un ansamblu de mii de piese care, în mod
                      normal, se completează perfect și îi oferă utilizatorului
                      libertate de mișcare. Din păcate, piesele auto nu sunt
                      nemuritoare și ocazional, o parte dintre ele cedează,fiind
                      necesară exploatarea și repararea autovehiculelor, astfel
                      încât acestea să-și mențină parametrii constructivi și
                      funcționali și să se încadreze în normele tehnice.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="pricing-text-2">
                    <h4>Direcția și frânarea</h4>
                    <p>
                      Direcția și frânarea sunt două sisteme ale unui autoturism
                      ce trebuie să funcționeze ireproșabil. De la frână pe disc
                      și cea de mână la frână hidraulică și sistemul antiblocare
                      roți (ABS), specialiștii noștri știu totul despre sistemul
                      de frânare, oferind reparații pentru orice mașină
                      indiferent de model, fabricant sau an de fabricație.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="4">
                  <div className="pricing-text-3">
                    <h4>Diagnoză computerizată</h4>
                    <p>
                      Diagnoza reprezintă verificarea computerizată a
                      condițiilor tehnice generale ale unui autoturism (folosind
                      sisteme computerizate şi interfeţe specifice fiecărui tip
                      de automobil), inclusiv verificarea parametrilor reali cu
                      cei teoretici și identificarea cauzelor și localizării
                      oricărei defecțiuni, pentru a le elimina rapid.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="5">
                  <div className="pricing-text-4">
                    <h4>Electrică</h4>
                    <p>
                      Instalațiile electrice ale autovehiculelor sunt complexe
                      și susțin multe dintre sistemele vitale pentru
                      funcționarea normală a mașinii. De la pornire și frânare
                      până la deschiderea unui geam, sistemul electric este
                      utilizat continuu în timpul mersului și în timpul
                      staționării.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="6">
                  <div className="pricing-text-5">
                    <h4>Vopsitorie & tinichigerie</h4>
                    <p>
                      Cabina de vopsit este profesională și de ultimă generație,
                      asigurându-ne specialiștii că vor obține exact rezultatul
                      dorit, iar atelierul de tinichigerie dispune de toate
                      mijloacele tehnice necesare îndreptării elementelor de
                      caroserie și intervenției pe structura de rezistență,
                      realizându-se într-un spațiu adecvat și cu o dotare
                      corespunzătoare.
                    </p>
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
