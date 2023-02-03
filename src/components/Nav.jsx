import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  console.log("menu-clicked", menuClicked);

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
          <a>flexbox</a>
        </div>
      </div>
      <motion.div className="nav-link-container">
        <ul className="nav-links">
          <li>
            <a>
              <p>about</p>
            </a>
          </li>
          <li>
            <a>
              <p>product</p>
            </a>
          </li>
          <li>
            <a>
              <p>contact</p>
            </a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="hamburger-menu"
        id={menuClicked ? "hamburger-menu-open" : null}
        onClick={handleMenuClick}
      >
        <span className="menu-icon"></span>
      </motion.div>
      <motion.div
        className="menu-dropdown-container"
        id={menuClicked ? "menu-dropdown-container-open" : null}
      >
        <motion.ul className="menu-dropdown-content">
          <li
            className={
              menuClicked ? "menu-dropdown-item-open" : "menu-dropdown-item"
            }
            onClick={handleMenuClick}
          >
            <h1>About</h1>
          </li>
          <li
            className={
              menuClicked ? "menu-dropdown-item-open" : "menu-dropdown-item"
            }
            onClick={handleMenuClick}
          >
            <h1>Product</h1>
          </li>
          <li
            className={
              menuClicked ? "menu-dropdown-item-open" : "menu-dropdown-item"
            }
            onClick={handleMenuClick}
          >
            <h1>Contact</h1>
          </li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};
