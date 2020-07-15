import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import blog1 from '../../../images/blog/img-7.jpg'
import blog2 from '../../../images/blog/author.jpg'
import blog3 from '../../../images/blog-details/author.jpg'
import blog5 from '../../../images/blog-details/comments-author/img-1.jpg'
import blog6 from '../../../images/blog-details/comments-author/img-2.jpg'
import blog7 from '../../../images/blog-details/comments-author/img-3.jpg'
import './style.css'

const BlogDetailsSection = () => {

    const SubmitHandler = (e) => {
      e.preventDefault()
    }

    return(
        <section className="blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="blog-content clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li>
                                        <img src={blog2} alt=""/>
                                        &nbsp; By <Link to="/blog-details">Lily Anne</Link>
                                    </li>
                                    <li>Octobor 12,2020</li>
                                </ul>
                                <h2>Important tips for your favirite car</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </p>
                                <p>looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </p>
                                <blockquote>“If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat”</blockquote>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, </p>
                                <p>looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum.</p>
                            </div>
                            <div className="tag-share clearfix">
                                <div className="tag">
                                    <ul>
                                        <li><Link to="/blog-details">Business</Link></li>
                                        <li><Link to="/blog-details">New Brand</Link></li>
                                        <li><Link to="/blog-details">Car</Link></li>
                                    </ul>
                                </div>
                                <div className="share">
                                    <ul>
                                        <li><Link to="/blog-details"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div> 
                            <div className="author-box">
                                <div className="author-avatar">
                                    <Link to="/blog-details" target="_blank"> <img src={blog3} alt=""/></Link>
                                </div>
                                <div className="author-content">
                                    <Link to="/blog-details" className="author-name">Henry Joyes</Link>
                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                    <div className="socials">
                                        <ul className="social-link">
                                            <li><Link to="/blog-details"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/blog-details"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/blog-details"><i className="ti-linkedin"></i></Link></li>
                                            <li><Link to="/blog-details"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                            <div className="more-posts clearfix">
                                <div className="previous-post">
                                    <Link to="/blog-details">
                                        <span className="post-control-link">Previous</span>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <Link to="/blog-details">
                                        <span className="post-control-link">Next post</span>
                                    </Link>
                                </div>
                            </div> 
                            <div className="comments-area">
                                <div className="comments-section">
                                    <h3 className="comments-title">Comments</h3>
                                    <ol className="comments">
                                        <li className="comment even thread-even depth-1" id="comment-1">
                                            <div id="div-comment-1">
                                                <div className="comment-theme">
                                                    <div className="comment-image"> <img src={blog5} alt=""/> </div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham <span className="comments-date">Octobor 28,2020 At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/blog-details"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"> <img src={blog6} alt=""/> </div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>Lily Watson <span className="comments-date">Octobor 28,2020 At 9.00am</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                    <div className="comments-reply">
                                                                        <Link className="comment-reply-link" to="/blog-details"><span>Reply</span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li className="comment">
                                                            <div>
                                                                <div className="comment-theme">
                                                                    <div className="comment-image"> <img src={blog7} alt=""/> </div>
                                                                </div>
                                                                <div className="comment-main-area">
                                                                    <div className="comment-wrapper">
                                                                        <div className="comments-meta">
                                                                            <h4>John Abraham <span className="comments-date">Octobor 28,2020 At 9.00am</span></h4>
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                            <div className="comments-reply">
                                                                                <Link className="comment-reply-link" to="/blog-details"><span>Reply</span></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="comment">
                                            <div>
                                                <div className="comment-theme">
                                                    <div className="comment-image"> <img src={blog5} alt=""/> </div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham <span className="comments-date">Octobor 28,2020 At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/blog-details"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div> 
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Post Comments</h3>
                                    <form onSubmit={SubmitHandler} id="commentform" className="comment-form">
                                        <div className="form-textarea">
                                            <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                        </div>
                                        <div className="form-inputs">
                                            <input placeholder="Website" type="url"/>
                                            <input placeholder="Name" type="text"/>
                                            <input placeholder="Email" type="email"/>
                                        </div>
                                        <div className="form-submit">
                                            <input id="submit" value="Post Comment" type="submit"/>
                                        </div>
                                    </form>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <BlogSidebar/>
                </div>
            </div> 
        </section>
     )
        
}

export default BlogDetailsSection;
