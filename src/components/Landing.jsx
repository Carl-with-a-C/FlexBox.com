import { useRef } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useSpring } from "framer-motion";

export const Landing = () => {
  const lineScrollref = useRef(null);
  const scrollOffsetContact = -window.innerWidth / 5;

  const { scrollYProgress } = useScroll({
    target: lineScrollref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  const line1 = "BESPOKE";
  const line2 = "INNOVATIVE";
  const line3 = "DESIGN";

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

  const cta = {
    hidden: { opacity: 0, scale: 0.01 },
    visible: { opacity: 1, scale: 1, transition: { delay: 4.4 } },
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
          Designing and Building Bespoke Solutions for Your Unique Needs
        </h4>
      </motion.div>
      <motion.button
        variants={cta}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "backOut",
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        whileHover={{ scale: 1.2, backgroundColor: "#F1C05E" }}
        whileTap={{ scale: 0.9 }}
        className="landing-cta"
      >
        <Link
          activeClass="active"
          smooth
          spy
          to="contact"
          offset={scrollOffsetContact}
        >
          CONTACT US
        </Link>
      </motion.button>
      <motion.div
        className="landing-bottom-line"
        style={{ scaleX }}
      ></motion.div>
    </motion.div>
  );
};
