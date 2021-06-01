import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import "./logo.styles.scss"

const Logo = () => {
  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: [0, 1.1, 0.5, 1],
      transition: {
        duration: 1.5,
        type: "spring",
        mass: 2,
        stiffness: 200,
        times: [0, 0.6, 0.9, 1],
      },
    },
  }

  return (
    <Link className="logo" to="/">
      <motion.div
        className="logo--image"
        variants={logoVariants}
        initial="hidden"
        animate="show"
      ></motion.div>
      <h1>RedSquare</h1>
    </Link>
  )
}

export default Logo
