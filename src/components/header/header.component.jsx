import * as React from "react"
import PropTypes from "prop-types"
import Logo from "../logo/logo.component"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import "./header.styles.scss"
import { useLocation } from "@reach/router"

const Header = () => {
  const { pathname } = useLocation()

  const navStyles = {
    rest: {
      opacity: 1,
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
  }

  const itemStyles = {
    hover: {
      x: 10,
    },
  }

  const arrowStyles = {
    rest: {
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
        <motion.div
          className="navigation"
          variants={navStyles}
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <motion.h3 variants={itemStyles} className="navigation--link">
            {pathname === "/" ? "Work" : "Red Square"}
          </motion.h3>
          <motion.div variants={arrowStyles} className="navigation--icon" />
        </motion.div>
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
