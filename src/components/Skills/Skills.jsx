import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiAntdesign,
  SiFramer,
} from "react-icons/si";
import SectionTitle from "../SectionTitle/SectionTitle";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: FaReact,
    skills: [
      { name: "React.js", icon: FaReact, level: "Advanced", color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: "Advanced", color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, level: "Intermediate", color: "#3178C6" },
      { name: "JavaScript", icon: FaJs, level: "Advanced", color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, level: "Advanced", color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, level: "Advanced", color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", color: "#06B6D4" },
      { name: "Redux Toolkit", icon: SiRedux, level: "Advanced", color: "#764ABC" },
      { name: "Ant Design", icon: SiAntdesign, level: "Intermediate", color: "#0170FE" },
      { name: "Framer Motion", icon: SiFramer, level: "Intermediate", color: "#0055FF" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: FaNodeJs,
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: "Intermediate", color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: "Intermediate", color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, level: "Intermediate", color: "#47A248" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: FaGitAlt,
    skills: [
      { name: "Git", icon: FaGitAlt, level: "Advanced", color: "#F05032" },
      { name: "GitHub", icon: FaGitAlt, level: "Advanced", color: "#ffffff" },
      { name: "Postman", icon: SiPostman, level: "Intermediate", color: "#FF6C37" },
      { name: "Figma", icon: FaFigma, level: "Intermediate", color: "#F24E1E" },
      { name: "Vercel", icon: SiVercel, level: "Advanced", color: "#ffffff" },
      { name: "Netlify", icon: SiNetlify, level: "Advanced", color: "#00C7B7" },
    ],
  },
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

const categoryVariants = {
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

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="skills" className="w-full py-20 px-4">
      <SectionTitle
        subHeading="Technologies I Work With"
        heading="My Skills"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {skillCategories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div
              key={category.id}
              variants={categoryVariants}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <CategoryIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      custom={index}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${skill.color}15` }}
                        >
                          <SkillIcon
                            className="w-6 h-6 transition-all duration-300"
                            style={{ color: skill.color }}
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                            {skill.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{skill.level}</p>
                        </div>
                      </div>

                      {/* Hover glow effect */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 border border-primary/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Frontend", value: "10+" },
            { label: "Backend", value: "3+" },
            { label: "Tools", value: "6+" },
            { label: "Total Skills", value: "19+" },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
