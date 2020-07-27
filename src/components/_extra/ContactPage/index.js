import React from "react";

// components
import Navbar from "../../Navbar";
import PageTitle from "../breadcumb";
import FooterSection from "../../Footer";
import Contactpage from "../../ContactSection";

const ContactPages = () => {
  return (
    <div className="page-wrapper inner-page home-s-3">
      <Navbar />
      <PageTitle bdtitle={"Contact"} bdsub={"Contact"} />
      <Contactpage />
      <FooterSection />
    </div>
  );
};

export default ContactPages;
