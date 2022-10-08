import React, { useState, useEffect } from 'react';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';
import img from '../assets/images/common/img15.jpg';
import swal from 'sweetalert';
import { CopyToClipboard } from 'react-copy-to-clipboard';

let refAccount;

let Refs;
let currentAccount;
let accAllowance = Number(0);
function IDO(props) {

    let isJoined = Boolean('');

    let BusdContract = '0x5B3B6215454B42682126A7dc3225d199F37a2F67';
    let IDOContract = '0x1Fb5b22F50c60bD1610edB6656DF44c00ee27A7f';
    let BUSDVaultContract = '';
    let refDefault = '0x0D971B7B7520f1FCE9b90665CA59952ea2c52b04';
    GetData();

    let refLink = 'busdvault.com/ido?invitedBy=' + currentAccount;

    const [WalletAddress, setWalletAddress] = useState(null)
    const [copied, setCopied] = useState(false);

    function alertCopied() {
        swal("Good job!", "Your link : " + refLink + " has been copied!!", "success")
    }

    // useEffect(() => {
    //     refLink = 'localhost:3000/ido?invitedBy=' + WalletAddress
    // }, [WalletAddress])

    async function GetData() {
        await setAccountCorrectly()
        await joinedOrNot()
        await ACCAllowance()
        await GetRef()
        await seeRef()
        await ViewRef()
    }

    async function seeRef() {
        let RefAddr = sessionStorage.getItem('RefAccount')
        console.log('seeRef : ' + RefAddr)
    }

    async function GetRef() {
        let link = window.location.href
        if (link.includes('invitedBy=')) {
            let start = link.indexOf('By=')
            refAccount = link.substring(start + 3, start + 45)
        } else {
            refAccount = refDefault
        }
        sessionStorage.setItem('RefAccount', refAccount)
    }

    /*------------------Checck the allowance for IDO contract-----------------*/
    /*------------------Checck the allowance for IDO contract-----------------*/
    /*------------------Checck the allowance for IDO contract-----------------*/
    async function CheckApproval() {
        setAccountCorrectly()
        let inputdata =
            '0xdd62ed3e' +
            '000000000000000000000000' +
            currentAccount.substring(2, currentAccount.length) +
            '000000000000000000000000' +
            IDOContract.substring(2, IDOContract.length)

        accAllowance = await window.ethereum.request({
            method: 'eth_call',
            params: [
                {
                    to: BusdContract,
                    data: inputdata,
                },
                'latest',
            ],
        })
        let idoButton = document.getElementById('ido-btn')
        let approved = document.getElementById('Approve-btn')
        let claim = document.getElementById('claim-btn')

        console.log("view isJoined : " + isJoined)
        if (isJoined === true) {
            approved.hidden = true
            idoButton.hidden = true
            claim.hidden = false
        } else {
            if (accAllowance > 0) {
                approved.hidden = true
                idoButton.hidden = false
                claim.hidden = true

            } else {
                approved.hidden = false
                idoButton.hidden = true
                claim.hidden = true
            }
        }
    }

    async function setAccountCorrectly() {
        currentAccount = sessionStorage.getItem('Account');
        console.log('successfully set account to ' + currentAccount)
        setTimeout(function () {
            console.log("The first log delay 2 second");
            refLink = 'busdvault.com/ido?invitedBy=' + currentAccount;
            console.log(refLink);
        }, 2000);
    }



    async function makeIDO() {
        setAccountCorrectly()
        let inputGasPrice = await window.ethereum.request({
            method: "eth_gasPrice"
        });

        let inputData = "0x82de721e000000000000000000000000" +
            refAccount.substring(2, refAccount.length)

        let params = [
            {
                from: currentAccount,
                to: IDOContract,
                gas: Number(300000).toString(16), // 30400
                gasPrice: inputGasPrice,
                value: '0', // 2441406250
                data: inputData,
            },
        ];
        let IDOBTNInner = document.getElementById("innerIDO");

        let result = await window.ethereum
            .request({
                method: "eth_sendTransaction",
                params,
            }).then(
                IDOBTNInner.innerText = "Making IDO..."
            ).catch((err) => {
                IDOBTNInner.innerText = "Make IDO"
                console.log(err);
            })
        
            console.log("IDO result " + result);
            if(result === undefined) {
                console.log("XXX")
                swal("Oops!", "You did not make the IDO", "error")
            } else {
                swal("Good job!", "You have successfully made the IDO!!", "success")
            }

        setTimeout(function () {
            console.log("The first log delay 20 second");
            GetData();
        }, 20000);
        setTimeout(function () {
            console.log("The first log delay 20 second");
            GetData();
        }, 40000);
    }



    /*------------------Here's the token Approval-----------------*/
    /*------------------Here's the token Approval-----------------*/
    /*------------------Here's the token Approval-----------------*/
    async function ApproveToken() {
        setAccountCorrectly()
        let inputGasPrice = await window.ethereum.request({
            method: "eth_gasPrice"
        });

        let inputData = "0x095ea7b3000000000000000000000000" +
            IDOContract.substring(2, IDOContract.length) +
            "000000000000000000000000000000000000000000000002B5E3AF16B1880000"; //50

        let params = [
            {
                from: currentAccount,
                to: BusdContract,
                gas: Number(300000).toString(16), // 30400
                gasPrice: inputGasPrice, // 10000000000
                value: '0', // 2441406250
                data: inputData,
            },
        ];

        let ApproveBTNInner = document.getElementById("innerApprove");

        let result = await window.ethereum
            .request({
                method: "eth_sendTransaction",
                params,
            }).then(
                ApproveBTNInner.innerText = "Approving..."
            ).catch((err) => {
                ApproveBTNInner.innerText = "Approve BUSD"
                console.log(err);
            })

            console.log("The result of approve token is " + result)
            
            if(result === undefined) {
                console.log("XXX")
                swal("Oops!", "You did not make the token approval", "error")
            } else {
                swal("Good job!", "You have successfully made the token approval!!", "success")
            }

        setTimeout(function () {
            console.log("The first log delay 20 second");
            ACCAllowance();
        }, 20000);
        
        setTimeout(function () {
            console.log("The second log delay 40 second");
            ACCAllowance();
        }, 40000);
    }



    /*------------------Checck the allowance for IDO contract-----------------*/
    /*------------------Checck the allowance for IDO contract-----------------*/
    /*------------------Checck the allowance for IDO contract-----------------*/

    async function ACCAllowance() {
        let inputdata = "0xdd62ed3e"
            + "000000000000000000000000" + currentAccount.substring(2, currentAccount.length)
            + "000000000000000000000000" + IDOContract.substring(2, IDOContract.length);
        let accAllowance = await window.ethereum.request({
            method: "eth_call",
            params: [{
                to: BusdContract,
                data: inputdata,
            },
                "latest"
            ]
        });

        CheckApproval()
    }



    /*------------------View the referrals-----------------*/
    /*------------------View the referrals-----------------*/
    /*------------------View the referrals-----------------*/

    async function ViewRef() {
        let inputdata = "0x26bcff7d"
            + "000000000000000000000000" + currentAccount.substring(2, currentAccount.length)
        let refs = await window.ethereum.request({
            method: "eth_call",
            params: [{
                to: IDOContract,
                data: inputdata,
            },
                "latest"
            ]
        });

        let NumRefs = Number(refs);
        console.log("Viewing refs: " + NumRefs)

        document.getElementById("referralsData").innerText = NumRefs;
        document.getElementById("awardData").innerText = NumRefs * 2.5 + " BUSD";
    }

    async function joinedOrNot() {
        let inputdata = "0x3421a177"
            + "000000000000000000000000" + currentAccount.substring(2, currentAccount.length)
        let result = await window.ethereum.request({
            method: "eth_call",
            params: [{
                to: IDOContract,
                data: inputdata,
            },
                "latest"
            ]
        });
        let NumResult = Number(result);
        if (NumResult === 1) {
            document.getElementById("joinedData").innerText = "YES";
            isJoined = true;
        }
        else
            document.getElementById("joinedData").innerText = "NO";
    }

    function ClaimToken() {
        alert("Not able to claim yet")
    }

    const [dataBlock] = useState({
        title: 'BUSD VAULT IDO'
    })

    return (
        <div className='IDO'>
            <PageTitle title='IDO' />

            <section className="tf-section tf-item-details pb-mobie">
                <div className="IDO-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h4 className="tf-title st2 mb-60 sub-title">{dataBlock.title}</h4>
                                <p>The IDO price is 50 BUSD for each address</p>
                                <p>Note : All of the token claimed from IDO should be added into the liquidity pool</p>
                                <p>The address would be blacklisted if you did not add into the liquidity pool</p>
                                <p>Removing LP would be punished before the launch</p>

                                <CopyToClipboard text={refLink} onCopy={() => setCopied(true)}>
                                    <button id="inviteLink" className="tf-button btn-effect" onClick={alertCopied}>
                                        <span className="boder-fade"></span>
                                        <span className="effect">Copy Invite Link</span>
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">

                                <button className="tf-button btn-effect" id="Approve-btn" hidden>
                                    <span className="boder-fade"></span>
                                    <span className="effect" id="innerApprove" onClick={ApproveToken}>Approve BUSD</span>
                                </button>

                                <button className="tf-button btn-effect" id="ido-btn" hidden>
                                    <span className="boder-fade"></span>
                                    <span className="effect" id="innerIDO" onClick={makeIDO}>Make IDO</span>
                                </button>

                                <button className="tf-button btn-effect" id="claim-btn" hidden>
                                    <span className="boder-fade"></span>
                                    <span className="effect" onClick={ClaimToken}>Claim BV token</span>
                                </button>

                                <div className="list-product">
                                    <div className="box corner-box">
                                        <p>Joined?</p>
                                        <h6 className="h7" id="joinedData">YES</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Your referrals</p>
                                        <h6 className="h7" id="referralsData">Amount</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Your award</p>
                                        <h6 className="h7" id="awardData">Blank</h6>
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

export default IDO;