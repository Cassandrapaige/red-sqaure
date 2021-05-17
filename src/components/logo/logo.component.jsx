import React from "react"

import styled from "styled-components"
import { motion } from "framer-motion"

const Logo = () => {
  const logoVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  }
  return (
    <StlyedLogoContainer>
      <StyledLogo
        variants={logoVariants}
        initial="hidden"
        animate="show"
      ></StyledLogo>
      <h1>Red Square</h1>
    </StlyedLogoContainer>
  )
}

const StlyedLogoContainer = styled.div`
  display: flex;
`

const StyledLogo = styled(motion.div)`
  width: 30px;
  height: 30px;
  background: #e31e3c;
  margin-right: 20px;
`

export default Logo
