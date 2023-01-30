import { motion } from "framer-motion";

import { ProcessBlock } from "./ProcessBlock";

import { blocks } from "../utils/productBlockObj";

export const Products = () => {
  const { buildQuality, features, security } = blocks;

  console.log(blocks);

  return (
    <motion.section className="products-section">
      <motion.div className="products-section-header-container">
        <h3 className="products-section-header">Our Process</h3>
        <motion.span></motion.span>
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
