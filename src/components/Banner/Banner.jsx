import {  Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaArrowDown, } from "react-icons/fa";
import bannerImg from '../../assets/images/banner2.png'
import resume from '../../assets/images/Resume-Of-Rabeya-Akter (1).pdf'
const Banner = () => {
    const [text] = useTypewriter({
        words: [ "Forntend Developer.", "MERN Stack Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <section id="home" className="w-full pt-10 pb-20 md:flex  border-b-[1px] border-b-black  ">
            <div className="md:w-1/2 p-2">
                <div className="flex flex-col gap-5 mb-20">
                    <h4 className="text-lg">WELCOME TO RABEYA'S WORLD</h4>
                    <h1 className="text-6xl font-bold ">Hi, I'm <span className="text-sky-900">RABEYA AKTER</span></h1>
                    <h2 className="text-4xl font bold ">A <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                        />

                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quaerat corrupti, rerum nisi consectetur eveniet blanditiis fugit repudiandae ipsa eius?</p>

                </div>
                <div className='my-4 flex justify-between items-center '>
                    {/* <div className=' font-bold '>
                        <h3 >FIND ME IN</h3>
                        <div className="flex gap-4  ">
                            <Link id='github' to="https://github.com/RabeyaAkter78">
                                <FaGithub className='findMeIcon' id='github'></FaGithub>
                            </Link>
                            <Link id='linkedin' to="https://www.linkedin.com/in/rabeya-akter-52662622a">
                                <FaLinkedinIn className='findMeIcon' id='linkedin'></FaLinkedinIn>
                            </Link>
                        </div>
                    </div> */}
                    <div>
                        <a href={resume} download={resume} className='btn btn-outline border-0 border-b-4 border-l-2 shadow shadow-md shadow-2xl shadow-black text-white'>Download CV <FaArrowDown /> </a>
                    </div>
                </div>
            </div>

            {/* right div */}
            <div className="md:w-1/2 md:px-2 flex justify-center items-center relative">
                <img className=' rounded-full border-0 border-b-8 border-b-black shadow shadow-2xl shadow-gray-700 z-10' src={bannerImg} alt="" />

               
            </div>


        </section>
    );
};

export default Banner;