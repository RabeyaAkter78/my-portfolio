import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import p1 from "../../assets/images/projects/danceAcademy/p1.png";
import p2 from "../../assets/images/projects/danceAcademy/p2.png";
import p3 from "../../assets/images/projects/danceAcademy/1.png";
import p4 from "../../assets/images/projects/vitakinetic.png";
import p5 from "../../assets/images/projects/portfolio.png";
import p6 from "../../assets/images/projects/dashboard.png";
import p7 from "../../assets/images/projects/p7.png";
import p8 from "../../assets/images/projects/p8.png";
import p9 from "../../assets/images/projects/p9.png";
import p10 from "../../assets/images/projects/p10.png";
import p11 from "../../assets/images/projects/p11.png";
import p12 from "../../assets/images/projects/p12.png";
import p13 from "../../assets/images/projects/p13.png";
import p14 from "../../assets/images/projects/p14.png";

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
    image: p4,
    heading: "Vitakinetic",
    sub_heading: "Fitness & Wellness Platform",
    category: "Health & Fitness",
    liveLink: "https://vitakinetic.com/",
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
    image: p5,
    heading: "Portfolio Website",
    sub_heading: "Personal Portfolio",
    category: "Portfolio",
    liveLink: "#",
    client: "https://rabeya-akter-portfolio.vercel.app/",
    technology: ["React.js", "Tailwind CSS", "Framer Motion", "AOS", "EmailJS"],
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
    image: p6,
    heading: "Cresent Change Task Manager",
    sub_heading: "Productivity Application",
    category: "Dashboard",
    liveLink: "https://org.crescentchange.com/",
    // client: "https://github.com/RabeyaAkter78/task-manager",
    technology: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      // "Socket.io",
    ],
    features: [
      "Donation management",
      "Donor & volunteer tracking",
      "Deposit management",
      "Subscription & recurring donations",
    ],
    isClientProject: false,
  },
  {
    _id: 7,
    image: p7,
    heading: "Amraoui Dashboard",
    sub_heading: "Transport & Mission Management Platform",
    category: "Dashboard",
    liveLink: "https://amraoui-dashboard.vercel.app/overview",
    technology: [
      "Next.js",
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Recharts",
      "Lucide React",
    ],
    features: [
      "Customer request & quote management system",
      "Mission monitoring with real-time tracking",
      "Driver verification & document management",
      "Customer profiles, payments & order tracking",
      "Inspection reports with photo comparison",
      "Finance dashboard with analytics & charts",
      "FAQ, policy & admin management system",
      "Responsive premium dashboard UI",
    ],
    description:
      "A comprehensive transport and logistics management dashboard built for handling customer requests, mission monitoring, driver management, inspections, finance tracking, and platform administration. The platform includes interactive tables, dynamic modals, real-time mission tracking, analytics charts, and a fully responsive modern UI.",
    isClientProject: false,
  },
  {
    _id: 8,
    image: p8,
    heading: "Trusted Handyman",
    sub_heading: "Handyman Services Marketplace Platform",
    category: "Service Platform",
    liveLink: "https://www.trustedhandyman.ng/",
    technology: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "Redux Toolkit",
      "React Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Stripe",
      "Google Maps API",
      "Cloudinary",
    ],
    features: [
      "Service booking & handyman marketplace",
      "Advanced search with filters & location support",
      "Real-time booking & job tracking system",
      "Secure online payment integration",
      "Professional handyman profiles & portfolios",
      "Quote request & comparison system",
      "In-app real-time messaging",
      "Ratings, reviews & verification system",
      "Admin dashboard for platform management",
      "Analytics, earnings & commission management",
    ],
    description:
      "A modern full-stack handyman services platform connecting homeowners with verified local service providers for home repair and maintenance tasks. The application includes real-time booking, secure payments, quote management, messaging, analytics dashboards, and role-based functionality for customers, handymen, and administrators.",
    isClientProject: false,
  },
  {
    _id: 9,
    image: p9,
    heading: "InstaSignTracker",
    sub_heading: "Real Estate Sign Management Platform",
    category: "Frontend",
    liveLink: "https://realestate-website-nu.vercel.app/",
    technology: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Recharts",
    ],
    features: [
      "Real estate sign installation management",
      "Order tracking & workflow automation",
      "Driver & installer management system",
      "Customer request & scheduling dashboard",
      "Analytics & reporting tools",
      "Responsive admin dashboard",
      "Role-based access & operations management",
      "Business growth & revenue tracking features",
    ],
    description:
      "A modern real estate sign management platform designed for sign installation companies to streamline operations, manage installations, track orders, monitor teams, and scale business workflows efficiently. The platform provides powerful dashboards, automation tools, analytics, and operational control for growing real estate signage businesses.",
    isClientProject: false,
  },
  {
    _id: 10,
    image: p10,
    heading: "Salon Management Dashboard",
    sub_heading: "Salon Service & Customer Management Platform",
    category: "Dashboard",
    liveLink: "https://salons-dashboard.netlify.app/",
    technology: [
      "React.js",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "React Router DOM",
      "Socket.io",
      "Recharts",
      "JWT Authentication",
      "Redux Persist",
    ],
    features: [
      "Salon service & appointment management",
      "Customer & user management system",
      "Real-time chat & communication",
      "Salon profile & business management",
      "Analytics dashboard with charts",
      "Authentication & OTP verification",
      "Role-based dashboard functionality",
      "Rich text content management",
      "Responsive admin dashboard UI",
    ],
    description:
      "A modern salon management dashboard designed to streamline salon operations, customer management, service handling, and communication. The platform includes real-time chat functionality, analytics dashboards, salon profile management, authentication flows, and a fully responsive administrative interface for managing salon businesses efficiently.",
    isClientProject: false,
  },
  {
    _id: 11,
    image: p11,
    heading: "Ataad Coffee",
    sub_heading: "Coffee Equipment & Accessories E-Commerce Platform",
    category: "E-Commerce",
    liveLink: "https://mukhtar-4r6j96xsi-rabeyaakter78s-projects.vercel.app/",
    technology: [
      "Next.js 14",
      "React.js",
      "Tailwind CSS",
      "Ant Design",
      "Swiper.js",
      "React Icons",
      "OTP Authentication",
    ],
    features: [
      "Modern coffee equipment showcase",
      "Product browsing & category management",
      "Responsive e-commerce user interface",
      "Interactive product sliders & carousels",
      "Authentication & OTP verification flow",
      "Mobile-first responsive design",
      "Clean product presentation & branding",
      "High-performance Next.js architecture",
    ],
    description:
      "A modern coffee equipment and accessories e-commerce platform built for Ataad, a registered and growing coffee brand. The platform provides a premium shopping experience with responsive product showcases, interactive UI sections, authentication flows, and optimized performance using Next.js and Tailwind CSS.",
    isClientProject: false,
  },
  {
    _id: 12,
    image: p12,
    heading: "Performance Room",
    sub_heading: "Creative Talent & Performance Challenge Platform",
    category: "E-Learning",
    liveLink: "https://performance-room-frontend.vercel.app/",
    technology: [
      "Next.js 14",
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "Socket.io",
      "Stripe",
      "Recharts",
      "React Quill",
      "Redux Persist",
    ],
    features: [
      "Performance sessions & creative challenges",
      "Talent showcase & creator profiles",
      "Real-time community interaction & feedback",
      "Cash reward & earning system",
      "Secure payment integration with Stripe",
      "Authentication & OTP verification",
      "Analytics dashboard & performance tracking",
      "Rich text content management",
      "Responsive modern community platform",
    ],
    description:
      "A modern creative community platform where performers and creators can showcase their talents, participate in challenges, receive feedback from peers and experts, and earn rewards. The platform includes real-time interaction, secure payment integration, analytics dashboards, content management tools, and a fully responsive user experience built with Next.js.",
    isClientProject: false,
  },
  {
  _id: 13,
  image: p13,
  heading: "Me Time Dashboard",
  sub_heading: "Wellness & User Management Dashboard",
  category: "Dashboard",
  liveLink: "https://me-time-official-dashboard.vercel.app/",
  technology: [
    "React.js",
    "Vite",
    "Redux Toolkit",
    "Tailwind CSS",
    "Ant Design",
    "React Router DOM",
    "Redux Persist",
    "Recharts",
    "Day.js",
    "SweetAlert2",
  ],
  features: [
    "User & account management system",
    "Wellness service management dashboard",
    "Analytics & reporting with interactive charts",
    "Authentication & OTP verification flow",
    "Role-based administrative functionality",
    "Responsive dashboard UI & data tables",
    "State persistence & optimized performance",
    "Modern admin experience with Ant Design",
  ],
  description:
    "A modern wellness management dashboard designed for handling users, services, analytics, and administrative operations efficiently. The platform provides responsive dashboard interfaces, interactive reporting tools, authentication flows, and scalable state management using Redux Toolkit and React.",
  isClientProject: false,
},{
  _id: 114,
  image: p14,
  heading: "Wedding Marketplace Admin",
  sub_heading: "Wedding Vendor & Marketplace Management Dashboard",
  category: "Dashboard",
  liveLink: "https://elevator-dashboard-mu.vercel.app/dashboard",
  technology: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Radix UI",
    "Lucide React",
    "Recharts",
    "SweetAlert2",
    "Date-fns",
  ],
  features: [
    "Wedding vendor & marketplace management",
    "Booking & service monitoring dashboard",
    "Interactive analytics & reporting charts",
    "Vendor profile & category management",
    "Modern admin UI with Radix components",
    "Responsive dashboard with data tables",
    "Calendar & scheduling management",
    "Role-based administrative workflows",
  ],
  description:
    "A modern wedding marketplace administration dashboard built to manage vendors, bookings, services, customer activities, and marketplace operations efficiently. The platform includes responsive dashboards, analytics visualizations, scheduling tools, and a clean user experience powered by Next.js 16, React 19, and Tailwind CSS v4.",
  isClientProject: false,
}
];

const categories = [
  "All",
  "E-Commerce",
  "E-Learning",
  "Service Platform",
  "Health & Fitness",
  "Portfolio",
  "Dashboard",
  "Frontend",
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
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
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
                    <p className="text-gray-400 text-sm mb-3">
                      {project.sub_heading}
                    </p>

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
