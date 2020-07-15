import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../ModalVideo'
import blog1 from '../../images/blog/img-7.jpg'
import blog2 from '../../images/blog/img-8.jpg'
import blog3 from '../../images/blog/img-9.jpg'
import blog4 from '../../images/blog/img-10.jpg'
import aut from '../../images/blog/author.jpg'


const BlogList = () => {

    return(
        <section className="blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="blog-posts clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={aut} alt=""/>
                                            &nbsp; By <Link to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                    <h3><Link to="/blog-details">How to get more traffic in your website</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to="/blog-details" className="read-more">Read More..</Link>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog2} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={aut} alt=""/>
                                            &nbsp; By <Link to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                    <h3><Link to="/blog-details">25 Rules to be successful in your business.</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to="/blog-details" className="read-more">Read More..</Link>
                                </div>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src={blog3} alt=""/>
                                    <div className="video-btn">
                                        <VideoModal/>
                                    </div>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={aut} alt=""/>
                                            &nbsp; By <Link to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                    <h3><Link to="/blog-details">SEO can be the best solution for your business problems.</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to="/blog-details" className="read-more">Read More..</Link>
                                </div>
                            </div>
                            <div className="post format-quote">
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={aut} alt=""/>
                                            &nbsp; By <Link to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                    <h3><Link to="/blog-details">25 Rules to be successful in your business.</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to="/blog-details" className="read-more">Read More..</Link>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog4} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={aut} alt=""/>
                                            &nbsp; By <Link to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                    <h3><Link to="/blog-details">How to get more traffic in your website</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to="/blog-details" className="read-more">Read More..</Link>
                                </div>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-details" aria-label="Previous">
                                            <i className="ti-arrow-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-details">1</Link></li>
                                    <li><Link to="/blog-details">2</Link></li>
                                    <li><Link to="/blog-details">3</Link></li>
                                    <li>
                                        <Link to="/blog-details" aria-label="Next">
                                            <i className="ti-arrow-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   <BlogSidebar/>
                </div>
            </div>
        </section>
     )
        
}

export default BlogList;
