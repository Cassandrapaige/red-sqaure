import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledProjectContainer = styled(motion.article)`
  margin: 3rem 0;
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

export const StyledTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
