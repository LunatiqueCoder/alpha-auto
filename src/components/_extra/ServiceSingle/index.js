import React from "react";

// components
import Navbar from "../../Navbar";
import PageTitle from "../breadcumb";
import ServicesSingle from "../servicesSingle";
import FooterSection from "../../Footer";

const ServiceDetails = () => {
  return (
    <div className="page-wrapper inner-page home-s-3">
      <Navbar />
      <PageTitle bdtitle={"Our Services"} bdsub={"Service Single"} />
      <ServicesSingle />
      <FooterSection />
    </div>
  );
};

export default ServiceDetails;
