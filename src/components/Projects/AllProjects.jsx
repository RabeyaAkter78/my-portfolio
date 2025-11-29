import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaRegArrowAltCircleUp } from "react-icons/fa";
import "aos/dist/aos.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Aos from "aos";
import p1 from "../../assets/images/projects/danceAcademy/p1.png";
import p2 from "../../assets/images/projects/danceAcademy/1.png";
import p3 from "../../assets/images/projects/danceAcademy/p2.png";
// 🧠 Sample Projects Array (replace with your real data)
const projectData = [
  {
    _id: 1,
    image: p2,
    heading: "Dance Academy",
    sub_heading: "E-Learning Platfrom",
    liveLink: "https://dance-academy-72a3f.web.app/",
    client: "https://github.com/RabeyaAkter78/dance-academy-client",
    server: "https://github.com/RabeyaAkter78/dance-academt-server",
    technology:
      "Javascript ,React Js, Tailwind, Axios, Firebase, Mongo DB, Express JS, Stripe.",
  },
  {
    _id: 2,
    image: p1,
    heading: "SHowFlix",
    sub_heading: "A Movie Streeming Website",
    liveLink: "https://movie-series-client.vercel.app/",
    client: "https://github.com/Moniruzzaman2525/movie-series-client.git",
    server: "https://github.com/Moniruzzaman2525/movie-series-server.git",
    admin: "moniurzzaman25@gmail.com",
    pass: "Manik2525",
    technology:
      "Next Js, Typescript, ShadCN UI, Framer Motion, SSL Commerce,PostgreSQL,Prisma ",
  },

  {
    _id: 3,
    image: p3,
    heading: "BDCraft",
    sub_heading: "This is a Social Media and E-commerce website",
    liveLink: "https://bd-craft-client.web.app/",
    client: "https://github.com/tariik12/bd-crafts-client",
    server: "https://github.com/Rayhan108/bdCrafts-server",
    technology: "React, Tailwind, Stripe.js, Firebase Mongo DB, Node.js",
  },
];

const AllProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="projects" className=" py-12">
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
            className="card w-full h-[550px] bg-white shadow-lg rounded-xl border border-gray-200 transition-transform duration-300 hover:scale-105"
          >
            <figure className="w-full h-60 overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.heading}
                className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
              />
            </figure>
            <div className="card-body text-center px-4 py-6 h-40">
              <p className="text-gray-800 font-semibold text-lg">
                {project.heading}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {project.sub_heading}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-medium">Technology:</span>{" "}
                {project.technology}
              </p>
              {project?.admin && (
                <>
                  <p className="text-gray-500 text-sm mt-1">
                    <span className="font-medium">Admin:</span> {project.admin}
                  </p>
                  <p className="text-gray-500 text-sm">
                    <span className="font-medium">Password:</span>{" "}
                    {project.pass}
                  </p>
                </>
              )}

              <div className="card-actions justify-center gap-4 mt-4">
                <Link
                  to={project.liveLink}
                  className="tooltip"
                  data-tip="Live Preview"
                >
                  <button className="btn btn-outline border border-primary text-primary hover:bg-primary hover:text-white rounded-full px-4 py-2 transition-all">
                    <FaRegArrowAltCircleUp />
                  </button>
                </Link>
                <Link
                  to={project.client}
                  className="tooltip"
                  data-tip="Client Code"
                >
                  <button className="btn btn-outline border border-primary text-primary hover:bg-primary hover:text-white rounded-full px-4 py-2 transition-all">
                    <FaGithub />
                  </button>
                </Link>
                <Link
                  to={project.server}
                  className="tooltip"
                  data-tip="Server Code"
                >
                  <button className="btn btn-outline border border-primary text-primary hover:bg-primary hover:text-white rounded-full px-4 py-2 transition-all">
                    <FaGithub />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    // <div id="projects">
    //   <SectionTitle
    //     subHeading="Visit my projects and keep your feedback..."
    //     heading="My Projects"
    //   />

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
    //     {projectData.map((project) => (
    //       <div
    //         key={project._id}
    //         data-aos="fade-up"
    //         data-aos-delay="100"
    //         className="card w-full h-[450px] bg-gradient-to-r from-transparent via-gray-300 to-neutral-700 shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105"
    //       >
    //         <figure className="w-full h-60 overflow-hidden">
    //           <img
    //             src={project.image}
    //             alt={project.heading}
    //             className="w-full h-full object-cover rounded-t-lg hover:scale-110 transition-transform duration-500"
    //           />
    //         </figure>
    //         <div className="card-body text-center">
    //           <p className="text-white font-semibold">
    //             Name: {project.heading}
    //           </p>
    //           <p className="text-white ">
    //             Technology: {project.technology}
    //           </p>
    //           <p className="text-white text-sm">
    //             Description: {project.sub_heading}
    //           </p>
    //           {project?.admin ? (
    //             <>
    //               <p className="text-white text-sm">Admin: {project.admin}</p>
    //               <p className="text-white text-sm">Password: {project.pass}</p>
    //             </>
    //           ) : (
    //             ""
    //           )}

    //           <div className="card-actions justify-center gap-4 mt-4">
    //             <Link
    //               to={project.liveLink}
    //               className="tooltip"
    //               data-tip="Live Preview"
    //             >
    //               <button className="btn btn-outline border-b-4 border-black shadow text-sky-950">
    //                 <FaRegArrowAltCircleUp />
    //               </button>
    //             </Link>

    //             <Link
    //               to={project.client}
    //               className="tooltip"
    //               data-tip="Client Code"
    //             >
    //               <button className="btn btn-outline border-b-4 border-black shadow text-sky-950">
    //                 <FaGithub />
    //               </button>
    //             </Link>

    //             <Link
    //               to={project.server}
    //               className="tooltip"
    //               data-tip="Server Code"
    //             >
    //               <button className="btn btn-outline border-b-4 border-black shadow text-sky-950">
    //                 <FaGithub />
    //               </button>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default AllProjects;
