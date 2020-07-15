import React from  'react';

// components
import Navbar from '../../Navbar'
import PageTitle from '../breadcumb'

import BlogDetailsSection from '../BlogDetailsSection'
import FooterSection from '../../Footer'


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