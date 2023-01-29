import { motion } from "framer-motion";



export const About = () => {
  return (
    <motion.section className="about-section">
      <div className="about-section--hero-img-container">
{/*initial height 0 - animation drops down to full height!!*/}
        <img className="about-section--hero-img" src={process.env.PUBLIC_URL + `/images/hero-img.jpg`} alt="an outside kitchen"/>
      </div>
      <div className="about-section--header-container">
        <h1 className="about-section--header">WE ARE FLEXBOX.</h1>
      </div>
      <div className="about-section--subheader-container">
        <h3 className="about-section--subheader">
          An innovative, design company, creating and building customised kitchen units
        </h3>
      </div>
      <div className="about-section--img-container">
{/*initial height 0 - animation drops down to full height!!*/}
        <img className="about-section--garden-img" src={process.env.PUBLIC_URL + `/images/garden-kitchen.jpg`} alt="a beach kitchen"/>
      </div>
      <div className="about-section--content-container">
        <h4 className="about-section--content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a
        </h4>
      </div>
    </motion.section>
  )
}
