import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const aboutData = [
  {
    id: 1,
    icon: FaUser,
    title: "Hi, I'm Rabeya Akter",
    content:
      "I am a dedicated and creative web developer with 2+ years of professional experience, specializing in React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Ant Design, HTML5, CSS3, and Git. I am currently studying Computer Science and Engineering at Northern University Bangladesh. Fluent in Bangla and English, with working knowledge of Hindi, I excel at building responsive, accessible, and performant web applications.",
  },
  {
    id: 2,
    icon: FaLaptopCode,
    title: "Knowledge & Expertise",
    content:
      "Building interactive, accessible, and performant UI components. State management with React Hooks, Redux Toolkit, and Context API. Version control with Git and collaborative workflows on GitHub. RESTful API integration and async data handling. Debugging, testing, and performance optimization. Understanding backend fundamentals using Node.js and Express.",
  },
  {
    id: 3,
    icon: FaGraduationCap,
    title: "Education & Training",
    content:
      "BSc in Computer Science and Engineering from Northern University Bangladesh, Dhaka. Diploma in Computer Engineering from Gopalganj Polytechnic Institute, Gopalganj. Complete Web Development Level-1 and Level-2 from Programming Hero.",
  },
  {
    id: 4,
    icon: FaRocket,
    title: "Professional Goal",
    content:
      "My goal is to continuously enhance my skills as a frontend developer, contributing to innovative projects that improve user experience. I aim to master full-stack development, understand scalable architectures, and deliver elegant, efficient web solutions that drive business success.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="about" className="w-full py-20 px-4">
      <SectionTitle subHeading="Who I Am" heading="About Me" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aboutData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-primary/30 transition-all duration-500 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "25+", label: "Projects Completed" },
            { value: "30+", label: "Happy Clients" },
            { value: "100%", label: "Commitment" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-primary/20 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
