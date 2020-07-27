import React from "react";

// components
import Navbar from "../../Navbar";
import PageTitle from "../breadcumb";
import FooterSection from "../../Footer";
import Services from "../../ServicesSection/components/Desktop";
import Pricing from "../../ServicesSection/components/Mobile";
import TeamSection from "../TeamSection";
import Testimonial from "../testimonial";

const ServicePage = () => {
  return (
    <div className="page-wrapper inner-page home-s-3">
      <Navbar />
      <PageTitle bdtitle={"Our Services"} bdsub={"Services"} />
      <Services />
      <Pricing />
      <TeamSection />
      <Testimonial />
      <FooterSection />
    </div>
  );
};

export default ServicePage;
