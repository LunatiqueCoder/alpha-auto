import React from  'react';

// components
import Navbar from '../../Navbar'
import Breadcumb from '../breadcumb'

import BlogGrid from '../BlogGrid'
import FooterSection from '../../Footer'


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