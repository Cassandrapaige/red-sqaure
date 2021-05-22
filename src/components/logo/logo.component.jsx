import React from "react"
import { StlyedLogoContainer, StyledLogo } from "./logo.styles"

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
    <StlyedLogoContainer to="/">
      <StyledLogo
        variants={logoVariants}
        initial="hidden"
        animate="show"
      ></StyledLogo>
      <h1>Red Square</h1>
    </StlyedLogoContainer>
  )
}

export default Logo
