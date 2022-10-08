import React from 'react';
import { Link } from 'react-router-dom';


function NFTMarketplace(props) {
    return (
        <section className="page-title nft-marketplace">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header__logo">
                            <Link to="/"><img src={require('../assets/images/logo/logo.png')} alt="" /></Link>
                        </div>
                        <div className="sub-heading"><span>Site</span><span>Under</span><span>Construction</span></div>
                        <h3 data-aos="zoom-in" data-aos-duration="800">
                            <span>Coming</span><span>Soon</span>
                        </h3>
                    </div>
                    <div className="col-md-12">
                        <div className="featured-countdown">
                            <span className="slogan"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NFTMarketplace;