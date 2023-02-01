import { useRef } from "react";

import { motion } from "framer-motion";

import { ProcessBlock } from "./ProcessBlock";

import { blocks } from "../utils/productBlockObj";

export const Products = () => {
  const headerRef = useRef();

  const { buildQuality, features, security } = blocks;

  return (
    <motion.section ref={headerRef} className="products-section">
      <motion.div className="products-section-header-container">
        <motion.h3
          initial={{ y: 45, rotateY: 60 }}
          whileInView={{ y: 0, rotateY: 0 }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: 0.5,
          }}
          // viewport={{ root: headerRef, amount: "all" }}
          className="products-section-header"
        >
          Our Process
        </motion.h3>
        <motion.span
          //NEED TO ADD MEDIA QUERY FOR LINE LENGTH ABOVE 490!!!!!
          initial={{ width: "0%" }}
          whileInView={{ width: "50%" }}
          transition={{
            ease: "backOut",
            duration: 0.4,
            delay: 0.4,
          }}
        ></motion.span>
      </motion.div>
      <ProcessBlock
        header={buildQuality.header}
        blurb={buildQuality.blurb}
        imgUrl={buildQuality.imgUrl}
      />
      <ProcessBlock
        header={security.header}
        blurb={security.blurb}
        imgUrl={security.imgUrl}
      />
      <ProcessBlock
        header={features.header}
        blurb={features.blurb}
        imgUrl={features.imgUrl}
      />
    </motion.section>
  );
};
