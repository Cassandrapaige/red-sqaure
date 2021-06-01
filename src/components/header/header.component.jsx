import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Logo from "../logo/logo.component"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"
import "./header.styles.scss"
import { useLocation } from "@reach/router"

const Header = () => {
  const { pathname } = useLocation()

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
        type: "spring",
        bounce: 0.25,
        mass: 1,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        type: "spring",
        bounce: 0.25,
        mass: 1,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.25,
        mass: 1,
      },
    },
  }

  const itemStyles = {
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
  return (
    <header>
      <Logo />
      <Link to={pathname === "/" ? "/work" : "/"}>
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
            <motion.h3 variants={itemStyles} className="navigation--link">
              {pathname === "/" ? "Work" : "Red Square"}
            </motion.h3>
            <motion.div variants={arrowStyles} className="navigation--icon" />
          </motion.div>
        </AnimatePresence>
      </Link>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
