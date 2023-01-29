import React from 'react'
import {Link} from "react-router-dom"
import {motion} from "framer-motion"


export const Nav = () => {
  return (
    <motion.div className="nav-container nav-section">
      <motion.div className="nav-logo-container nav-section">
        <div className='logo'><a>flexbox</a></div>
        </motion.div>

      </motion.div>
  )
}
