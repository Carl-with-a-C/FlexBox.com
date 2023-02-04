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
            <img src={flexboxLogo} alt="flexbox logo" className="nav-logo" />
          </Link>
        </div>
      </div>
      <motion.div className="nav-link-container">
        <ul className="nav-links">
          <li>
            <Link activeClass="active" smooth spy to="about">
              <p>about</p>
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="product">
              <p>product</p>
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
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
          <Link activeClass="active" smooth spy to="about">
            <li
              className={
                menuClicked ? "menu-dropdown-item-open" : "menu-dropdown-item"
              }
              onClick={handleMenuClick}
            >
              <h1>About</h1>
            </li>
          </Link>
          <Link activeClass="active" smooth spy to="product">
            <li
              className={
                menuClicked ? "menu-dropdown-item-open" : "menu-dropdown-item"
              }
              onClick={handleMenuClick}
            >
              <h1>Product</h1>
            </li>
          </Link>
          <Link activeClass="active" smooth spy to="contact">
            <li
              className={
                menuClicked ? "menu-dropdown-item-open" : "menu-dropdown-item"
              }
              onClick={handleMenuClick}
            >
              <h1>Contact</h1>
            </li>
          </Link>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};
