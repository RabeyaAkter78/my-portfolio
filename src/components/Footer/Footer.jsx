import { Link } from "react-scroll";
import github from "../../assets/images/github.png";
import Linkedin from "../../assets/images/Linkedin.png";
import twitter from '../../assets/images/projects/danceAcademy/twitter.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center my-10 rounded  ">
                <div className="grid grid-flow-col gap-4">
                    <Link to="home" className=" link-hover">Home</Link>
                    <Link to="about" className=" link-hover">About</Link>
                    <Link to="skills" className=" link-hover">Skills</Link>
                    <Link to="projects" className=" link-hover">Projects</Link>
                    <Link to="contact" className=" link-hover">Contact</Link>
                </div>
                <div >
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/RabeyaAkter78">
                            <img className="fill-current" src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/rabeya-akter-52662622a">
                            <img className="fill-current" src={Linkedin} alt="" />
                        </a>
                        <a href="https://twitter.com/rabeyariya96859?t=PmBXNP1aPyMDrciMh56aUw&s=08&fbclid=IwAR334O4ZCGiiCSzFYDjCtmwvHEDgNNkkp2iiYYNKVVIod28p42izleWIS7k">
                           <img className="fill-current" src={twitter} alt="" />
                        </a>

                    </div>
                </div>
                <div className="mb-4">
                    <p>Copyright © 2024 - All right reserved by Rabeya Akter</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;