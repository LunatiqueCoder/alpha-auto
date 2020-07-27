import React from "react";

// components
import Navbar from "../../Navbar";
import PageTitle from "../breadcumb";
import FooterSection from "../../Footer";
import AboutSection from "../about";
import Services from "../../ServicesSection/components/Desktop";
import FunFact2 from "../FunFact2";
import TeamSection from "../TeamSection";

const Aboutpage = () => {
  return (
    <div className="page-wrapper inner-page">
      <Navbar />
      <PageTitle bdtitle={"About Us"} bdsub={"About"} />
      <AboutSection />
      <FunFact2 />
      <Services />
      <TeamSection />
      <FooterSection />
    </div>
  );
};

export default Aboutpage;
