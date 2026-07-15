/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaArrowCircleRight, FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.jpg"
const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "React.js Specialist",
      "Next.js Developer",
      "MERN Stack Developer",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1T1j2bEv8pgBBAHD8HPObhrPvbcmrI3jc/view?usp=sharing', '_blank');
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen pt-20 pb-10 flex items-center"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Welcome to my Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Rabeya Akter
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300"
          >
            A{" "}
            <span className="text-primary">
              {text}
            </span>
            <Cursor cursorBlinking cursorStyle="|" cursorColor="#8b5cf6" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg leading-relaxed max-w-xl"
          >
            Front-End Developer with 2+ years of professional experience building modern, 
            scalable web applications using React.js and Next.js. Passionate about creating 
            intuitive, user-friendly digital experiences with secure authentication and optimized performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={handleDownloadResume}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Download CV
              <FaArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-gray-600 hover:border-primary text-gray-300 hover:text-white font-medium transition-all duration-300 cursor-pointer"
            >
              Contact Me
              <FaArrowCircleRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 pt-4"
          >
            <span className="text-gray-400 text-sm">Follow me:</span>
            <a
              href="https://github.com/RabeyaAkter78"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rabeya-akter-52662622a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center items-center relative"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl" />
          
          {/* Animated circles */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 border border-primary/20 rounded-full animate-pulse" />
          <div className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] border border-purple-500/10 rounded-full animate-pulse delay-100" />

          {/* Profile Image Container */}
          <div className="relative z-10">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <img
                src={logo}
                alt="Rabeya Akter"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 shadow-lg"
            >
              <span className="text-primary font-bold">2.5+ Years</span>
              <span className="text-gray-400 text-xs block">Experience</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 shadow-lg"
            >
              <span className="text-primary font-bold">25+</span>
              <span className="text-gray-400 text-xs block">Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
