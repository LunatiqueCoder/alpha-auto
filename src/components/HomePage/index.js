import React from  'react';
import {
  CallNowButton,
  ContactSection,
  Footer,
  MainSection,
  ServicesSectionDesktop,
  ServicesSectionMobile
} from '@components';

const Homepage = () => {
  return (
   <div className="page-wrapper">
     <MainSection/>
     <ServicesSectionDesktop/>
     <ServicesSectionMobile/>
     <ContactSection/>
     <Footer/>
     <CallNowButton/>
   </div>
  )
}

export default Homepage;
