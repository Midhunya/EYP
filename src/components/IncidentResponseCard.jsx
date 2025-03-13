import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const IncidentResponseCard = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 1000);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, height: 100, opacity: 0 }}
      animate={{ y: 300, height: 300, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="bg-white shadow-lg rounded-3xl px-8 pt-8 pb-6 mx-auto w-3/4 text-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={showText ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-2xl font-bold text-black"
      >
        Incident Response
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={showText ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-black mt-2"
      >
        This section provides guidance on incident response planning, risk assessment, and mitigation strategies.
      </motion.p>
    </motion.div>
  );
};

export default IncidentResponseCard;