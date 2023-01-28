import React from "react";
import { motion, AnimatePresence } from "framer-motion";


//animation variables
const container = {
  hidden: { opacity: 0.5},
    show: {
      opacity: 1,
      width: ["3vw", "100vw"],
      height: ["1vh", "1vh", "1vh","1vh", "1vh","1vh", "1vh","1vh", "1vh","1vh", "100vh"],
      transition: {
        ease: "easeInOut",
        duration: 6,
      }},
    exit: {
      height: "100vh",
      width: "100vw",
        transition: {
          ease: "easeInOut",
          duration: 2,
        },
    },
};

export const Loader = ({setLoading}) => {
  return (
  
<AnimatePresence>
  <motion.div className="loader">
    <motion.div className="transition-block"
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
    >
      <motion.div className="transition-block-two"></motion.div>
    </motion.div>
  </motion.div>
</AnimatePresence>
  
  )
}