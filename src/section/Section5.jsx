 
import '../styles/Section5.css'
import Toke from '../assets/1.png'

import partener1 from "../assets/pr1.svg"
import partener2 from "../assets/pr2.png"
import partener3 from "../assets/pr3.png"
import partener4 from "../assets/pr4.svg"
import vrimg from "../assets/vrimg.jpg"

const Section5 = () => {
    return (
        <>
            <div className="s5main" id='tokenomics'>
                <p className="s3head">
                    Tokenomics
                </p>
                <div className="indicator">
                    <div className="i">
                        <div className="color1"></div>
                        <p className="c">Community</p>
                    </div>
                    <div className="i">
                        <div className="color3"></div>
                        <p className="c">Investors</p>
                    </div>
                    <div className="i">
                        <div className="color2"></div>
                        <p className="c">Founding Team</p>
                    </div>
                    <div className="i">
                        <div className="color5"></div>
                        <p className="c">Advisor</p>
                    </div>
                    <div className="i">
                        <div className="color4"></div>
                        <p className="c">Treasury</p>
                    </div>

                </div>

                <div className="toke">
                    <div className="tokeleft">
                        <div className='tokediv' data-aos="fade-left" data-aos-duration="2000">
                            <p className='tokename'>Coin Name</p>
                            <p className='tokedesc'>Beyond Nature Global Connections (BNGC)</p>
                        </div>
                        <div className='tokediv' data-aos="fade-left" data-aos-duration="2000">
                            <p className='tokename'>Symbol</p>
                            <p className='tokedesc'>BNGC</p>
                        </div>
                        <div className='tokediv' data-aos="fade-left" data-aos-duration="2000">
                            <p className='tokename'>Network</p>
                            <p className='tokedesc'>BEP20</p>
                        </div>
                        <div className='tokediv' data-aos="fade-left" data-aos-duration="2000">
                            <p className='tokename'>Total Supply</p>
                            <p className='tokedesc'>54 Cr. (15% coins subject to burning)</p>
                        </div>
                        <div className='tokediv' data-aos="fade-left" data-aos-duration="2000">
                            <p className='tokename'>Decimals</p>
                            <p className='tokedesc'>18</p>
                        </div>
                    </div>
                    <div className="tokeright">
                        <img src={Toke} className='tokeimg' alt="" />
                    </div>
                </div>
            </div>

            <div id="parteners-main" >
                <h1 id="H1">STRATEGIC <span   >PARTENERS</span>  </h1>
                <div id="parteners-main2" >
                    <img src={partener1} alt="" />
                    <img src={partener2} alt="" />
                    <img src={partener3} alt="" />
                    <img src={partener4} alt="" />

                </div>
            </div>

            <div id="vr-section">
                <img   src={vrimg} alt="" />
                <div id="vr-content">
                    <h1>Integration with Augmented and Virtual Reality:</h1>
                    <p>The integration of MetaVerse AR - VR with augmented and virtual reality technologies creates a dynamic and interactive space for users. It may include features like virtual meetups, conferences, or even exploration of virtual landscapes</p>
                </div>
            </div>
        </>
    )
}

export default Section5