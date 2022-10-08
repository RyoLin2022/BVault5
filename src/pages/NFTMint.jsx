import React from 'react';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';
let currentAccount
function NFTMint(props) {
    let NFTMintContract;
    LoadAccount();
    async function LoadAccount() {
        currentAccount = sessionStorage.getItem('Account');
    }
    
    async function setAccountCorrectly() {
        currentAccount = sessionStorage.getItem('Account');
        console.log('successfully set account to ' + currentAccount)
    }
    
    async function mintNFT() {
        // setAccountCorrectly()
        // let inputGasPrice = await window.ethereum.request({
        //     method: "eth_gasPrice"
        // });

        let mintAmounts = document.getElementById("mintAmount")
        let mintAmountData = mintAmounts.value
        console.log(mintAmountData);

        // let inputData = "0x92642744"
        //     + "000000000000000000000000" +
        //     + "";

        // let params = [
        //     {
        //         from: currentAccount,
        //         to: IDOContract,
        //         gas: Number(300000).toString(16), // 30400
        //         gasPrice: inputGasPrice,
        //         value: '0', // 2441406250
        //         data: inputData,
        //     },
        // ];
        // let IDOBTNInner = document.getElementById("innerIDO");

        // let result = window.ethereum
        //     .request({
        //         method: "eth_sendTransaction",
        //         params,
        //     }).then(
        //         IDOBTNInner.innerText = "Making IDO..."
        //     ).catch((err) => {
        //         IDOBTNInner.innerText = "Make IDO..."
        //         console.log(err);
        //     })


        // setTimeout(function () {
        //     console.log("The first log delay 20 second");
        //     GetData();
        // }, 20000);
        // setTimeout(function () {
        //     console.log("The first log delay 20 second");
        //     GetData();
        // }, 40000);
    }

    
    return (
        <div className='NFTMint'>
            <PageTitle title='NFT Mint' />

            <section className="tf-section tf-item-details pb-mobie">
                <div className="NFTMint-container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={require('../assets/images/common/team12.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h5>Mint Your NFT</h5>

                                <form action="#" id="subscribe-form">
                                    <input type="number" placeholder="Number of NFT You Want to Mint" id="mintAmount" />
                                    <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button" onClick={mintNFT}>
                                        <span className="effect">MINT</span>
                                    </button>
                                </form>
                                <button className="tf-button btn-effect">
                                    <span className="boder-fade"></span>
                                    <span className="effect">Check My NFTs</span>
                                </button>
                                <br />
                                <p>First Generation NFT</p>
                                <p>The rest of the NFTs that haven't be minted would automatically burned after the mint sale ends</p>
                                <div className="list-product">
                                    <div className="box corner-box">
                                        <p>Total Minted</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Owned by you</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Your Staking</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Total Burned</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Smart Contract Written</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Smart Contract Written</p>
                                        <h6 className="h7">Blank</h6>
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

export default NFTMint;