import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledHeader = styled.header`
  padding: 5rem 3rem 8rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledNavigationLink = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;

  h3 {
    font-weight: 400;
  }
`

export const StyledArrowIcon = styled(motion.div)`
  width: 11px;
  height: 11px;
  border-left: 1px solid #fefefe;
  border-bottom: 1px solid #fefefe;
  margin-left: 8px;
`
