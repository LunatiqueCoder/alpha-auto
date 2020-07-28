import React from "react";
import CookieConsent from "react-cookie-consent";

import "./style.css";

const CookieToast = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      buttonClasses="accept-cookie-button"
      cookieName="GDPR_Consent"
      containerClasses="cookie-consent"
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={365}
      acceptOnScroll
      contentClasses="cookies-content"
    >
      <p className="cookie-text">
        Pentru scopuri precum afișarea de conținut personalizat, folosim module
        cookie sau tehnologii similare. Apăsând Accept sau navigând pe acest
        website, ești de acord să permiți colectarea de informații prin
        cookie-uri sau tehnologii similare.
      </p>
      {/* Află in sectiunea Politica de
        Cookies mai multe despre cookie-uri, inclusiv despre posibilitatea
        retragerii acordului. */}
    </CookieConsent>
  );
};

export default CookieToast;
