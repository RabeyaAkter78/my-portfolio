import SectionTitle from "../SectionTitle/SectionTitle";
import img from "../../assets/images/projects/danceAcademy/img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // smooth animation
      once: true, // animation runs only once
      offset: 120, // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <section id="about" className="pt-16 pb-24 border-b ">
      <SectionTitle heading="About Me" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          {/* Profile Image */}
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            className="flex-shrink-0"
          >
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-8 border-gradient-to-tr from-orange-400 to-pink-500">
              <img
                src={img}
                alt="Rabeya Akter"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 opacity-10 pointer-events-none"></div>
            </div>
          </div>

          {/* Text Content */}
          <div data-aos="fade-left" data-aos-delay="200" className="max-w-xl ">
            <p className="mb-8 text-lg leading-relaxed">
              <span className="block text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">
                Hi, I'm Rabeya Akter
              </span>
              I am a dedicated and creative web developer with 1 year of
              professional experience , specializing in React.js,Next js,
              JavaScript, TypeScript, Tailwind CSS,Ant design, HTML5, CSS3, and
              Git. I am currently studying Computer Science and Engineering at
              Northern University Bangladesh.Fluent in Bangla and English, with
              a working knowledge of Hindi, I excel at building responsive,
              accessible, and performant web applications.
            </p>

            {/* Knowledge */}
            <section className="mb-8" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-orange-400 inline-block">
                Knowledge & Expertise
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>
                  Building interactive, accessible, and performant UI
                  components.
                </li>
                <li>
                  State management with React hooks, Redux Toolkit, and Context
                  API.
                </li>
                <li>
                  Version control with Git and collaborative workflows on
                  GitHub.
                </li>
                <li>RESTful API integration and asynchronous data handling.</li>
                <li>
                  Debugging, testing, and performance optimization techniques.
                </li>
                <li>
                  Understanding backend fundamentals with Node.js and Express.
                </li>
              </ul>
            </section>

            {/* Education */}
            <section className="mb-8" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-pink-600 inline-block">
                Education
              </h3>
              <p className="text-lg mb-5">
                <span className="font-bold">
                  Computer Science and Engineering{" "}
                </span>
                <br />
                Northern University Bangladesh, Dhaka.
              </p>
              <p className="text-lg">
                <span className="font-bold">
                  {" "}
                  Diploma in Computer Engineering
                </span>{" "}
                <br />
                Gopalganj Polytechnic Institute, Gopalganj.
              </p>
            </section>
            <section className="mb-8" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-pink-600 inline-block">
                Training
              </h3>
              <p className="text-lg mb-5">
                <span className="font-bold">Complete Web Development L-1</span>
                <br />
                Programming Hero, Online.
              </p>
              <p className="text-lg">
                <span className="font-bold">
                  Next Level Web Development, L-2
                </span>{" "}
                <br />
                Programming Hero, Online.
              </p>
            </section>

            {/* Professional Goal */}
            <section className="mb-8" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-orange-400 inline-block">
                Professional Goal
              </h3>
              <p className="text-lg leading-relaxed">
                My goal is to continuously enhance my skills as a frontend
                developer, contributing to innovative projects that improve user
                experiences. I aim to master full-stack development, deepen my
                understanding of scalable architectures, and deliver elegant,
                efficient web solutions that drive business success.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
