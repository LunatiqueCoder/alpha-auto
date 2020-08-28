import React from "react";
import CallNowButton from "../CallNowButton";
import CookieToast from "../CookieToast/";
import ContactSection from "../ContactSection";
import Footer from "../Footer/";
import MainSection from "../MainSection";
import {ServicesSectionDesktop,ServicesSectionMobile} from "../ServicesSection/";


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
