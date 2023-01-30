import React from "react";

import { motion, transform } from "framer-motion";

export const Landing = () => {
  const line1 = "WE BUILD";
  const line2 = "INCREDIBLE";
  const line3 = "COMPACT";
  const line4 = "KITCHEN SOLUTIONS";

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
    <motion.div className="landing-section">
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
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          delay: 3,
        }}
        className="landing-message-container"
      >
        <h4 className="landing-message">
          An innovative, design company, creating and building customised
          kitchen units
        </h4>
      </motion.div>
      <motion.div className="landing-bottom-line"></motion.div>
    </motion.div>
  );
};
