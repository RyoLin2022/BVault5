import React, { useState } from 'react';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

let currentAccount
function Vault(props) {
    let max = 0;
    let accAllowance = Number(0);
    let EXRate;
    let VaultContract = '0xc273e035499e3F9D4cbB38d7dEe5CB51A61b4978';
    let BUSDVaultContract = '0x5CaF80B6189F605fa46b09DBBC0BA8f7e752932a';
    let BusdContract = '0x5B3B6215454B42682126A7dc3225d199F37a2F67';

    const [inputAmount, setAmount] = useState('')


    GetData();

    async function GetData() {
        await LoadAccount();
        await CheckApproval();
        await ViewAccBVBalance();
        await ViewBUSDBalance();
        await ViewRate();
    }

    async function ViewAccBVBalance() {
        await LoadAccount();
        let inputdata = "0x70a08231"
            + "000000000000000000000000" + currentAccount.substring(2, currentAccount.length)
        let balance = await window.ethereum.request({
            method: "eth_call",
            params: [{
                to: BUSDVaultContract,
                data: inputdata,
            },
                "latest"
            ]
        });
        max = balance;
        balance = (parseInt(balance) / Math.pow(10, 18)).toFixed(1);

        document.getElementById("BVBalance").innerText = balance;
    }

    async function ViewBUSDBalance() {
        let inputdata = "0x70a08231"
            + "000000000000000000000000" + VaultContract.substring(2, VaultContract.length)
        let balance = await window.ethereum.request({
            method: "eth_call",
            params: [{
                to: BusdContract,
                data: inputdata,
            },
                "latest"
            ]
        });
        balance = (parseInt(balance) / Math.pow(10, 18)).toFixed(1)
        document.getElementById("BUSDBalance").innerText = balance;
    }

    async function ViewRate() {
        let inputdata = "0x77208c32"
        let rate = await window.ethereum.request({
            method: "eth_call",
            params: [{
                to: VaultContract,
                data: inputdata,
            },
                "latest"
            ]
        });

        rate = (parseInt(rate) * 100 / Math.pow(10, 18)).toFixed(1)
        EXRate = rate/100;
        document.getElementById("vaultRate").innerText = rate + "%";
    }

    async function approveBVtoVault() {
        LoadAccount()
        let inputGasPrice = await window.ethereum.request({
            method: "eth_gasPrice"
        });

        let inputData = "0x095ea7b3000000000000000000000000" +
            VaultContract.substring(2, VaultContract.length) +
            "000000000000000000000000000000000000314dc6448d9338c15b0a00000000";

        let params = [
            {
                from: currentAccount,
                to: BUSDVaultContract,
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
                ApproveBTNInner.innerText = "Approve BVault"
                console.log(err);
            })
            
            if(result === undefined) {
                console.log("XXX")
                swal("Oops!", "You did not make the token approval", "error")
            } else {
                swal("Good job!", "You can now redeem BUSD by burning BVault!!", "success")
            }

        setTimeout(function () {
            CheckApproval();
        }, 20000);

        setTimeout(function () {
            CheckApproval();
        }, 40000);
    }

    async function CheckApproval() {
        LoadAccount()
        let inputdata =
            '0xdd62ed3e' +
            '000000000000000000000000' +
            currentAccount.substring(2, currentAccount.length) +
            '000000000000000000000000' +
            VaultContract.substring(2, VaultContract.length)

        accAllowance = await window.ethereum.request({
            method: 'eth_call',
            params: [
                {
                    to: BUSDVaultContract,
                    data: inputdata,
                },
                'latest',
            ],
        })
        let approved = document.getElementById('Approve-btn')

        if (accAllowance > 0) {
            approved.hidden = true
        } else {
            approved.hidden = false
        }
    }



    async function redeemBUSD() {
        if (accAllowance === 0) {
            alert("You need to approve BVault first")
        } else {
            LoadAccount()
            let inputGasPrice = await window.ethereum.request({
                method: "eth_gasPrice"
            });

            let InputValue = document.getElementById("tokenAmount");
            let InputAmount = InputValue.value * Math.pow(10, 18);

            console.log("You are redeeming BUSD by burning BVault token with amount of : " + InputAmount);

            let HexInputAmount = Number(InputAmount).toString(16);
            let zeroString = "0000000000000000000000000000000000000000000000000000000000000000";
            let InputAmountLength = HexInputAmount.length;

            let inputData = "0xfe9be086" + zeroString.substring(0, 64 - InputAmountLength) + HexInputAmount;

            let params = [
                {
                    from: currentAccount,
                    to: VaultContract,
                    gas: Number(300000).toString(16), // 30400
                    gasPrice: inputGasPrice,
                    value: '0', // 2441406250
                    data: inputData,
                },
            ];
            let RedeemBTNInner = document.getElementById("RedeemBtnInner");

            let result = window.ethereum
                .request({
                    method: "eth_sendTransaction",
                    params,
                }).then(
                    RedeemBTNInner.innerText = "Redeeming..."
                ).catch((err) => {
                    RedeemBTNInner.innerText = "Redeem BUSD"
                    console.log(err);
                })


            setTimeout(function () {
                GetData();
                RedeemBTNInner.innerText = "Redeem BUSD"
            }, 20000);
            setTimeout(function () {
                GetData();
                RedeemBTNInner.innerText = "Redeem BUSD"
            }, 40000);
        }
    }

    async function setMaxValue() {
        let InputValue = document.getElementById("tokenAmount");
        max = parseInt(max) / Math.pow(10, 18);
        InputValue.value = max;
    }


    async function LoadAccount() {
        currentAccount = sessionStorage.getItem('Account');
    }

    function getBVValue() {
        let BVaultValue = document.getElementById("BVValue");
        let InputValue = document.getElementById("tokenAmount");
        
        BVaultValue.innerText = InputValue.value * EXRate + " BUSD";
    }

    const [dataBlock] = useState({
        title: 'HOW THE VAULT WORKS'
    })

    return (
        <div className='vault'>
            <PageTitle title='Vault' />

            <section className="tf-section tf-item-details pb-mobie">
                <div className="vault-container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h4 className="tf-title st2 mb-60 sub-title">{dataBlock.title}</h4>
                                <p>You need to approve the BVault token to the vault contract</p>
                                <p>You can redeem BUSD by burning your BVault</p>
                                <p>You can see the value of the token in the "Value of Input" box</p>
                            </div>
                            {/* <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={require('../assets/images/logo/preload.png')} alt="" />
                            </div> */}
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h5>The Vault</h5>

                                <div id="subscribe-form">
                                    <input
                                        type="number"
                                        placeholder="Number of token"
                                        id="tokenAmount"
                                        value={inputAmount}
                                        onChange={
                                            e => {
                                                setAmount(e.target.value)
                                                getBVValue()
                                            }
                                        }
                                    />
                                    <button className="tf-button-st2 btn-effect" onClick={setMaxValue}>
                                        <span className="effect">Max</span>
                                    </button>
                                </div>

                                <button className="tf-button btn-effect" id="Approve-btn">
                                    <span className="boder-fade"></span>
                                    <span className="effect" id="innerApprove" onClick={approveBVtoVault}>Approve BVault</span>
                                </button>

                                <button className="tf-button btn-effect">
                                    <span className="boder-fade"></span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.8771 4.39102H13.0567C15.4181 4.39102 17.3346 6.26602 17.3346 8.56602V13.166C17.3346 15.466 15.4181 17.3327 13.0567 17.3327H4.94586C2.58446 17.3327 0.667969 15.466 0.667969 13.166V8.56602C0.667969 6.26602 2.58446 4.39102 4.94586 4.39102H5.12553C5.14264 3.39102 5.54477 2.45768 6.27201 1.75768C7.00781 1.04935 7.94894 0.691016 9.00986 0.666016C11.1317 0.666016 12.8514 2.33268 12.8771 4.39102ZM7.17038 2.64935C6.69125 3.11602 6.42602 3.73268 6.40891 4.39102H11.5937C11.5681 3.02435 10.4216 1.91602 9.00987 1.91602C8.35108 1.91602 7.66661 2.17435 7.17038 2.64935ZM12.2525 7.59935C12.6118 7.59935 12.8942 7.31601 12.8942 6.97435V6.00768C12.8942 5.66601 12.6118 5.38268 12.2525 5.38268C11.9017 5.38268 11.6108 5.66601 11.6108 6.00768V6.97435C11.6108 7.31601 11.9017 7.59935 12.2525 7.59935ZM6.31476 6.97435C6.31476 7.31601 6.03242 7.59935 5.67308 7.59935C5.32229 7.59935 5.0314 7.31601 5.0314 6.97435V6.00768C5.0314 5.66602 5.32229 5.38268 5.67308 5.38268C6.03242 5.38268 6.31476 5.66602 6.31476 6.00768V6.97435Z" fill="white" />
                                    </svg>
                                    <span className="effect" onClick={redeemBUSD} id="RedeemBtnInner">Redeem BUSD</span>
                                </button>
                                <div className="list-product">
                                    <div className="box corner-box">
                                        <p>Your BV Balance</p>
                                        <h6 className="h7" id="BVBalance">0.0</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>BUSD In Vault</p>
                                        <h6 className="h7" id="BUSDBalance">0.0</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Exchange Rate</p>
                                        <h6 className="h7" id="vaultRate">0.0</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Value of Input</p>
                                        <h6 className="h7" id="BVValue">0.0</h6>
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

export default Vault;