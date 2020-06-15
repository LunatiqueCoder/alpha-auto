import React from  'react';

// components
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/breadcumb'

import BlogDetailsSection from '../../components/BlogDetailsSection'
import FooterSection from '../../components/Footer'


const BlogSingleSidebar = () => {
    return(
       <div className="page-wrapper inner-page home-s-3">
           <Navbar/>
           <PageTitle bdtitle={'Latest News'} bdsub={'Blog Single'}/>
           <BlogDetailsSection/>
           <FooterSection/>
       </div>
    )
}

export default BlogSingleSidebar;