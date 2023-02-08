import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useScroll } from "framer-motion";

export const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const { scrollYProgress } = useScroll();

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
    console.log("clicked");
  };

  const scrollOffsetAbout =
    window.innerWidth > 1150 ? window.innerWidth + 100 : window.innerWidth + 50;
  const scrollOffsetProduct =
    window.innerWidth > 479 ? -window.innerWidth / 5 : -window.innerWidth / 2;
  const scrollOffsetContact = -window.innerWidth / 5;

  useEffect(() => {}, [menuClicked]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 2.4,
        delay: 1.75,
      }}
      className="nav-container nav-section"
    >
      <div className="nav-logo-container">
        <div className="logo">
          <Link activeClass="active" smooth spy to="landing">
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 50 }}
              whileTap={{ scale: 0.9 }}
              src={process.env.PUBLIC_URL + `/images/logoWht.png`}
              alt="flexbox logo"
              className="nav-logo"
            />
          </Link>
        </div>
      </div>
      <motion.div className="nav-link-container">
        <ul className="nav-links">
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="about"
              offset={scrollOffsetAbout}
            >
              <p>about</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="product"
              offset={scrollOffsetProduct}
            >
              <p>product</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="contact"
              offset={scrollOffsetContact}
            >
              <p>contact</p>
            </Link>
          </li>
        </ul>
      </motion.div>
      <motion.div className="nav-call-container">
        <p className="nav-phone-no">0161 706 0917</p>
        <a href="tel: 01617060917">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 50 }}
            className="nav-phone-icon"
            src={process.env.PUBLIC_URL + `/images/phone.svg`}
            alt="phone icon"
          />
        </a>
      </motion.div>
      <motion.div
        className="hamburger-menu"
        id={menuClicked ? "hamburger-menu-open" : null}
      >
        <span onClick={handleMenuClick} className="menu-icon"></span>
      </motion.div>
      <motion.div
        className="menu-dropdown-container"
        id={menuClicked ? "menu-dropdown-container-open" : null}
      >
        <motion.ul className="menu-dropdown-content">
          <Link
            activeClass="active"
            smooth
            spy
            to="about"
            offset={scrollOffsetAbout}
          >
            <li
              className={
                menuClicked ? "menu-dropdown-item-open" : "menu-dropdown-item"
              }
              onClick={handleMenuClick}
            >
              <h1>ABOUT</h1>
            </li>
          </Link>
          <Link
            activeClass="active"
            smooth
            spy
            to="product"
            offset={scrollOffsetProduct}
          >
            <li
              className={
                menuClicked ? "menu-dropdown-item-open" : "menu-dropdown-item"
              }
              onClick={handleMenuClick}
            >
              <h1>PRODUCT</h1>
            </li>
          </Link>

          <Link
            activeClass="active"
            smooth
            spy
            to="contact"
            offset={scrollOffsetContact}
          >
            <li
              className={
                menuClicked ? "menu-dropdown-item-open" : "menu-dropdown-item"
              }
              onClick={handleMenuClick}
            >
              <h1>CONTACT</h1>
            </li>
          </Link>
          <li
            className={
              menuClicked ? "menu-dropdown-item-open" : "menu-dropdown-item"
            }
          >
            <div className="socials-container">
              <ul>
                <li>
                  <a>
                    <img
                      src={process.env.PUBLIC_URL + `/images/insta.svg`}
                      alt="instagram logo"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src={process.env.PUBLIC_URL + `/images/facebook.svg`}
                      alt="facebook logo"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src={process.env.PUBLIC_URL + `/images/twitter.svg`}
                      alt="twitter logo"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </motion.ul>
      </motion.div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
};
