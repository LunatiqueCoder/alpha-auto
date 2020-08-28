import React from "react";
import CallNowButton from "../CallNowButton";
import CookieToast from "../CookieToast/";
import ContactSection from "../ContactSection";
import Footer from "../Footer/";
import MainSection from "../MainSection";
import ServicesSectionDesktop from "../ServicesSection/components/Desktop";
import ServicesSectionMobile from "../ServicesSection/components/Mobile";

const Homepage = () => {
  return (
    <div className="page-wrapper">
      <MainSection />
      <ServicesSectionDesktop />
      <ServicesSectionMobile />
      <ContactSection />
      <Footer />
      <CookieToast />
      <CallNowButton />
    </div>
  );
};

export default Homepage;
