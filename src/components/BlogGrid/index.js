import React from 'react';
import {Link} from 'react-router-dom'
import blog1 from '../../images/blog/img-1.jpg'
import blog2 from '../../images/blog/img-2.jpg'
import blog3 from '../../images/blog/img-3.jpg'
import blog5 from '../../images/blog/img-4.jpg'
import blog6 from '../../images/blog/img-5.jpg'
import blog7 from '../../images/blog/img-6.jpg'
import blog4 from '../../images/blog/author.jpg'


const BlogGrid = () => {
    
    const ClickHandler = () =>{
        window.scrollTo(500, 0);
     }
    return(
        <section className="blog-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="blog-grids clearfix">
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/blog-details">Importent tips for your faviorate car.</Link></h3>
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog4} alt=""/>
                                            By <Link onClick={ClickHandler} to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={blog2} alt=""/>
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/blog-details">Importent tips for your faviorate car.</Link></h3>
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog4} alt=""/>
                                            By <Link onClick={ClickHandler} to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media entry-media2">
                                    <img src={blog3} alt=""/>
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/blog-details">Importent tips for your faviorate car.</Link></h3>
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog4} alt=""/>
                                            By <Link onClick={ClickHandler} to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={blog5} alt=""/>
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/blog-details">Importent tips for your faviorate car.</Link></h3>
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog4} alt=""/>
                                            By <Link onClick={ClickHandler} to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={blog6} alt=""/>
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/blog-details">Importent tips for your faviorate car.</Link></h3>
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog4} alt=""/>
                                            By <Link onClick={ClickHandler} to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={blog7} alt=""/>
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/blog-details">Importent tips for your faviorate car.</Link></h3>
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog4} alt=""/>
                                            By <Link onClick={ClickHandler} to="/blog-details">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default BlogGrid;
