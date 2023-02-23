import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div className="contact-section" id="/contact">
      <div className="contact-section--header-container">
        <motion.h2
          className="contact-section--header"
          initial={{ opacity: 0, y: 40 }}
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
      <motion.div className="contact-section--info-container">
        <p>General Enquiries</p>
        <motion.a
          whileHover={{ scale: 1.1, color: "#F1C05E" }}
          whileTap={{ scale: 0.9 }}
          href="mailto:sales@theflexbox.co.uk"
        >
          sales@theflexbox.co.uk
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, color: "#F1C05E" }}
          whileTap={{ scale: 0.9 }}
          href="tel: 01617060917"
        >
          0161 706 0917
        </motion.a>
      </motion.div>
      <div className="contacts-socials-container">
        <ul className="contacts-socials-list">
          <li>
            <a href={"https://www.instagram.com/the.flexbox"} target="_blank">
              <img
                src={process.env.PUBLIC_URL + `/images/insta-light.svg`}
                alt="instagram logo"
              />
            </a>
          </li>
          <li>
            <a
              href={"https://www.facebook.com/people/Flexbox/100090273501371/"}
              target="_blank"
            >
              <img
                src={process.env.PUBLIC_URL + `/images/facebook-light.svg`}
                alt="facebook logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
