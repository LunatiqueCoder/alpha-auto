import React, { useState } from "react";
import BeenhereIcon from "@material-ui/icons/Beenhere";

import "./style.css";

const ServicesSectionDesktop = () => {
  return (
    <div
      id="services"
      className="large-screen-only service-style-1 section-padding"
    >
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
                <BeenhereIcon style={{ fontSize: 40 }} />
              </div>
              <div className="service-text">
                <h2>Revizie</h2>
                <p>
                  Verificarea, reglarea și/sau schimbarea pieselor și
                  aparatajelor:
                </p>
                <br></br>
                <div style={{ textAlign: "left" }}>
                  <p> - schimbare filtre de ulei, aer, habitaclu;</p>
                  <p> - inspecția nivelelor lichidelor;</p>
                  <p> - verificarea plăcuțelor de frână.</p>
                  <p> - înlăturarea jocurilor survenite prin uzură, etc</p>
                </div>
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
                <p>
                  Exploatarea și repararea autovehiculelor, astfel încât acestea
                  să-și mențină parametrii constructivi și funcționali și să se
                  încadreze în normele tehnice.
                </p>
                <p>
                  Mașina este un ansamblu de mii de piese care, în mod normal,
                  se completează perfect și îi oferă utilizatorului libertate de
                  mișcare. Din păcate, piesele auto nu sunt nemuritoare și
                  ocazional, o parte dintre ele cedează.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6">
            <div className="service-wrap">
              <div className="service-icon-3">
                <i className="fi flaticon-brake"></i>
              </div>
              <div className="service-text">
                <h2>Direcția și frânarea</h2>
                <p>
                  Direcția și frânarea sunt două sisteme ale unui autoturism ce
                  trebuie să funcționeze ireproșabil.
                </p>
                <p>
                  De la frână pe disc și cea de mână la frână hidraulică și
                  sistemul antiblocare roți (ABS), specialiștii noștri știu
                  totul despre sistemul de frânare, oferind reparații pentru
                  orice mașină indiferent de model, fabricant sau an de
                  fabricație.
                </p>
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
                <p>
                  Verificarea condițiilor tehnice generale ale mașinii, inclusiv
                  verificarea parametrilor reali cu cei teoretici și
                  identificarea cauzelor și localizării oricărei defecțiuni,
                  pentru a le elimina rapid.
                </p>
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
                <p>
                  Instalațiile electrice ale autovehiculelor sunt complexe și
                  susțin multe dintre sistemele vitale pentru funcționarea
                  normală a mașinii. De la pornire și frânare până la
                  deschiderea unui geam, sistemul electric este utilizat
                  continuu în timpul mersului și în timpul staționării.
                </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionDesktop;
