import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaRegArrowAltCircleUp } from "react-icons/fa";
import "aos/dist/aos.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Aos from "aos";
import p1 from "../../assets/images/projects/danceAcademy/p1.png";
// 🧠 Sample Projects Array (replace with your real data)
const projectData = [
  {
    _id: 1,
    image: p1,
    heading: "Dance Academy",
    sub_heading: "A modern platform for dance learners",
    liveLink: "/project/dance-academy",
    client: "/github/client-dance",
    server: "/github/server-dance",
  },
  {
    _id: 2,
    image: p1,
    heading: "E-Commerce App",
    sub_heading: "React-based shopping platform",
    liveLink: "/project/ecommerce-app",
    client: "/github/client-ecommerce",
    server: "/github/server-ecommerce",
  },
  {
    _id: 3,
    image: p1,
    heading: "Portfolio Website",
    sub_heading: "Personal portfolio built with React",
    liveLink: "/project/portfolio",
    client: "/github/client-portfolio",
    server: "/github/server-portfolio",
  },
];

const AllProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="projects">
      <SectionTitle
        subHeading="Visit my projects and keep your feedback..."
        heading="My Projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
        {projectData.map((project) => (
          <div
            key={project._id}
            data-aos="fade-up"
            data-aos-delay="100"
            className="card w-full h-[450px] bg-gradient-to-r from-transparent via-gray-300 to-neutral-700 shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105"
          >
            <figure className="w-full h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.heading}
                className="w-full h-full object-cover rounded-t-lg hover:scale-110 transition-transform duration-500"
              />
            </figure>
            <div className="card-body text-center">
              <p className="text-white font-semibold">
                Name: {project.heading}
              </p>
              <p className="text-white text-sm">
                Description: {project.sub_heading}
              </p>

              <div className="card-actions justify-center gap-4 mt-4">
                <Link
                  to={project.liveLink}
                  className="tooltip"
                  data-tip="Live Preview"
                >
                  <button className="btn btn-outline border-b-4 border-black shadow text-sky-950">
                    <FaRegArrowAltCircleUp />
                  </button>
                </Link>

                <Link
                  to={project.client}
                  className="tooltip"
                  data-tip="Client Code"
                >
                  <button className="btn btn-outline border-b-4 border-black shadow text-sky-950">
                    <FaGithub />
                  </button>
                </Link>

                <Link
                  to={project.server}
                  className="tooltip"
                  data-tip="Server Code"
                >
                  <button className="btn btn-outline border-b-4 border-black shadow text-sky-950">
                    <FaGithub />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
