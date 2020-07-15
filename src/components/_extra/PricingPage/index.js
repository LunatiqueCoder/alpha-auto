import React from  'react';

// components
import Navbar from '../../Navbar'
import PageTitle from '../breadcumb'
import FooterSection from '../../Footer'
import Pricing from '../../ServicesSection/Mobile'


const PricingPage = () => {
    return(
       <div className="page-wrapper inner-page home-s-3">
           <Navbar/>
           <PageTitle bdtitle={'Pricing'} bdsub={'Pricing'}/>
           <Pricing/>
           <FooterSection/>
       </div>
    )
}

export default PricingPage;