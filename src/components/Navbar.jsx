
import "./Navbar.css"
import Logo from "../assets/logo.png"
// import Logo from "../../../assets/logo/logo color2 name.svg"
import { motion } from "framer-motion"
import burger from '../assets/menu.png'
const Navbar = () => {

    const animation = {
        initial: {
            opacity: 0, y: -30
        },

        transition: {
            ease: "backInOut",
            staggerChildren: 2,
            duration: 1
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "backInOut",
                delay: 0.4,
                type: "spring",
                duration: 1.5
            },
        }
    };

    return (
        <>
            <motion.nav
                initial="initial"
                animate="whileInView"
                variants={animation}

                className=" navbar navbar-expand-lg navbar-light topnav">
                <div className="container-fluid navfluid" >
                    <img id="logo"
                        src={Logo}
                    />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       
                        <img className="navbar-toggler-icon" src={burger} alt="" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div style={{ width: "30%" }}>

                        </div>
                        <ul

                            className="navbar-nav me-auto mb-2 mb-lg-0 ngflex" >
                            <li className="nav-item">
                                <a className="nav-link active" style={{color:"white" , fontFamily:'revert',}} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{color:"white" , fontFamily:'revert',}} href="#about-main">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{color:"white" , fontFamily:'revert'}} href="#usecase">UseCase</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{color:"white" , fontFamily:'revert'}} href="#tokenomics">Tokenomics</a>
                            </li>
                           
                          
                            <li className="nav-item">
                                <a className="nav-link" style={{color:"white" , fontFamily:'revert'}} href="">Staking</a>
                            </li>
                        </ul>
                        <form className="d-flex ngflex">

                            
                            <button className="btn  "  > <a style={{ textDecoration: 'none', color: 'white' }} target="block" href="https://presale.bngcglobal.com/">Buy Tokens </a> </button>
                        </form>
                    </div>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar