import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Expertise = () => {
  const [expertise, setExpertise] = useState([]);

  useEffect(() => {
    fetch("expertise.json")
      .then((res) => res.json())
      .then((data) => setExpertise(data));
  }, []);

  return (
    <div className="py-12 px-4 lg:px-20 ">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl lg:text-4xl font-bold text-center mb-10 text-[#4e179b]"
      >
        My Expertise
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertise.map((skill, i) => (
          <motion.div
            key={skill._id}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-xl cursor-pointer
                         bg-gray-100/20 backdrop-blur-md border border-gray-300/30
                         hover:border-[#4e179b] hover:shadow-lg transition-all duration-300"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-14 h-14 object-contain"
              />

              <div className="flex flex-col items-center text-center">
                <h2 className="text-lg font-semibold text-gray-800">{skill.title}</h2>
                {skill.experience && (
                  <p className="text-sm text-gray-600 mt-1">{skill.experience}</p>
                )}
              </div>

              <span className="absolute inset-0 rounded-xl border border-[#4e179b] opacity-0 group-hover:opacity-50 transition-all duration-500 pointer-events-none"></span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
