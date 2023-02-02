import { useRef } from "react";

import { motion, useScroll, useSpring } from "framer-motion";

export const About = () => {
  const lineScrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: lineScrollRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 40,
    restDelta: 0.005,
  });

  return (
    <motion.section ref={lineScrollRef} className="about-section" id="about">
      <motion.div className="about-section--hero-img-container">
        <motion.img
          className="about-section--hero-img"
          src={process.env.PUBLIC_URL + `/images/hero-img.jpg`}
          alt="an outside kitchen"
        />
        <motion.span
          initial={{
            opacity: 1,
            height: "501px",
          }}
          whileInView={{
            opacity: 1,
            height: "0px",
          }}
          viewport={{ once: true, amount: "all" }}
          transition={{
            type: "linear",
            ease: "circOut",
            duration: 1.2,
          }}
        ></motion.span>
      </motion.div>
      <div className="about-section--header-top-container">
        <motion.h2
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          transition={{
            ease: "easeOut",
            duration: 0.6,
            delay: 0.2,
          }}
          className="about-section--header-top"
        >
          we are
        </motion.h2>
      </div>
      <div className="about-section--header-btm-container">
        <motion.h1
          initial={{ y: -75 }}
          whileInView={{ y: 0 }}
          transition={{
            ease: "backOut",
            duration: 0.8,
            delay: 0.6,
          }}
          className="about-section--header-btm"
        >
          FLEXBOX.
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 1.2,
          delay: 0.6,
        }}
        className="about-section--subheader-container"
      >
        <h3 className="about-section--subheader">
          An innovative, design company, creating and building customised
          kitchen units
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "circOut",
          duration: 0.8,
        }}
        className="about-section--content-container"
      >
        <h4 className="about-section--pre-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          lectus proin nibh nisl condimentum id venenatis a
        </h4>
      </motion.div>
      <div className="about-section--img-container">
        <motion.div
          className="about-garden-img-line"
          style={{ scaleX }}
        ></motion.div>
        <img
          className="about-section--garden-img"
          src={process.env.PUBLIC_URL + `/images/garden-kitchen.jpg`}
          alt="a beach kitchen"
        />
        <motion.span
          initial={{
            opacity: 1,
            height: "500px",
          }}
          whileInView={{
            opacity: 1,
            height: "0px",
          }}
          viewport={{ once: true, amount: "all" }}
          transition={{
            type: "linear",
            ease: "circOut",
            duration: 1.2,
          }}
        ></motion.span>
      </div>
      <motion.div
        className="about-section--content-container"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "circOut",
          duration: 0.8,
        }}
      >
        <h4 className="about-section--post-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          lectus proin nibh nisl condimentum id venenatis a
        </h4>
      </motion.div>
    </motion.section>
  );
};
