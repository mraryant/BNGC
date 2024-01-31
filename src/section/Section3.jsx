import React from 'react'
import '../styles/Section3.css'
import Uc1 from '../assets/u1.png'
import Uc2 from '../assets/u2.png'
import Uc3 from '../assets/u3.png'
import Uc4 from '../assets/u4.png'
import Uc5 from '../assets/u5.png'

const Section3 = () => {
  return (
    <>
      <div className="container s3main" id="usecase">
        <p className="s3head">
          USECASE
        </p>
        <div className="s3usecase" data-aos="fade-left" data-aos-duration="2000">
          <div className="s3left">
            <p className="s3title">
              Staking and Referral Dapp
            </p>
            <p className="s3para">
              The staking mechanism within the BNGC ecosystem allows token
              holders to lock their BNGC Coins for a specified period, contributing
              to the security and functionality of the blockchain. Stakers are rewarded
              with additional BNGC tokens as an incentive for participating in the network's
              governance and maintaining a vested interest in its success.

            </p>
          </div>
          <div className="s3right">
            <img src={Uc1} className='s3img imgmain' alt="" />
          </div>
        </div>

        <div className="s3usecase2" data-aos="fade-right" data-aos-duration="2000">
          <div className="s3left2">
            <p className="s3title">
              Import and Export Utility App
            </p>
            <p className="s3para">
              The Import and Export Utility App is a
              dedicated platform within the BNGC ecosystem that
              streamlines international trade processes. Users can access
              a range of tools and features designed to simplify cross-border
              transactions, manage documentation, and navigate regulatory requirements.
              The app aims to reduce friction in international trade, making it more accessible
              and efficient for businesses and individuals.


            </p>
          </div>
          <div className="s3right2">
            <img src={Uc2} className='s3img2' alt="" />
          </div>
        </div>

        <div className="s3usecase" data-aos="fade-left" data-aos-duration="2000">
          <div className="s3left">
            <p className="s3title">
              Travel Utility App
            </p>

            <p className="s3para">
              The Travel Utility App is tailored to the needs of
              travelers, offering a range of features to enhance their overall
              experience. This may include itinerary management, real-time travel updates,
              and personalized recommendations based on user preferences. The app is designed
              to be a comprehensive travel companion, addressing the diverse needs of modern travelers.



            </p>
          </div>
          <div className="s3right">
            <img src={Uc3} className='s3img' alt="" />
          </div>
        </div>

        <div className="s3usecase2" data-aos="fade-right" data-aos-duration="2000">
          <div className="s3left2">
            <p className="s3title">
              NFT Marketplace
            </p>
            <p className="s3para">
              The NFT Marketplace is a dedicated platform within the BNGC ecosystem for
              buying, selling, and trading non-fungible tokens (NFTs). NFTs represent
              unique digital assets, such as digital art, music, and virtual real estate.
              The marketplace provides a decentralized and transparent environment for artists,
              collectors, and enthusiasts to engage in NFT transactions.


            </p>
          </div>
          <div className="s3right2">
            <img src={Uc4} className='s3img2' alt="" />
          </div>
        </div>

        <div className="s3usecase" data-aos="fade-left" data-aos-duration="2000">
          <div className="s3left">
            <p className="s3title">
              MetaVerse AR - VR
            </p>
            <p className="s3para">
              MetaVerse AR - VR introduces users to a virtual reality (VR)
              and augmented reality (AR) environment within the BNGC ecosystem.
              This immersive experience goes beyond traditional interactions, offering
              users a unique and engaging way to connect with the blockchain and other participants.


            </p>
          </div>
          <div className="s3right">
            <img src={Uc5} className='s3img' alt="" />
          </div>
        </div>


      </div>
    </>
  )
}

export default Section3