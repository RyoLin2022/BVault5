import React from 'react';
import { Link } from 'react-router-dom';


function ComingSoon(props) {
    return (
        <section className="page-title comimg-soon">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header__logo">
                            <Link to="/"><img src={require('../assets/images/logo/logo.png')} alt="" /></Link>
                        </div>
                        <div className="sub-heading"><span>Site</span><span>Under</span><span>Reconstruction</span></div>
                        <h3 data-aos="zoom-in" data-aos-duration="800">
                            <span>Coming</span><span>Soon</span>
                        </h3>
                    </div>
                    <div className="col-md-12">
                        <div className="featured-countdown">
                            <span className="slogan"></span>
                            <span className="js-countdown" data-timer="1865550"></span>
                            <ul className="desc">
                                <li>Days</li>
                                <li>Hours</li>
                                <li>Minutes</li>
                                <li>Seconds</li>
                            </ul>
                        </div>
                        <form action="#" className="newlletter-form" id="subscribe-form">
                            <span></span>
                            <input type="email" placeholder="Your Email Address" required="" id="subscribe-email" />
                            <div className="btn-pst">
                                <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button"> <span className="effect">Sign Up</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComingSoon;