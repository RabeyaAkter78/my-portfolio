import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
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
    category: "E-Commerce",
    liveLink: "https://qwikr.us/",
    technology: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Ant Design",
      "Framer Motion",
      "Stripe",
      "Geolocation",
    ],
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
    category: "E-Learning",
    liveLink: "https://kurated-ai-one.vercel.app/overalHome",
    technology: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Ant Design",
      "Framer Motion",
      "DnD Toolkit",
      "TailwindCSS",
    ],
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
    category: "E-Learning",
    liveLink: "https://dance-academy-72a3f.web.app/",
    client: "https://github.com/RabeyaAkter78/dance-academy-client",
    server: "https://github.com/RabeyaAkter78/dance-academt-server",
    technology: [
      "JavaScript",
      "React.js",
      "Tailwind",
      "Axios",
      "Firebase",
      "MongoDB",
      "Express.js",
      "Stripe",
    ],
    features: [
      "User authentication",
      "Interactive lessons",
      "Stripe payment integration",
    ],
    isClientProject: false,
  },
  {
    _id: 4,
    image: p1,
    heading: "Vitakinetic",
    sub_heading: "Fitness & Wellness Platform",
    category: "Health & Fitness",
    liveLink: "https://vitakinetic.vercel.app/",
    technology: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Ant Design",
      "Framer Motion",
    ],
    features: [
      "Multi-role platform for users and trainers",
      "Onboarding & authentication",
      "Trainers & gyms discovery",
      "Products, newsfeed, purchases",
      "Trainer dashboard with program management",
    ],
    isClientProject: true,
  },
  {
    _id: 5,
    image: p2,
    heading: "Portfolio Website",
    sub_heading: "Personal Portfolio",
    category: "Portfolio",
    liveLink: "#",
    client: "https://github.com/RabeyaAkter78/my-portfolio",
    technology: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "AOS",
      "EmailJS",
    ],
    features: [
      "Modern dark theme design",
      "Smooth animations & transitions",
      "Responsive layout",
      "Contact form with EmailJS",
    ],
    isClientProject: false,
  },
  {
    _id: 6,
    image: p3,
    heading: "Task Management App",
    sub_heading: "Productivity Application",
    category: "Productivity",
    liveLink: "https://task-app-demo.vercel.app/",
    client: "https://github.com/RabeyaAkter78/task-manager",
    technology: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    features: [
      "Real-time collaboration",
      "Drag-and-drop tasks",
      "User authentication",
      "Team workspaces",
    ],
    isClientProject: false,
  },
];

const categories = [
  "All",
  "E-Commerce",
  "E-Learning",
  "Health & Fitness",
  "Portfolio",
  "Productivity",
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="w-full py-20 px-4">
      <SectionTitle
        subHeading="Visit my projects and keep your feedback"
        heading="My Projects"
      />

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50 hover:border-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="group"
              >
                <div className="h-full rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 hover:border-primary/30 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.heading}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-primary/80 text-white backdrop-blur-sm">
                      {project.category}
                    </span>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors transform hover:scale-110"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                      {!project.isClientProject && project.client && (
                        <a
                          href={project.client}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors transform hover:scale-110"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {project.heading}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{project.sub_heading}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technology.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-md bg-gray-700/50 text-gray-300 border border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technology.length > 4 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50 text-gray-400">
                          +{project.technology.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-1 mb-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-gray-400 text-xs flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-700/50">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live Demo
                      </a>
                      {!project.isClientProject && project.client && (
                        <a
                          href={project.client}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/RabeyaAkter78"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-800/50 text-white border border-gray-700/50 hover:border-primary/50 hover:bg-gray-800 transition-all duration-300"
        >
          <FaGithub className="w-5 h-5" />
          View More on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default AllProjects;
