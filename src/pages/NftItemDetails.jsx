import React,{ useState } from 'react';
import PageTitle from '../components/pagetitle';
import img from '../assets/images/common/img15.jpg';
import { Link } from 'react-router-dom';


function NftItemDetails() {
    let number;
    let imageLink;
    getData()
    function getData() {
        number = sessionStorage.getItem('NFTnumber');
        imageLink = sessionStorage.getItem('Image');
        console.log(number);
    }

    const [dataBlock] = useState({
        subtitle: 'BUSD VAULT NFT',
        title: 'Stacking',
    })

    return (
        <div className='page-item-details'>
            <PageTitle title='ITEM Details' />

            <section className="tf-section tf-item-details pb-mobie">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={imageLink} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">

                            <div className="tf-title st2 mb-60" data-aos="fade-up" data-aos-duration="800">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title m-b17">{dataBlock.title}</h4>
                            </div>
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <p className="sub">BV #{number}</p>
                                <Link to="#" className="tf-button btn-effect">
                                    <span className="boder-fade"></span>
                                    <span className="effect">Stack</span>
                                </Link>
                                <div className="list-product">
                                    <div className="box corner-box">
                                        <p>Clothing</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Headwear</p>
                                        <h6 className="h7">Black Cap</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Eyewear</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Face</p>
                                        <h6 className="h7">One Eye</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Food</p>
                                        <h6 className="h7">Potato Chip</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Background</p>
                                        <h6 className="h7">Galaxy</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NftItemDetails;