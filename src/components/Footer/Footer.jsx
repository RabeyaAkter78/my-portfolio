import { Link } from "react-scroll";
import github from "../../assets/images/github.png";
import Linkedin from "../../assets/images/Linkedin.png";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center my-10 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link to="home" className=" link-hover">Home</Link>
                    <Link to="about" className=" link-hover">About</Link>
                    <Link to="skills" className=" link-hover">Skills</Link>
                    <Link to="projects" className=" link-hover">Projects</Link>
                    <Link to="contact" className=" link-hover">Contact</Link>
                </div>


                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://github.com/RabeyaAkter78">
                            <img className="fill-current" src={github} alt="" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/rabeya-akter-52662622a">
                            <img className="fill-current" src={Linkedin} alt="" />
                        </Link>


                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Rabeya Akter</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;