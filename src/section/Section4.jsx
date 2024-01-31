import React from 'react'
import rod1 from '../assets/rod1.jpg'
import rod2 from '../assets/rod2.jpg'
import LINE1 from '../assets/line3.png'


import '../styles/Section4.css'
const Section4 = () => {
        return (
                <>
                        <div className="s4main" >
                                <p className="s3head">
                                        Roadmap
                                </p>
                                <p style={{ color: 'white', maxWidth: "510px", textAlign: "center" }} >
                                        The roadmap outlines the strategic journey of BNGC Coin, encompassing crucial
                                        milestones from token development planning to continuous project development.

                                </p>
                        </div>

                        <div id="s4main2">
                                <div id="s4roadmap">
                                        <div id="rodCard-main">
                                                <div className="roadCard">
                                                        <div style={{ width:"50%", textAlign:"right" }}>

                                                                <h1 id='rd-percent'>10%</h1>
                                                        </div>
                                                        <div style={{ width: "50%", textAlign: "left" }}>
                                                                <h3 id='rd-h3' >PHASE 1</h3>
                                                                <p style={{textWrap:"wrap"}} >Token Development &Platform</p>
                                                        </div>
                                                </div>
                                                <div className="roadCard">
                                                        <div style={{ width: "50%", textAlign: "right" }}>
                                                                <h3 id='rd-h3'>PHASE 2</h3>
                                                                <p style={{  textWrap: "wrap" }}  >Listings on TopExchanges</p>
                                                        </div>
                                                        <div style={{ width: "50%", textAlign: "left" }}>

                                                                <h1 id='rd-percent' >20%</h1>
                                                        </div>
                                                </div>
                                                <div className="roadCard">
                                                        <div style={{ width:"50%", textAlign:"right" }}>

                                                                <h1 id='rd-percent'>30%</h1>
                                                        </div>
                                                        <div style={{ width: "50%", textAlign: "left" }}>
                                                                <h3 id='rd-h3' >PHASE 3</h3>
                                                                <p style={{ textWrap: "wrap" }} >ICO Marketing</p>
                                                        </div>
                                                </div>
                                                <div className="roadCard">
                                                        <div style={{ width: "50%", textAlign: "right" }}>
                                                                <h3 id='rd-h3'>PHASE 4</h3>
                                                                <p>Staking and Referral DappDevelopment</p>
                                                        </div>
                                                        <div style={{ width: "50%", textAlign: "left" }}>

                                                                <h1 id='rd-percent' >40%</h1>
                                                        </div>
                                                </div>
                                                <div className="roadCard">
                                                        <div style={{ width:"50%", textAlign:"right" }}>

                                                                <h1 id='rd-percent'>60%</h1>
                                                        </div>
                                                        <div style={{ width: "50%", textAlign: "left" }}>
                                                                <h3 id='rd-h3' >PHASE 5</h3>
                                                                <p style={{ textWrap: "wrap" }} >Import and ExportUtility App Development</p>
                                                        </div>
                                                </div>
                                                <div className="roadCard">
                                                        <div style={{ width: "50%", textAlign: "right" }}>
                                                                <h3 id='rd-h3'>PHASE 6</h3>
                                                                <p>Travel Utility App Development</p>
                                                        </div>
                                                        <div style={{ width: "50%", textAlign: "left" }}>

                                                                <h1 id='rd-percent' >70%</h1>
                                                        </div>
                                                </div>
                                                <div className="roadCard">
                                                        <div style={{ width:"50%", textAlign:"right" }}>

                                                                <h1 id='rd-percent'>90%</h1>
                                                        </div>
                                                        <div style={{ width: "50%", textAlign: "left" }}>
                                                                <h3 id='rd-h3' >PHASE 7</h3>
                                                                <p style={{ textWrap: "wrap" }} >Listings on Top Exchanges</p>
                                                        </div>
                                                </div>
                                                <div className="roadCard">
                                                        <div style={{ width: "50%", textAlign: "right" }}>
                                                                <h3 id='rd-h3'>PHASE 8</h3>
                                                                <p>Continous Project Enancement</p>
                                                        </div>
                                                        <div style={{ width: "50%", textAlign: "left" }}>

                                                                <h1 id='rd-percent' >100%</h1>
                                                        </div>
                                                </div>
                                        </div>
                                        <img src={LINE1} id="line"></img>

                                </div>


                                <div id="s4bgimg">
                                        <img id="s4img1" src={rod1} alt="" />
                                        <img id="s4img2" src={rod2} alt="" />
                                </div>
                        </div>


                </>
        )
}

export default Section4