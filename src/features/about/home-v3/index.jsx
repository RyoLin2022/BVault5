import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'
import AboutItem from '../about-item';
import Button from '../../../components/button';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle : 'About us',
            title: 'What is cybox?',
            desc : 'BUSD Vault(BV) is a token that stores BUSD in a vault, the BUSD is from the tax of the BV transactions.The mechanism keep burning BV token itself and charging BUSD to the vault'
        }
    )

    return (
        <section className="tf-section tf-about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-about mobie-40 mb-60" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p className='pd30 center'>{dataBlock.desc}</p>
                        </div>
                    </div>

                        {
                            data.map(item => (
                                <div key={item.id} className="col-xl-4 col-lg-4 col-md-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                                    <AboutItem item={item} />
                                </div>
                            ))
                        }
                    <div className="col-md-12">
                        <div className="btn-about center" data-aos="fade-up" data-aos-duration="800">
                            <Button title='get Nfts' path='./nft-mint' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;