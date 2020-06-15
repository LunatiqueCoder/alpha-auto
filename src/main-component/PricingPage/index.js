import React from  'react';

// components
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/breadcumb'
import FooterSection from '../../components/Footer'
import Pricing from '../../components/Pricing'


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