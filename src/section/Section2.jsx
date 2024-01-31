import   {useState} from 'react'
import '../styles/Section2.css'
import S2spin from '../assets/spin.jpg'
import S2coin from '../assets/s2coin.png'
import conV from '../assets/conv.mp4'
import Copy from '../assets/copy (1).webp'
import BSC from '../assets/bsc.webp'
 

const Section2 = () => {
  const [copied, setCopied] = useState(false);
  const text = "0xc755377CD13ca4BedB87EED8D2C5105d46FFC388"

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Hide the popup after 2 seconds
      })
      .catch(err => {
        console.error('Copy failed: ', err);
      });
  };
  return (
    <>
      <div className="sec2main" id="about-main">
        <div className="s2right">
          <img src={S2spin} className='s2spin rotate-center' alt="" />
          <img src={S2coin} className='s2coin' alt="" />
        </div>

        <div className="s2left" data-aos="fade-up"
          data-aos-duration="3000" >
          <p className="s2head " style={{fontSize:"30px"}}>
            About Us
          </p>
          <p className="s2head">
            We are here to help.
          </p>
          <p className="s2para">
            BNGC Coin addresses challenges in traditional finance, offering a decentralized alternative amidst the evolving cryptocurrency landscape. It aims to transcend limitations and establish a new path in the digital asset realm.
          </p>
          <p className="s2smallhead">
            1. Evolution of Cryptocurrencies
          </p>
          <p className="smallpara">
            A brief historical overview of the evolution of cryptocurrencies, highlighting key milestones and challenges.
            Recognition of the gaps and limitations within traditional financial systems that pave the way for innovative solutions like BNGC.

          </p>
          <p className="s2smallhead">
            2. Market Analysis
          </p>
          <p className="smallpara">
            An analysis of the current state of the cryptocurrency market, identifying trends, opportunities, and areas for improvement.
            Discussion on the increasing demand for versatile tokens with practical use cases.

          </p>
        </div>

        
      </div>

      <div id="contract1">
        <video id='conV' autoPlay muted loop src={conV}>   
        </video>
        <div className='shadow'></div>
        <div className='shadow2'></div>

        <div id="contract">

          <h5 style={{ color: 'white' }}>Contract Address</h5>
          <h3 style={{ color: 'white' }}>{text}</h3>
          <div id="contract-button">

            <button className="btn " style={{width:"230px"}} onClick={handleCopy}><span ><img src={Copy} style={{ width: 25, height: 25, marginRight: 15, }} alt="" />
              Copy Address</span>
            </button>
            <button className="btn" style={{ width: "230px" }} onClick={() => window.open('https://bscscan.com/address/0xc755377CD13ca4BedB87EED8D2C5105d46FFC388', '_blank')}><span ><img src={BSC} style={{ width: 25, height: 25, marginRight: 15, }} alt="" />
              BSC SCAN</span>
            </button>
          </div>
          {copied && <div className="popup mt-3" style={{ zIndex:1, color: "white", }}>Copied to clipboard!</div>}
        </div>
      </div>
    </>
  )
}

export default Section2