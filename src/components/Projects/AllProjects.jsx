import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaRegArrowAltCircleUp } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";
import SectionTitle from "../SectionTitle/SectionTitle";
import p1 from "../../assets/images/projects/danceAcademy/p1.png";
import p2 from "../../assets/images/projects/danceAcademy/p2.png";
import p3 from "../../assets/images/projects/danceAcademy/1.png";

const projectData = [
  {
    _id: 1,
    image: p1,
    heading: "Qwikr",
    sub_heading: "An E-Commerce Website",
    liveLink: "https://qwikr.us/",
    technology:
      "Next Js, Typescript, Redux, Ant Design, Framer Motion, Stripe, Geolocation",
    features: [
      "Location-based order checking",
      "Guest checkout system",
      "Age verification",
      "Fully responsive design",
    ],
    isClientProject: true,
  },
  {
    _id: 2,
    image: p2,
    heading: "Kurated AI",
    sub_heading: "An E-Learning Website",
    liveLink: "https://kurated-ai-one.vercel.app/overalHome",
    technology:
      "Next.js, Typescript, Redux, Ant Design, Framer Motion, DnD Toolkit, TailwindCSS",
    features: [
      "Google & LinkedIn login",
      "Drag-and-drop lesson creation",
      "Practice modules",
      "Fully responsive design",
    ],
    isClientProject: true,
  },
  {
    _id: 3,
    image: p3,
    heading: "Dance Academy",
    sub_heading: "E-Learning Platform",
    liveLink: "https://dance-academy-72a3f.web.app/",
    client: "https://github.com/RabeyaAkter78/dance-academy-client",
    server: "https://github.com/RabeyaAkter78/dance-academt-server",
    technology:
      "Javascript, React Js, Tailwind, Axios, Firebase, Mongo DB, Express JS, Stripe",
    features: [
      "User authentication",
      "Interactive lessons",
      "Stripe payment integration",
    ],
  },
];

const AllProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="projects" className="py-12 bg-gradient-to-r ">
      <SectionTitle
        subHeading="Visit my projects and keep your feedback..."
        heading="My Projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {projectData.map((project) => (
          <div
            key={project._id}
            data-aos="fade-up"
            className="bg-neutral-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
          >
            <figure className="w-full h-60 overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.heading}
                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>

            <div className="p-6 flex flex-col justify-between ">
              <div>
                <h3 className="text-orange-700 font-bold text-xl">
                  {project.heading}
                </h3>
                <p className="text-orange-500 text-sm mt-1">
                  {project.sub_heading}
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  <span className="font-semibold">Technology:</span>{" "}
                  {project.technology}
                </p>
                {project.features && (
                  <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1 text-sm">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex justify-center items-center  gap-3 mt-4">
                <Link to={project.liveLink} target="_blank">
                  <button className="bg-orange-500 text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-orange-600 transition-all">
                    <FaRegArrowAltCircleUp /> Live
                  </button>
                </Link>

                {!project.isClientProject && project.client && (
                  <Link to={project.client} target="_blank">
                    <button className="bg-yellow-400 text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-yellow-500 transition-all">
                      <FaGithub /> Client
                    </button>
                  </Link>
                )}
                {!project.isClientProject && project.server && (
                  <Link to={project.server} target="_blank">
                    <button className="bg-yellow-400 text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-yellow-500 transition-all">
                      <FaGithub /> Server
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
