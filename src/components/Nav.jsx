import React from 'react'
import {Link} from "react-router-dom"
import {motion} from "framer-motion"


export const Nav = () => {
  return (
    <motion.div     
    initial={{ opacity: 0, y: -180 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      ease: "easeInOut",
      duration: 1,
      delay: 0.6,
    }} 
    className="nav-container nav-section">
      <div className="nav-logo-container">
        <div className='logo'>
          <a>flexbox</a>
        </div>
      </div>
        <div className='hamburger-menu'>
          <span></span>
        </div>
    </motion.div>
  )
}
