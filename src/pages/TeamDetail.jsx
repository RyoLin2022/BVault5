import React from 'react';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';
import Team from '../features/team/home-v2';
import dataTeam from '../assets/fake-data/data-team';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';


function TeamDetail(props) {
    return (
        <div>
            <PageTitle title='Our Team' />

            <section className="tf-section team-detail ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={require('../assets/images/common/teamRyo.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7">
                            <div className="info-detail" data-aos="fade-left" data-aos-duration="800">
                                <p className="sub">DEV & DEVELOPER </p>
                                <h4 className="name">Ryo Lin</h4>
                                <div className="box">
                                    <div className="h7">Some Thing About him</div>
                                    <p>Smart contract engineer, DApp developer.
                                        <br />If there's any problem, please contact him via telegram</p>
                                </div>
                                <div className="box contact">
                                    <div className="h7">Contact</div>
                                    <p>Telegram : <a href="https://t.me/RyoLin">RyoLin</a></p>
                                </div>
                                <ul className="social">
                                    <li><a href="https://t.me/RyoLin">
                                        <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.832 0.296632C23.4226 -0.0468093 22.7796 -0.0959495 22.1147 0.168111H22.1136C21.4144 0.445672 2.32053 8.54786 1.54324 8.87888C1.40186 8.92748 0.167148 9.38324 0.294331 10.3984C0.407868 11.3137 1.40022 11.6928 1.5214 11.7366L6.37565 13.3809C6.6977 14.4414 7.88493 18.3543 8.14748 19.1902C8.31124 19.7113 8.57816 20.396 9.04595 20.537C9.45643 20.6936 9.86473 20.5505 10.1289 20.3453L13.0967 17.622L17.8876 21.3184L18.0017 21.3859C18.327 21.5284 18.6387 21.5997 18.9362 21.5997C19.166 21.5997 19.3865 21.557 19.5972 21.4717C20.315 21.1801 20.6022 20.5035 20.6322 20.4268L24.2108 2.02518C24.4291 1.04237 24.1256 0.542332 23.832 0.296632ZM10.6568 14.0386L9.01921 18.3586L7.38165 12.9586L19.9362 3.77856L10.6568 14.0386Z" fill="white" />
                                        </svg>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div><div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={require('../assets/images/common/teamDavid.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7">
                            <div className="info-detail" data-aos="fade-left" data-aos-duration="800">
                                <p className="sub">COO </p>
                                <h4 className="name">David Lee</h4>
                                <div className="box">
                                    <div className="h7">Some Thing About him</div>
                                    <p>20 years of stock trader.
                                        <br /> 7 years of crypto trader
                                        <br />10 years of being an AMC manger
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Team data={dataTeam} />

            <Partner data={dataPartner} />
        </div>
    );
}

export default TeamDetail;