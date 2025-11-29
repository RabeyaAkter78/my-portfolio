import { motion } from "framer-motion";

const dropAnimation = {
  initial: { y: 0, opacity: 0.4 },
  animate: {
    y: [0, -15, 0],   // smooth drop bounce
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#4e179b] flex flex-col items-center justify-center z-[9999]">

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-5xl font-bold mb-6"
      >
        {/* Rabeya */}
      </motion.h1>

      <div className="flex space-x-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            variants={dropAnimation}
            initial="initial"
            animate="animate"
            transition={{
              delay: i * 0.15, 
            }}
            className="h-4 w-4 bg-white rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
