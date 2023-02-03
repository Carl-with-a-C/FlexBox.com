import { useRef } from "react";

import { motion } from "framer-motion";

import { ProcessBlock } from "./ProcessBlock";

import { blocks } from "../utils/productBlockObj";

export const Products = () => {
  const headerRef = useRef();

  const dividers = {
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  };

  const divider = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
    },
  };

  const { buildQuality, features, security } = blocks;

  return (
    <motion.section ref={headerRef} className="products-section" id="#product">
      <motion.div className="products-section-header-container">
        <motion.h3
          initial={{ opacity: 0, y: -60, rotateY: 60 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{
            ease: "easeOut",
            duration: 0.6,
            delay: 1,
          }}
          viewport={{ once: true }}
          className="products-section-header"
        >
          Our Process
        </motion.h3>
        <motion.span
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{
            ease: "backOut",
            duration: 0.4,
            delay: 1.2,
          }}
          viewport={{ once: true }}
        ></motion.span>
      </motion.div>
      <motion.div variants={dividers} className="process-block-container">
        <motion.span
          key={1}
          variants={divider}
          initial="hidden"
          whileInView="visible"
          transition={{
            ease: "backOut",
            duration: 0.4,
            delay: 1,
          }}
          viewport={{ once: true }}
          className="block-divider"
        ></motion.span>
        <ProcessBlock
          header={buildQuality.header}
          blurb={buildQuality.blurb}
          imgUrl={buildQuality.imgUrl}
        />
        <motion.span
          key={2}
          variants={divider}
          initial="hidden"
          whileInView="visible"
          transition={{
            ease: "backOut",
            duration: 0.4,
            delay: 1,
          }}
          viewport={{ once: true }}
          className="block-divider"
        ></motion.span>
        <ProcessBlock
          header={security.header}
          blurb={security.blurb}
          imgUrl={security.imgUrl}
        />
        <motion.span
          key={3}
          variants={divider}
          initial="hidden"
          whileInView="visible"
          transition={{
            ease: "backOut",
            duration: 0.4,
            delay: 1,
          }}
          viewport={{ once: true }}
          className="block-divider"
        ></motion.span>
        <ProcessBlock
          header={features.header}
          blurb={features.blurb}
          imgUrl={features.imgUrl}
        />
        <motion.span
          key={4}
          variants={divider}
          initial="hidden"
          whileInView="visible"
          transition={{
            ease: "backOut",
            duration: 0.4,
            delay: 1,
          }}
          viewport={{ once: true }}
          className="block-divider"
        ></motion.span>
      </motion.div>
    </motion.section>
  );
};
