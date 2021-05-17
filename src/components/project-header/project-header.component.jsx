import React from "react"
import { motion } from "framer-motion"
import Img from "gatsby-image"

import {
  StyledProjectContainer,
  StyledProjectContent,
  StyledTitle,
  StyledImageContainer,
} from "./project-header.styles"

const ProjectHeader = ({ project }) => {
  // animations
  const hoverAnimation = {
    rest: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      scale: 0.98,
      opacity: 0.3,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  }

  return (
    <StyledProjectContainer initial="rest" whileHover="hover" animate="rest">
      <StyledProjectContent>
        <StyledImageContainer variants={hoverAnimation}>
          <Img
            fluid={project.main_img.childImageSharp.fluid}
            alt={project.title}
          />
        </StyledImageContainer>
        <StyledTitle>{project.title}</StyledTitle>
      </StyledProjectContent>
    </StyledProjectContainer>
  )
}

export default ProjectHeader
