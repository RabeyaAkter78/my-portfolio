import SectionTitle from "../SectionTitle/SectionTitle";
import img from "../../assets/images/projects/danceAcademy/img.png";

const About = () => {
  return (
    <section
      id="about"
      className="pt-16 pb-24 border-b border-gray-800 bg-gray-50 dark:bg-gray-900"
    >
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
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="max-w-xl text-gray-900 dark:text-gray-100"
          >
            {/* Intro */}
            <p className="mb-8 text-lg leading-relaxed">
              <span className="block text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                Hi, I'm Rabeya Akter
              </span>
              I am a dedicated and creative frontend web developer with 1 year of
              professional experience specializing in React.js, JavaScript,
              TypeScript, Tailwind CSS, Bootstrap, HTML5, CSS3, and Git. I hold a
              Diploma in Computer Engineering from Gopalganj Polytechnic Institute.
              Fluent in Bangla and English, with a working knowledge of Hindi, I
              excel at building responsive, accessible, and performant web
              applications.
            </p>

            {/* Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-orange-400 inline-block">
                Experience
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>
                  Over 1 year of hands-on frontend development, focused on MERN
                  stack and modern frontend frameworks.
                </li>
                <li>
                  Successfully delivered 20+ web applications featuring
                  responsive design, clean UI, and seamless user experience.
                </li>
                <li>
                  Collaborated with designers, backend developers, and product
                  managers to translate requirements into functional,
                  user-friendly interfaces.
                </li>
                <li>
                  Maintained code quality using version control (Git),
                  implemented reusable components, and followed best practices.
                </li>
                <li>
                  Optimized applications for performance, accessibility, and
                  SEO.
                </li>
              </ul>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-pink-600 inline-block">
                Skills & Technologies
              </h3>
              <p className="text-lg mb-2">
                React.js, JavaScript (ES6+), TypeScript, Tailwind CSS, Bootstrap,
                HTML5, CSS3, Git & GitHub, REST APIs, Responsive & Mobile-first
                Design, Redux Toolkit, Context API, Basic Node.js & Express.
              </p>
            </section>

            {/* Knowledge */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-orange-400 inline-block">
                Knowledge & Expertise
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Building interactive, accessible, and performant UI components.</li>
                <li>State management with React hooks, Redux Toolkit, and Context API.</li>
                <li>Version control with Git and collaborative workflows on GitHub.</li>
                <li>RESTful API integration and asynchronous data handling.</li>
                <li>Debugging, testing, and performance optimization techniques.</li>
                <li>Understanding backend fundamentals with Node.js and Express.</li>
              </ul>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-pink-600 inline-block">
                Education
              </h3>
              <p className="text-lg">
                Diploma in Computer Engineering <br />
                Gopalganj Polytechnic Institute, Bangladesh
              </p>
            </section>

            {/* Goal */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-orange-400 inline-block">
                Professional Goal
              </h3>
              <p className="text-lg leading-relaxed">
                My goal is to continuously enhance my skills as a frontend developer,
                contributing to innovative projects that improve user experiences.
                I aim to master full-stack development, deepen my understanding of
                scalable architectures, and deliver elegant, efficient web
                solutions that drive business success.
              </p>
            </section>

            {/* Projects Summary */}
            <p className="mb-8 text-lg leading-relaxed border-l-4 border-pink-600 pl-4">
              I’ve completed{" "}
              <span className="text-4xl font-extrabold text-pink-600">20+</span>{" "}
              projects focused on building dynamic and user-friendly MERN stack applications.
              Feel free to explore my projects section for more details.
            </p>

            {/* Contact */}
            <div className="text-lg">
              <h3 className="text-2xl font-semibold mb-3">Get In Touch</h3>
              <p className="mb-2">
                Phone:{" "}
                <a
                  href="tel:+8801969687876"
                  className="font-bold text-orange-500 hover:underline"
                >
                  +88 01969 687876
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:rabeyaakter7876@gmail.com"
                  className="font-bold text-pink-600 hover:underline"
                >
                  rabeyaakter7876@gmail.com
                </a>
              </p>
              <p className="mt-4">
                I’m always open to discussing new projects, collaborations, or
                opportunities. Let’s build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
