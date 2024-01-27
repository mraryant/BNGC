import  { useEffect } from 'react'
import '../styles/Section1.css'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import whitepaper from "../assets/whitepaper.pdf"
import 'aos/dist/aos.css';
import '../styles/buttons.css'
import video from "../assets/1237184_Night_Backgrounds_Space_1920x1080 (1) (1).mp4"
const Section1 = () => {
    useEffect(() => {
        AOS.init({ duration: "1000" });

    }, [])

    return (
        <>

            <Navbar />
            <div className="section1">
                <video id="vid" className='.vignette' autoPlay muted loop  >
                   <source src={video} type="video/mp4"/>
                </video>
                 <div className='shadow'></div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="sectitle">
                    <p className="sectitle1">Beyond Nature Global <br />
                        Connections
                    </p>
                </div>
                <div className="sec1desc" >
                    <div className="vision" data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="5500">
                        <p className="visionhead">VISION</p>
                        <p className="visionpara">BNGC Coin is driven by a clear, ambitious vision—to foster global
                            connections beyond geographical constraints. The mission is to establish a decentralized
                            platform that not only addresses the challenges within the current cryptocurrency landscape
                            but also offers a diverse set of use cases that cater to various aspects of users' lives.
                        </p>
                    </div>
                    <div data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="3500" className="mission">
                        <p className="missionhead">MISSION</p>
                        <p className="missionpara">BNGC Coin is driven by a clear, ambitious vision—to foster global
                            connections beyond geographical constraints. The mission is to establish a decentralized
                            platform that not only addresses the challenges within the current cryptocurrency landscape
                            but also offers a diverse set of use cases that cater to various aspects of users' lives.
                        </p>
                    </div>
                </div>
                <div className="sec1button">
                    <div className="bustton">
                        <a href='https://presale.bngcglobal.com/' target='blank' style={{ textDecoration: "none" }} className='button'> Buy Now
                        </a>
                    </div>
                    <div className="bustton">
                        <a href={whitepaper} target='blank' style={{ textDecoration: "none" }} className='button'>Whitepaper
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Section1