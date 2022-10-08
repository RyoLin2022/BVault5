import React from 'react'
import { Link } from 'react-router-dom';

let link = null
let meta = null
const NFTCard = ({ nft }) => {
  async function getMeta() {
    meta = String(nft.metadata)
    if (meta !== null) {
      if (meta.includes('Qm')) {
        let metaIndex = meta.indexOf('Qm')
        meta = meta.substring(metaIndex, metaIndex + 58)

        let semiIndex = meta.indexOf('"')
        meta = meta.substring(0, semiIndex)

        if (link === null || link === link) {
          link = 'https://ipfs.io/ipfs/' + meta
          nft.metadata = link
        }

      } else if (meta.includes('https')) {
        let metaIndex = meta.indexOf('https')
        meta = meta.substring(metaIndex, metaIndex + 100)

        let semiIndex = meta.indexOf('"')
        meta = meta.substring(0, semiIndex)

        if (link === null || link === link) {
          link = meta
          nft.metadata = link
        }
      }
    }
  }
  getMeta()

  function restoreNumber() {
    sessionStorage.setItem('NFTnumber',`${nft.token_id}`)
    sessionStorage.setItem('Image',`${nft.metadata}`)
  }

  return (
    <div className="card nft-card">
      <Link to="/nft-item-details" onClick={restoreNumber}>
        <img src={nft.metadata} className="nft-image" />
      </Link>

      <div className="card content">
        <div className="card">BV #{nft.token_id}</div>
      </div>
    </div>
  )
}

export default NFTCard
