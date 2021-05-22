import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledProjectContainer = styled(motion.article)`
  margin-bottom: 6rem;
  position: relative;
`

export const StyledProjectContent = styled(motion.div)`
  font-size: calc(1em + 1vw);
  text-transform: uppercase;
`

export const StyledImageContainer = styled(motion.div)`
  img {
    border-radius: 10px;
  }
`

export const StyledTitle = styled(motion.h1)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
`
