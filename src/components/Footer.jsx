
import './Footer.css'
import social1 from '../assets/social1.png'

import social2 from '../assets/social2.png'
import social3 from '../assets/social3.png'
import social4 from '../assets/social4.png'
import Logo from '../assets/logo.png'
import gmail from '../assets/gmail.png'
import whitepaper from "../assets/whitepaper.pdf"
const Footer = () => {
	return (
		<>
			<div className="fmain">
				<footer className="footer-02" >
					<div className="container" style={{ paddingTop: 73 }}>

						<div className="row">
							<div className="col-md-4 col-lg-5" >
								<div className="row">
									<div className="col-md-12 col-lg-8 mb-md-0 mb-4">
										<img src={Logo} style={{ width: 154,marginBottom:20,
height: 52,}} alt="" />
										<p>The inception of Beyond Nature Global Connections (BNGC) Coin is rooted in a dynamic understanding of the evolving cryptocurrency landscape.</p>
										<li><a href="#" style={{ textDecoration: 'none', color:"white"}} className="py-1 d-block"><img src={gmail} alt=""  style={{width:20, marginRight:15, height:20}} />Info@bngcglobal.com</a></li>

									</div>

								</div>
							</div>
							<div className="col-md-8 col-lg-7">
								<div className="row">
									<div className="r1 col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Quick Links</h2>
										<ul className="list-unstyled">

											<li><a href="#about-main" style={{ textDecoration: 'none' }} className="py-1 d-block">About</a></li>
											<li><a href="" style={{ textDecoration: 'none' }} className="py-1 d-block">Roadmap</a></li>
											<li><a href="#tokenomics" style={{ textDecoration: 'none' }} className="py-1 d-block">Tokenomics</a></li>
											<li><a href={whitepaper} style={{ textDecoration: 'none' }} className="py-1 d-block">Whitepaper</a></li>
											<li><a href="#usecase" style={{ textDecoration: 'none' }} className="py-1 d-block">Usecase</a></li>
										</ul>
									</div>
									<div className="r1 col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">About</h2>
										<ul className="list-unstyled">
										<li><a href="" style={{ textDecoration: 'none' }} className="py-1 d-block">Tokens</a></li>
											<li><a href="#team" style={{ textDecoration: 'none' }} className="py-1 d-block">Staff</a></li>
											
										</ul>
									</div>
									<div className="r1 col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Privacy</h2>
										<ul className="list-unstyled">
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Terms and condition</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Privacy Policy</a></li>

										</ul>
									</div>
									<div className="r1 col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Social</h2>
										<ul className="list-unstyled">
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social1} alt=""  style={{width:30, marginRight:5, height:30}}/>Facebook</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social2} alt=""  style={{width:30, marginRight:5, height:30}} />Instagram</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social3} alt=""  style={{width:30, marginRight:5, height:30}} />Youtube</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social4} alt=""  style={{width:30, marginRight:5, height:30}} />X</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="row mt-5">
							<div className="col-md-6 col-lg-8">


							</div>

						</div>
					</div>
				</footer>
			</div>

		</>
	)
}

export default Footer