import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const ProcessBlock = ({ header, imgUrl, blurb, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [blockSize, setBlockSize] = useState(window.innerWidth);

  const block = {
    initial: {
      opacity: 1,
      height: blockSize,
      color: "#fff",
      backgroundColor: "#1e1e1e",
    },
    visible: {
      opacity: 1,
      height: "100%",
      color: "#1e1e1e",
      backgroundColor: "#fff",
      transition: {
        ease: "easeInOut",
        staggerChildren: 1,
        duration: 0.5,
      },
    },
  };

  const blockElement = {
    hidden: { opacity: 0, y: 50, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "100%",
      transition: {
        delay: 0.8,
        ease: "backOut",
        duration: 0.8,
      },
    },
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsMounted(true);
  };

  useEffect(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth > 739) setBlockSize("160px");
    else if (screenWidth > 519) setBlockSize("130px");
    else setBlockSize("110px");
  }, [isOpen, blockSize]);

  return (
    <AnimatePresence>
      <motion.div
        variants={block}
        initial="initial"
        animate={isOpen ? "visible" : "initial"}
        whileHover={{ backgroundColor: "#fff", color: "#1e1e1e" }}
        className="process-block--container-open"
        onClick={handleClick}
      >
        <motion.h2
          className={"process-block--header"}
          initial={{ opacity: 0, y: 30, rotateY: -60 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{
            ease: "easeOut",
            duration: 0.6,
            delay: 1,
          }}
          viewport={{ once: true }}
        >{`${header}`}</motion.h2>
        <motion.div className="process-block--content">
          <motion.p
            variants={blockElement}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            key="a"
            className={"process-block--blurb"}
          >{`${blurb}`}</motion.p>
          <motion.img
            variants={blockElement}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            key="b"
            className={`process-block--img`}
            src={process.env.PUBLIC_URL + `${imgUrl}`}
            alt={alt}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
