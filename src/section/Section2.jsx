import React from 'react'
import '../styles/Section2.css'
import S2spin from '../assets/s2spin.png'
import S2coin from '../assets/s2coin.png'
const Section2 = () => {
  return (
    <>
      <div className="sec2main" id="about-main">
        <div className="s2left" data-aos="fade-up"
     data-aos-duration="3000" >
          <p className="s2head">
          About Us
          </p>
          <p className="s2para">
          The inception of Beyond Nature Global Connections (BNGC) Coin is rooted in a dynamic
           understanding of the evolving cryptocurrency landscape. As traditional financial
            systems face challenges, the need for a decentralized and inclusive alternative
             becomes evident. BNGC emerges from this context, driven by a desire to transcend
              the limitations of existing systems and forge a new path in the world of digital assets.

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

        <div className="s2right">
<img src={S2spin} className='s2spin rotate-center' alt="" />
<img src={S2coin} className='s2coin' alt="" />
        </div>
      </div>
    </>
  )
}

export default Section2