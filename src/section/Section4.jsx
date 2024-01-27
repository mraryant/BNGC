import React from 'react'
import S4raod from '../assets/s4road.svg'
import S4road from '../assets/road2.svg'
import '../styles/Section4.css'
const Section4 = () => {
  return (
    <>
      <div className="s4main" >
      <p className="s3head">
Roadmap
        </p>
        <div className="detail1">
<p className="d1">Token Development & <br /> Platform</p>
<p className="d3">ICO Marketing</p>
<p className="d5">Import and Export <br /> Utility App Development</p>
        </div>
        <div className="roadmap">
<img style={{width:"100%", height:"100%"}} src={S4raod} alt="" />
        </div>
        <div className="detail2">
        <p className="d2">Listings on  Top <br /> Exchanges</p>
<p className="d4">Staking and Referral Dapp <br /> Development</p>
        </div>
      </div>

    
      <div className="s4main2">
      <br />
      <br />
        <div className="detail3">
<p className="d1"></p>
<p className="d6">Travel Utility App Development</p>
<p className="d5"></p>
        </div>
        <div className="roadmap">
<img style={{width:"100%", height:"100%"}} src={S4road} alt="" />
        </div>
        <div className="detail4">
        <p className="d7">Listings on  Top Exchanges</p>
<p className="d8">Continous Project Enancement</p>
        </div>
      </div>
    </>
  )
}

export default Section4