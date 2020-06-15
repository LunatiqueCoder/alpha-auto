import React from  'react';

// components
import Navbar from '../../components/Navbar'
import SimpleSlider3 from '../../components/hero3'
import FooterSection from '../../components/Footer'
import AboutSection3 from '../../components/about3'
import Services from '../../components/services'
import FunFact from '../../components/FunFact'
import Pricing from '../../components/Pricing'
import TeamSection from '../../components/Team'
import BlogSection from '../../components/BlogSection'
import ContactSection from '../../components/ContactSection'
import PartnerSlider from '../../components/partner'


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