import React from  'react';
import {
  CallNowButton,
  ContactSection,
  Footer,
  Hero,
  Navbar,
  ServicesSectionDesktop,
  ServicesSectionMobile
} from '@components';

const Homepage = () => {
  return (
   <div className="page-wrapper">
     <CallNowButton/>
     <Navbar/>
     <Hero/>
     <ServicesSectionDesktop/>
     <ServicesSectionMobile/>
     <ContactSection/>
     <Footer/>
   </div>
  )
}

export default Homepage;
