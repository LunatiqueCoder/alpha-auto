import React from  'react';

// components
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/breadcumb'
import FooterSection from '../../components/Footer'
import Testimonial from '../../components/testimonial'


const TestimonialPage = () => {
    return(
       <div className="page-wrapper inner-page home-s-3">
           <Navbar/>
           <PageTitle bdtitle={'Testimonials'} bdsub={'Testimonials'}/>
           <Testimonial/>
           <FooterSection/>
       </div>
    )
}

export default TestimonialPage;