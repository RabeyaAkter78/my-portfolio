import { useState, useEffect } from "react";
import App from "../../App.jsx";
import Loading from "../Loading/Loading.jsx";
import { motion } from "framer-motion";
const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <Loading />}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: loading ? 0 : 1,
          y: loading ? 30 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <App />
      </motion.div>
    </>
  );
};

export default Root;
