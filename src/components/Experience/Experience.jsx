/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Sparktech Agency",
    location: "Dhaka, Bangladesh",
    duration: "Aug 2024 – Present",
    type: "Full-time",
    description:
      "Leading frontend development for multiple client projects, delivering high-quality web applications using modern technologies.",
    responsibilities: [
      "Developed responsive, mobile-first interfaces from Figma designs using React.js & Next.js",
      "Converted UI/UX concepts into scalable and reusable components with TailwindCSS",
      "Integrated REST APIs with Redux and optimized components for faster rendering",
      "Enhanced frontend performance via code-splitting, caching, and image optimization",
      "Ensured cross-browser compatibility, accessibility standards, and maintainable code",
      "Collaborated in Agile teams with designers, backend engineers, and product managers",
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Redux", "Tailwind CSS", "Ant Design"],
  },
  // {
  //   id: 2,
  //   role: "Frontend Developer Intern",
  //   company: "Programming Hero",
  //   location: "Remote",
  //   duration: "Jan 2024 – Jul 2024",
  //   type: "Internship",
  //   description:
  //     "Completed intensive training in modern web development and contributed to real-world projects.",
  //   responsibilities: [
  //     "Mastered React.js, Next.js, and modern JavaScript (ES6+)",
  //     "Built full-stack applications using MERN stack",
  //     "Implemented authentication systems and payment integrations",
  //     "Practiced clean code principles and best practices",
  //   ],
  //   technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Firebase"],
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 px-4">
      <SectionTitle subHeading="Work History" heading="Experience" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-gray-900 shadow-lg shadow-primary/30" />

              {/* Experience Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 hover:border-primary/30 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <FaBriefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-gray-700/50 text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{exp.description}</p>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700/50">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 border border-primary/10"
        >
          <h3 className="text-xl font-bold text-white mb-4">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <FaBriefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-white">BSc in Computer Science</h4>
                <p className="text-sm text-gray-400">Northern University Bangladesh</p>
                <p className="text-xs text-gray-500 mt-1">2025 - Present</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <FaBriefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-white">Diploma in Computer Engineering</h4>
                <p className="text-sm text-gray-400">Gopalganj Polytechnic Institute</p>
                <p className="text-xs text-gray-500 mt-1">2016 - 2020</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
