import { useEffect } from 'react'
import '../styles/Section1.css'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import whitepaper from "../assets/whitepaper.pdf"
import 'aos/dist/aos.css';
import '../styles/buttons.css'
// import video from "../assets/4787274_Leaf_Border_Flower_1280x720.mp4"
import video from "../assets/hero bg.mp4"
import blobV from "../assets/blob v2.mp4"
const Section1 = () => {
    useEffect(() => {
        AOS.init({ duration: "1000" });

    }, [])

    return (
        <>

            <Navbar />
            <div className="section1">
                <video id="vid" className='.vignette' autoPlay muted loop  >
                    <source src={video} type="video/mp4" />
                </video>
                <div className='shadow'></div>
                <div className='shadow2'></div>

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
                            but also offers a diverse set of use cases that cater to various aspects of {"users'"} lives.
                        </p>
                    </div>




                    <div data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="3500" className="mission">
                        <p className="missionhead">MISSION</p>
                        <p className="missionpara">The mission of BNGC Coin is to create a decentralized platform that not only tackles challenges within the existing cryptocurrency landscape but also provides a wide range of use cases. This platform is crafted to address various aspects of {"users'"} lives, offering solutions that surpass the limitations of the current cryptocurrency environment.
                        </p>
                    </div>


                </div>
                <div id="s1-video">
                    <div id='hero-blob'>
                        <video id='blobV' autoPlay loop muted src={blobV}></video>
                    </div>
                </div>

                <div className="sec1button">
                    <div className="bustton">
                        <a className='btn' href='https://presale.bngcglobal.com/' target='blank' style={{ textDecoration: "none" }} > Buy Now
                        </a>
                    </div>
                    <div className="bustton">
                        <a className='btn' href={whitepaper} target='blank' style={{ textDecoration: "none" }}  >Whitepaper
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Section1