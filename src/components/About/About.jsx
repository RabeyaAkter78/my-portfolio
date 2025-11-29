import SectionTitle from "../SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const timeline = [
  {
    title: "Hi, I'm Rabeya Akter",
    content:
      "I am a dedicated and creative web developer with 1.5+ year of professional experience, specializing in React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Ant Design, HTML5, CSS3, and Git. I am currently studying Computer Science and Engineering at Northern University Bangladesh. Fluent in Bangla and English, with working knowledge of Hindi, I excel at building responsive, accessible, and performant web applications.",
  },
  {
    title: "Knowledge & Expertise",
    content:
      "Building interactive, accessible, and performant UI components. State management with React Hooks, Redux Toolkit, and Context API. Version control with Git and collaborative workflows on GitHub. RESTful API integration and async data handling. Debugging, testing, and performance optimization. Understanding backend fundamentals using Node.js and Express.",
  },
  {
    title: "Education",
    content:
      "BSc in Computer Science and Engineering from Northern University Bangladesh, Dhaka. Diploma in Computer Engineering from Gopalganj Polytechnic Institute, Gopalganj.",
  },
  {
    title: "Training",
    content:
      "Complete Web Development Level-1 (Programming Hero). Next Level Web Development Level-2 (Programming Hero).",
  },
  {
    title: "Professional Goal",
    content:
      "My goal is to continuously enhance my skills as a frontend developer, contributing to innovative projects that improve user experience. I aim to master full-stack development, understand scalable architectures, and deliver elegant, efficient web solutions that drive business success.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section id="about" className="pt-20 pb-24 border-b">
      <SectionTitle heading="About Me" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Timeline Wrapper */}
        <div className="relative border-l-2 border-primary/40 dark:border-primary/60 ml-4 md:ml-10">
          {timeline.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative pl-10 mb-12"
            >
              {/* Progress Dot */}
              <span
                className="
                absolute -left-3 top-1 w-3 h-3 rounded-full 
                bg-primary dark:bg-primary 
                shadow-md
              "
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* Content */}
              <p className="text-[16px] leading-relaxed opacity-80">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
