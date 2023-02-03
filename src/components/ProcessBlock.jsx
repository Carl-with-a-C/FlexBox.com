import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const ProcessBlock = ({ header, imgUrl, blurb }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const block = {
    hidden: { opacity: 1, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeIn",
        delay: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  const blockElement = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "backOut",
        duration: 0.8,
      },
    },
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsMounted(true);
  };

  useEffect(() => {}, [isOpen]);

  return isOpen ? (
    <AnimatePresence>
      <motion.div
        variants={block}
        initial="hidden"
        animate="visible"
        className={"process-block--container-open"}
        onClick={handleClick}
      >
        <motion.h2 className={"process-block--header"}>{`${header}`}</motion.h2>
        <motion.p
          variants={blockElement}
          key="a"
          className={"process-block--blurb"}
        >{`${blurb}`}</motion.p>
        <motion.img
          variants={blockElement}
          key="b"
          className={`process-block--img`}
          src={process.env.PUBLIC_URL + `${imgUrl}`}
        />
      </motion.div>
    </AnimatePresence>
  ) : (
    <motion.div
      className={"process-block--container-closed"}
      onClick={handleClick}
    >
      <motion.h2
        initial={isMounted ? false : { opacity: 0, y: 160, rotate: -30 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.6,
          delay: 1.1,
        }}
        viewport={{ once: true }}
        className={"process-block--header"}
      >{`${header}`}</motion.h2>
    </motion.div>
  );
};
