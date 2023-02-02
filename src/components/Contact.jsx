import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div className="contact-section" id="#contact">
      <div className="contact-section--header-container">
        <motion.h2
          className="contact-section--header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 1 }}
        >
          Get in touch.
        </motion.h2>
      </div>
      <div className="contact-section--img-container">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ delay: 1.1, duration: 0.8, ease: "backIn" }}
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
