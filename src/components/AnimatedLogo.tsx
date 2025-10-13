"use client";

import { motion } from "framer-motion";

const PulsingLogo = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1], // pulse in and out
      }}
      transition={{
        duration: 1.5, // how long one pulse takes
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        display: "inline-block",
      }}
    >
      <img
        src="/logo.webp"
        alt="Proforce Galaxies Logo"
        className="object-cover w-40 h-auto"
      />
    </motion.div>
  );
};

export default PulsingLogo;
