import { motion } from "framer-motion";
import { useState } from "react";

export const ProcessBlock = ({ title, header, imgUrl, blurb }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <motion.div className={"process-block--container"} onClick={handleClick}>
      <motion.h2 className={"process-block--header"}>{`${header}`}</motion.h2>
      <motion.p className={"process-block--blurb"}>{`${blurb}`}</motion.p>
      <motion.img
        className={`process-block--img`}
        src={process.env.PUBLIC_URL + `${imgUrl}`}
      />
    </motion.div>
  ) : (
    <motion.div
      className={"process-block--container-closed"}
      onClick={handleClick}
    >
      <motion.h2 className={"process-block--header"}>{`${header}`}</motion.h2>
    </motion.div>
  );
};
