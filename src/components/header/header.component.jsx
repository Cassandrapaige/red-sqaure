import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Logo from "../logo/logo.component"
import { useLocation } from "@reach/router"

import NavLink from "../nav-link/nav-link.component"
import "./header.styles.scss"

const Header = () => {
  const { pathname } = useLocation()

  return (
    <header>
      <Logo />
      <NavLink
        isAnimated
        pathname={pathname}
        link={pathname === "/" ? "/work" : "/"}
        text={pathname === "/" ? "Work" : "Red Square"}
      />
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
