import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div className="contact-section">
      <motion.h2 className="contact-section--header">Get in touch.</motion.h2>
      <div className="">
        <img
          className="contact-section--img"
          src={process.env.PUBLIC_URL + "./images/contact.jpg"}
          alt="candle-lit meal"
        />
      </div>
      <div className="contact-section--info-container">
        <p>General Enquiries</p>
        <a href="mailto:info@flexbox.com">info@flexbox.com</a>
      </div>
    </motion.div>
  );
};
