import * as React from "react"
import PropTypes from "prop-types"
import Logo from "../logo/logo.component"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import {
  StyledHeader,
  StyledArrowIcon,
  StyledNavigationLink,
} from "./header.styles"

const Header = () => {
  const navStyles = {
    rest: {
      opacity: 1,
    },
    hover: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
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
    <StyledHeader>
      <Logo />
      <Link to="/work">
        <StyledNavigationLink
          variants={navStyles}
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <motion.h3 variants={itemStyles}>Work</motion.h3>
          <StyledArrowIcon variants={arrowStyles} />
        </StyledNavigationLink>
      </Link>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
