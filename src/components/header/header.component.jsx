import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../logo/logo.component"
import { StyledHeader } from "./header.styles"

const Header = () => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
