import React from 'react';
import {Link} from 'react-router-dom'
import ins1 from '../../../images/recent-posts/img-1.jpg'
import ins2 from '../../../images/recent-posts/img-2.jpg'
import ins3 from '../../../images/recent-posts/img-3.jpg'


import './style.css'

const BlogSidebar = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="col col-lg-4 col-md-8 col-sm-12 col-12">
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search"/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link to="/blog-details">Engine Repair</Link></li>
                        <li><Link to="/blog-details">Tires Replacement</Link></li>
                        <li><Link to="/blog-details">Transmission</Link></li>
                        <li><Link to="/blog-details">Diagnostic</Link></li>
                        <li><Link to="/blog-details">Bateries Replacement</Link></li>
                        <li><Link to="/blog-details">Break Repair</Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Recent post</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins1} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Actual teachings of the great explorer of the truth.</Link></h4>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins2} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">The truth, the master-builder of human happiness</Link></h4>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins3} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Explorer of the truth, the master-builder of human happiness</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link to="/blog-details">Repair</Link></li>
                        <li><Link to="/blog-details">Tires</Link></li>
                        <li><Link to="/blog-details">Car</Link></li>
                        <li><Link to="/blog-details">Replacement</Link></li>
                        <li><Link to="/blog-details">Online</Link></li>
                        <li><Link to="/blog-details">clean</Link></li>
                        <li><Link to="/blog-details">Break</Link></li>
                        <li><Link to="/blog-details">Batery</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
