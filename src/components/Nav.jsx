import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import flexboxLogo from "../../src/flexboxLogo.svg";

export const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
    console.log(menuClicked, "clickled");
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
        duration: 2,
        delay: 2,
      }}
      className="nav-container nav-section"
    >
      <div className="nav-logo-container">
        <div className="logo">
          <Link activeClass="active" smooth spy to="landing">
            <img
              src={process.env.PUBLIC_URL + `/images/logoBack.png`}
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
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};
