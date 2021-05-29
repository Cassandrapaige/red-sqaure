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
      scale: 1,
      transition: {
        duration: 2,
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
      <h1>Red Square</h1>
    </Link>
  )
}

export default Logo
