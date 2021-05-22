import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

export const StlyedLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const StyledLogo = styled(motion.div)`
  width: 30px;
  height: 30px;
  background: #e31e3c;
  margin-right: 20px;
`
