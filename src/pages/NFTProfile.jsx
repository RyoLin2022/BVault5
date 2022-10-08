import React, { useState, useEffect } from 'react';
import PageTitle from '../components/pagetitle';
import NFTContainer from './NFTContainer';
import './NFTProfile.css';

let NFTContract = '0x17eb72390dcc2755692056363b0f61ea2cd1873d';

function NFTProfile(props) {
    let currentAccount = null;
    const [WalletAddress, setWalletAddress] = useState(null)
    const [nfts, setNfts] = useState([])
    const options = { method: 'GET', headers: { Accept: 'application/json', 'X-API-Key': 'test' } }
    const getNFTData = async () => {
        if (!currentAccount) return
        const response = await fetch(
            `https://deep-index.moralis.io/api/v2/${currentAccount}/nft?chain=eth&format=decimal`,
            //`https://deep-index.moralis.io/api/v2/${currentAccount}/nft?chain=eth&format=decimal&token_addresses=${NFTContract}`,
            options,
        )
        const data = await response.json()
        console.log(data)
        setNfts(data.result)
    }

    useEffect(() => {
        getNFTData()
    }, [currentAccount])

    readAccount()
    async function readAccount() {
        currentAccount = sessionStorage.getItem('Account');
        console.log("NFT Profile" + currentAccount);
    }
    return (
        <div className='page-nft'>
            <PageTitle title='NFT Profile' />

            <NFTContainer nfts={nfts} />
        </div>
    );
}

export default NFTProfile;