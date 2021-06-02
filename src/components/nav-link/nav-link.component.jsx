import React from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import "./nav-link.styles.scss"

const NavLink = ({ isAnimated, pathname, link, text }) => {
  const spring = {
    type: "spring",
    bounce: 0.25,
    mass: 1,
  }

  const navStyles = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ...spring,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        ...spring,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.5,
        ...spring,
      },
    },
  }

  const linkStyles = {
    hover: {
      x: 10,
    },
  }

  const arrowStyles = {
    initial: {
      rotate: 225,
    },
    hover: {
      x: 10,
    },
  }

  return isAnimated ? (
    <Link to={link}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="navigation"
          key={pathname}
          variants={navStyles}
          initial="initial"
          animate="animate"
          whileHover="hover"
          exit="exit"
        >
          <motion.h3 variants={linkStyles} className="navigation--link">
            {text}
          </motion.h3>
          <motion.div variants={arrowStyles} className="navigation--icon" />
        </motion.div>
      </AnimatePresence>
    </Link>
  ) : (
    <Link to={link}>
      <div className="navigation">
        <h3 variants={linkStyles} className="navigation--link">
          {text}
        </h3>
        <div variants={arrowStyles} className="navigation--icon" />
      </div>
    </Link>
  )
}

export default NavLink
