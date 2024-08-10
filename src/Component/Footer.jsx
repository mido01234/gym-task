// import './footer.css'
import '../Css/footer.css'
import footerImg from '../assets/footerImg.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div id="footer_compo">
                <div className="container">
                    <div className='footerSection'>
                        <div className="icons">
                            <div><i><FaFacebookF /></i></div>
                            <div><i><FaLinkedinIn /></i></div>
                            <div><i><FaTwitter /></i></div>
                        </div>
                        <div className="links">
                            <p>الرئيسية</p>
                            <p>البرامج</p>
                            <p>تواصل معنا</p>
                        </div>
                        <div className="image">
                            <img src={footerImg} alt="footer image" />
                        </div>
                    </div>
                    <p>© 2024 Gabal. All Rights Reserved. </p>
                </div>
            </div>
        </>
    );
}

export default Footer;