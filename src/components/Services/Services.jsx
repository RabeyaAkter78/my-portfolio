import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaSearch,
} from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

const services = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: "Frontend Development",
    description:
      "Building modern, responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Focusing on performance, accessibility, and user experience.",
    features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Redux/Context API"],
  },
  {
    id: 2,
    icon: FaMobileAlt,
    title: "Responsive Web Design",
    description:
      "Creating pixel-perfect, mobile-first designs that work seamlessly across all devices and screen sizes with smooth animations and interactions.",
    features: ["Mobile-First", "Cross-Browser", "Pixel Perfect", "Fast Loading"],
  },
  {
    id: 3,
    icon: FaCode,
    title: "API Integration",
    description:
      "Integrating RESTful APIs and third-party services to create dynamic, data-driven applications with secure authentication and real-time updates.",
    features: ["REST APIs", "Authentication", "Real-time Data", "Error Handling"],
  },
  {
    id: 4,
    icon: FaPalette,
    title: "UI/UX Implementation",
    description:
      "Transforming Figma designs into fully functional, interactive web interfaces with attention to detail, animations, and modern design patterns.",
    features: ["Figma to Code", "Animations", "Micro-interactions", "Design Systems"],
  },
  {
    id: 5,
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed, SEO, and Core Web Vitals using code splitting, lazy loading, caching, and image optimization techniques.",
    features: ["Code Splitting", "Lazy Loading", "SEO Optimization", "Core Web Vitals"],
  },
  {
    id: 6,
    icon: FaSearch,
    title: "Code Review & Consulting",
    description:
      "Providing expert code reviews, refactoring suggestions, and technical consulting to improve code quality, maintainability, and best practices.",
    features: ["Code Review", "Refactoring", "Best Practices", "Mentoring"],
  },
];

const cardVariant = {
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
};

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="services" className="w-full py-20 px-4">
      <SectionTitle
        subHeading="What I Offer"
        heading="My Services"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
