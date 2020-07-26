import React from  'react';

// components
import Navbar from '../../Navbar'
import SimpleSlider3 from '../hero3'
import FooterSection from '../../Footer'
import AboutSection3 from '../about3'
import Services from '../../ServicesSection/components/Desktop'
import FunFact from '../FunFact'
import Pricing from '../../ServicesSection/components/Mobile'
import TeamSection from '../TeamSection'
import BlogSection from '../BlogSection'
import ContactSection from '../ContactSection'
import PartnerSlider from '../partner'


const Homepage3 = () => {
    return(
       <div className="page-wrapper home-s-3">
           <Navbar/>
           <SimpleSlider3/>
           <AboutSection3/>
           <Services/>
           <FunFact/>
           <Pricing/>
           <TeamSection/>
           <BlogSection/>
           <ContactSection/>
           <PartnerSlider/>
           <FooterSection/>
       </div>
    )
}

export default Homepage3;