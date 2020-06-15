import React from  'react';

// components
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/breadcumb'
import ServicesSingle from '../../components/servicesSingle'
import FooterSection from '../../components/Footer'


const ServiceDetails = () => {
    return(
       <div className="page-wrapper inner-page home-s-3">
           <Navbar/>
           <PageTitle bdtitle={'Our Services'} bdsub={'Service Single'}/>
           <ServicesSingle/>
           <FooterSection/>
       </div>
    )
}

export default ServiceDetails;