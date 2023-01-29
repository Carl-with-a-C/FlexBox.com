import React from 'react'

import {motion} from "framer-motion"

export const Landing = () => {
  return (
    <motion.div className="landing-section">  
      <motion.div className="banner-container ">         
        <h1 className="banner">WE BUILD INCREDIBLE COMPACT KITCHEN SOLUTIONS</h1>
      </motion.div>
   

      <motion.div className="landing-message-container">
        <h4 className="landing-message">An innovative, design company, creating and building customised kitchen units</h4>
      </motion.div>
      <div className="landing-bottom-line">
        <span></span>
      </div>
    </motion.div>
  )
}
