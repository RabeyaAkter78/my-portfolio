import { motion } from "framer-motion";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-4 mb-16"
    >
      {subHeading && (
        <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          {subHeading}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white capitalize">
        {heading}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full" />
    </motion.div>
  );
};

export default SectionTitle;