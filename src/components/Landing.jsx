import { useRef } from "react";

import { motion, useScroll, useSpring } from "framer-motion";

export const Landing = () => {
  const lineScrollref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: lineScrollref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  // Landing banner lines

  const line1 = "WE BUILD";
  const line2 = "BESPOKE";
  const line3 = "INNOVATIVE";
  const line4 = "DESIGN SOLUTIONS";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div ref={lineScrollref} className="landing-section">
      <motion.h1
        className="banner-container"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {line1.split("").map((char, index) => {
          return (
            <motion.span key={`${char} ${index}`} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />

        {line2.split("").map((char, index) => {
          return (
            <motion.span key={`${char} ${index}`} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />

        {line3.split("").map((char, index) => {
          return (
            <motion.span key={`${char} ${index}`} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />

        {line4.split("").map((char, index) => {
          return (
            <motion.span key={`${char} ${index}`} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          delay: 3.2,
        }}
        className="landing-message-container"
      >
        <h4 className="landing-message">
          Custom portable units, built to specification.
        </h4>
      </motion.div>
      <motion.div
        className="landing-bottom-line"
        style={{ scaleX }}
      ></motion.div>
    </motion.div>
  );
};
