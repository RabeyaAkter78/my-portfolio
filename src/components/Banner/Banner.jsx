import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaArrowCircleRight, FaArrowDown } from "react-icons/fa";
import bannerImg from '../../assets/images/banner2.png'
import resume from '../../assets/images/Resume-Of-Rabeya-Akter (1).pdf'
import { Link } from 'react-scroll';
const Banner = () => {
    const [text] = useTypewriter({
        words: ["Forntend Developer.", "MERN Stack Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <section id="home" className="w-full pt-10 pb-20 md:flex  border-b-[1px] border-b-black  ">


            <div className="md:w-1/2 p-8 lg:p-2">
                <div data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <div className="flex flex-col gap-5 mb-20 overflow-x-hidden">
                        <h4 className="text-lg uppercase">WELCOME TO My Portfolio!</h4>
                        <h1 className="text-5xl lg:text-6xl font-bold ">Hi, I'm <span className="text-sky-900">RABEYA AKTER</span></h1>
                        <h2 className="text-3xl lg:text-4xl font bold ">A <span>{text}</span>
                            <Cursor
                                cursorBlinking="false"
                                cursorStyle="|"
                            />

                        </h2>
                        <p>Passionate self-taught web developer proficient in MERN stack, JavaScript, HTML, CSS. Committed to creating captivating, user-friendly websites with responsive interfaces and RESTful APIs.</p>

                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000">
                    <div className='my-4 flex lg:flex-row flex-col gap-10 lg:gap-4  items-center '>
                        <div>
                            <a href={resume} download={resume} className='btn btn-outline border-0 border-b-4 border-l-2 shadow-2xl shadow-black '>Download CV <FaArrowDown /> </a>
                        </div>
                        <div>
                            <Link to="contact" className='btn btn-outline border-0 border-b-4 border-l-2 shadow-2xl shadow-black '>Contact<FaArrowCircleRight /> </Link>
                        </div>

                    </div>
                </div>


            </div>

            {/* right div */}

            <div data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="p-5 md:w-1/2 md:px-2 flex justify-center items-center relative">
                <img className=' rounded-full border-0 border-b-8 border-b-black shadow shadow-2xl shadow-gray-700 z-10' src={bannerImg} alt="" />


            </div>



        </section>
    );
};

export default Banner;