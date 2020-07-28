import React from "react";
import {
  CallNowButton,
  ContactSection,
  Footer,
  MainSection,
  ServicesSectionDesktop,
  ServicesSectionMobile,
  CookieToast,
} from "@components";

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
