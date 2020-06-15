import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import BlogGrid from '../../components/BlogGrid'
import FooterSection from '../../components/Footer'


const BlogPage = () => {
    return(
       <div className="page-wrapper inner-page home-s-3">
           <Navbar/>
           <Breadcumb bdtitle={'Latest News'} bdsub={'Blog'}/>
           <BlogGrid/>
           <FooterSection/>
       </div>
    )
}

export default BlogPage;