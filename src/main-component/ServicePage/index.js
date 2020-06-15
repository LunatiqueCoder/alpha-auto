import React from  'react';

// components
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/breadcumb'
import FooterSection from '../../components/Footer'
import Services from '../../components/services'
import Pricing from '../../components/Pricing'
import TeamSection from '../../components/Team'
import Testimonial from '../../components/testimonial'


const ServicePage = () => {
    return(
       <div className="page-wrapper inner-page home-s-3">
           <Navbar/>
           <PageTitle bdtitle={'Our Services'} bdsub={'Services'}/>
           <Services/>
           <Pricing/>
           <TeamSection/>
           <Testimonial/>
           <FooterSection/>
       </div>
    )
}

export default ServicePage;