import React from "react";
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
                  Verificarea și reglarea pieselor și aparatajelor, înlăturarea
                  jocurilor survenite prin uzură, etc
                </p>
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
                  Direcția și frânarea sunt doua sisteme ale unui autoturism ce
                  trebuie sa funcționeze ireproșabil.
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
                  Instalatiile electrice ale autovehiculelor sunt complexe si
                  sustin multe dintre sistemele vitale pentru functionarea
                  normala a masinii. De la pornire si franare pana la
                  deschiderea unui geam, sistemul electric este utilizat
                  continuu in timpul mersului si in timpul stationarii.
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
                  asigurându-ne specialistii ca vor obține exact rezultatul
                  dorit, iar atelierul de tinichigerie dispune de toate
                  mijloacele tehnice necesare indreptarii elementelor de
                  caroserie si interventiei pe structura de rezistenta,
                  realizandu-se intr-un spatiu adecvat si cu o dotare
                  corespunzatoare.
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
